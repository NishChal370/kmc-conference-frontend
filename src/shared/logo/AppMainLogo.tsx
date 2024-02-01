import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "@/site/constants/routePath";
import log from "@/assets/image/organizers/appLogo.webp";

interface IAppMainLogo {
      id?: string;
      onClick?: () => void;
      size?: string;
}

function AppMainLogo({ id = "app-logo", onClick, size = "w-[10rem] sm:w-[14rem]" }: IAppMainLogo) {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(HOME_PATH.home.full);

            if (onClick) onClick();
      };

      return (
            <button
                  type="button"
                  className="flex justify-center items-center w-fit h-fit scale-110"
                  onClick={buttonHandler}
            >
                  <img loading="lazy" id={id} className={size + " object-contain"} src={log} alt="app-logo" />
            </button>
      );
}

export default AppMainLogo;
