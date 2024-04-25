import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminAuditLogApi } from "@/admin/api/service/adminAuditLogApi";
import { IAuditLogResponse, IAuditLogSearch } from "@/admin/model/auditLog/auditLogModel";

export const getAuditLogDetail = createAppAsyncThunk<IAuditLogResponse, IAuditLogSearch>(
      "audit-log/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAuditLogApi.getAuditLog(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
