import Button from "@/shared/button/Button";

interface IAdminDayThemeActionBar {
      addButtonHandler: () => void;
}

function AdminDayThemeActionBar({ addButtonHandler }: IAdminDayThemeActionBar) {
      return (
            <aside>
                  <Button title="New Day" onClickHandler={addButtonHandler} />
            </aside>
      );
}

export default AdminDayThemeActionBar;
