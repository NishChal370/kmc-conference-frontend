import { useEffect } from "react";
import AdminNewsAddOrEditModal from "../components/AdminNewsAddOrEditModal";
import useAppForm from "@/hooks/form/useAppForm";
import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { INewAddOrEditForm, INewsViewOrEditModal } from "@/admin/model/news/newsModel";
import { newsAction, newsDetailSliceState } from "../feature/newsSlice";
import { Status } from "@/enum/commonEnum";

interface IAdminNewsEditModalContainer {
      editingDetail: INewsViewOrEditModal;
      closeNewsEditForm: () => void;
}

function AdminNewsEditModalContainer({ editingDetail, closeNewsEditForm }: IAdminNewsEditModalContainer) {
      const dispatch = useAppDispatch();

      const newsEditForm = useAppForm<INewAddOrEditForm>({
            defaultValues: {
                  image: {
                        oldFiles: [],
                        newFiles: [],
                  },
            },
      });

      const { reset, handleSubmit } = newsEditForm;

      const { getNewsDetailedInfo, updateNewsDetail } = useNewsApi();

      const { data, status } = useAppSelector(newsDetailSliceState);

      const formSubmitHandler = handleSubmit((updatedDetail) => {
            updateNewsDetail({
                  id: editingDetail.newsId,
                  removeOldImage: updatedDetail.image.oldFiles?.length === 0,
                  title: updatedDetail.title,
                  content: updatedDetail.content,
                  bannerImage: updatedDetail.image.newFiles?.length ? updatedDetail.image.newFiles[0] : null,
            }).then(closeNewsEditForm);
      });

      const formResetHandler = () => {
            reset();
      };

      const fetchData = () => {
            getNewsDetailedInfo({ id: editingDetail.newsId }).catch(closeNewsEditForm);
      };

      const setInitialData = () => {
            if (!data) return;

            const speakerEditingDetail: INewAddOrEditForm = {
                  image: {
                        newFiles: [],
                        oldFiles: data.bannerImage ? [data.bannerImage] : undefined,
                  },
                  title: data.title,
                  content: data.content,
            };

            reset(speakerEditingDetail);
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(newsAction.resetNewsDetailSlice());
            };
      }, []);

      useEffect(() => {
            setInitialData();
      }, [data]);

      return status === Status.SUCCEEDED ? (
            <AdminNewsAddOrEditModal
                  newsAddOrEditForm={newsEditForm}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
                  closeNewsAddOrEditForm={closeNewsEditForm}
            />
      ) : undefined;
}

export default AdminNewsEditModalContainer;
