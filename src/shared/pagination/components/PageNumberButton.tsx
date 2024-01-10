interface IPageNumberButton {
      pageNumber: number;
      clickHandler: (event: any) => void;
      isSelected: boolean;
}

function PageNumberButton({ clickHandler, isSelected, pageNumber }: IPageNumberButton) {
      return (
            <button
                  type="button"
                  data-value={pageNumber}
                  onClick={clickHandler}
                  className={` 
                        hover:bg-primary/10
                        ${isSelected ? "bg-primary/20" : "bg-transparent"}
                  `}
            >
                  {pageNumber}
            </button>
      );
}

export default PageNumberButton;
