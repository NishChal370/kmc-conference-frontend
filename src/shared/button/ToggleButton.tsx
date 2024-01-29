import AppIcon from "../icon/AppIcon";

interface IToggleButton {
      label: string;
      errorMessage?: string;
      isRequired?: boolean;
      value: boolean;
      buttonName: { one: string; two: string };
      onChangeHandler: (value: boolean) => void;
}

function ToggleButton({
      label,
      errorMessage,
      isRequired,
      value,
      onChangeHandler,
      buttonName,
}: IToggleButton) {
      const acceptButtonHandler = () => onChangeHandler(true);

      const rejectButtonHandler = () => onChangeHandler(false);

      return (
            <div className={`relative flex flex-col gap-2`}>
                  <span className="flex w-full justify-between gap-1 pl-1">
                        <label
                              htmlFor={`toggle-button-${label}`}
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
                        className="flex gap-2 w-[60%] min-w-fit self-center 
                              [&>button]:w-full [&>button]:h-fit [&>button]:py-2 [&>button]:text-sm [&>button]:border [&>button]:rounded-sm [&>button]:font-semibold [&>button]:transition-colors [&>button]:flex [&>button]:justify-center [&>button]:gap-1.5
                        "
                  >
                        <button
                              type="button"
                              className={
                                    value
                                          ? "bg-blue-50/80 border-blue-50/80 text-blue-500"
                                          : "bg-mute-1 text-default border-mute-1"
                              }
                              onClick={acceptButtonHandler}
                        >
                              {value && <AppIcon name="tick" size={20} />}
                              {buttonName.one}
                        </button>

                        <button
                              type="button"
                              className={
                                    !value
                                          ? "bg-blue-50/80 border-blue-50/80 text-blue-500"
                                          : "bg-mute-1 text-default border-mute-1"
                              }
                              onClick={rejectButtonHandler}
                        >
                              {!value && <AppIcon name="tick" size={20} />}
                              {buttonName.two}
                        </button>
                  </section>
            </div>
      );
}

export default ToggleButton;
