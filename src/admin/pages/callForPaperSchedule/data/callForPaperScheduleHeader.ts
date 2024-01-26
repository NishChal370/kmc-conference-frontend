import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CALL_FOR_PAPER_SCHEDULE_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "session-title", title: "Session Title", className: "sm:text-start" },
      { id: "session-location", title: "Location", className: "sm:text-start" },
      { id: "approval-status", title: "Approval Status", className: "sm:text-start sm:!max-w-[10%]  sm:!min-w-[4rem] sm:!w-[10%] " },
      { id: "action", title: "Action", className: "sm:!max-w-[12rem]  sm:!min-w-[10rem] sm:!w-[12rem] " },
] as const;