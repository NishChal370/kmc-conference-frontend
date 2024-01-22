import { IAttachment } from "@/models/file/fileModel";
import convertBytesToMB from "@/utils/converter/convertBytesToMB";
import AppIcon from "../icon/AppIcon";
import filePlaceHolder from "@/assets/image/webp/file-placeholder.webp";

interface IOldFileDetail {
      file: IAttachment;
      removeButtonHandler: () => void;
}

function OldFileDetail({ file, removeButtonHandler }: IOldFileDetail) {
      return (
            <div className="relative flex gap-3 justify-between px-0 py-0 bg-mute/0 rounded-lg w-32 h-fit items-center text-default">
                  <a
                        className="flex flex-col gap-3 items-center w-full h-full"
                        target="_blank"
                        rel="noreferrer"
                  >
                        <img
                              loading="lazy"
                              src={filePlaceHolder}
                              alt="uploaded-file"
                              className=" w-32 h-16 object-cover"
                        />
                        <article className="flex w-full flex-col">
                              <p className="w-full break-words line-clamp-2">{atob(file.originalName)}</p>
                              <p className="text-xs font-semibold">{convertBytesToMB(file.sizeBytes)} MB</p>
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

export default OldFileDetail;
