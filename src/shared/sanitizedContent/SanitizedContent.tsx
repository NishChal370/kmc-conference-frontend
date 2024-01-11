import React from "react";
import useSanitizedHtml from "@/hooks/sanitizedHtml/useSanitizedHtml";

interface SanitizedContentProps {
      htmlContent: string;
      tagName?: keyof JSX.IntrinsicElements;
      className?: string;
}

const SanitizedContent: React.FC<SanitizedContentProps> = ({ htmlContent, tagName = "div", className }) => {
      const cleanHtml = useSanitizedHtml(htmlContent);
      const Tag = tagName as keyof JSX.IntrinsicElements;

      return <Tag dangerouslySetInnerHTML={{ __html: cleanHtml }} className={className} />;
};

export default SanitizedContent;
