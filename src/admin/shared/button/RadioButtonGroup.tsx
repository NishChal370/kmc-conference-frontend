import AppIcon from "@/shared/icon/AppIcon";

interface IRadioButtonGroup<ValueType> {
      selectedValue?: ValueType;
      changeHandler: (value: ValueType) => void;
      options: { id: string; value?: ValueType; label: string }[];
}

function RadioButtonGroup<ValueType extends number | string | undefined>({
      options,
      changeHandler,
      selectedValue,
}: IRadioButtonGroup<ValueType>) {
      const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            changeHandler(event.target.value as ValueType);
      };

      return (
            <div className="flex gap-2 text-sm">
                  {options.map(({ id, value, label }) => (
                        <div
                              key={id}
                              className={`flex gap-1 items-center justify-center px-4 py-1 rounded-sm min-w-[6rem] cursor-pointer
                                    [&>*]:cursor-pointer
                                    ${
                                          selectedValue === (value as ValueType)
                                                ? "bg-primary/10 text-primary"
                                                : "bg-mute-1 text-default"
                                    }
                              `}
                              onClick={() => changeHandler(value as ValueType)}
                        >
                              <input
                                    id={`${label}-radio-button`}
                                    type="radio"
                                    value={value}
                                    checked={selectedValue === (value as ValueType)}
                                    onChange={radioChangeHandler}
                                    className="hidden"
                              />

                              <AppIcon
                                    name="tick"
                                    className={selectedValue !== (value as ValueType) ? "hidden" : undefined}
                              />

                              <label htmlFor={`${label}-radio-button`}>{label}</label>
                        </div>
                  ))}
            </div>
      );
}

export default RadioButtonGroup;
