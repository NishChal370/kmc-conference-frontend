import { useAppSelector } from "@/app/hooks";
import ForgotPasswordMain from "./components/ForgotPasswordMain";
import { forgotPasswordSliceState } from "./feature/forgotPasswordSlice";
import { Status } from "@/enum/commonEnum";
import ForgotPasswordSuccessMessageContainer from "./container/ForgotPasswordSuccessMessageContainer";

function ForgotPassword() {
      const { status } = useAppSelector(forgotPasswordSliceState);

      return (
            <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 w-[90%] lg:max-w-[70%]">
                  {status === Status.SUCCEEDED ? (
                        <ForgotPasswordSuccessMessageContainer />
                  ) : (
                        <ForgotPasswordMain />
                  )}
            </div>
      );
}

export default ForgotPassword;
