import Button from "@/shared/button/Button";

interface IAdminNewsActionBar {
      addButtonHandler: () => void;
}

function AdminNewsActionBar({ addButtonHandler }: IAdminNewsActionBar) {
      return (
            <aside>
                  <Button title="Add News" onClickHandler={addButtonHandler} />
            </aside>
      );
}

export default AdminNewsActionBar;
