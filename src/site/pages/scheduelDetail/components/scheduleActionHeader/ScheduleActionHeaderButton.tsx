interface IScheduleActionHeaderButton {
      attendButtonHandler: () => void;
}
function ScheduleActionHeaderButton({ attendButtonHandler }: IScheduleActionHeaderButton) {
      return (
            <aside className="flex gap-4 self-end">
                  <button
                        type="button"
                        className="border border-primary rounded-md text-primary font-semibold tracking-wider w-full px-10 py-2"
                  >
                        Share
                  </button>

                  <button
                        type="button"
                        onClick={attendButtonHandler}
                        className=" bg-primary rounded-md text-white font-semibold tracking-wider w-full px-10 py-2"
                  >
                        Attend
                  </button>
            </aside>
      );
}

export default ScheduleActionHeaderButton;
