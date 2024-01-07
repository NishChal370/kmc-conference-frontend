import LoginForm from "../components/LoginForm";
import { useAppSelector } from "@/app/hooks";
import useAppForm from "@/hooks/form/useAppForm";
import { loginState } from "../feature/loginSlice";
import { ILogin } from "@/model-normalUser/login/loginModel";

function LoginFormContainer() {
      const loginForm = useAppForm<ILogin>();
      const { handleSubmit } = loginForm;

      const { status } = useAppSelector(loginState);

      const formSubmitHandler = handleSubmit(() => {
            alert("DEmo Successful");
            // login(loginDetail);
      });

      return <LoginForm status={status} loginForm={loginForm} formSubmitHandler={formSubmitHandler} />;
}

export default LoginFormContainer;
