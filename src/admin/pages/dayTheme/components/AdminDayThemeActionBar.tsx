import Button from "@/shared/button/Button";

interface IAdminDayThemeActionBar {
      addButtonHandler: () => void;
}

function AdminDayThemeActionBar({ addButtonHandler }: IAdminDayThemeActionBar) {
      return (
            <aside>
                  <Button title="New Theme" onClickHandler={addButtonHandler} />
            </aside>
      );
}

export default AdminDayThemeActionBar;
