const IPINFO_TOKEN = process.env.IPINFO_TOKEN || "229b1c3fa2e54c";

const firstValue = (...values) => {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return "";
};

const getHeader = (req, name) => {
  return req.headers.get(name);
};

const getClientIp = (req, body) => {
  const forwardedFor = firstValue(getHeader(req, "x-forwarded-for"));
  const forwardedIp = forwardedFor ? forwardedFor.split(",")[0]?.trim() : "";

  return firstValue(
    body.ip,
    body.IP,
    getHeader(req, "cf-connecting-ip"),
    getHeader(req, "x-real-ip"),
    forwardedIp
  ).replace(/^::ffff:/, "");
};

const isLocalIp = (ip) =>
  !ip || ["::1", "127.0.0.1", "localhost"].includes(ip) || ip.startsWith("10.");

const parseCustomData = (customData) => {
  if (!customData) return {};
  if (typeof customData === "object") return customData;

  try {
    return JSON.parse(customData);
  } catch {
    return { custom_data_raw: customData };
  }
};

const getPageUrl = (req, body, customData) =>
  firstValue(
    body.page_url,
    body.pageUrl,
    body.pageURL,
    body.website,
    body.url,
    customData.page_url,
    customData.pageUrl,
    customData.url,
    getHeader(req, "referer"),
    getHeader(req, "origin")
  );

const getGeoFromHeaders = (req) => ({
  country: firstValue(
    getHeader(req, "x-vercel-ip-country"),
    getHeader(req, "cf-ipcountry")
  ),
  city: firstValue(getHeader(req, "x-vercel-ip-city")),
  state: firstValue(getHeader(req, "x-vercel-ip-country-region")),
});

const lookupGeo = async (ip) => {
  if (isLocalIp(ip)) return {};

  try {
    const response = await fetch(
      `https://ipinfo.io/${encodeURIComponent(ip)}?token=${IPINFO_TOKEN}`
    );

    if (!response.ok) return {};
    return await response.json();
  } catch (error) {
    console.error("IP lookup failed:", error);
    return {};
  }
};

const cleanCustomData = (data) => {
  const cleaned = {};
  for (const [key, value] of Object.entries(data)) {
    if (key === "custom_data") continue; // Prevent nesting of custom_data
    if (value !== undefined && value !== null) {
      let valStr;
      if (typeof value === "object") {
        valStr = JSON.stringify(value);
      } else {
        valStr = String(value);
      }
      // Exclude empty strings from custom_data to prevent validation errors
      if (valStr.trim() !== "") {
        cleaned[key] = valStr;
      }
    }
  }
  return cleaned;
};

export const normalizeLeadBody = async (req, body) => {
  const customData = parseCustomData(body.custom_data);
  const ip = getClientIp(req, body);
  const headerGeo = getGeoFromHeaders(req);

  const needsGeoLookup =
    ip &&
    (!firstValue(body.country, customData.country, headerGeo.country) ||
      !firstValue(body.city, customData.city, headerGeo.city));
  const lookupData = needsGeoLookup ? await lookupGeo(ip) : {};

  const pageUrl = getPageUrl(req, body, customData);
  const country = firstValue(
    body.country,
    body.Country,
    customData.country,
    headerGeo.country,
    lookupData.country
  );
  const city = firstValue(
    body.city,
    body.City,
    customData.city,
    headerGeo.city,
    lookupData.city
  );
  const state = firstValue(
    body.state,
    body.region,
    customData.state,
    customData.region,
    headerGeo.state,
    lookupData.region
  );
  const zipCode = firstValue(
    body.zip_code,
    body.postal,
    customData.zip_code,
    customData.postal,
    lookupData.postal
  );

  const attachmentName = firstValue(
    body.attachment_name,
    body.attachment,
    body.file_name,
    customData.attachment_name,
    customData.attachment
  );

  const rawCustomData = {
    ...customData,
    message: firstValue(customData.message, body.message, body.comment),
    attachment_name: attachmentName,
    ip,
    city,
    country,
    state,
    zip_code: zipCode,
    url: pageUrl,
    page_url: pageUrl,
  };

  const normalizedCustomData = cleanCustomData(rawCustomData);

  return {
    ...body,
    name: firstValue(body.name),
    email: firstValue(body.email, body.recipient),
    message: firstValue(body.message, body.comment, customData.message),
    phone: firstValue(body.phone),
    attachment_name: attachmentName,
    services: firstValue(body.services, body.service),
    ip,
    country,
    city,
    state,
    zip_code: zipCode,
    page_url: pageUrl,
    brand_id: firstValue(body.brand_id, "2"),
    brand_name: firstValue(body.brand_name, "yourbrand.com"),
    custom_data: normalizedCustomData,
    accessKey: body.accessKey,
  };
};

