import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { participantDetailedSliceState, participantSliceAction } from "../feature/participantSlice";
import useParticipantApi from "@/admin/hooks/participant/useParticipant";
import { IParticipantBasicModel } from "@/admin/model/participant/participantModel";
import AdminParticipantViewModal from "../components/AdminParticipantViewModal";
import { Status } from "@/enum/commonEnum";

interface IAdminParticipantViewModalContainer {
      selectedParticipantId: IParticipantBasicModel["id"];
      closeModalHandler: () => void;
}

function AdminParticipantViewModalContainer({
      selectedParticipantId,
      closeModalHandler,
}: IAdminParticipantViewModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(participantDetailedSliceState);

      const { getParticipantDetailedInfo } = useParticipantApi();

      const fetchData = () => {
            getParticipantDetailedInfo({ id: selectedParticipantId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(participantSliceAction.resetParticipantDetailedInfoSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED &&
            data && <AdminParticipantViewModal participant={data} closeModalHandler={closeModalHandler} />
      );
}

export default AdminParticipantViewModalContainer;
