import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import AdminSpeakerTable from "../components/AdminSpeakerTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { Status } from "@/enum/commonEnum";
import { IAdminSpeakerEditModal } from "@/admin/model/speaker/adminSpeakerModel";
import { speakerSliceAction, speakerState } from "../feature/speakerSlice";

interface IAdminSpeakerTableContainer {
      openEditModal: ({ editingData }: { editingData: IAdminSpeakerEditModal }) => void;
      openViewModal: ({ viewingData }: { viewingData: IAdminSpeakerEditModal }) => void;
}

function AdminSpeakerTableContainer({ openEditModal, openViewModal }: IAdminSpeakerTableContainer) {
      const dispatch = useAppDispatch();

      const { status, data, isToRefetch, error } = useAppSelector(speakerState).speakerBasicInfo;

      const { getSpeakerBasicInfo } = useSpeakerApi();

      const fetchData = () => {
            getSpeakerBasicInfo();
      };

      useEffect(() => {
            fetchData();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(speakerSliceAction.resetSpeakerBasicInfoSlice());
            };
      }, []);

      return (
            <>
                  <AdminSpeakerTable
                        openViewModal={openViewModal}
                        openEditModal={openEditModal}
                        status={status}
                        speakersBasicInfo={data.speakers}
                  />
                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage viewAllHandler={fetchData} buttonTitle="Reload" />
                  )}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminSpeakerTableContainer;
