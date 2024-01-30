import ServerImage from "@/shared/serverImage/ServerImage";
import website from "@/assets/image/webp/web.webp";
import twitter from "@/assets/image/webp/twitter.webp";
import linkedInIcon from "@/assets/image/webp/linkedin.webp";
import { IAttachment } from "@/models/file/fileModel";
import getValidURL from "@/utils/validation/getValidURL";

interface ISpeakerCard {
      name: string;
      image: IAttachment | null;
      jobTitle: string;
      affiliation: string;
      linkedInProfile?: string;
      twitterHandler?: string;
      isShowingFullDetail: boolean;
      professionalWebsite?: string;
      clickHandler: () => void;
}

function SpeakerCard({
      image,
      name,
      affiliation,
      jobTitle,
      clickHandler,
      twitterHandler,
      linkedInProfile,
      isShowingFullDetail,
      professionalWebsite,
}: ISpeakerCard) {
      return (
            <div
                  className="w-full h-full flex flex-col gap-2.5 text-center justify-center items-center cursor-pointer
                        [&>article>h4]:font-bold
                  "
                  onClick={clickHandler}
            >
                  <figure className="relative  flex w-fit h-fit cursor-pointer">
                        <ServerImage
                              className={`w-72 h-72 min-w-[18rem] min-h-[18rem] object-cover  hover:grayscale
                                    xl:w-64 xl:h-64 xl:min-w-[256px] xl:min-h-[256px]
                                    2xl:w-72 2xl:h-72 2xl:min-w-[18rem] 2xl:min-h-[18rem] 
                                    ${isShowingFullDetail ? "grayscale" : ""}
                              `}
                              image={image}
                        />

                        <section className="absolute bottom-0 w-full flex justify-start items-center gap-2 text-shadow text-white pb-1 pl-2 ">
                              {linkedInProfile && (
                                    <a
                                          href={getValidURL(linkedInProfile)}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center justify-center w-fit h-fit bg-white rounded-md shadow-2xl"
                                    >
                                          <img
                                                loading="lazy"
                                                src={linkedInIcon}
                                                alt="website"
                                                className="w-8 h-8 drop-shadow-2xl"
                                          />
                                    </a>
                              )}

                              {twitterHandler && (
                                    <a
                                          href={getValidURL(twitterHandler)}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center justify-center h-fit w-fit  bg-white rounded-lg"
                                    >
                                          <img
                                                loading="lazy"
                                                src={twitter}
                                                alt="twitter"
                                                className="w-8 h-8 drop-shadow-2xl"
                                          />
                                    </a>
                              )}

                              {professionalWebsite && (
                                    <a
                                          href={getValidURL(professionalWebsite)}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center justify-center h-fit w-fit  bg-white rounded-lg"
                                    >
                                          <img
                                                loading="lazy"
                                                src={website}
                                                alt="website"
                                                className="w-8 h-8 drop-shadow-2xl"
                                          />
                                    </a>
                              )}
                        </section>
                  </figure>
                  <article className="flex flex-col gap-0.5  w-full h-full [&>p]:leading-4 text-base">
                        <h4>{name}</h4>
                        <p>{jobTitle}</p>
                        <p>{affiliation}</p>
                  </article>
            </div>
      );
}

export default SpeakerCard;
