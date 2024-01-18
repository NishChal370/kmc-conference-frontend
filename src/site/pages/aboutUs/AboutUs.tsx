import AboutUsHeader from "./components/AboutUsHeader";
import AboutUsArticle from "./components/AboutUsArticle";
import AboutUsObjective from "./components/AboutUsObjective";
import AboutUsNavigationMenu from "./components/AboutUsNavigationMenu";
import AboutUsConferenceStatistics from "./components/AboutUsConferenceStatistics";
import AboutUsHighlights from "./components/AboutUsHighlights";
import "./style/aboutUs.css";
import AboutUsExpectedOutcomes from "./components/AboutUsExpectedOutcomes";

function AboutUs() {
      return (
            <span className="flex flex-col w-full h-fit gap-0 !mb-0">
                  <AboutUsHeader />

                  <span className="flex flex-col w-full justify-center items-center gap-y-52">
                        <AboutUsArticle />

                        <AboutUsConferenceStatistics />

                        <AboutUsObjective />

                        <AboutUsHighlights />

                        <AboutUsExpectedOutcomes />

                        <AboutUsNavigationMenu />
                  </span>
            </span>
      );
}

export default AboutUs;
