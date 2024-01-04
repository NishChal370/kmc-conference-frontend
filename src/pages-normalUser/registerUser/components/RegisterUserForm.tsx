import Button from "@/shared/button/Button";
import UserNameInput from "@/shared-normalUser/input/UserNameInput";

function RegisterUserForm() {
      return (
            <form
                  className="flex flex-col gap-y-12 gap-x-4 w-full justify-center items-center
                        [&>section]:w-full
                  "
            >
                  <section className="grid lg:grid-cols-3 gap-y-10 gap-x-4">
                        <UserNameInput title="First Name" />
                        <UserNameInput title="Middle Name" />
                        <UserNameInput title="Last Name" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <UserNameInput title="Gender" />
                        <UserNameInput type="date" title="Date of birth" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <UserNameInput type="email" title="Email" />
                        <UserNameInput title="Phone Number" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <UserNameInput type="password" title="Password" />
                        <UserNameInput type="password" title="Confirm Password" />
                  </section>

                  <Button type="submit" title="Register" />
            </form>
      );
}

export default RegisterUserForm;
