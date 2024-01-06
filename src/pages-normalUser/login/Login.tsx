import LoginHeader from "./components/LoginHeader";
import LoginFormContainer from "./container/LoginFormContainer";

function Login() {
      return (
            <span className="flex flex-col justify-center items-center gap-10 sm:gap-16 w-[90%] lg:max-w-[70%]">
                  <LoginHeader />

                  <LoginFormContainer />
            </span>
      );
}

export default Login;
