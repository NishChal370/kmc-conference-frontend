import { useEffect } from "react";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { speakerSliceAction, speakerState } from "../feature/speakerSlice";
import { ISpeakerBasicInfo } from "@/models/speaker/SpeakerModel";
import AdminSpeakerViewModal from "../components/adminSpeakerViewModal/AdminSpeakerViewModal";
import { Status } from "@/enum/commonEnum";

interface IAdminSpeakerViewModalContainer {
      selectedSpeakerId: ISpeakerBasicInfo["id"];
      closeModalHandler: () => void;
}

function AdminSpeakerViewModalContainer({
      selectedSpeakerId,
      closeModalHandler,
}: IAdminSpeakerViewModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(speakerState).speakerFullDetailedInfo;

      const { getAdminSpeakerFullDetailedInfo } = useSpeakerApi();

      const fetchData = () => {
            getAdminSpeakerFullDetailedInfo({ speakerId: selectedSpeakerId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(speakerSliceAction.resetSpeakerFullDetailedInfoSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED &&
            data && <AdminSpeakerViewModal speakerDetail={data} closeModalHandler={closeModalHandler} />
      );
}

export default AdminSpeakerViewModalContainer;
