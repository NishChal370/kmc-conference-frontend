import PageHeader from "@/site/shared/pageHeader/PageHeader";
import "../style/organizerHeader.css";

function OrganizerHeader() {
      return (
            <PageHeader
                  id="organizer-header"
                  heightClasses="h-[28rem] pt-10 
                        sm:h-[22rem] sm:pt-20 
                        md:h-[20rem] md:pt-10
                        lg:h-[26rem] lg:pt-0
                  "
            >
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">
                        The Driving Force: Organizers of Kathmandu IT Conference 2080
                  </h1>
            </PageHeader>
      );
}

export default OrganizerHeader;
