import FileDetail from "./FileDetail";
import OldFileDetail from "./OldFileDetail";
import { ALLOWED_FILE_TYPE } from "@/constants/fileData/fileData";
import { IAttachment } from "@/models/file/fileModel";

interface IFileDragDrop {
      label: string;
      errorMessage?: string;
      handleDrop: (event: any) => void;
      handleDragOver: (event: any) => void;
      inputChangeHandler: (event: any) => void;
      newFiles: File[] | undefined;
      oldFiles: IAttachment[] | undefined;
      removeNewFileHandler: (removingIndex: number) => () => void;
      removeOldFileHandler: (removingIndex: number) => () => void;
}

function FileDragDrop({
      label,
      newFiles,
      oldFiles,
      errorMessage,
      handleDragOver,
      handleDrop,
      inputChangeHandler,
      removeNewFileHandler,
      removeOldFileHandler,
}: IFileDragDrop) {
      return (
            <div className="flex flex-col gap-4 w-full mt-4">
                  <label className="tracking-wide font-semibold">{label}</label>
                  <section className="flex flex-col gap-4">
                        <div
                              className={`w-full flex flex-col justify-center items-center gap-2 p-4 border border-link border-dashed text-center
                                    active:cursor-grabbing
                                    ${errorMessage && "blink-class"}
                              `}
                              onDrop={handleDrop}
                              onDragOver={handleDragOver}
                        >
                              <p className="font-semibold">
                                    Drag & drop your file here or{" "}
                                    <button
                                          type="button"
                                          className="text-link underline cursor-pointer"
                                          onClick={() =>
                                                document.getElementById("file-choose-input")?.click()
                                          }
                                    >
                                          choose file
                                    </button>
                              </p>
                              <p className="text-mute text-sm">25 MB max files size</p>
                              <p
                                    title={ALLOWED_FILE_TYPE.toString()}
                                    className="peer text-mute text-xs underline cursor-pointer"
                              >
                                    Hover to know file types
                              </p>
                              {errorMessage && (
                                    <p className="text-error text-xs mt-6 font-semibold">{errorMessage}</p>
                              )}

                              <input
                                    type="file"
                                    id="file-choose-input"
                                    hidden
                                    multiple={false}
                                    onChange={inputChangeHandler}
                                    //SEE: https://stackoverflow.com/questions/59461119/angular-input-file-selecting-the-same-file
                                    // it help to allow upload same file twice.
                                    onClick={({ target }: any) => (target.value = null)}
                              />
                        </div>

                        <aside className="flex flex-col gap-2">
                              <p
                                    className={`font-semibold tracking-wide text-mute text-sm ${
                                          !newFiles?.length && !oldFiles?.length && "hidden"
                                    }`}
                              >
                                    Uploaded files
                              </p>
                              <span className="w-full flex flex-col min-w-full max-w-fit mt-2">
                                    <span className="flex gap-4 min-w-full max-w-[10rem] overflow-scroll pb-2">
                                          {newFiles &&
                                                newFiles.map((file: File, index: number) => (
                                                      <FileDetail
                                                            key={index}
                                                            file={file}
                                                            removeButtonHandler={removeNewFileHandler(index)}
                                                      />
                                                ))}

                                          {oldFiles &&
                                                oldFiles.map((file: IAttachment, index: number) => (
                                                      <OldFileDetail
                                                            key={index}
                                                            file={file}
                                                            removeButtonHandler={removeOldFileHandler(index)}
                                                      />
                                                ))}
                                    </span>
                              </span>
                        </aside>
                  </section>
            </div>
      );
}

export default FileDragDrop;
