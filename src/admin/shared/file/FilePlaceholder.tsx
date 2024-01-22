import AppIcon from "@/shared/icon/AppIcon";
import { ICON } from "@/constants/icon";
import filePlaceHolder from "@/assets/image/webp/file-placeholder.webp";
import convertBytesToMB from "@/utils/converter/convertBytesToMB";
import { BROWSER_CAN_OPEN } from "@/constants/fileData/fileData";

interface IFilePlaceholder {
      name: string;
      contentType: string;
      sizeBytes: number;
      downloadButtonHandler: () => void;
      viewButtonHandler: () => void;
}

function FilePlaceholder({
      name,
      contentType,
      downloadButtonHandler,
      viewButtonHandler,
      sizeBytes,
}: IFilePlaceholder) {
      return (
            <div
                  title={contentType}
                  className="relative group flex flex-col justify-center items-center min-w-[8rem] max-w-[8rem] min-h-[8rem] max-h-[8rem] border border-mute-1 px-2"
            >
                  <img
                        loading="lazy"
                        src={filePlaceHolder}
                        alt="file-placeholder"
                        className="w-20 h-20 object-cover"
                  />

                  <span className="min-h-[2rem] h-fit w-full flex flex-col items-center gap-0.5">
                        <p className=" line-clamp-1 w-full  text-sm">{name}</p>

                        <p className="text-mute text-xs flex flex-row line-clamp-1 w-full">
                              <span>{sizeBytes ? convertBytesToMB(sizeBytes) + " MB" : "0 MB"} </span>
                        </p>
                  </span>

                  <div className="absolute hidden w-full h-full pt-6 items-center justify-center gap-2 group-hover:flex group-hover:bg-black/10 text-shadow">
                        <button type="button" title="download" onClick={downloadButtonHandler}>
                              <AppIcon
                                    name="download"
                                    size={ICON.size + 3}
                                    className="text-shadow hover:text-primary"
                              />
                        </button>

                        {BROWSER_CAN_OPEN.includes(contentType) && (
                              <button type="button" title="view" onClick={viewButtonHandler}>
                                    <AppIcon
                                          name="view"
                                          size={ICON.size + 5}
                                          className=" text-shadow hover:text-primary"
                                    />
                              </button>
                        )}
                  </div>
            </div>
      );
}

export default FilePlaceholder;
