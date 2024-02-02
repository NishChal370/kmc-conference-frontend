import { UseFormRegisterReturn } from "react-hook-form";

interface ITextArea {
      label: string;
      children?: UseFormRegisterReturn<string>;
      errorMessage?: string;
      containerClassName?: string;
}

function TextArea({ label, children, errorMessage, containerClassName }: ITextArea) {
      return (
            <div className={`relative flex flex-col gap-0 ${containerClassName}`}>
                  {errorMessage && (
                        <p className="absolute bottom-10 right-0 mt-1 text-error text-xs">{errorMessage}</p>
                  )}

                  <section
                        className={`relative group tracking-wide pr-2 border rounded-md flex items-center
                              focus-within:border-black
                              ${errorMessage ? "!border-error" : "border-default"} 
                        `}
                  >
                        <span className="w-full">
                              <textarea
                                    id={`input-${label}`}
                                    className="peer border-0 w-full pl-2 py-2  resize-none
                                          placeholder:text-white/0 placeholder:text-[0rem]
                                    "
                                    placeholder="."
                                    {...children}
                              />

                              <label
                                    htmlFor={`input-${label}`}
                                    className={`absolute pointer-events-none start-2.5 top-0 leading-none  -translate-y-[60%] bg-white p-0 transition-all 
                                          peer-placeholder-shown:top-1/2 peer-focus:top-0
                                          ${
                                                errorMessage
                                                      ? "text-error peer-focus:text-error"
                                                      : "text-mute peer-focus:text-black "
                                          } 
                                    `}
                              >
                                    {label}
                              </label>
                        </span>
                  </section>
            </div>
      );
}

export default TextArea;
