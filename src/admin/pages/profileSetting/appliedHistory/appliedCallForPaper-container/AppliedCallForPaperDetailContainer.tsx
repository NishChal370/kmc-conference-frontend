import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { IAppliedCallForPaperBasicModel } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import { Status } from "@/enum/commonEnum";
import AppliedCallForPaperDetail from "../appliedCallForPaper-components/AppliedCallForPaperDetail";
import AppliedCallForPaperEditModalContainer from "./AppliedCallForPaperEditModalContainer";

function AppliedCallForPaperDetailContainer() {
      const dispatch = useAppDispatch();

      const [appliedCallForPaperEditForm, openAppliedCallForPaperEditForm, closeAppliedCallForPaperEditForm] =
            useExtraModal<IAppliedCallForPaperBasicModel>();

      const { status, data, error, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedCallForPaperBasic;

      const { getApplicationCallForPaperBasicInfo } = useAppliedHistoryApi();

      const openEditModalHandler = () => {
            openAppliedCallForPaperEditForm(data);
      };

      useEffect(() => {
            closeAppliedCallForPaperEditForm;
            getApplicationCallForPaperBasicInfo();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedCallForPaperBasicSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && data && (
                        <AppliedCallForPaperDetail
                              appliedCallForPaper={data}
                              openAppliedCallForPaperEditForm={openEditModalHandler}
                        />
                  )}

                  {status !== Status.SUCCEEDED && (
                        <div className="flex flex-col gap-10">
                              <h4 className="font-bold text-base">Call For Paper Application</h4>

                              {status === Status.FAILED && (
                                    <ErrorMessage
                                          title={error?.title}
                                          detail={error?.detail}
                                          needTopPadding={false}
                                          traceId={error?.traceId}
                                    />
                              )}

                              {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                              {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
                        </div>
                  )}

                  {appliedCallForPaperEditForm?.data && appliedCallForPaperEditForm.isOpen && (
                        <AppliedCallForPaperEditModalContainer
                              editingDetail={appliedCallForPaperEditForm.data}
                              closeAppliedCallForPaperEditForm={closeAppliedCallForPaperEditForm}
                        />
                  )}
            </>
      );
}

export default AppliedCallForPaperDetailContainer;
