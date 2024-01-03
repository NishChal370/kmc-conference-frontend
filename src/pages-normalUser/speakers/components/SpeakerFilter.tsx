import AppIcon from "@/shared/icon/AppIcon";

function SpeakerFilter() {
      return (
            <aside className="self-end">
                  <span className="relative flex justify-center items-center">
                        <input
                              type="text"
                              className="peer border border-default rounded-md py-1 px-2.5  w-full sm:min-w-[16rem]"
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
