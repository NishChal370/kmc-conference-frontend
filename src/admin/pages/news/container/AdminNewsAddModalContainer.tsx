import useNewsApi from "@/admin/hooks/news/useNewsApi";
import { INewAddOrEditForm } from "@/admin/model/news/newsModel";
import useAppForm from "@/hooks/form/useAppForm";
import AdminNewsAddOrEditModal from "../components/AdminNewsAddOrEditModal";

interface IAdminNewsAddModalContainer {
      closeModal: () => void;
}
function AdminNewsAddModalContainer({ closeModal }: IAdminNewsAddModalContainer) {
      const newsAddForm = useAppForm<INewAddOrEditForm>({
            defaultValues: {
                  image: {
                        oldFiles: [],
                        newFiles: [],
                  },
            },
      });
      const { handleSubmit, reset } = newsAddForm;

      const { addNewsDetail } = useNewsApi();

      const formSubmitHandler = handleSubmit((newsDetail) => {
            addNewsDetail({
                  title: newsDetail.title,
                  content: newsDetail.content,
                  bannerImage: newsDetail.image.newFiles ? newsDetail.image.newFiles[0] : null,
            }).then(closeModal);
      });

      const formResetHandler = () => {
            reset();
      };

      return (
            <AdminNewsAddOrEditModal
                  newsAddOrEditForm={newsAddForm}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={formResetHandler}
                  closeNewsAddOrEditForm={closeModal}
            />
      );
}

export default AdminNewsAddModalContainer;
