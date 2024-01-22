import Button from "@/shared/button/Button";
import checkMark from "@/assets/image/webp/check-mark.webp";

function VerifiedMessage() {
      return (
            <div className="flex flex-col justify-center items-center gap-16 text-center w-full sm:w-[80%]">
                  <section className="w-full flex flex-col gap-8 items-center">
                        <img loading="lazy" src={checkMark} alt="success-icon" className="w-28" />

                        <span className="flex flex-col justify-center items-center gap-4">
                              <h2 className="text-2xl font-bold">Email Verified</h2>
                              <p className="text-xs">
                                    If you do not find email. Check spam or Try reset password again
                              </p>
                        </span>

                        <Button
                              title="Proceed to Login"
                              onClickHandler={() => {}}
                              extraClassName="mt-10 w-[76%] md:w-full lg:!w-[70%]"
                        />
                  </section>
            </div>
      );
}

export default VerifiedMessage;
