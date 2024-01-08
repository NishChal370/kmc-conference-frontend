import { useNavigate } from "react-router-dom";
import { AUTH_PATH } from "@site/constants/routePath";

function LoginButton() {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(AUTH_PATH.login.full);
      };

      return (
            <button
                  type="button"
                  className="text-white border border-white rounded-md py-2 px-10 min-w-fit w-full
                        active:border-primary active:text-primary
                  "
                  onClick={buttonHandler}
            >
                  LOGIN
            </button>
      );
}

export default LoginButton;
