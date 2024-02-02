import { useEffect, useMemo } from "react";
import AppIcon from "@/shared/icon/AppIcon";
import { ICON } from "@/constants/icon";
import filePlaceHolder from "@/assets/image/webp/file-placeholder.webp";
import convertBytesToMB from "@/utils/converter/convertBytesToMB";
import { ALLOWED_IMAGE_FILE, BROWSER_CAN_OPEN } from "@/constants/fileData/fileData";
import { IAttachment } from "@/models/file/fileModel";
import useFileApi from "@/hooks/file/useFileApi";
import getUniqueId from "@/utils/uniqueId/getUniqueId";
import noResultImg from "@/assets/image/webp/warning.webp";

interface IFilePlaceholderContainer {
      file: IAttachment;
}

function FilePlaceholderContainer({ file }: IFilePlaceholderContainer) {
      const { getFile } = useFileApi();

      const uniqueId = useMemo(() => getUniqueId(), [file?.fileName]);

      const fetchImage = () => {
            if (!file) return;

            getFile(file)
                  .then((fileUrl) => {
                        const fileElement = document.getElementById(
                              `image-${uniqueId}-${file?.fileName}`
                        ) as HTMLImageElement;

                        const downloadButton = document.getElementById(
                              `download-${uniqueId}-${file?.fileName}`
                        ) as HTMLAnchorElement;

                        const viewButton = document.getElementById(
                              `view-${uniqueId}-${file?.fileName}`
                        ) as HTMLAnchorElement;

                        if (fileElement && ALLOWED_IMAGE_FILE.includes(file.contentType)) {
                              fileElement.src = fileUrl;
                              fileElement.style.backgroundColor = "";
                        }

                        if (downloadButton) {
                              downloadButton.href = fileUrl;
                        }

                        if (viewButton) {
                              viewButton.href = fileUrl;
                        }
                  })
                  .catch(() => {
                        const fileErrorElement = document.getElementById(
                              `image-error-${uniqueId}-${file?.fileName}`
                        ) as HTMLElement;

                        const fileElement = document.getElementById(
                              `image-${uniqueId}-${file?.fileName}`
                        ) as HTMLImageElement;

                        if (fileErrorElement) {
                              fileErrorElement.style.display = "flex";
                        }

                        if (fileElement) {
                              fileElement.style.display = "none";
                        }
                  });
      };

      useEffect(() => {
            fetchImage();
      }, [file?.fileName]);

      return <FilePlaceholder file={file} uniqueId={uniqueId} />;
}

interface IFilePlaceholder {
      file: IAttachment;
      uniqueId: string;
}

function FilePlaceholder({ file, uniqueId }: IFilePlaceholder) {
      return (
            <div
                  title={file.contentType}
                  className="relative group flex flex-col justify-center items-center min-w-[8rem] max-w-[8rem] min-h-[8rem] max-h-[8rem] border border-mute-1 px-2"
            >
                  <img
                        id={`image-${uniqueId}-${file?.fileName}`}
                        loading="lazy"
                        src={filePlaceHolder}
                        alt="file-placeholder"
                        className="w-20 h-20 object-cover"
                  />

                  <span
                        id={`image-error-${uniqueId}-${file?.fileName}`}
                        className="hidden flex-col items-center justify-center mb-1"
                  >
                        <img
                              id={`image-error-${uniqueId}-${file?.fileName}`}
                              loading="lazy"
                              src={noResultImg}
                              alt="file-placeholder"
                              className="w-10 h-10 object-cover"
                        />
                        <p className="text-sm">Went Wrong</p>
                  </span>

                  <span className="min-h-[2rem] h-fit w-full flex flex-col items-center gap-0.5">
                        <p className=" line-clamp-1 w-full  text-sm">{atob(file.originalName)}</p>

                        <p className="text-mute text-xs flex flex-row line-clamp-1 w-full">
                              <span>
                                    {file.sizeBytes ? convertBytesToMB(file.sizeBytes) + " MB" : "0 MB"}{" "}
                              </span>
                        </p>
                  </span>

                  <div className="absolute hidden w-full h-full pt-6 items-center justify-center gap-2 group-hover:flex group-hover:bg-black/10 text-shadow">
                        <a
                              title="download"
                              id={`download-${uniqueId}-${file?.fileName}`}
                              download={atob(file.originalName)}
                        >
                              <AppIcon
                                    name="download"
                                    size={ICON.size + 3}
                                    className="text-shadow hover:text-primary"
                              />
                        </a>

                        {BROWSER_CAN_OPEN.includes(file.contentType) && (
                              <a
                                    title="view"
                                    id={`view-${uniqueId}-${file?.fileName}`}
                                    target="_blank"
                                    rel="noreferrer"
                              >
                                    <AppIcon
                                          name="view"
                                          size={ICON.size + 3}
                                          className="text-shadow hover:text-primary"
                                    />
                              </a>
                        )}
                  </div>
            </div>
      );
}

export default FilePlaceholderContainer;
