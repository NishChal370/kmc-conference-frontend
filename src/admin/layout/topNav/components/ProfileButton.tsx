import { useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import Menu, { MenuButton, MenuItems } from "@/admin/shared/menu/Menu";
import useAuthApi from "@/hooks/auth/useAuthApi";
import getTokenDetail from "@/utils/token/getTokenDetail";
import { ADMIN_PROFILE_SETTING_PATH } from "@/admin/constants/routePath";
import { HOME_PATH } from "@/site/constants/routePath";

function ProfileButton() {
      const { logout } = useAuthApi();
      const navigate = useNavigate();

      const navigationHandler = (pathName: string) => () => {
            navigate(pathName);
      };

      return (
            <Menu>
                  <MenuButton>
                        <span className="flex flex-col gap-0 max-w-[6rem]">
                              <h4 className="text-sm font-semibold truncate">
                                    {getTokenDetail.loggedInUserName()}
                              </h4>
                              <p className="text-xs">{getTokenDetail.loggedInUserRole()}</p>
                        </span>

                        <AppIcon name="down-arrow" />
                  </MenuButton>

                  <MenuItems
                        items={[
                              {
                                    title: "My Profile",
                                    icon: <AppIcon name="user" />,
                                    clickHandler: navigationHandler(
                                          ADMIN_PROFILE_SETTING_PATH.profileSetting.full
                                    ),
                              },

                              {
                                    title: "View Site",
                                    icon: <AppIcon name="arrow-left" />,
                                    clickHandler: navigationHandler(HOME_PATH.home.full),
                              },

                              {
                                    title: "Logout",
                                    icon: <AppIcon name="logout" />,
                                    clickHandler: logout,
                              },
                        ]}
                  />
            </Menu>
      );
}

export default ProfileButton;
