import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { AUTH_PATH } from "@/site/constants/routePath";

function GoLoginButton() {
      const navigate = useNavigate();

      const navigateLoginHandler = () => {
            navigate(AUTH_PATH.login.full);
      };

      return (
            <div
                  className="text-sm flex flex-col justify-center items-center text-center gap-1 text-mute
                        xs:flex-row
                  "
            >
                  <p>Don&apos;t want to reset password?</p>

                  <Button
                        type="button"
                        variant="text"
                        extraClassName="underline text-sm"
                        title="Go login"
                        onClickHandler={navigateLoginHandler}
                  />
            </div>
      );
}

export default GoLoginButton;
