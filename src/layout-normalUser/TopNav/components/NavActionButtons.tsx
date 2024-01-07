import NavMenuButton from "@/shared-normalUser/navMenu/NavMenuButton";
import RegisterButton from "@/shared-normalUser/buttons/RegisterButton";

function NavActionButtons() {
      return (
            <section
                  id="top-nav--action-buttons"
                  className={`flex gap-4 justify-center items-center max-w-fit font-semibold text-white
                  flex-row
                  `}
            >
                  <RegisterButton
                        extraClassName="hidden
                                    sm:flex
                              "
                  />

                  <NavMenuButton />
            </section>
      );
}

export default NavActionButtons;
