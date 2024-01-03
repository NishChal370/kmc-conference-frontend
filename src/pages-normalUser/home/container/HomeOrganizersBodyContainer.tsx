import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeOrganizersBody from "../components/HomeOrganizersBody";
import { ORGANIZERS_PATH } from "@/constants/routePath/path-normalUser/organizerPath";

function HomeOrganizersBodyContainer() {
      const navigate = useNavigate();

      const [selectedIndex, setSelectedIndex] = useState<number>(1);

      const changeIndexHandler = (index: number) => () => {
            setSelectedIndex(index);
      };

      const navigateToOrganizer = () => navigate(ORGANIZERS_PATH.organizer.full);

      return (
            <HomeOrganizersBody
                  selectedOrganizer={selectedIndex}
                  navigateHandler={navigateToOrganizer}
                  changeOrganizerHandler={changeIndexHandler}
            />
      );
}

export default HomeOrganizersBodyContainer;
