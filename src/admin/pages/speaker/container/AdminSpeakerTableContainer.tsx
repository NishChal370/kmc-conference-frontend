import { useAppSelector } from "@/app/hooks";
import useSpeakerApi from "@admin/hooks/speaker/useSpeakerApi";
import { useEffect } from "react";
import { speakerState } from "../feature/speakerSlice";
import AdminSpeakerTable from "../components/AdminSpeakerTable";

interface IAdminSpeakerTableContainer {
      openEditModal: ({ editingData }: { editingData: string }) => void;
}

function AdminSpeakerTableContainer({ openEditModal }: IAdminSpeakerTableContainer) {
      const { status, data, error } = useAppSelector(speakerState).speakerBasicInfo;
      const { getSpeakerBasicInfo } = useSpeakerApi();

      const fetchData = () => {
            getSpeakerBasicInfo();
      };

      useEffect(() => {
            fetchData();
      }, []);

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
