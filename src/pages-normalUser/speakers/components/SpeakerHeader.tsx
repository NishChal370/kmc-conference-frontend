import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import "../style/speakerHeader.css";

function SpeakerHeader() {
      return (
            <PageHeader id="speaker-detail-header" heightClasses="h-[24rem] sm:h-[20rem]">
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">
                        Kathmandu Metropolitan IT Conference 2024
                        <br />
                        <br />
                        Speakers
                  </h1>
            </PageHeader>
      );
}

export default SpeakerHeader;
