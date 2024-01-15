import { ITableHeaderDataList } from "@/admin/model/commonModel";


export const ADMIN_PARTICIPANT_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "participant-name", title: "Name", className: "sm:text-start" },
      { id: "participant-address", title: "Address", className: "sm:text-start" },
      { id: "participant-job-title", title: "Job Title", className: "sm:text-start" },
      { id: "participant-affiliation", title: "Affiliation", className: "sm:text-start" },
      { id: "participant-registration-type", title: "Registration Type", className: "sm:text-start" },
      { id: "action", title: "Action" },

]