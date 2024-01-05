import Button from "@/shared/button/Button";

function RegisterUserFooter() {
      return (
            <span className="w-full flex gap-1 text-sm items-center justify-center self-center">
                  <p>Already have an account?</p>

                  <Button
                        type="button"
                        title="Try logging in"
                        variant="text"
                        onClickHandler={() => console.log("SD")}
                  />
            </span>
      );
}

export default RegisterUserFooter;
