interface IRegisterButton {
      extraClassName?: React.HTMLAttributes<unknown>["className"];
}

function RegisterButton({ extraClassName }: IRegisterButton) {
      return (
            <button
                  type="button"
                  className={`bg-primary px-5 py-2 text-white text-sm font-semibold rounded-md ${extraClassName}`}
            >
                  REGISTER
            </button>
      );
}

export default RegisterButton;
