import RaiseUpAnimationWrapper from "@/template/animation/RaiseUpAnimationWrapper";

interface INavMenuItemButton {
      name: string;
      onClick?: () => void;
}
function NavMenuItemButton({ name, onClick }: INavMenuItemButton) {
      return (
            <button
                  onClick={onClick}
                  type="button"
                  className="transition hover:translate-x-8 hover:scale-100 duration-200  active:text-primary"
            >
                  <RaiseUpAnimationWrapper>{name}</RaiseUpAnimationWrapper>
            </button>
      );
}

export default NavMenuItemButton;
