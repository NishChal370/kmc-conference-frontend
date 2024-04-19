import { ITableHeaderDataList } from "@/admin/model/commonModel";


export const ADMIN_PARTICIPANT_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "participant-name", title: "Name", className: "sm:text-start", sortValue: "Name" },
      { id: "participant-address", title: "Address", className: "sm:text-start", sortValue: "Address" },
      { id: "participant-job-title", title: "Job Title", className: "sm:text-start", sortValue: "JobTitle" },
      { id: "participant-affiliation", title: "Affiliation", className: "sm:text-start", sortValue: "Affiliation" },
      { id: "participant-registration-type", title: "Registration Type", className: "sm:text-start", sortValue: "RegistrationType" },
      { id: "action", title: "Action" },
]