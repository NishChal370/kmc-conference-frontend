/**
 * 
 * @param fileSize - file size in byte
 * @returns file size in MB
 */
export const convertFileSizeToMb = (fileSize: number) => {
      const sizeInByte = fileSize / (1024 * 1024);

      return parseFloat(sizeInByte.toFixed(3))
}