import { ReactNode } from "react";
import "../style/nestedTable.css";

interface INestedTable {
      presentRowId: number;
      childColSpan: number;
      selectedRowId?: number;
      parentTr: ({ isOpen }: { isOpen: boolean }) => ReactNode;
      children: ({ isOpen }: { isOpen: boolean }) => ReactNode;
}
function NestedTable({ presentRowId, selectedRowId, parentTr, children, childColSpan }: INestedTable) {
      const isOpen = presentRowId === selectedRowId;

      return (
            <>
                  {parentTr({ isOpen })}

                  <tr className={`nested ${isOpen ? "on" : "off"}`}>
                        <td
                              colSpan={childColSpan}
                              className="!border-b-0 !border-mute/0 w-full !max-h-[100rem] bg-mute"
                        >
                              <div
                                    className={`w-full  
                                          ${
                                                isOpen
                                                      ? "flex max-h-[30rem]  overflow-scroll"
                                                      : "max-h-[0rem] overflow-hidden"
                                          }
                                          flex-col py-0 gap-10 min-w-[100%] max-w-[80vw]  bg-white
                                    `}
                              >
                                    <span className={`w-full `}>{children({ isOpen })}</span>
                              </div>
                        </td>
                  </tr>
            </>
      );
}

export default NestedTable;
