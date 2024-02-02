import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { IAppliedParticipationBasicModel } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import { Status } from "@/enum/commonEnum";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AppliedParticipationDetail from "../appliedParticipant-components/AppliedParticipationDetail";
import AppliedParticipationEditModalContainer from "./AppliedParticipationEditModalContainer";

function AppliedParticipationDetailContainer() {
      const dispatch = useAppDispatch();

      const [
            appliedParticipationEditForm,
            openAppliedParticipationEditForm,
            closeAppliedParticipationEditForm,
      ] = useExtraModal<IAppliedParticipationBasicModel>();

      const { status, data, error, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedParticipationBasic;

      const { getApplicationParticipationBasicInfo } = useAppliedHistoryApi();

      const openEditModalHandler = () => {
            openAppliedParticipationEditForm(data);
      };

      useEffect(() => {
            getApplicationParticipationBasicInfo();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedParticipationBasicSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && data && (
                        <AppliedParticipationDetail
                              appliedParticipation={data}
                              openAppliedParticipationEditForm={openEditModalHandler}
                        />
                  )}

                  {status !== Status.SUCCEEDED && (
                        <div className="flex flex-col gap-10">
                              <h4 className="font-bold text-base">Participation Application</h4>

                              {status === Status.FAILED && (
                                    <ErrorMessage
                                          title={error?.title}
                                          detail={error?.detail}
                                          needTopPadding={false}
                                          traceId={error?.traceId}
                                    />
                              )}

                              {status === Status.DATA_NOT_FOUND && <NotFoundMessage needTopPadding={false} />}

                              {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
                        </div>
                  )}

                  {appliedParticipationEditForm?.data && appliedParticipationEditForm.isOpen && (
                        <AppliedParticipationEditModalContainer
                              editingDetail={appliedParticipationEditForm.data}
                              closeAppliedParticipationEditForm={closeAppliedParticipationEditForm}
                        />
                  )}
            </>
      );
}

export default AppliedParticipationDetailContainer;
