import AppMainLogo from "@/shared/logo/AppMainLogo";
import NavMenuButton from "@/shared-normalUser/navMenu/NavMenuButton";
import RegisterButton from "@/shared-normalUser/buttons/RegisterButton";

function TopNav() {
      return (
            <nav
                  className="fixed z-50 top-0 flex justify-between items-end gap-2 w-full py-2 px-4 
                              sm:px-10
                        "
            >
                  <AppMainLogo />

                  <section className="flex justify-center items-center gap-4">
                        <RegisterButton
                              extraClassName="hidden 
                                    sm:flex
                              "
                        />

                        <NavMenuButton />
                  </section>
            </nav>
      );
}

export default TopNav;
