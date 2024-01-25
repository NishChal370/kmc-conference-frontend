import { IAttachment } from "@/models/file/fileModel";
import ServerImage from "@/shared/serverImage/ServerImage";

interface IScheduleSpeakerCard {
      img: IAttachment | null;
      speakerName: string;
      jobTitle: string;
      affiliation: string;
      openDetailModalHandler: () => void;
}

function ScheduleSpeakerCard({
      openDetailModalHandler,
      img,
      speakerName,
      jobTitle,
      affiliation,
}: IScheduleSpeakerCard) {
      return (
            <button
                  type="button"
                  onClick={openDetailModalHandler}
                  className="w-36 h-44 border border-default flex flex-col items-center justify-center text-center text-xs gap-6 py-4 rounded-md"
            >
                  <ServerImage
                        image={img}
                        alt="speaker-img"
                        className=" w-20 h-20 rounded-full hover:grayscale"
                  />

                  <article>
                        <p className="font-semibold leading-relaxed">{speakerName}</p>
                        <p title={jobTitle + "; " + affiliation} className="line-clamp-1">
                              {jobTitle}
                        </p>
                  </article>
            </button>
      );
}

export default ScheduleSpeakerCard;
