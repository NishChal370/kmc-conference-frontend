import Button from "@/shared/button/Button";

interface IConferenceDayActionBar {
      addButtonHandler: () => void;
}

function ConferenceDayActionBar({ addButtonHandler }: IConferenceDayActionBar) {
      return (
            <aside>
                  <Button title="New Day" onClickHandler={addButtonHandler} />
            </aside>
      );
}

export default ConferenceDayActionBar;
