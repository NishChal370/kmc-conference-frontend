import { UseFormRegisterReturn } from "react-hook-form";

interface ISecondaryInput {
      label: string;
      children?: UseFormRegisterReturn<string>;
      errorMessage?: string;
      type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
      containerClassName?: string;
}

function SecondaryInput({
      label,
      type = "text",
      children,
      errorMessage,
      containerClassName,
}: ISecondaryInput) {
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
                                    className="border-0 w-full pl-2 py-2"
                                    placeholder={label}
                                    {...children}
                              />
                        </span>
                  </section>
            </div>
      );
}

export default SecondaryInput;
