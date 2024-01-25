import NoFileHolder from "./NoFileHolder";
import FilePlaceholder from "./FilePlaceholder";
import { IAttachment } from "@/models/file/fileModel";

interface IFileViewer {
      label?: string;
      files: IAttachment[] | null;
      containerClassName?: string;
}
function FileViewer({ label, files, containerClassName }: IFileViewer) {
      return (
            <div className={"flex flex-col gap-2 items-start justify-center w-full " + containerClassName}>
                  <h3 className="font-semibold py-2 text-start text-sm">{label || "Files"}</h3>

                  <section className="grid sm:grid-cols-4 gap-40 w-full">
                        {files?.map((file: IAttachment, index: number) => (
                              <FilePlaceholder key={index} file={file} />
                        ))}

                        {!files && <NoFileHolder />}
                  </section>
            </div>
      );
}

export default FileViewer;
