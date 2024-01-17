import Button from "@/shared/button/Button";

interface IAdminUserActionBar {
      addButtonHandler: () => void;
}

function AdminUserActionBar({ addButtonHandler }: IAdminUserActionBar) {
      return (
            <aside>
                  <Button title="New User" onClickHandler={addButtonHandler} />
            </aside>
      );
}

export default AdminUserActionBar;
