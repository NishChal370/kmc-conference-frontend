interface INavMenuItemButton {
      name: string;
}
function NavMenuItemButton({ name }: INavMenuItemButton) {
      return (
            <button
                  type="button"
                  className="transition hover:translate-x-4 hover:scale-100 duration-200  active:text-red"
            >
                  {name}
            </button>
      );
}

export default NavMenuItemButton;
