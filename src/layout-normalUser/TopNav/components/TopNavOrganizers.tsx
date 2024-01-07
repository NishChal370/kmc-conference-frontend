import kmcLogo from "@/assets/image/KMCLogo.png";
import nepalGovLogo from "@/assets/image/nepalgovermentlogo.png";

function TopNavOrganizers() {
      return (
            <div className="hidden sm:flex w-full justify-start items-center gap-3">
                  <img
                        title="Kathmandu Metropolitan City"
                        src={kmcLogo}
                        alt="Kathmandu Metropolitan City"
                        className="w-[3.2rem] h-[3.2rem] object-contain"
                  />
                  <img
                        title="Nepal Government"
                        src={nepalGovLogo}
                        alt="Nepal Government"
                        className="w-[3.5rem] h-[3.5rem] object-contain"
                  />
                  <img
                        title="Nepal Map"
                        src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif"
                        alt="Nepal Map"
                        className="!w-[2rem] object-contain"
                  />
            </div>
      );
}

export default TopNavOrganizers;
