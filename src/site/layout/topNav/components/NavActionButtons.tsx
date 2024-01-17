import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import NavMenuButton from "@/site/shared/navMenu/NavMenuButton";
import RegisterButton from "@/site/shared/buttons/RegisterButton";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import getTokenDetail from "@/utils/token/getTokenDetail";

function NavActionButtons() {
      const { status } = useAppSelector(verifyLoginState);

      const useName = getTokenDetail.loggedInUserName();
      return (
            <section
                  id="top-nav--action-buttons"
                  className={`flex gap-4 justify-center items-center max-w-fit font-semibold text-white
                        ${status === Status.FAILED ? "flex-row" : "flex-row-reverse"}
                  `}
            >
                  {status === Status.FAILED ? (
                        <RegisterButton
                              extraClassName="hidden
                                    sm:flex
                              "
                        />
                  ) : (
                        <></>
                  )}

                  {status === Status.SUCCEEDED ? (
                        <div
                              title={`Hi, ${useName}`}
                              className="flex justify-center text-center align-middle items-center gap-1.5 !text-white"
                        >
                              <span className="w-9 h-9 bg-red flex justify-center items-center rounded-full text-xl border border-primary hover:border-white cursor-pointer">
                                    <p>{useName?.charAt(0).toLocaleUpperCase()}</p>
                              </span>
                        </div>
                  ) : (
                        <></>
                  )}

                  <NavMenuButton />
            </section>
      );
}

export default NavActionButtons;
