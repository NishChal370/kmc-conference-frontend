import LoginForm from "../components/LoginForm";
import { useAppSelector } from "@/app/hooks";
import useAppForm from "@/hooks/form/useAppForm";
import useLoginApi from "@site/hooks/login/useLoginApi";
import { loginState } from "../feature/loginSlice";
import { ILogin } from "@site/model/login/loginModel";

function LoginFormContainer() {
      const loginForm = useAppForm<ILogin>({
            defaultValues: {
                  emailAddress: "test@gmail.com",
                  password: "Mypassword1!",
            },
      });
      const { handleSubmit } = loginForm;

      const { login } = useLoginApi();

      const { status } = useAppSelector(loginState);

      const formSubmitHandler = handleSubmit((loginDetail) => {
            login(loginDetail);
      });

      return <LoginForm status={status} loginForm={loginForm} formSubmitHandler={formSubmitHandler} />;
}

export default LoginFormContainer;
