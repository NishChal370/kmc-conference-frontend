import MemberProfileSettingHeader from "./components/MemberProfileSettingHeader";
import { Outlet } from "react-router-dom";
import MemberProfileSettingNav from "./components/MemberProfileSettingNav";

function MemberProfileSetting() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-10">
                  <MemberProfileSettingHeader />

                  <div
                        className="self-center w-full  max-w-[84%] lg:max-w-7xl flex gap-6 flex-col min-h-[61.8vh]
                              xl:flex-row
                        "
                  >
                        <MemberProfileSettingNav />

                        <main className="w-full text-sm">
                              <Outlet />
                        </main>
                  </div>
            </span>
      );
}

export default MemberProfileSetting;
