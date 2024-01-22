import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { AUTH_PATH } from "@/site/constants/routePath";

function TryLoggingButton() {
      const navigate = useNavigate();

      const navigateLoginHandler = () => {
            navigate(AUTH_PATH.login.full);
      };
      return (
            <div
                  className="text-xs flex flex-col justify-center items-center text-center gap-1 text-mute
                        sm:flex-row
                  "
            >
                  <p>Did you remember your password?</p>

                  <Button
                        type="button"
                        variant="text"
                        title="Try logging in"
                        extraClassName="underline text-xs"
                        onClickHandler={navigateLoginHandler}
                  />
            </div>
      );
}

export default TryLoggingButton;
