import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { AUTH_PATH } from "@/constants/routePath/path-normalUser";

interface IRegisterButton {
      extraClassName?: React.HTMLAttributes<unknown>["className"];
}

function RegisterButton({ extraClassName }: IRegisterButton) {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(AUTH_PATH.registerUser.full);
      };

      return (
            <>
                  <Button
                        extraClassName={extraClassName}
                        variant="filled"
                        title="REGISTER"
                        onClickHandler={buttonHandler}
                  />
            </>
      );
}

export default RegisterButton;
