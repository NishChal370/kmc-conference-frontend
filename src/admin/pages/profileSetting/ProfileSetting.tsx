import { Outlet } from "react-router-dom";
import Header from "@/admin/shared/header/Header";
import ProfileSettingNav from "./components/ProfileSettingNav";

function ProfileSetting() {
      return (
            <>
                  <Header pageHeaderName="Profile Setting" />

                  <div
                        className="self-center w-full max-w-7xl flex gap-6 flex-col
                              lg:flex-row
                        "
                  >
                        <ProfileSettingNav />

                        <main className="w-full text-sm">
                              <Outlet />
                        </main>
                  </div>
            </>
      );
}

export default ProfileSetting;
