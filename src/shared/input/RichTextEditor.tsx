import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style/richTextInput.css";

interface IRichTextEditor {
      label: string;
      errorMessage?: string;
      containerClassName?: string;
      isRequired?: boolean;
      value: string;
      placeHolder?: string;
      onChangeHandler: (value: string) => void;
}

function RichTextEditor({
      label,
      value,
      isRequired = false,
      placeHolder,
      errorMessage,
      onChangeHandler,
      containerClassName,
}: IRichTextEditor) {
      return (
            <div className={`relative flex flex-col gap-2 ${containerClassName}`}>
                  <span className="flex w-full justify-between gap-1 pl-1">
                        <label
                              htmlFor={`input-${label}`}
                              className={`leading-none p-0 text-sm font-semibold tracking-wide
                              ${errorMessage ? "text-error peer-focus:text-error" : "text-black"} 
                        `}
                        >
                              {label}&nbsp;
                              {isRequired && "*"}
                        </label>
                        {errorMessage && <p className=" text-error text-xs">{errorMessage}</p>}
                  </span>

                  <ReactQuill
                        theme="snow"
                        className="rich-text--editor h-[300px] w-full !rounded-md"
                        value={value}
                        placeholder={placeHolder || label}
                        onChange={(value) => {
                              // this text appear when user all data from text box.
                              onChangeHandler(value === "<p><br></p>" ? "" : value);
                        }}
                  />
            </div>
      );
}

export default RichTextEditor;
