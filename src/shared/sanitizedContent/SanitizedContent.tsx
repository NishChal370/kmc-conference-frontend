import React, { useEffect, useState } from "react";
import useSanitizedHtml from "@/hooks/sanitizedHtml/useSanitizedHtml";
import ReactQuill from "react-quill";
import "@/style/reactQuillReader.css";
import "react-quill/dist/quill.snow.css";

interface ISanitizedContent {
      htmlContent?: string;
}

const SanitizedContent: React.FC<ISanitizedContent> = ({ htmlContent }) => {
      const content = useSanitizedHtml(htmlContent);
      const [value, setValue] = useState<string>();

      useEffect(() => {
            //TODO: this is hacks, solve this later
            setValue(content);
      }, [content]);
      return (
            <ReactQuill
                  theme="snow"
                  readOnly
                  className="rich-text--reader w-full h-fit !rounded-none"
                  value={value || "N/A"}
            />
      );
};

export default SanitizedContent;
