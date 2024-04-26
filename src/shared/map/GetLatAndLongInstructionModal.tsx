import AppIcon from "../icon/AppIcon";

function GetLatAndLongInstructionModal() {
      return (
            <div className="group relative flex w-fit h-fit cursor-pointer">
                  <AppIcon name="infoCircle" className=" hover:text-primary" />

                  <div
                        className="hidden group-hover:block w-fit min-w-[16rem]  absolute shadow-2xl 
                              drop-shadow-2xl bg-white  px-6 py-6 -right-10 bottom-6 text-sm
                              sm:min-w-[20rem] sm:left-11 
                              lg:min-w-[30rem] lg:-bottom-10
                        "
                  >
                        <span>
                              <strong>Latitude and Longitude Retrieval Instructions:</strong>
                              <br />
                              <br />
                              <strong>Step 1:</strong> In the search bar at the top, type in the address or
                              location you need the latitude and longitude for and press enter.
                              <br />
                              <strong>Step 2:</strong> Click on the specific area on the map where you need
                              the coordinates.
                              <br />
                              <strong>Step 3:</strong> A dialog box with the location&apos;s details pops up.
                              Click the upward-pointing arrow in this dialog to view more information.
                              <br />
                              <strong>Step 4:</strong> From the expanded section, locate and copy the latitude
                              and longitude numbers.
                              <br />
                              <strong>Step 5:</strong> Down to the &apos;Location (lat and long):&apos; field,
                              Paste the copied numbers into it.
                              <br />
                              <strong>Step 6:</strong> After pasting, click the &apos;Done&apos; button to
                              finalize the input.
                        </span>
                  </div>
            </div>
      );
}

export default GetLatAndLongInstructionModal;
