import { ReactNode } from "react";

interface IPageHeader {
      id: string;
      heightClasses: string;
      children: ReactNode;
}

function PageHeader({ id, heightClasses, children }: IPageHeader) {
      return (
            <header id={id} className="w-full flex flex-col justify-center items-center">
                  <span
                        className={`flex flex-col justify-center items-center bg-black/90 w-full ${heightClasses} px-4 text-white`}
                  >
                        {children}
                  </span>
            </header>
      );
}

export default PageHeader;
