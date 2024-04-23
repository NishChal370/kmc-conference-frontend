import { IAuditLogSearch } from '@/admin/model/auditLog/auditLogModel';
import { getAuditLogDetail as getAuditLogDetailReq } from '@/admin/pages/auditLog/feature/auditLogRequest';
import { useAppDispatch } from '@/app/hooks';

function useAuditLogApi() {
      const dispatch = useAppDispatch();

      const getAuditLogDetail = (searchDetail: IAuditLogSearch) => {
            dispatch(getAuditLogDetailReq(searchDetail))
      }

      return { getAuditLogDetail } as const;
}

export default useAuditLogApi