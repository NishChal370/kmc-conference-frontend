import { FieldValues, Path, RegisterOptions, UseFormProps, UseFormReturn, useForm } from "react-hook-form";

interface UseCustomFormProps<TValueType extends FieldValues> extends UseFormProps<TValueType> {
      trim?: boolean;
}

function useAppForm<TValueType extends FieldValues>({ trim = true, ...props }: UseCustomFormProps<TValueType> = {}) {
      const methods = useForm(props);

      const customRegister = (name: Path<TValueType>, registerOptions?: RegisterOptions) => {
            if (trim && registerOptions) {
                  // removing white space from string
                  const customSetValueAs = (value: any) => (typeof value === 'string' && value)
                        ? value.trim()
                        : value;

                  return methods.register(name, { ...registerOptions, setValueAs: customSetValueAs });
            }

            return methods.register(name, registerOptions)
      }

      return { ...methods, register: customRegister } as UseFormReturn<TValueType, any, undefined>
}

export default useAppForm;