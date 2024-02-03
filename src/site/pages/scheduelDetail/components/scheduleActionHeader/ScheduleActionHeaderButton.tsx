interface IScheduleActionHeaderButton {
      allowedToAttend: boolean;
      attendButtonHandler: () => void;
}
function ScheduleActionHeaderButton({ allowedToAttend, attendButtonHandler }: IScheduleActionHeaderButton) {
      return (
            <aside className="flex gap-4 self-end">
                  {allowedToAttend && (
                        <button
                              type="button"
                              onClick={attendButtonHandler}
                              className=" bg-primary rounded-md text-white font-semibold tracking-wider w-full px-10 py-2"
                        >
                              Attend
                        </button>
                  )}
            </aside>
      );
}

export default ScheduleActionHeaderButton;
