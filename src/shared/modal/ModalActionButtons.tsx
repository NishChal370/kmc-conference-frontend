import Button from "../button/Button";

interface IModalActionButtons {
      resetHandler: () => void;
}

function ModalActionButtons({ resetHandler }: IModalActionButtons) {
      return (
            <span
                  className="flex flex-col justify-end gap-4 w-full h-fit text-center mb-2
                        sm:flex-row sm:min-w-[24%]
                  "
            >
                  <Button type="button" title="Reset" variant="lightFilled" onClickHandler={resetHandler} />

                  <Button type="submit" title="Submit" variant="filled" />
            </span>
      );
}

export default ModalActionButtons;
