import { ALLOWED_IMAGE_FILE, FILE_SIZE_LIMIT } from "@/constants/fileData/fileData";
import { convertFileSizeToMb } from "../converter/convertFileSizeToMb";

export const validateImageFile = (value: File | null) => {
      if (!value) {
            return 'Image is required';
      }

      const file = value;

      if (!ALLOWED_IMAGE_FILE.includes(file.type)) {
            return 'Invalid image format. Please use JPEG, PNG, WEP or SVG.';
      }
      // converting bytes to MB
      const fileSize = convertFileSizeToMb(file.size);

      if (fileSize > FILE_SIZE_LIMIT) {
            return 'Image size exceeds the maximum allowed size (25 MB).';
      }
};