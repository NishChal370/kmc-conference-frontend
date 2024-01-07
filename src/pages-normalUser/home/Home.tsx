import HomeHeader from "./components/HomeHeader";
import HomeSpeakers from "./components/HomeSpeakers";
import HomeOrganizers from "./components/HomeOrganizers";
import HomeAboutConference from "./components/HomeAboutConference";
import HomeFeaturedExhibitors from "./components/HomeFeaturedExhibitors";
import HomeStatisticalCounter from "./components/HomeStatisticalCounter";
import "./style/home.css";

import kmcLogo from "@/assets/image/KMCLogo.png";
import nepalGovLogo from "@/assets/image/nepalgovermentlogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

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
