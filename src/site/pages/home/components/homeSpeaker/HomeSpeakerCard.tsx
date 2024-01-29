import { ISpeakerContentModel } from "@/admin/model/speaker/speakerContentModel";
import ServerImage from "@/shared/serverImage/ServerImage";
import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";

interface IHomeSpeakerCard {
      photo: ISpeakerContentModel["photo"];
      name: ISpeakerContentModel["name"];
      jobTitle: ISpeakerContentModel["jobTitle"];
      affiliation: ISpeakerContentModel["affiliation"];
}

function HomeSpeakerCard({ photo, name, jobTitle, affiliation }: IHomeSpeakerCard) {
      return (
            <ScaleRaiseUpAnimationWrapper>
                  <div className="relative w-full h-full">
                        <ServerImage
                              className=" w-72 h-72 min-w-[18rem] min-h-[18rem] object-cover  hover:grayscale
                                    xl:w-64 xl:h-64 xl:min-w-[256px] xl:min-h-[256px]
                                    2xl:w-72 2xl:h-72 2xl:min-w-[18rem] 2xl:min-h-[18rem] 
                              "
                              image={photo}
                              alt="speaker"
                        />
                        <article className="absolute bottom-0 leading-5 text-shadow text-white font-semibold text-base px-7 py-3">
                              <p>{name}</p>
                              <p>{jobTitle}</p>
                              <p>{affiliation}</p>
                        </article>
                  </div>
            </ScaleRaiseUpAnimationWrapper>
      );
}

export default HomeSpeakerCard;
