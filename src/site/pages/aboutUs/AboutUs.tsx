import AboutUsHeader from "./components/AboutUsHeader";
import AboutUsArticle from "./components/AboutUsArticle";
import AboutUsNavigationMenu from "./components/AboutUsNavigationMenu";
import AboutUsConferenceStatistics from "./components/AboutUsConferenceStatistics";
import "./style/aboutUs.css";

function AboutUs() {
      return (
            <span className="flex flex-col w-full h-fit gap-0 !mb-0">
                  <AboutUsHeader />

                  <span className="flex flex-col w-full justify-center items-center gap-y-52">
                        <AboutUsArticle />

                        <AboutUsConferenceStatistics />

                        <AboutUsNavigationMenu />
                  </span>
            </span>
      );
}

export default AboutUs;
