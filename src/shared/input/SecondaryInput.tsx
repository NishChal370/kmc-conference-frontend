import { UseFormRegisterReturn } from "react-hook-form";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

type ISecondaryInput = {
      label: string;
      placeHolder?: string;
      errorMessage?: string;
      isRequired?: boolean;
      containerClassName?: string;
      children?: UseFormRegisterReturn<string>;
} & (
      | {
              type: "date";
              allowBackDate?: boolean;
        }
      | {
              // FIXME: here try to allowBackDate only when type is 'date'.
              type?: Exclude<React.InputHTMLAttributes<HTMLInputElement>["type"], "date">;
              allowBackDate?: true;
        }
);

function SecondaryInput({
      label,
      type = "text",
      isRequired = false,
      children,
      placeHolder,
      errorMessage,
      containerClassName,
      allowBackDate = true,
}: ISecondaryInput) {
      console.log(changeDateFormat(new Date().toString(), "short"));
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

                  <section
                        className={`group tracking-wide pr-2 border rounded-md flex items-center
                              focus-within:border-black
                              ${errorMessage ? "!border-error" : "border-default"} 
                        `}
                  >
                        <span className="w-full">
                              <input
                                    id={`input-${label}`}
                                    type={type}
                                    className="border-0 w-full pl-2 py-1.5"
                                    placeholder={placeHolder ?? label}
                                    min={
                                          type === "date" && !allowBackDate
                                                ? changeDateFormat(new Date().toString(), "short")
                                                : undefined
                                    } // Apply min only if type is date
                                    {...children}
                              />
                        </span>
                  </section>
            </div>
      );
}

export default SecondaryInput;
