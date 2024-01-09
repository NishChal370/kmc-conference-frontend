import { useEffect } from "react";
import AdminSpeakerTable from "../components/AdminSpeakerTable";
import { useAppSelector } from "@/app/hooks";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { IAdminSpeakerEditModal } from "@/admin/model/speaker/adminSpeakerModel";
import { speakerState } from "../feature/speakerSlice";

interface IAdminSpeakerTableContainer {
      openEditModal: ({ editingData }: { editingData: IAdminSpeakerEditModal }) => void;
}

function AdminSpeakerTableContainer({ openEditModal }: IAdminSpeakerTableContainer) {
      const { status, data, isToRefetch } = useAppSelector(speakerState).speakerBasicInfo;
      const { getSpeakerBasicInfo } = useSpeakerApi();

      const fetchData = () => {
            getSpeakerBasicInfo();
      };

      useEffect(() => {
            fetchData();
      }, [isToRefetch]);

      return (
            <>
                  <AdminSpeakerTable
                        openEditModal={openEditModal}
                        status={status}
                        speakersBasicInfo={data.speakers}
                  />
            </>
      );
}

export default AdminSpeakerTableContainer;
