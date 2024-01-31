import HomeHeader from "./components/HomeHeader";
import HomeAboutConference from "./components/HomeAboutConference";
import HomeStatisticalCounter from "./components/HomeStatisticalCounter";
import "./style/home.css";
import HomeSpeakersContainer from "./container/homeSpeaker/HomeSpeakersContainer";
import HomeKnowAboutConference from "./components/HomeKnowAboutConference";

function Home() {
      return (
            <span className="flex flex-col gap-y-52 items-center w-full">
                  <span className="flex flex-col w-full h-full">
                        <HomeHeader />

                        <HomeAboutConference />

                        <HomeStatisticalCounter />
                  </span>

                  <HomeSpeakersContainer />

                  <HomeKnowAboutConference />
            </span>
      );
}

export default Home;
