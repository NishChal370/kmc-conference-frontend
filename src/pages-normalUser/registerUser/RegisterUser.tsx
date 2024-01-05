import RegisterUserHeader from "./components/RegisterUserHeader";
import RegisterUserFooter from "./components/RegisterUserFooter";
import RegisterUserFormContainer from "./container/RegisterUserFormContainer";

function RegisterUser() {
      return (
            <div className="flex flex-col justify-center items-center gap-2 w-[90%]">
                  <RegisterUserHeader />

                  <RegisterUserFormContainer />

                  <RegisterUserFooter />
            </div>
      );
}

export default RegisterUser;
