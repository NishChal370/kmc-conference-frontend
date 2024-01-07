import ProfileButton from "./components/ProfileButton";
import SideNavOpenButton from "./components/SideNavOpenButton";
import appLogo from "@/assets/image/logo.png";

function TopNav() {
      return (
            <div
                  id="admin-top-nav"
                  className="fixed z-30 top-0 py-1 px-4 w-full flex justify-between items-center bg-white border border-b border-default 
                        sm:px-10
                  "
            >
                  <section className="flex items-center gap-4">
                        <figure className="w-40 h-fit">
                              <img className="w-full h-full object-contain" src={appLogo} alt="app-logo" />
                        </figure>

                        <SideNavOpenButton />
                  </section>

                  <aside>
                        <ProfileButton />
                  </aside>
            </div>
      );
}

export default TopNav;
