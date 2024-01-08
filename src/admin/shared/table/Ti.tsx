import { Td } from "./index";

interface ITi {
      image: string;
}

function Ti({ image }: ITi) {
      return (
            <Td dataName="" className="w-full sm:!w-fit">
                  {image ? (
                        <span className="w-full h-full flex sm:justify-center items-center">
                              <img className="w-8 h-8 object-cover" src={image} alt="" />
                        </span>
                  ) : (
                        <p className={`${image && "text-white/0 sm:default"}`}>---</p>
                  )}
            </Td>
      );
}

export default Ti;
