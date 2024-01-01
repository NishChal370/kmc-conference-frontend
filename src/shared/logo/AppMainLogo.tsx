import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "@/constants/routePath/path-normalUser";
import log from "@/assets/image/logo.png";

interface IAppMainLogo {
      onClick?: () => void;
}

function AppMainLogo({ onClick }: IAppMainLogo) {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(HOME_PATH.home.full);

            if (onClick) onClick();
      };

      return (
            <button
                  type="button"
                  className="flex text-xs text-start items-end font-bold"
                  onClick={buttonHandler}
            >
                  <img className="w-14" src={log} alt="app-logo" />
                  <span className="pl-2 border-l-2 border-white text-white text-shadow">
                        <p>KMC</p>
                        <p>IT CONFERENCE</p>
                        <p>2024</p>
                  </span>
            </button>
      );
}

export default AppMainLogo;
