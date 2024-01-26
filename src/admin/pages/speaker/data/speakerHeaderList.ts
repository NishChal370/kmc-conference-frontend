import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const SPEAKER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "table-image", title: "Speaker", className: "text-start" },
      { id: "speaker-name", title: "Speaker Name", className: "sm:text-start" },
      { id: "speaker-jobTitle", title: "Job Title", className: "sm:text-start" },
      { id: "speaker-affiliation", title: "Affiliation", className: "sm:text-start" },
      { id: "speaker-email", title: "Email", className: "sm:text-start" },
      { id: "action", title: "Action" },
];