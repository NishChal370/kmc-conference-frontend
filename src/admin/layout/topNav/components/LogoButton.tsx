import { useNavigate } from "react-router-dom";
import { ADMIN_BASE_PATH } from "@/admin/constants/routePath";
import appLogo from "@/assets/image/appLogo.png";

function LogoButton() {
      const navigate = useNavigate();

      const clickHandler = () => {
            navigate("/" + ADMIN_BASE_PATH);
      };
      return (
            <button type="button" className="w-40 h-fit" onClick={clickHandler}>
                  <img loading="lazy" className="w-full h-full object-contain" src={appLogo} alt="app-logo" />
            </button>
      );
}

export default LogoButton;
