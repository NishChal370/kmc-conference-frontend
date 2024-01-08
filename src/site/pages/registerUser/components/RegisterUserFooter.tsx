import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { AUTH_PATH } from "@/site/constants/routePath";

function RegisterUserFooter() {
      const navigate = useNavigate();

      const navigateToRegistration = () => {
            navigate(AUTH_PATH.login.full);
      };

      return (
            <span className="w-full flex gap-1 text-sm items-center justify-center self-center">
                  <p>Already have an account?</p>

                  <Button
                        type="button"
                        title="Try logging in"
                        variant="text"
                        onClickHandler={navigateToRegistration}
                  />
            </span>
      );
}

export default RegisterUserFooter;
