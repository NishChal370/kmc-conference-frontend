import { ICON } from "@/constants/icon";
import AppIcon from "@/shared/icon/AppIcon";

function ScheduleScheduleCard() {
      return (
            <aside className="hidden lg:flex flex-col gap-6 min-w-[22rem] w-[22rem] max-w-[22rem]">
                  <div
                        className="flex flex-col gap-6 border border-default rounded-md w-full px-5 py-5 text-sm leading-relaxed
                              [&>span]:flex [&>span]:items-start [&>span]:gap-2 [&>span]:w-full
                              [&>span>svg]:text-gray-400
                        "
                  >
                        <span title="Date & Time">
                              <AppIcon name="clock" size={ICON.size + 10} />
                              <p className="text-base">Saturday, January 30, 2028 at 16:00 to 19:00</p>
                        </span>

                        <span title="Location">
                              <AppIcon name="location" size={ICON.size + 4} />
                              <article>
                                    <p className="font-semibold">Civil Mall, Third floor</p>
                                    <p>Kathmandu, Bagmati</p>
                              </article>
                        </span>

                        <span title="Parking">
                              <AppIcon name="parking" size={ICON.size + 4} />
                              <article>
                                    <p className="font-semibold">Civil Mall; underground</p>
                                    <p>Kmc, Tridevi Marg 29, Kathmandu 44600</p>
                              </article>
                        </span>

                        <span title="Accommodation">
                              <AppIcon name="accommodation" size={ICON.size + 4} />
                              <article>
                                    <p className="font-semibold">Fairfield by Marriott Hotel</p>
                                    <p>Kmc, Tridevi Marg 29, Kathmandu 44600</p>
                              </article>
                        </span>
                  </div>

                  <img className="w-full h-60" src="https://i.stack.imgur.com/HILmr.png" alt="map-img" />
            </aside>
      );
}

export default ScheduleScheduleCard;
