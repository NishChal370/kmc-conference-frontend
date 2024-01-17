import Button from "@/shared/button/Button";

interface IAdminScheduleActionBar {
      addButtonHandler: () => void;
}

function AdminScheduleActionBar({ addButtonHandler }: IAdminScheduleActionBar) {
      return (
            <aside>
                  <Button title="New Session" onClickHandler={addButtonHandler} />
            </aside>
      );
}

export default AdminScheduleActionBar;
