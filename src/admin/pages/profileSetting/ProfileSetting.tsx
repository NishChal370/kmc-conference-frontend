import { Outlet } from "react-router-dom";
import Header from "@/admin/shared/header/Header";
import ProfileSettingNav from "./components/ProfileSettingNav";

function ProfileSetting() {
      return (
            <>
                  <Header />

                  <div className="self-center w-full max-w-5xl">
                        <ProfileSettingNav />

                        <main className="mt-10">
                              <Outlet />
                        </main>
                  </div>
            </>
      );
}

export default ProfileSetting;
