import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import AppliedSpeakerEditModalContainer from "./AppliedSpeakerEditModalContainer";
import AppliedSpeakingDetail from "../appliedSpeaking-components/AppliedSpeakingDetail";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import { Status } from "@/enum/commonEnum";
import { IAppliedSpeakerBasic } from "@/admin/model/appliedHistory/appliedHistoryModel";

function AppliedSpeakingDetailContainer() {
      const dispatch = useAppDispatch();

      const [appliedSpeakerEditForm, openAppliedSpeakerEditForm, closeAppliedSpeakerEditForm] =
            useExtraModal<IAppliedSpeakerBasic>();

      const { status, data, error, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedSpeakerBasic;

      const { getApplicationSpeakerBasicInfo } = useAppliedHistoryApi();

      const openEditModalHandler = () => {
            openAppliedSpeakerEditForm(data);
      };

      useEffect(() => {
            console.log("called");
            getApplicationSpeakerBasicInfo();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedSpeakerBasicSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && data && (
                        <AppliedSpeakingDetail
                              appliedSpeaking={data}
                              openAppliedSpeakerEditForm={openEditModalHandler}
                        />
                  )}

                  {status !== Status.SUCCEEDED && (
                        <div className="flex flex-col gap-10">
                              <h4 className="font-bold text-base">Speaker Application</h4>

                              {status === Status.FAILED && (
                                    <ErrorMessage
                                          title={error?.title}
                                          detail={error?.detail}
                                          needTopPadding={false}
                                    />
                              )}

                              {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                              {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
                        </div>
                  )}

                  {appliedSpeakerEditForm?.data && appliedSpeakerEditForm.isOpen && (
                        <AppliedSpeakerEditModalContainer
                              editingDetail={appliedSpeakerEditForm.data}
                              closeAppliedSpeakerEditForm={closeAppliedSpeakerEditForm}
                        />
                  )}
            </>
      );
}

export default AppliedSpeakingDetailContainer;
