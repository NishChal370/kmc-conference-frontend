import HomeHeader from "./components/HomeHeader";
import HomeSpeakers from "./components/HomeSpeakers";
import HomeOrganizers from "./components/HomeOrganizers";
import HomeAboutConference from "./components/HomeAboutConference";
import HomeFeaturedExhibitors from "./components/HomeFeaturedExhibitors";
import HomeStatisticalCounter from "./components/HomeStatisticalCounter";

function Home() {
      return (
            <span className="flex flex-col gap-y-48 items-center w-full">
                  <span className="flex flex-col w-full h-full">
                        <HomeHeader />

                        <HomeAboutConference />

                        <HomeStatisticalCounter />
                  </span>

                  <HomeSpeakers />

                  <HomeOrganizers />

                  <HomeFeaturedExhibitors />
            </span>
      );
}

export default Home;
