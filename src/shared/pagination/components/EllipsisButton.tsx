interface IEllipsisButton {
      clickHandler: () => void;
}

function EllipsisButton({ clickHandler }: IEllipsisButton) {
      return (
            <button type="button" onClick={clickHandler} className="hover:bg-primary/10">
                  ...
            </button>
      );
}

export default EllipsisButton;
