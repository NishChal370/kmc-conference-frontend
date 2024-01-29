import LogoButton from "./components/LogoButton";
import ProfileButton from "./components/ProfileButton";
import SideNavOpenButton from "./components/SideNavOpenButton";

function TopNav() {
      return (
            <div
                  id="admin-top-nav"
                  className="fixed z-30 top-0 py-1 px-4 w-full flex justify-between items-center bg-white border border-b border-default 
                        sm:px-10
                  "
            >
                  <section className="flex items-center gap-4">
                        <LogoButton />

                        <SideNavOpenButton />
                  </section>

                  <aside>
                        <ProfileButton />
                  </aside>
            </div>
      );
}

export default TopNav;
