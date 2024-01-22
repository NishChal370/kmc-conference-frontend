function ForgotPasswordHeader() {
      return (
            <header
                  className="flex flex-col justify-center items-center gap-3 text-center w-full
                        [&>*]:tracking-wide
                  "
            >
                  <h1 className="text-4xl font-extrabold text-primary">Forgot Password?</h1>
                  <p className="text-mute text-sm">
                        No worries, we&apos;ll send you secure reset instruction
                  </p>
            </header>
      );
}

export default ForgotPasswordHeader;
