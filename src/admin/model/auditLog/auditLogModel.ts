import { IBasicApiResponse, IBasicSearchParam } from "@/models/commonModel";

export interface IAuditLogModel {
      message: string;
      level: string;
      timestamp: string;
}


export interface IAuditLogResponse extends IBasicApiResponse {
      logEntries: IAuditLogModel[];
}


export type IAuditLogSearch = IBasicSearchParam;