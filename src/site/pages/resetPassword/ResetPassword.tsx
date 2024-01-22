import GoLoginButton from "./component/GoLoginButton";
import ResetPasswordHeader from "./component/ResetPasswordHeader";
import ResetPasswordFromContainer from "./container/ResetPasswordFormContainer";

function ResetPassword() {
      return (
            <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 w-[90%] lg:max-w-[70%]">
                  <ResetPasswordHeader />

                  <ResetPasswordFromContainer />

                  <GoLoginButton />
            </div>
      );
}

export default ResetPassword;
