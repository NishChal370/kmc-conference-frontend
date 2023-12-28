import HomeHeader from "./components/HomeHeader";
import HomeSpeakers from "./components/HomeSpeakers";
import HomeOrganizers from "./components/HomeOrganizers";
import AboutConference from "./components/AboutConference";
import HomeFeaturedExhibitors from "./components/HomeFeaturedExhibitors";

function Home() {
      return (
            <>
                  <span className="flex flex-col w-full h-full">
                        <HomeHeader />

                        <AboutConference />
                  </span>

                  <HomeSpeakers />

                  <span className="flex flex-col gap-20 w-full h-full">
                        <HomeOrganizers />

                        <HomeFeaturedExhibitors />
                  </span>
            </>
      );
}

export default Home;
