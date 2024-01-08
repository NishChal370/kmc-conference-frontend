import Button from "../button/Button";

interface IModalActionButtons {
      resetHandler?: () => void;
      submitHandler?: () => void;
      submitAndNewHandler?: () => void;
}

function ModalActionButtons({ submitHandler, resetHandler }: IModalActionButtons) {
      return (
            <span
                  className="flex flex-col justify-end gap-4 w-full h-fit text-center mb-10
                        sm:flex-row sm:min-w-[24%]
                  "
            >
                  <Button type="button" title="Reset" variant="lightFilled" onClickHandler={() => {}} />

                  <Button type="submit" title="Submit" variant="filled" />
            </span>
      );
}

export default ModalActionButtons;
