import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import NavMenuItemButton from "./NavMenuItemButton";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { Status, UserRole } from "@/enum/commonEnum";
import getTokenDetail from "@/utils/token/getTokenDetail";
import { ADMIN_DASHBOARD_PATH } from "@/constants/routePath/path-adminUser";

interface IUserAccessPanel {
      closeMenuHandler: () => void;
}

function UserAccessPanel({ closeMenuHandler }: IUserAccessPanel) {
      const navigate = useNavigate();

      const { status } = useAppSelector(verifyLoginState);

      return status === Status.SUCCEEDED ? (
            <section
                  className="flex flex-col gap-6 w-fit mb-10
                        [&>*]:text-start [&>*]:tracking-widest
                  "
            >
                  {[
                        {
                              name: "Admin Panel",
                              path: ADMIN_DASHBOARD_PATH.dashboard.full,
                              isVisible: getTokenDetail.loggedInUserRole() !== UserRole.PARTICIPANTS,
                        },
                        { name: "Profile", path: "/profile", isVisible: true },
                  ].map(({ name, path, isVisible }, index) =>
                        isVisible ? (
                              <NavMenuItemButton
                                    key={index}
                                    name={name}
                                    onClick={() => {
                                          navigate(path);
                                          closeMenuHandler();
                                    }}
                              />
                        ) : (
                              <></>
                        )
                  )}
            </section>
      ) : (
            <></>
      );
}

export default UserAccessPanel;