export async function POST(req) {
  try {
    let rawBody = {};
    let uploadedFile = null;
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      try {
        const formData = await req.formData();
        const obj = {};
        for (const [key, value] of formData.entries()) {
          if (value instanceof File && value.size > 0) {
            uploadedFile = value;
            obj[key] = value.name;
            obj.attachment_name = value.name;
          } else {
            obj[key] = value;
          }
        }
        rawBody = obj;
      } catch (err) {
        console.error("Invalid multipart form data", err);
        return new Response(JSON.stringify({ error: "Invalid form data" }), {
          status: 400,
        });
      }
    } else {
      try {
        rawBody = await req.json();
      } catch (err) {
        console.error("Invalid JSON body", err);
        return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
          status: 400,
        });
      }
    }

    if (uploadedFile && uploadedFile.size > 250 * 1024 * 1024) {
      return new Response(
        JSON.stringify({
          error: "File size exceeds the 250MB limit. Please upload a smaller file.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (rawBody.honeypot && String(rawBody.honeypot).trim() !== "") {
      console.warn("Honeypot triggered, ignoring spam submission.");
      return new Response(
        JSON.stringify({
          success: true,
          message: "Form submitted successfully",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const body = await normalizeLeadBody(req, rawBody);

    // ===== 1️⃣ Send to Google Script (Sheet) =====
    const googlePayload = {
      name: body.name,
      email: body.email,
      message: body.message,
      phone: body.phone,
      attachment: body.attachment_name || "",
      person: body.person || "",
      services: body.services,
      ip: body.ip,
      country: body.country,
      city: body.city,
      state: body.state,
      zip_code: body.zip_code,
      page_url: body.page_url,
      brand_id: body.brand_id || 2,
      brand_name: body.brand_name,
      custom_data: body.custom_data,
      accessKey: body.accessKey,
    };

    // ===== 2️⃣ Send to Infiniti Digital API =====
    let emailResponse;
    if (uploadedFile) {
      const emailFormData = new FormData();
      emailFormData.append("recipient", body.email || "");
      emailFormData.append("brand_id", String(Number(body.brand_id) || 2));
      emailFormData.append("brand_name", body.brand_name || "yourbrand.com");
      emailFormData.append("name", body.name || "");
      emailFormData.append("email", body.email || "");
      emailFormData.append("phone", body.phone || "");
      emailFormData.append("message", body.message || "");
      emailFormData.append("website", body.page_url || "");
      emailFormData.append("page_url", body.page_url || "");
      emailFormData.append("pageUrl", body.page_url || "");
      emailFormData.append("url", body.page_url || "");
      emailFormData.append("ip", body.ip || "");
      emailFormData.append("IP", body.ip || "");
      emailFormData.append("country", body.country || "");
      emailFormData.append("Country", body.country || "");
      emailFormData.append("city", body.city || "");
      emailFormData.append("City", body.city || "");
      emailFormData.append("state", body.state || "");
      emailFormData.append("zip_code", body.zip_code || "");
      if (body.custom_data) {
        emailFormData.append(
          "custom_data",
          typeof body.custom_data === "string"
            ? body.custom_data
            : JSON.stringify(body.custom_data)
        );
      }
      emailFormData.append("attachment", uploadedFile);

      emailResponse = await fetch(
        "https://form.pulse-force.com/backend/api/send-brandemail/",
        {
          method: "POST",
          body: emailFormData,
        }
      );
    } else {
      const infinitiPayload = {
        recipient: body.email,
        brand_id: Number(body.brand_id) || 2,
        brand_name: body.brand_name,
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        website: body.page_url,
        page_url: body.page_url,
        pageUrl: body.page_url,
        url: body.page_url,
        ip: body.ip,
        IP: body.ip,
        country: body.country,
        Country: body.country,
        city: body.city,
        City: body.city,
        state: body.state,
        zip_code: body.zip_code,
        custom_data: body.custom_data,
      };

      emailResponse = await fetch(
        "https://form.pulse-force.com/backend/api/send-brandemail/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(infinitiPayload),
        }
      );
    }

    let emailData;
    try {
      emailData = await emailResponse.json();
    } catch (error) {
      emailData = { message: "Email API responded with no JSON" };
      console.error("Email API Error:", error);
    }

    // ===== 3️⃣ Submit to Quentis CRM =====
    let crmData;
    try {
      const crmMessage = body.attachment_name
        ? `${body.message ? body.message + "\n\n" : ""}[Attached Book: ${body.attachment_name}]`
        : body.message;

      const crmPayload = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: crmMessage,
      };

      const crmResponse = await fetch(
        "https://crm.quentis.co/api/public/forms/ff5c056f-b5ea-4eac-9be3-b802a32100c7/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(crmPayload),
        }
      );

      try {
        crmData = await crmResponse.json();
      } catch {
        crmData = { message: "CRM API responded with no JSON" };
      }
    } catch (err) {
      console.error("CRM submission failed:", err);
      crmData = { error: err.message, message: "CRM submission failed" };
    }

    return new Response(JSON.stringify({ emailData, crmData }), {
      status: 200,
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
