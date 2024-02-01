import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { newsAction, newsDetailSliceState } from "../feature/newsSlice";
import { Status } from "@/enum/commonEnum";
import AdminNewsViewModal from "../components/AdminNewsViewModal";
import { INewsViewOrEditModal } from "@/admin/model/news/newsModel";

interface IAdminNewsViewModalContainer {
      selectedNewsId: INewsViewOrEditModal["newsId"];
      closeModal: () => void;
}
function AdminNewsViewModalContainer({ selectedNewsId, closeModal }: IAdminNewsViewModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(newsDetailSliceState);

      const { getNewsDetailedInfo } = useNewsApi();

      const fetchData = () => {
            getNewsDetailedInfo({ id: selectedNewsId }).catch(closeModal);
      };

      useEffect(() => {
            fetchData();
      }, [selectedNewsId]);

      useEffect(() => {
            return () => {
                  dispatch(newsAction.resetNewsDetailSlice());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && data ? (
                        <AdminNewsViewModal newsDetail={data} closeModalHandler={closeModal} />
                  ) : undefined}
            </>
      );
}

export default AdminNewsViewModalContainer;
