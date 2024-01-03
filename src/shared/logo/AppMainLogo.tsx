import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "@/constants/routePath/path-normalUser";
import log from "@/assets/image/logo.png";

interface IAppMainLogo {
      onClick?: () => void;
      size?: string;
}

function AppMainLogo({ onClick, size = "w-[10rem] sm:w-[16rem]" }: IAppMainLogo) {
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
                  <img className={size} src={log} alt="app-logo" />
            </button>
      );
}

export default AppMainLogo;
