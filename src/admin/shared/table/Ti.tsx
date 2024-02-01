import { IAttachment } from "@/models/file/fileModel";
import { Td } from "./index";
import ServerImage from "@/shared/serverImage/ServerImage";
import { ServerImageType } from "@/enum/commonEnum";
interface ITi {
      image: IAttachment | null;
      imageType?: ServerImageType;
}

function Ti({ image, imageType }: ITi) {
      return (
            <Td dataName="" className="text-center">
                  <span className="w-fit h-full flex sm:justify-center items-center">
                        <ServerImage
                              imageType={imageType}
                              className="w-7 h-7 object-contain rounded-sm"
                              alt="image"
                              image={image}
                        />
                  </span>
            </Td>
      );
}

export default Ti;
