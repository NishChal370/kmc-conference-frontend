import { IAttachment } from "@/models/file/fileModel";
import ServerImage from "@/shared/serverImage/ServerImage";

interface ISpeakerProfileSection {
      image: IAttachment | null;
      name: string;
      designation: string;
}

function SpeakerProfileSection({ image, name, designation }: ISpeakerProfileSection) {
      return (
            <section
                  className="w-full px-4 py-6 flex flex-col items-center gap-6 border-r border-mute-1/75
                        lg:w-[40%] 
                  "
            >
                  <ServerImage
                        className="w-[8.5rem] h-[8.5rem] object-cover rounded-sm "
                        image={image}
                        alt="speaker-img"
                  />

                  <article className="flex flex-col justify-center items-center gap-1.5 text-default text-center h-fit max-w-[14rem]">
                        <h1 className="text-md font-semibold">{name}</h1>
                        <h5 className="text-mute text-md">{designation}</h5>
                  </article>
            </section>
      );
}

export default SpeakerProfileSection;
