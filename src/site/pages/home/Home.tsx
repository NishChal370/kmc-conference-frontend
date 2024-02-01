import HomeHeader from "./components/HomeHeader";
import HomeNews from "./components/homeNews/HomeNews";
import HomeAboutConference from "./components/HomeAboutConference";
import HomeStatisticalCounter from "./components/HomeStatisticalCounter";
import HomeKnowAboutConference from "./components/HomeKnowAboutConference";
import HomeSpeakersContainer from "./container/homeSpeaker/HomeSpeakersContainer";
import "./style/home.css";

function Home() {
      return (
            <span className="flex flex-col gap-y-60 items-center w-full">
                  <span className="flex flex-col w-full h-full">
                        <HomeHeader />

                        <HomeAboutConference />

                        <HomeStatisticalCounter />
                  </span>

                  <HomeSpeakersContainer />

                  <HomeKnowAboutConference />

                  <HomeNews />
            </span>
      );
}

export default Home;
