import LoginForm from "../components/LoginForm";
import { useAppSelector } from "@/app/hooks";
import useAppForm from "@/hooks/form/useAppForm";
import useLoginApi from "@/hooks-normalUser/login/useLoginApi";
import { loginState } from "../feature/loginSlice";
import { ILogin } from "@/model-normalUser/login/loginModel";

function LoginFormContainer() {
      const loginForm = useAppForm<ILogin>();
      const { handleSubmit } = loginForm;

      const { login } = useLoginApi();

      const { status } = useAppSelector(loginState);

      const formSubmitHandler = handleSubmit((loginDetail) => {
            login(loginDetail);
      });
      return <LoginForm status={status} loginForm={loginForm} formSubmitHandler={formSubmitHandler} />;
}

export default LoginFormContainer;
