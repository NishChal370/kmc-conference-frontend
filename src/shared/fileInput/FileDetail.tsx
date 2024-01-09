// import fileIcon from "@/assets/image/file.png";
import { convertFileSizeToMb } from "@/utils/converter/convertFileSizeToMb";
import AppIcon from "../icon/AppIcon";

interface IFileDetail {
      removeButtonHandler: () => void;
      file: File;
}

function FileDetail({ file, removeButtonHandler }: IFileDetail) {
      return (
            <div className=" relative flex flex-col justify-between items-center w-32 h-32 px-4 py-2 rounded-lg bg-black/5 text-default">
                  <button
                        type="button"
                        title="Remove"
                        onClick={removeButtonHandler}
                        className="absolute right-2 w-fit h-fit text-black active:text-primary"
                  >
                        <AppIcon name="clear" />
                  </button>
                  <a
                        className="flex flex-col gap-3 justify-center items-center h-full w-full"
                        href={URL.createObjectURL(file)}
                        target="_blank"
                        rel="noreferrer"
                  >
                        <img src={"fileIcon"} alt="uploaded-file" className="w-10 h-10" />

                        <article className="flex flex-col justify-center items-center">
                              <span className="flex text-xs gap-0 w-[80%]" title={file.name}>
                                    <p className="line-clamp-1 w-[6.5rem] max-w-[6.5rem]">{file.name}</p>
                                    <p> {file.name.slice(-5)}</p>
                              </span>

                              <p className="text-xs font-semibold">{convertFileSizeToMb(file.size)} MB</p>
                        </article>
                  </a>
            </div>
      );
}

export default FileDetail;
