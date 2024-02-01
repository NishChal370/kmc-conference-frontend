import { useNavigate } from "react-router-dom";
import { NEWS_PATH } from "@/site/constants/routePath";
import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";

function HomeNewsReadAllButtonContainer() {
      const navigate = useNavigate();

      const navigateHandler = () => {
            navigate(NEWS_PATH.news.full);
      };
      return <ViewMoreButton name="Read more" clickHandler={navigateHandler} />;
}

export default HomeNewsReadAllButtonContainer;
