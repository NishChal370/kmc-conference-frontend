import { convertFileSizeToMb } from "@/utils/converter/convertFileSizeToMb";
import AppIcon from "../icon/AppIcon";
import { ALLOWED_IMAGE_FILE } from "@/constants/fileData/fileData";
import filePlaceHolder from "@/assets/image/webp/file-placeholder.webp";

interface IFileDetail {
      removeButtonHandler: () => void;
      file: File;
}

function FileDetail({ file, removeButtonHandler }: IFileDetail) {
      return (
            <div className="relative flex gap-3 justify-between px-0 py-0 bg-mute/0 rounded-lg w-32 h-fit items-center text-default">
                  <a
                        className="flex flex-col gap-3 items-center w-full h-full"
                        target="_blank"
                        rel="noreferrer"
                        href={URL.createObjectURL(file)}
                  >
                        <img
                              loading="lazy"
                              src={
                                    ALLOWED_IMAGE_FILE.includes(file.type)
                                          ? URL.createObjectURL(file)
                                          : filePlaceHolder
                              }
                              alt="uploaded-file"
                              className="w-32 h-16 object-contain"
                        />
                        <article className="flex w-full flex-col">
                              <span className="flex gap-0 w-[100%]" title={file.name}>
                                    <p className="line-clamp-1 w-[6.5rem] max-w-[6.5rem]">{file.name}</p>
                                    <p> {file.name.length > 10 && file.name.slice(-5)}</p>
                              </span>
                              <p className="text-xs font-semibold">{convertFileSizeToMb(file.size)} MB</p>
                        </article>
                  </a>

                  <button
                        type="button"
                        onClick={removeButtonHandler}
                        className=" absolute top-0 right-0 text-primary text-shadow bg-white/50 active:shadow-button"
                  >
                        <AppIcon name="clear" />
                  </button>
            </div>
      );
}

export default FileDetail;
