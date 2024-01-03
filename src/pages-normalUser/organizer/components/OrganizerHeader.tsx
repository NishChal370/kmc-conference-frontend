import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import "../style/organizerHeader.css";

function OrganizerHeader() {
      return (
            <PageHeader id="organizer-header" heightClasses="h-[24rem] sm:h-[20rem]">
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">
                        Kathmandu Metropolitan IT Conference 2024
                        <br />
                        <br />
                        Organizers
                  </h1>
            </PageHeader>
      );
}

export default OrganizerHeader;
