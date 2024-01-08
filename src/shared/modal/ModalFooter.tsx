import { ReactElement } from "react";

interface IModalFooter {
      children: ReactElement | undefined;
}

function ModalFooter({ children }: IModalFooter) {
      return <footer className="self-end flex justify-end gap-4 mt-1 mb-1">{children}</footer>;
}

export default ModalFooter;
