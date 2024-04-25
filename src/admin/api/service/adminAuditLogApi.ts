import { AxiosRequestConfig } from "axios";
import { IAuditLogSearch } from "@/admin/model/auditLog/auditLogModel";
import { createQueryString } from "@/utils/stringFormat/createQueryString";
import AXIOS from "@/api/constant";

export const adminAuditLogApi = {
      getAuditLog: (searchDetail: IAuditLogSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Audit${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },

}