import OtherNewsListContainer from "../container/OtherNewsListContainer";

function OtherNews() {
      return (
            <section
                  className="mt-44 flex flex-col justify-center items-center gap-10 w-full 
                        lg:w-[80%] lg:max-w-[80rem]
                        2xl:max-w-[70rem] 2xl:w-[70%] 
                  "
            >
                  <h2 className="text-2xl lg:self-start font-extrabold text-center">
                        Read Other News and Updates
                  </h2>

                  <OtherNewsListContainer />
            </section>
      );
}

export default OtherNews;
