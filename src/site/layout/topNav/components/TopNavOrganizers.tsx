import kmcLogo from "@/assets/image/organizers/KMCLogo.webp";
import nepalGovLogo from "@/assets/image/organizers/nepalgovermentlogo.webp";
import { APP_TITLE } from "@/constants/appDetail";

function TopNavOrganizers() {
      return (
            <div className="hidden sm:flex w-full justify-start items-center gap-3">
                  <img
                        loading="lazy"
                        title={APP_TITLE}
                        src={kmcLogo}
                        alt={APP_TITLE}
                        className="w-[3.2rem] h-[3.2rem] object-contain"
                  />
                  <img
                        loading="lazy"
                        title="Nepal Government"
                        src={nepalGovLogo}
                        alt="Nepal Government"
                        className="w-[3.5rem] h-[3.5rem] object-contain"
                  />
                  <img
                        loading="lazy"
                        title="Nepal Map"
                        src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif"
                        alt="Nepal Map"
                        className="!w-[2rem] object-contain"
                  />
            </div>
      );
}

export default TopNavOrganizers;
