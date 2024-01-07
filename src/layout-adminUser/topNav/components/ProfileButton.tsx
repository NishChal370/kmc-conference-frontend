import { useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import Menu, { MenuButton, MenuItems } from "@/shared-adminUser/menu/Menu";
import useAuthApi from "@/hooks/auth/useAuthApi";
import getTokenDetail from "@/utils/token/getTokenDetail";

function ProfileButton() {
      const { logout } = useAuthApi();
      const navigate = useNavigate();

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

                  {/* <MenuItems
                        items={[
                              {
                                    title: "My Profile",
                                    icon: <AppIcon icon="user" />,
                                    clickHandler: () => navigate(PROFILE_SETTING_PATH.main.full),
                              },
                              {
                                    title: "Logout",
                                    icon: <AppIcon icon="logout" />,
                                    clickHandler: logout,
                              },
                        ]}
                  /> */}
            </Menu>
      );
}

export default ProfileButton;
