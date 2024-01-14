import { IAttachment } from "@/models/file/fileModel";
import { Td } from "./index";
import { ImageSkeleton } from "../placeHolder";
interface ITi {
      image?: IAttachment;
}

// TODO: DO it after fetch api is ready.
function Ti({ image }: ITi) {
      return (
            <Td dataName="" className="w-full sm:!w-fit text-center">
                  {image ? (
                        <span className="w-full h-full flex sm:justify-center items-center">
                              {/* <img className="w-8 h-8 object-cover" src={image} alt="" /> */}
                        </span>
                  ) : (
                        <ImageSkeleton />
                  )}
            </Td>
      );
}

export default Ti;
