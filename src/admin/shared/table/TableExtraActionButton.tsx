import { ITableMenuItems } from "./TableMenu";

interface ITableExtraActionButton {
      extraButton?: ITableMenuItems["items"];
}
function TableExtraActionButton({ extraButton }: ITableExtraActionButton) {
      return (
            extraButton &&
            extraButton.map(({ title, clickHandler, icon, type }, index: number) => (
                  <button
                        key={index}
                        type="button"
                        title={title}
                        className={`${type === "Danger" ? "text-error" : ""}
                                     ${
                                           type === "Danger"
                                                 ? "active:text-error/75"
                                                 : type === "Update"
                                                   ? "active:text-edit"
                                                   : type === "View"
                                                     ? "active:text-primary"
                                                     : "active:text-default"
                                     } 
                                     `}
                        onClick={clickHandler}
                  >
                        {icon}
                  </button>
            ))
      );
}

export default TableExtraActionButton;
