import { IAttachment } from "@/models/file/fileModel";
import { Td } from "./index";
import { ImageSkeleton } from "../placeHolder";
import ServerImage from "@/shared/serverImage/ServerImage";
interface ITi {
      image: IAttachment | null;
}

function Ti({ image }: ITi) {
      return (
            <Td dataName="" className="w-full sm:!w-fit text-center">
                  {image ? (
                        <span className="w-full h-full flex sm:justify-center items-center">
                              <ServerImage className="w-8 h-8 object-cover" alt="speaker" image={image} />
                        </span>
                  ) : (
                        <ImageSkeleton />
                  )}
            </Td>
      );
}

export default Ti;
