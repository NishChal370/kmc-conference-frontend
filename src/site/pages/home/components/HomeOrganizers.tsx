import HomeOrganizersBodyContainer from "../container/HomeOrganizersBodyContainer";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";

function HomeOrganizers() {
      return (
            <div className="bg-mute/0 w-full py-24 flex justify-center items-center">
                  <span className="home-section--width flex flex-col justify-center items-center gap-20 h-full">
                        <span className="flex w-full flex-col gap-4">
                              <HeaderAnimatedText
                                    el="h1"
                                    text="The Driving Force"
                                    className="text-xl font-semibold text-center"
                              />

                              <HeaderAnimatedText
                                    el="h2"
                                    text="2080 Conference organizers"
                                    className="text-3xl font-extrabold text-center"
                              />
                        </span>

                        <HomeOrganizersBodyContainer />
                  </span>
            </div>
      );
}

export default HomeOrganizers;
