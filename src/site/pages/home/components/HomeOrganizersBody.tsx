import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";
import { ORGANIZERS_DETAIL } from "@/site/pages/organizer/seed/organizersDetails";
import RaiseUpAnimationWrapper from "@/template/animation/RaiseUpAnimationWrapper";
import AppIcon from "@/shared/icon/AppIcon";
import { ICON } from "@/constants/icon";

interface IHomeOrganizersBody {
      selectedOrganizer: number;
      navigateHandler: () => void;
      changeOrganizerHandler: (index: number) => () => void;
}

function HomeOrganizersBody({
      selectedOrganizer,
      navigateHandler,
      changeOrganizerHandler,
}: IHomeOrganizersBody) {
      return (
            <RaiseUpAnimationWrapper>
                  <span className=" flex  justify-center items-center gap-2 sm:gap-6 h-full w-full duration-75">
                        <section className="xl:flex flex-col gap-10 font-extrabold text-2xl items-start w-fit max-w-[24rem] h-full hidden">
                              <button
                                    type="button"
                                    onClick={changeOrganizerHandler(0)}
                                    className={`${
                                          selectedOrganizer === 0
                                                ? "text-primary border-primary"
                                                : "text-default/20  border-mute/0 "
                                    } border-b-2 w-full text-start`}
                              >
                                    {ORGANIZERS_DETAIL.at(0)?.name}
                              </button>
                              <button
                                    type="button"
                                    onClick={changeOrganizerHandler(1)}
                                    className={`${
                                          selectedOrganizer === 1
                                                ? "text-primary border-primary"
                                                : "text-default/20  border-mute/0 "
                                    } border-b-2 w-full text-start`}
                              >
                                    {ORGANIZERS_DETAIL.at(1)?.name}
                              </button>
                        </section>

                        <button
                              type="button"
                              className={`rotate-180 ${
                                    selectedOrganizer === 0 ? "invisible" : ""
                              }  xl:hidden`}
                              onClick={changeOrganizerHandler(0)}
                        >
                              <AppIcon name="arrow-right" size={ICON.size + 10} />
                        </button>

                        <span className="flex xl:flex-row flex-col justify-center gap-6 items-center">
                              <section
                                    className="w-[12rem] max-w-[12rem] h-[12rem] max-h-[12rem]
                                    sm:w-[16rem]  sm:max-w-[16rem]  sm:h-[16rem]  sm:max-h-[16rem]
                                      xl:w-[36rem] xl:max-w-[36rem] xl:h-[36rem] xl:max-h-[36rem]
                              "
                              >
                                    <img
                                          className="w-full h-full object-contain  drop-shadow-2xl"
                                          src={ORGANIZERS_DETAIL.at(selectedOrganizer)?.image}
                                          alt="organizer"
                                    />
                              </section>

                              <article className="w-full xl:max-w-[36%] flex flex-col justify-center items-start gap-6">
                                    <p className="text-4xl font-semibold text-primary">
                                          {ORGANIZERS_DETAIL.at(selectedOrganizer)?.name}
                                    </p>
                                    <p className="line-clamp-6 xl:line-clamp-[12] text-justify">
                                          {ORGANIZERS_DETAIL.at(selectedOrganizer)?.description}
                                    </p>

                                    <span className="border border-primary text-primary px-4 py-2 font-bold flex items-center gap-0.5">
                                          <ViewMoreButton clickHandler={navigateHandler} />
                                    </span>
                              </article>
                        </span>

                        <button
                              type="button"
                              className={`${selectedOrganizer === 1 ? "invisible" : ""} xl:hidden`}
                              onClick={changeOrganizerHandler(1)}
                        >
                              <AppIcon name="arrow-right" size={ICON.size + 10} />
                        </button>
                  </span>
            </RaiseUpAnimationWrapper>
      );
}

export default HomeOrganizersBody;
