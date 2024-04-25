import { IAuditLogResponse } from "@/admin/model/auditLog/auditLogModel";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import { Status } from "@/enum/commonEnum";
import { AUDIT_LOG_TABLE_HEADER } from "../data/auditLogTableHeader";
import getIndex from "@/utils/uniqueId/getIndex";
import { ISortDetail } from "@/admin/model/commonModel";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { extractTimeFromISO } from "@/utils/stringFormat/formatTime";

interface IAuditLogTable {
      status: Status;
      currentPageNumber: number;
      auditLogs: IAuditLogResponse["logEntries"];
      sortDetail: ISortDetail<unknown, unknown>;
      sortHandler: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
}
function AuditLogTable({ status, currentPageNumber, sortDetail, auditLogs, sortHandler }: IAuditLogTable) {
      return (
            <Table>
                  <TableHead
                        headers={AUDIT_LOG_TABLE_HEADER}
                        sortDetail={sortDetail}
                        sortHandler={sortHandler}
                  />

                  <TableBody status={status}>
                        <>
                              {auditLogs.map((auditLog, index) => (
                                    <tr key={index}>
                                          <Td id="index" dataName="Index">
                                                {getIndex({ currentPageNumber, index })}
                                          </Td>

                                          <Td id="date" dataName="Date" className="sm:text-start">
                                                {changeDateFormat(auditLog.timestamp, "long")}
                                          </Td>

                                          <Td id="time" dataName="Time" className="sm:text-start">
                                                {extractTimeFromISO(auditLog.timestamp)}
                                          </Td>

                                          <Td id="level" dataName="Level" className="sm:text-start">
                                                {auditLog.level}
                                          </Td>

                                          <Td id="message" dataName="Message" className="sm:text-start">
                                                {auditLog.message}
                                          </Td>
                                    </tr>
                              ))}
                        </>
                  </TableBody>
            </Table>
      );
}

export default AuditLogTable;
