import AppIcon from "@/shared/icon/AppIcon";

function SpeakerFilter() {
      return (
            <aside className="speaker-detail--width flex justify-end items-center">
                  <span
                        className="relative flex justify-center items-center w-full max-w-[20rem] 
                              sm:min-w-[20rem] 
                        "
                  >
                        <input
                              type="text"
                              className="peer border border-default rounded-md py-1 px-2.5  w-full"
                              placeholder="Search speaker"
                        />

                        <button
                              type="button"
                              className="w-fit h-fit absolute right-1.5 text-red peer-placeholder-shown:hidden"
                        >
                              <AppIcon name="clear" />
                        </button>
                  </span>
            </aside>
      );
}

export default SpeakerFilter;
