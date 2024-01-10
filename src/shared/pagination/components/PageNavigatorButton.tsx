interface IPageNavigatorButton {
      clickHandler: () => void;
      isDisabled: boolean;
      title: string;
}

function PageNavigatorButton({ title, isDisabled, clickHandler }: IPageNavigatorButton) {
      return (
            <button
                  type="button"
                  className={`w-12 py-1 ${!isDisabled ? " hover:bg-primary/10" : "text-mute cursor-default"}`}
                  onClick={clickHandler}
            >
                  {title}
            </button>
      );
}

export default PageNavigatorButton;
