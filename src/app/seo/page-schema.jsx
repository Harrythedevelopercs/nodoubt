import pageSchemaData from "@/src/app/seo/page-schema-data.json";
import StructuredData from "@/src/app/seo/structured-data";
import {
  bookTrailerOrganizationDetails,
  organizationNode,
  organizationSameAs,
  standardOrganizationDetails,
  websiteNode,
} from "@/src/app/seo/site";

const organizationDetailsByProfile = {
  minimal: {},
  standard: standardOrganizationDetails,
  bookTrailer: bookTrailerOrganizationDetails,
};

export const getPageSchema = (path) => {
  const pageData = pageSchemaData[path];

  if (!pageData) return null;

  const organization =
    pageData.organization ?? {
      ...organizationNode,
      ...organizationDetailsByProfile[pageData.organizationProfile],
      sameAs: organizationSameAs,
      ...pageData.organizationExtras,
    };
  const website = pageData.website ?? websiteNode;

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, ...pageData.graph],
  };
};

export default function PageSchema({ path }) {
  const schema = getPageSchema(path);

  return schema ? <StructuredData data={schema} /> : null;
}
