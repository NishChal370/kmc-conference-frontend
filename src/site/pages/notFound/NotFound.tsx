import Button from "@/shared/button/Button";
import notFoundImg from "@/assets/image/svg/notFound.svg";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "@/site/constants/routePath";

function NotFound() {
      const navigate = useNavigate();

      return (
            <div className="absolute -top-20 z-10 left-0 bg-white w-full min-w-screen h-full min-h-screen flex justify-center items-center">
                  <span
                        className="flex flex-col justify-start items-center gap-4 w-[90%] mt-96 h-full
                              sm:w-[76%]
                              md:gap-10
                        "
                  >
                        <img
                              className="w-[20rem] h-[20rem] object-cover"
                              loading="lazy"
                              src={notFoundImg}
                              alt="not-found"
                        />

                        <article className="flex flex-col gap-6">
                              <h1 className="font-bold text-3xl">
                                    Oops! It seems like you&apos;ve taken a wrong turn.
                              </h1>

                              <p className="text-sm">
                                    The page you&apos;re seeking is missing. Double-check the URL or return to
                                    the homepage to continue.
                              </p>
                        </article>
                        <span className=" w-80">
                              <Button
                                    type="button"
                                    extraClassName="w-fit"
                                    title="GO HOME"
                                    onClickHandler={() => navigate(HOME_PATH.home.full)}
                              />
                        </span>
                  </span>
            </div>
      );
}

export default NotFound;
