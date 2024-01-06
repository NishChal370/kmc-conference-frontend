import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import RegisterButton from "@/shared-normalUser/buttons/RegisterButton";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";

function NavRegisterButton() {
      const { status } = useAppSelector(verifyLoginState);

      return status === Status.FAILED ? (
            <RegisterButton
                  extraClassName="hidden 
                        sm:flex
                  "
            />
      ) : (
            <></>
      );
}

export default NavRegisterButton;
