function ResetPasswordHeader() {
      return (
            <header
                  className="flex flex-col justify-center items-center gap-3 text-center w-full
                        [&>*]:tracking-wide
                  "
            >
                  <h1 className="text-4xl font-extrabold text-primary">Set new password</h1>
                  <p className="text-mute text-sm">
                        Your new password must be different to previously used passwords.
                  </p>
            </header>
      );
}

export default ResetPasswordHeader;
