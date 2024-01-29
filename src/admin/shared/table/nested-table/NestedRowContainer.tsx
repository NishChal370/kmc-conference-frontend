import { ReactNode, useState } from "react";

interface INestedRowContainer {
      children: (tableState: {
            selectedRowId?: number;
            closeRowHandler: (rowId: number) => void;
            selectRowHandler: (rowId: number) => void;
      }) => ReactNode;
}
function NestedRowContainer({ children }: INestedRowContainer) {
      const [selectedRowId, setSelectedRowId] = useState<number>();

      const selectRowHandler = (rowId: number) => {
            setSelectedRowId((prev) => (prev === rowId ? undefined : rowId));
      };

      const closeRowHandler = (rowId: number) => {
            if (selectedRowId !== rowId) return;

            setSelectedRowId(undefined);
      };

      return children({ selectedRowId, selectRowHandler, closeRowHandler });
}

export default NestedRowContainer;
