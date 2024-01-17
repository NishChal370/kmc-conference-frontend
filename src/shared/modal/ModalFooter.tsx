import { ReactElement } from "react";

interface IModalFooter {
      children: ReactElement | undefined;
}

function ModalFooter({ children }: IModalFooter) {
      return (
            <footer
                  className="self-end flex w-full justify-end gap-4 my-1
                        sm:w-fit 
                  "
            >
                  {children}
            </footer>
      );
}

export default ModalFooter;
