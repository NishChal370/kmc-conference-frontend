import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import AppIcon from "../icon/AppIcon";

interface IPasswordInput {
      children: UseFormRegisterReturn<string>;
      errorMessage?: string;
      label?: string;
}

function PasswordInput({ children, errorMessage, label }: IPasswordInput) {
      const [showPassword, setShowPassword] = useState<boolean>(false);

      const handleShowPassword = () => {
            setShowPassword((prev) => !prev);
      };

      return (
            <div className="relative flex flex-col gap-2">
                  {errorMessage && (
                        <p className="absolute bottom-10 max-w-[92%] right-0 mt-1 text-end text-error text-xs">
                              {errorMessage}
                        </p>
                  )}

                  <section
                        className={`relative group tracking-wide border rounded-md flex items-center
                              focus-within:border-black
                              ${errorMessage ? "!border-error" : "border-default"} 
                        `}
                  >
                        <span className="w-full">
                              <input
                                    id={`password-${label}`}
                                    type={showPassword ? "text" : "password"}
                                    className="peer border-0 w-full pl-2 py-2
                                          placeholder:text-white/0 placeholder:text-[0rem]
                                    "
                                    placeholder="."
                                    autoCapitalize="off"
                                    {...children}
                              />

                              <label
                                    htmlFor={`password-${label}`}
                                    className={`absolute pointer-events-none start-2.5 top-0 leading-none  -translate-y-[60%] bg-white p-0 transition-all 
                                          peer-placeholder-shown:top-1/2 peer-focus:top-0
                                          ${
                                                errorMessage
                                                      ? "text-error peer-focus:text-error"
                                                      : "text-mute peer-focus:text-black "
                                          } 
                                    `}
                              >
                                    {label || "Password"}
                              </label>
                        </span>

                        <button
                              type="button"
                              className={`pr-3 text-lg 
                                    group-focus-within:text-default
                                    ${errorMessage ? "!text-error" : "text-mute"}
                              `}
                              onPointerUp={handleShowPassword}
                              onPointerDown={handleShowPassword}
                        >
                              {showPassword ? <AppIcon name="unlock" /> : <AppIcon name="lock" />}
                        </button>
                  </section>
            </div>
      );
}

export default PasswordInput;
