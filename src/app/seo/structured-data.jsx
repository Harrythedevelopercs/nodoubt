"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";

export default function StructuredData({ data }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
    );
  });

  return null;
}
