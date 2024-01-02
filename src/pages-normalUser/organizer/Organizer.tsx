import OrganizerHeader from "./components/OrganizerHeader";
import OrganizersDetail from "./components/OrganizersDetail";

function Organizer() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-10">
                  <OrganizerHeader />

                  <OrganizersDetail />
            </span>
      );
}

export default Organizer;
