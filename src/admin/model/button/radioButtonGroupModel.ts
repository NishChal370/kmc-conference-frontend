
export interface IRadioButtonGroupOption<ValueType> {
      id: string;
      value?: ValueType;
      label: string;
      title?: string
}


export type IRadioButtonGroupOptions<ValueType> = IRadioButtonGroupOption<ValueType>[]