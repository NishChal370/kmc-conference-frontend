import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "@/style/reactQuillReader.css";
import "react-quill/dist/quill.snow.css";
import useSanitizedHtml from "@/hooks/sanitizedHtml/useSanitizedHtml";

interface IModalSanitizedText {
      title: string;
      htmlContent?: string;
      containerClassName?: string;
}

function ModalSanitizedText({ title, htmlContent, containerClassName }: IModalSanitizedText) {
      const content = useSanitizedHtml(htmlContent);
      const [value, setValue] = useState<string>();

      useEffect(() => {
            //TODO: this is hacks, solve this later
            setValue(content);
      }, [content]);

      return (
            <div
                  className={`flex flex-col justify-between gap-2
                        sm:items-start ${containerClassName}
                  `}
            >
                  <h3 className="font-semibold py-2 text-start text-sm">{title}</h3>
                  <ReactQuill
                        theme="snow"
                        readOnly
                        className="rich-text--reader w-full h-fit !rounded-md"
                        value={value}
                  />
            </div>
      );
}

export default ModalSanitizedText;
