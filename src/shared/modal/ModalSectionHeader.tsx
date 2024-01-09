interface IModalSectionHeader {
      title: string;
}

/**
 * Represent the section header of Modal.
 */
function ModalSectionHeader({ title }: IModalSectionHeader) {
      return (
            <header className="w-auto bg-primary/5">
                  <p className="text-md font-semibold text-primary py-2 px-4 rounded-sm">{title}</p>
            </header>
      );
}

export default ModalSectionHeader;
