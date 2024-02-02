import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAppSelector } from "@/app/hooks";
import useAppForm from "@/hooks/form/useAppForm";
import useLoginApi from "@/site/hooks/login/useLoginApi";
import { loginState } from "../feature/loginSlice";
import { ILogin } from "@/site/model/login/loginModel";
import { AUTH_PATH } from "@/site/constants/routePath";

function LoginFormContainer() {
      const navigate = useNavigate();

      const loginForm = useAppForm<ILogin>();
      const { handleSubmit } = loginForm;

      const { login } = useLoginApi();

      const { status } = useAppSelector(loginState);

      const formSubmitHandler = handleSubmit((loginDetail) => {
            login(loginDetail);
      });

      const forgotPasswordHandler = () => {
            navigate(AUTH_PATH.forgotPassword.full);
      };

      return (
            <LoginForm
                  status={status}
                  loginForm={loginForm}
                  formSubmitHandler={formSubmitHandler}
                  forgotPasswordHandler={forgotPasswordHandler}
            />
      );
}

export default LoginFormContainer;
