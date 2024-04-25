import Header from "@/admin/shared/header/Header";
import AuditLogTableContainer from "./container/AuditLogTableContainer";
import AuditLogPaginationContainer from "./container/AuditLogPaginationContainer";

function AuditLog() {
      return (
            <>
                  <Header pageHeaderName="Audit Log" />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AuditLogTableContainer />

                        <AuditLogPaginationContainer />
                  </section>
            </>
      );
}

export default AuditLog;
