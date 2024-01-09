import { Base64 } from "js-base64";
// import fileIcon from "@/assets/image/file.png";
import { IAttachment } from "@/models/file/fileModel";
import { convertFileSizeToMb } from "@/utils/converter/convertFileSizeToMb";

interface IOldFileDetail {
      file: IAttachment;
      removeButtonHandler: () => void;
}

function OldFileDetail({ file, removeButtonHandler }: IOldFileDetail) {
      return (
            <div className="flex gap-3 justify-between px-4 py-1 bg-link/10 rounded-lg w-full items-center text-default">
                  <a className="flex gap-3 items-center" target="_blank" rel="noreferrer">
                        <img src={"fileIcon"} alt="uploaded-file" className="w-7 h-7" />
                        <article>
                              <p className=" truncate w-20 1sm:w-40 sm:w-full sm:truncate-none-custom">
                                    {Base64.decode(file.originalName)}
                              </p>
                              <p className="text-xs font-semibold">{convertFileSizeToMb(file.fileSize)} MB</p>
                        </article>
                  </a>

                  <button
                        type="button"
                        onClick={removeButtonHandler}
                        className=" rounded-full active:shadow-button"
                  >
                        <i className="bi bi-x-circle text-xl text-default"></i>
                  </button>
            </div>
      );
}

export default OldFileDetail;
