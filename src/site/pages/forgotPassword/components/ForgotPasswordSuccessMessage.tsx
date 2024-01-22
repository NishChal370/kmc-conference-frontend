import Button from "@/shared/button/Button";
import tickIcon from "@/assets/image/webp/mail.webp";

interface IForgotPasswordSuccessMessage {
      reverifyUserHandler: () => void;
      navigateLoginHandler: () => void;
}

function ForgotPasswordSuccessMessage({
      reverifyUserHandler,
      navigateLoginHandler,
}: IForgotPasswordSuccessMessage) {
      return (
            <div className="flex flex-col justify-center items-center gap-16 text-center w-full sm:w-[80%]">
                  <section className="w-full flex flex-col gap-6 items-center">
                        <img loading="lazy" src={tickIcon} alt="success-icon" className="w-28" />

                        <span className="flex flex-col justify-center items-center gap-1.5">
                              <h2 className="text-2xl font-bold">Check Your Email</h2>
                              <p className="text-xs">
                                    If you do not find email. Check spam or Try reset password again
                              </p>
                        </span>
                  </section>

                  <section className="w-full flex flex-col gap-10 items-center">
                        <Button title="Proceed to Login" onClickHandler={navigateLoginHandler} />

                        <span className="flex gap-1.5 text-xs items-center">
                              <p>cannot find email?</p>

                              <Button
                                    type="button"
                                    variant="text"
                                    title="Reverify email"
                                    onClickHandler={reverifyUserHandler}
                              />
                        </span>
                  </section>
            </div>
      );
}

export default ForgotPasswordSuccessMessage;
