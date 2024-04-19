import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CONFERENCE_DAY_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "date", title: "Date", className: "sm:text-start", sortValue: "Date" },
      { id: "location", title: "Location", className: "sm:text-start", sortValue: "Location" },
      { id: "parking", title: "Parking", className: "sm:text-start", sortValue: "Parking" },
      { id: "accommodation", title: "Accommodation", className: "sm:text-start", sortValue: "Accommodation" },
      { id: "action", title: "Action" },
] as const;