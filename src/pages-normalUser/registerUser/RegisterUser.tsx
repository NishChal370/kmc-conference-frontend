import AuthWrapper from "@/shared-normalUser/auth/AuthWrapper";
import RegisterUserHeader from "./components/RegisterUserHeader";
import RegisterUserFooter from "./components/RegisterUserFooter";
import RegisterUserFormContainer from "./container/RegisterUserFormContainer";

function RegisterUser() {
      return (
            <AuthWrapper>
                  <div className="flex flex-col justify-center items-center gap-2 w-[90%]">
                        <RegisterUserHeader />

                        <RegisterUserFormContainer />

                        <RegisterUserFooter />
                  </div>
            </AuthWrapper>
      );
}

export default RegisterUser;
