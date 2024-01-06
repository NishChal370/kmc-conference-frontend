import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { AUTH_PATH } from "@/constants/routePath/path-normalUser";

function LoginHeader() {
      const navigate = useNavigate();

      const navigateToRegistration = () => {
            navigate(AUTH_PATH.registerUser.full);
      };

      return (
            <header
                  className="flex flex-col justify-center items-center gap-6 text-center w-full
                        [&>*]:tracking-wide
                  "
            >
                  <h1 className="text-4xl font-extrabold text-primary">Log in</h1>

                  <span
                        className="flex flex-col w-fit items-center justify-center gap-1
                              xs:flex-row
                        "
                  >
                        <p>New To Conference?</p>
                        <Button
                              type="button"
                              variant="text"
                              title="Create new account"
                              onClickHandler={navigateToRegistration}
                        />
                  </span>
            </header>
      );
}

export default LoginHeader;
