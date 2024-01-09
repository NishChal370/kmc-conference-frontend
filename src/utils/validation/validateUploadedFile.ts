import { ALLOWED_FILE_TYPE, FILE_SIZE_LIMIT } from '@/constants/fileData/fileData';

// import { errorSwalMessage } from "../toastMessage";


interface IValidateUploadedFile {
      newFilesArray: File[];
      updatedFilesArray: File[];
}

export const validateUploadedFile = ({ newFilesArray, updatedFilesArray }: IValidateUploadedFile) => {

      if (newFilesArray.length + updatedFilesArray.length > 2) {

            return "Not allowed more than  files";
      }

      const haveAllowedFileType = Array.from(newFilesArray).some((file) => ALLOWED_FILE_TYPE.includes(file.type));

      if (!haveAllowedFileType) {

            return "File type not allowed";
      }

      const uploadedFileTotalSize = updatedFilesArray.reduce((totalSum: number, file: File) => {
            // converting bytes to MB
            const size = file.size / (1024 * 1024);

            return totalSum + size;
      }, 0);

      const newFileTotalSize = Array.from(newFilesArray).reduce((totalSum: number, file: File) => {
            // converting bytes to MB
            const size = file.size / (1024 * 1024);

            return totalSum + size;
      }, 0);

      const totalFileSize = uploadedFileTotalSize + newFileTotalSize;

      if (totalFileSize > FILE_SIZE_LIMIT) {


            return `Allowed file size upto ${FILE_SIZE_LIMIT}MB`;
      }

};

export default validateUploadedFile