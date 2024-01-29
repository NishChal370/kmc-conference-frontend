import HomeHeader from "./components/HomeHeader";
import HomeAboutConference from "./components/HomeAboutConference";
// import HomeFeaturedExhibitors from "./components/HomeFeaturedExhibitors";
import HomeStatisticalCounter from "./components/HomeStatisticalCounter";
import "./style/home.css";
import HomeSpeakersContainer from "./container/homeSpeaker/HomeSpeakersContainer";

function Home() {
      return (
            <span className="flex flex-col gap-y-48 items-center w-full">
                  <span className="flex flex-col w-full h-full">
                        <HomeHeader />

                        <HomeAboutConference />

                        <HomeStatisticalCounter />
                  </span>

                  <HomeSpeakersContainer />

                  {/* <HomeFeaturedExhibitors /> */}
            </span>
      );
}

export default Home;
