import { ABOUT_CONFERENCE } from "../data/aboutConference";

function AboutUsArticle() {
      return (
            <article className="flex w-full h-full justify-center text-center  py-20 px-4  bg-primary text-white">
                  <span className="w-full h-full md:w-[60%] max-w-[70rem] text-xl  flex flex-col gap-2 leading-relaxed">
                        {ABOUT_CONFERENCE}
                        {/* <span>
                                    We are an innovative event organization based in Kathmandu, Nepal,
                                    orchestrating premier tech conferences across the region. Our flagship
                                    event, Kathmandu IT Summit, is a convergence point for tech enthusiasts,
                                    industry leaders, and visionaries.
                              </span>
                              <span>
                                    Renowned for hosting the most influential technology conference in the
                                    region, our events have been recognized by leading media outlets. Politico
                                    has described our conferences as &apos;a pivotal tech gathering,&apos; the
                                    Atlantic has remarked that our summit is &apos;a cradle for
                                    tomorrow&apos;s tech innovations,&apos; and the New York Times has noted
                                    our ability to bring together &apos;the tech elite and visionary
                                    leaders.&apos;
                              </span> */}
                  </span>
            </article>
      );
}

export default AboutUsArticle;
