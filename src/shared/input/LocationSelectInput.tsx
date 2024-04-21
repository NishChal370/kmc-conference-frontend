import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import LocationMapModal from "../map/LocationMapModal";
import AppIcon from "../icon/AppIcon";

interface ILocationSelectInput {
      label?: string;
      errorMessage?: string;
      locationPlusCode?: string;
      submitSelectedLocation: (plusCode?: string) => void;
}

function LocationSelectInput({
      label = "Location",
      errorMessage,
      submitSelectedLocation,
      locationPlusCode,
}: ILocationSelectInput) {
      const [locationModalState, openLocationModal, closeLocationModal] = useExtraModal();

      return (
            <>
                  <div className="tracking-wide flex flex-col gap-0.5 items-start w-full text-sm col-span-2 ">
                        <section className="flex w-full justify-between gap-1 pl-1">
                              <label
                                    htmlFor={`input-${label}`}
                                    className={`leading-none p-0 text-sm font-semibold tracking-wide
                                          ${errorMessage ? "text-error peer-focus:text-error" : "text-black"} 
                                    `}
                              >
                                    {label} (lat and long)&nbsp;
                                    {false && "*"}
                              </label>
                              {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
                        </section>

                        <button
                              type="button"
                              className={`border border-default rounded-md w-full px-2 py-1.5 text-start flex justify-between items-center
                                    ${!locationPlusCode && "text-mute"}
                              `}
                              onClick={openLocationModal}
                        >
                              <span className="block truncate">
                                    {locationPlusCode ? locationPlusCode : label + " (lat and long)"}
                              </span>
                              <span className="pointer-events-none flex items-center">
                                    <AppIcon name="select" />
                              </span>
                        </button>
                  </div>

                  {locationModalState?.isOpen && (
                        <LocationMapModal
                              needInput
                              toShow={locationModalState?.isOpen}
                              plusCode={locationPlusCode}
                              closeMap={closeLocationModal}
                              submitHandler={submitSelectedLocation}
                        />
                  )}
            </>
      );
}

export default LocationSelectInput;
