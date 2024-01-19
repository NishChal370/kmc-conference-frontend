import React, { useEffect, useState } from "react";
import useSanitizedHtml from "@/hooks/sanitizedHtml/useSanitizedHtml";
import ReactQuill from "react-quill";
import "@/style/reactQuillReader.css";
import "react-quill/dist/quill.snow.css";

interface ISanitizedContent {
      htmlContent?: string;
      truncate?: boolean;
      extraClassName?: string;
}

const MAX_DISPLAY_LENGTH = 200; // Set the maximum display length as needed

const SanitizedContent: React.FC<ISanitizedContent> = ({ htmlContent, truncate = false, extraClassName }) => {
      const content = useSanitizedHtml(htmlContent); // Assuming useSanitizedHtml is a custom hook you've defined
      const [value, setValue] = useState<string>();

      useEffect(() => {
            // Check if content length is more than MAX_DISPLAY_LENGTH
            if (truncate && content && content.length > MAX_DISPLAY_LENGTH) {
                  // Truncate and append ellipsis
                  setValue(content.substring(0, MAX_DISPLAY_LENGTH) + "...");
            } else {
                  // Set content as it is if it's not too long
                  setValue(content);
            }
      }, [content]);

      return (
            <ReactQuill
                  theme="snow"
                  readOnly
                  className={`rich-text--reader w-full h-fit !rounded-none [&>*]:!leading-loose ${extraClassName}`}
                  value={value || "N/A"}
            />
      );
};

export default SanitizedContent;
