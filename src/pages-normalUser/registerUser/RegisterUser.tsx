import RegisterUserForm from "./components/RegisterUserForm";
import AuthWrapper from "@/shared-normalUser/auth/AuthWrapper";
import RegisterUserHeader from "./components/RegisterUserHeader";
import RegisterUserFooter from "./components/RegisterUserFooter";

function RegisterUser() {
      return (
            <AuthWrapper>
                  <div className="flex flex-col justify-center items-center gap-16 w-[90%]">
                        <RegisterUserHeader />

                        <RegisterUserForm />

                        <RegisterUserFooter />
                  </div>
            </AuthWrapper>
      );
}

export default RegisterUser;
