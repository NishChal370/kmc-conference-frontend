import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style/richTextInput.css";

interface IRichTextEditor {
      label: string;
      errorMessage?: string;
      containerClassName?: string;
}

function RichTextEditor({ label, errorMessage, containerClassName }: IRichTextEditor) {
      const [value, setValue] = useState("");
      return (
            <div className={`relative flex flex-col gap-2 ${containerClassName}`}>
                  <span className="flex w-full justify-between gap-1 pl-1">
                        <label
                              htmlFor={`input-${label}`}
                              className={`leading-none p-0 text-sm font-semibold tracking-wide
                              ${errorMessage ? "text-error peer-focus:text-error" : "text-black"} 
                        `}
                        >
                              {label}
                        </label>
                        {errorMessage && <p className=" text-error text-xs">{errorMessage}</p>}
                  </span>

                  <ReactQuill
                        theme="snow"
                        className="rich-text--editor h-[300px] w-full !rounded-md"
                        value={value}
                        onChange={setValue}
                  />
            </div>
      );
}

export default RichTextEditor;
