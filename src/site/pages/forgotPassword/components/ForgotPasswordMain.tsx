import ForgotPasswordHeader from "./ForgotPasswordHeader";
import ForgotPasswordFormContainer from "../container/ForgotPasswordFormContainer";
import TryLoggingButton from "./TryLoggingButton";

function ForgotPasswordMain() {
      return (
            <>
                  <ForgotPasswordHeader />

                  <ForgotPasswordFormContainer />

                  <TryLoggingButton />
            </>
      );
}

export default ForgotPasswordMain;
