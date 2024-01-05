import { AuthSlide } from "./AuthSlide";

interface IAuthWrapper {
      children: JSX.Element;
}

function AuthWrapper({ children }: IAuthWrapper) {
      return (
            <div
                  className="flex flex-col w-full justify-between gap-0 h-full min-h-screen 
                        md:flex-row
                  "
            >
                  <AuthSlide />

                  <section
                        className=" w-[100%] flex flex-col gap-6 justify-center items-center
                              md:w-full md:max-w-[30rem]
                              lg:w-fit lg:min-w-[40rem] 
                              xl:w-full xl:min-w-0 xl:max-w-full
                              [&>span>*]:xl:max-w-[54rem]
                        "
                  >
                        <span
                              className="w-full py-10 flex justify-center items-start h-fit 
                                    md:overflow-scroll md:max-h-screen 
                                    lg:items-center
                              "
                        >
                              <span className="w-full h-fit overflow-scroll no-scrollbar flex flex-col gap-6 justify-center items-center">
                                    {children}

                                    <div className="w-[90%] flex flex-col gap-14 justify-center items-center h-fit">
                                          <footer
                                                className="text-center text-sm mt-10 
                                                      sm:mt-6
                                                "
                                          >
                                                <p>
                                                      @Powered by{" "}
                                                      <span className="text-primary">KMC System.</span>
                                                </p>
                                          </footer>
                                    </div>
                              </span>
                        </span>
                  </section>
            </div>
      );
}

export default AuthWrapper;
