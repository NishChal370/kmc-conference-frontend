import { ReactNode } from "react";
import "./style/table.css";

interface ITable {
      children: ReactNode;
}
function Table({ children }: ITable) {
      return (
            <div className="w-full flex flex-col gap-10 min-w-[100%] max-w-fit">
                  <span
                        className="min-w-[100%] max-w-[100vw] 
                              sm:overflow-scroll
                        "
                  >
                        <table id="page-table" className="w-full text-sm text-center">
                              {children}
                        </table>
                  </span>
            </div>
      );
}

export default Table;
