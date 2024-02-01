import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import HomeNewsListContainer from "../../container/homeNews/HomeNewsListContainer";
import HomeNewsReadAllButtonContainer from "../../container/homeNews/HomeNewsReadAllButtonContainer";

function HomeNews() {
      return (
            <div className="home-section--width  flex flex-col items-start justify-center gap-20 w-full h-full">
                  <HeaderAnimatedText
                        el="h1"
                        text="Latest News And Updates"
                        className="font-bold text-4xl uppercase self-start"
                  />

                  <span className="w-fit h-full flex flex-col items-center justify-center gap-10">
                        <HomeNewsListContainer />

                        <HomeNewsReadAllButtonContainer />
                  </span>
            </div>
      );
}

export default HomeNews;
