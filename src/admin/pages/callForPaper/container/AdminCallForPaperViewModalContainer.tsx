import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import AdminCallForPaperViewModal from "../components/AdminCallForPaperViewModal";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { Status } from "@/enum/commonEnum";
import { ICallForPaperBasicModel } from "@/admin/model/callForPaper/callForPaperModel";
import { callForPaperDetailedSliceState, callForPaperSliceAction } from "../feature/callForPaperSlice";

interface IAdminCallForPaperViewModalContainer {
      selectedCallForPaperId: ICallForPaperBasicModel["id"];
      closeModalHandler: () => void;
}

function AdminCallForPaperViewModalContainer({
      selectedCallForPaperId,
      closeModalHandler,
}: IAdminCallForPaperViewModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(callForPaperDetailedSliceState);

      const { getCallForPaperDetailedInfo } = useCallForPaperApi();

      const fetchData = () => {
            getCallForPaperDetailedInfo({ id: selectedCallForPaperId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(callForPaperSliceAction.resetCallForPaperDetailedInfoSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED &&
            data && (
                  <AdminCallForPaperViewModal
                        callForPaperDetail={data}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminCallForPaperViewModalContainer;
