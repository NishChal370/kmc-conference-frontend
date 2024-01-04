import { TIconType } from "../icon/iconModel";

type ButtonType = "reset" | "button" | undefined;

type ButtonVariant = "filled" | "lightFilled" | "outlined" | "text";

type IconButtonVariant = "filled" | "lightFilled" | "outlined";



export type IButton = {
      extraClassName?: string;
      variant?: ButtonVariant;
      title: string;
      iconName?: TIconType;
} & ({ type: "submit"; onClickHandler?: never } | { type?: ButtonType; onClickHandler: () => void })




export type IIconButton = {
      extraClassName?: string;
      variant?: IconButtonVariant;
      icon: TIconType;
      title: string;
      text?: string;
      type: ButtonType | "submit";
      onClickHandler: () => void
}