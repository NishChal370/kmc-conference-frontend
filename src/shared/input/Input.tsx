import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
      title: string;
      children?: UseFormRegisterReturn<string>;
      errorMessage?: string;
      type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
      containerClassName?: string;
}

function Input({ title, type = "text", children, errorMessage, containerClassName }: IInput) {
      return (
            <div className={`flex flex-col gap-2 ${containerClassName}`}>
                  {errorMessage && <p className="self-end text-error text-xs">{errorMessage}</p>}

                  <section
                        className={`relative group tracking-wide border rounded-md flex items-center
                              focus-within:border-black
                              ${errorMessage ? "!border-error" : "border-default"} 
                        `}
                  >
                        <span className="w-full">
                              <input
                                    id="userInput"
                                    type={type}
                                    className="peer border-0 w-full pl-2 py-2 
                                          placeholder:text-white/0 placeholder
                                    "
                                    placeholder="userInput"
                                    {...children}
                              />

                              <label
                                    htmlFor="userInput"
                                    className={`absolute pointer-events-none start-2.5 top-0 leading-none  -translate-y-[60%] bg-white p-0 transition-all 
                                          text-mute  peer-focus:text-black
                                          ${
                                                errorMessage
                                                      ? "text-error peer-focus:text-error"
                                                      : "text-mute peer-focus:text-black "
                                          } 
                                    `}
                              >
                                    {title}
                              </label>
                        </span>

                        <label
                              htmlFor="userInput"
                              className={`pr-3 text-lg
                                    group-focus-within:text-black
                                    ${errorMessage ? "!text-error" : "text-mute"} 
                              `}
                        ></label>
                  </section>
            </div>
      );
}

export default Input;
