import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import PasswordInput from "@/shared/input/PasswordInput";

function RegisterUserForm() {
      return (
            <form
                  className="flex flex-col gap-y-12 gap-x-4 w-full justify-center items-center
                        [&>section]:w-full
                  "
            >
                  <section className="grid lg:grid-cols-3 gap-y-10 gap-x-4">
                        <Input label="First Name" />

                        <Input label="Middle Name" />

                        <Input label="Last Name" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <Input label="Gender" />

                        <Input type="date" label="Date of birth" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <Input type="email" label="Email" />

                        <Input label="Phone Number" />
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <PasswordInput />

                        <PasswordInput label="Confirm Password" />
                  </section>

                  <Button type="submit" title="Register" extraClassName="py-2" />
            </form>
      );
}

export default RegisterUserForm;
