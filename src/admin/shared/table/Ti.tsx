import { IAttachment } from "@/models/file/fileModel";
import { Td } from "./index";
import ServerImage from "@/shared/serverImage/ServerImage";
interface ITi {
      image: IAttachment | null;
}

function Ti({ image }: ITi) {
      return (
            <Td dataName="" className="text-center">
                  <span className="w-fit h-full flex sm:justify-center items-center">
                        <ServerImage
                              className="w-7 h-7 object-contain rounded-sm"
                              alt="image"
                              image={image}
                        />
                  </span>
            </Td>
      );
}

export default Ti;
