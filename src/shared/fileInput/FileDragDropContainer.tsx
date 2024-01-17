import { useState } from "react";
import FileDragDrop from "./FileDragDrop";
import { IFilUpdateDetail } from "@/models/file/fileModel";
import validateUploadedFile from "@/utils/validation/validateUploadedFile";

interface IFileDragDropContainer {
      label: string;
      value: IFilUpdateDetail;
      onChangeHandler: (value: IFilUpdateDetail) => void;
}

function FileDragDropContainer({ label, value, onChangeHandler }: IFileDragDropContainer) {
      const [errorMessage, setErrorMessage] = useState<string>();

      const handleDrop = (event: any) => {
            event.preventDefault();

            addNewFiles(event.dataTransfer.files);
      };

      const handleDragOver = (event: any) => {
            event.preventDefault();
      };

      const inputChangeHandler = (event: any) => {
            event.preventDefault();

            addNewFiles(event.target.files);
      };

      const addNewFiles = (newFiles: File[]) => {
            const error = validateUploadedFile({
                  newFilesArray: newFiles,
                  updatedFilesArray: value.newFiles || [],
            });

            setAndRemoveErrorMessage(error);

            if (!error) {
                  // old file will be remove while adding new file.
                  onChangeHandler({
                        oldFiles: [],
                        newFiles: [...newFiles],
                  });
            }
      };

      const removeNewFileHandler = (removingIndex: number) => () => {
            setErrorMessage(undefined);

            onChangeHandler({
                  oldFiles: [],
                  newFiles: (value.newFiles || []).filter((_, index) => index !== removingIndex),
            });
      };

      const removeOldFileHandler = (removingIndex: number) => () => {
            setErrorMessage(undefined);

            onChangeHandler({
                  oldFiles: (value.oldFiles || []).filter((_, index) => index !== removingIndex),
                  newFiles: [],
            });
      };

      const setAndRemoveErrorMessage = (error?: string) => {
            let timeOut = undefined;
            setErrorMessage(error);

            clearTimeout(timeOut);

            timeOut = setTimeout(() => {
                  setErrorMessage(undefined);
            }, 2000);
      };

      return (
            <FileDragDrop
                  label={label}
                  errorMessage={errorMessage}
                  newFiles={value.newFiles}
                  oldFiles={value.oldFiles}
                  handleDrop={handleDrop}
                  handleDragOver={handleDragOver}
                  inputChangeHandler={inputChangeHandler}
                  removeNewFileHandler={removeNewFileHandler}
                  removeOldFileHandler={removeOldFileHandler}
            />
      );
}

export default FileDragDropContainer;
