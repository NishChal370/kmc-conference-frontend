interface IModalSectionHeader {
      title: string;
}

/**
 * Represent the section header of Modal.
 */
function ModalSectionHeader({ title }: IModalSectionHeader) {
      return (
            <header className="w-auto bg-primary/5 text-default">
                  <p className="p-3 font-bold text-base tracking-wide">{title}</p>
            </header>
      );
}

export default ModalSectionHeader;
