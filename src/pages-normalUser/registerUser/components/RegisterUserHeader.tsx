function RegisterUserHeader() {
      return (
            <header
                  className="flex flex-col gap-2  text-start w-full
                        [&>*]:tracking-wide
                  "
            >
                  <h1
                        className="text-3xl font-extrabold text-primary
                              sm:text-4xl
                        "
                  >
                        Create Your Account
                  </h1>
            </header>
      );
}

export default RegisterUserHeader;
