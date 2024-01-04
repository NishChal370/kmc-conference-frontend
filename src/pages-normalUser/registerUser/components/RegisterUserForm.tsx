import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";

function RegisterUserForm() {
      return (
            <form
                  className="flex flex-col gap-y-12 gap-x-4 w-full justify-center items-center
                        [&>section]:w-full
                  "
            >
                  <section className="grid lg:grid-cols-3 gap-y-10 gap-x-4">
                        <Input title="First Name" />
                        <Input title="Middle Name" />
                        <Input title="Last Name" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <Input title="Gender" />
                        <Input type="date" title="Date of birth" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <Input type="email" title="Email" />
                        <Input title="Phone Number" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <Input type="password" title="Password" />
                        <Input type="password" title="Confirm Password" />
                  </section>

                  <Button type="submit" title="Register" />
            </form>
      );
}

export default RegisterUserForm;
