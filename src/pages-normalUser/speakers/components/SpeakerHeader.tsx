import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import "../style/speakerHeader.css";

function SpeakerHeader() {
      return (
            <PageHeader
                  id="speaker-detail-header"
                  heightClasses="h-[28rem] pt-10 
                        sm:h-[22rem] sm:pt-20 
                        md:h-[20rem] md:pt-10
                        xl:pt-0
                  "
            >
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">
                        Introducing the Esteemed Speakers of Kathmandu Metropolitan IT Conference 2080
                  </h1>
            </PageHeader>
      );
}

export default SpeakerHeader;
