import { useMemo } from "react";
import DOMPurify from "dompurify";

const useSanitizedHtml = (htmlContent?: string): string => {
      if (!htmlContent) return "";

      const sanitizedHtml = useMemo(() => DOMPurify.sanitize(htmlContent), [htmlContent]);
      return sanitizedHtml;
};

export default useSanitizedHtml;
