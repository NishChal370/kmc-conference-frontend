import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const SPEAKER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "speaker-image", title: "Speaker", className: "w-10" },
      { id: "speaker-name", title: "Speaker Name", className: "text-start" },
      { id: "speaker-designation", title: "Designation", className: "text-start" },
      { id: "speaker-company", title: "Company", className: "text-start" },
      { id: "action", title: "Action" },
];