import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const ADMIN_SPEAKER_SCHEDULE_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "title", title: "Session Topic", className: "sm:text-start" },
      { id: "approval-status", title: "Approval Status", className: "sm:text-start sm:!max-w-[20%]  sm:!min-w-[4rem] sm:!w-[20%] " },
      { id: "action", title: "Action", className: "sm:!max-w-[10rem]  sm:!min-w-[10rem] sm:!w-[10rem] " },
] as const;

