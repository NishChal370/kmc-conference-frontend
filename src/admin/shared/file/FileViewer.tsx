import NoFileHolder from "./NoFileHolder";
import FilePlaceholder from "./FilePlaceholder";
import { IAttachment } from "@/models/file/fileModel";

interface IFileViewerContainer {
      label?: string;
      files: IAttachment[] | null;
      containerClassName?: string;
}
function FileViewerContainer({ label, files, containerClassName }: IFileViewerContainer) {
      const viewButtonHandler = (fileName: string) => () => {
            //TODO: do it after api complete
            // getClientProductContractFile(fileName).then((fileUrl) => {
            //       window.open(`${fileUrl}`, "_blank");
            // });
      };

      const downloadButtonHandler = (fileName: string, originalName: string) => () => {
            //TODO: do it after api complete
            // getClientProductContractFile(fileName).then((fileUrl) => {
            //       const aTag = document.createElement("a");
            //       aTag.href = fileUrl;
            //       aTag.setAttribute("download", Base64.decode(originalName));
            //       document.body.appendChild(aTag);
            //       aTag.click();
            //       aTag.remove();
            // });
      };

      return (
            <FileViewer
                  label={label}
                  files={files}
                  containerClassName={containerClassName}
                  viewButtonHandler={viewButtonHandler}
                  downloadButtonHandler={downloadButtonHandler}
            />
      );
}

interface IFileViewer {
      label?: string;
      files: IAttachment[] | null;
      containerClassName?: string;
      viewButtonHandler: (fileName: string) => () => void;
      downloadButtonHandler: (fileName: string, originalName: string) => () => void;
}
function FileViewer({
      label,
      files,
      containerClassName,
      viewButtonHandler,
      downloadButtonHandler,
}: IFileViewer) {
      return (
            <div className={"flex flex-col gap-2 items-start justify-center w-full " + containerClassName}>
                  <h3 className="font-semibold py-2 text-start text-sm">{label || "Files"}</h3>

                  <section className="grid sm:grid-cols-4 gap-40 w-full">
                        {files?.map(
                              (
                                    { originalName, fileName, contentType, sizeBytes }: IAttachment,
                                    index: number
                              ) => (
                                    <FilePlaceholder
                                          key={index}
                                          name={atob(originalName)}
                                          contentType={contentType}
                                          sizeBytes={sizeBytes}
                                          downloadButtonHandler={downloadButtonHandler(
                                                fileName,
                                                originalName
                                          )}
                                          viewButtonHandler={viewButtonHandler(fileName)}
                                    />
                              )
                        )}

                        {!files && <NoFileHolder />}
                  </section>
            </div>
      );
}

export default FileViewerContainer;
