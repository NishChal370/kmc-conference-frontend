interface INavMenuItemButton {
      name: string;
      onClick?: () => void;
}
function NavMenuItemButton({ name, onClick }: INavMenuItemButton) {
      return (
            <button
                  onClick={onClick}
                  type="button"
                  className="transition hover:translate-x-4 hover:scale-100 duration-200  active:text-primary"
            >
                  {name}
            </button>
      );
}

export default NavMenuItemButton;
