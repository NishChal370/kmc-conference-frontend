import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const ADMIN_SPEAKER_SCHEDULE_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "title", title: "Session Topic", className: "sm:text-start" },
      { id: "approval-status", title: "Approval Status", className: "sm:text-start" },
      { id: "action", title: "Action" },
] as const;

