import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import emailIcon from "@/assets/image/webp/mail.webp";

function VerifyLoading() {
      return (
            <div className="flex flex-col text-center justify-center items-center gap-20  w-[80%] lg:max-w-[70%]">
                  <section className="flex flex-col justify-center items-center gap-8 w-full h-full">
                        <img loading="lazy" src={emailIcon} alt="" className=" w-24" />

                        <span className="flex flex-col gap-2">
                              <p className=" text-4xl font-bold text-primary ">Verifying Email</p>
                              <p>Please wait for the verification.</p>
                        </span>
                  </section>

                  <LoadingAnimation />
            </div>
      );
}

export default VerifyLoading;
