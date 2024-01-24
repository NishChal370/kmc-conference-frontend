import { useEffect } from "react";
import AdminSpeakerViewModal from "../components/adminSpeakerViewModal/AdminSpeakerViewModal";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { speakerDetailedSliceState, speakerSliceAction } from "../feature/speakerSlice";
import { Status } from "@/enum/commonEnum";
import { ISpeakerBasicModel } from "@/admin/model/speaker/speakerModel";

interface IAdminSpeakerViewModalContainer {
      selectedSpeakerId: ISpeakerBasicModel["id"];
      closeModalHandler: () => void;
}

function AdminSpeakerViewModalContainer({
      selectedSpeakerId,
      closeModalHandler,
}: IAdminSpeakerViewModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(speakerDetailedSliceState);

      const { getSpeakerDetailedInfo } = useSpeakerApi();

      const fetchData = () => {
            getSpeakerDetailedInfo({ id: selectedSpeakerId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(speakerSliceAction.resetSpeakerDetailedInfoSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED &&
            data && <AdminSpeakerViewModal speakerDetail={data} closeModalHandler={closeModalHandler} />
      );
}

export default AdminSpeakerViewModalContainer;
