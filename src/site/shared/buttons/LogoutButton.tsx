import useAuthApi from "@/hooks/auth/useAuthApi";

interface ILogoutButton {
      extraHandler?: () => void;
}

function LogoutButton({ extraHandler }: ILogoutButton) {
      const { logout } = useAuthApi();

      const buttonHandler = () => {
            logout().then(() => {
                  if (extraHandler) extraHandler();
            });
      };

      return (
            <button
                  type="button"
                  className="text-white bg-primary rounded-md py-2 px-10 min-w-fit w-full
                        active:bg-white active:text-primary
                  "
                  onClick={buttonHandler}
            >
                  LOGOUT
            </button>
      );
}

export default LogoutButton;
