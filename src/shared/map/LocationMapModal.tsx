import { ReactElement, useState } from "react";
import { Modal } from "../modal";
import LoadingAnimation from "../loading/LoadingAnimation";
import GetLatAndLongInstructionModal from "./GetLatAndLongInstructionModal";

/**
 * @interface ILocationMapModalProps
 * - It describe props of LocationMapModal
 *
 * @param toShow - describe location modal to be shown or not
 * @param  location - location to be shown on map
 * @param closeMap - handles close location modal
 */
interface ILocationMapModalProps {
      toShow: boolean;
      plusCode?: string;
      needInput?: boolean;
      closeMap: () => void;
      submitHandler?: (plusCode?: string) => void;
}

/**
 *@component LocationMapModal
 * - It display required location google map in modal
 *
 * @prop {ILocationMapModalProps}ILocationMapModalProps
 *
 * @returns {ReactElement}
 */
function LocationMapModal({
      toShow,
      plusCode,
      closeMap,
      submitHandler,
      needInput = false,
}: ILocationMapModalProps): ReactElement {
      const [selectedPlusCode, setSelectedPlusCode] = useState<string | undefined>(plusCode);
      const showingLocation: string = plusCode || "Nepal";

      const inputChangeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedPlusCode(value);
      };

      const submitButtonHandler = (e: React.SyntheticEvent) => {
            e.preventDefault();

            if (!submitHandler) return;

            submitHandler(selectedPlusCode);
            closeMap();
      };

      return (
            <Modal
                  size="w-full lg:w-[70] xl:w-[70rem]"
                  toShow={toShow}
                  title="Location"
                  closeHandler={closeMap}
            >
                  <span className="flex flex-col gap-4">
                        <main className="h-[36rem] relative">
                              <div>
                                    <LoadingAnimation />
                              </div>

                              <iframe
                                    id="my-iframe"
                                    className={`absolute w-full h-full top-0 ${
                                          toShow ? "visible" : "invisible"
                                    }`}
                                    src={`https://plus.codes/${showingLocation}`}
                              ></iframe>
                        </main>

                        {needInput && (
                              <form className="flex flex-col gap-2">
                                    <span className="flex gap-4">
                                          <label htmlFor="plus-code" className="font-semibold">
                                                Location (lat and long):
                                          </label>
                                          <GetLatAndLongInstructionModal />
                                    </span>
                                    <input
                                          id="plus-code"
                                          value={selectedPlusCode}
                                          className="w-full px-3 py-[0.375rem] bg-white border border-mute-gray rounded-md 
                                                outline-none focus-within:ring-0
                                          "
                                          placeholder="Paste your location lat and long here"
                                          onChange={inputChangeHandler}
                                    />

                                    <p className="text-center text-blue-900">
                                          Paste your location lat and long above
                                    </p>

                                    <button
                                          type="submit"
                                          className="w-full bg-primary text-white py-2 rounded"
                                          onClick={submitButtonHandler}
                                    >
                                          Done
                                    </button>
                              </form>
                        )}
                  </span>
            </Modal>
      );
}

export default LocationMapModal;
