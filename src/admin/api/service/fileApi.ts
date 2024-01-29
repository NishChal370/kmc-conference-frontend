import { AxiosRequestConfig } from "axios";
import AXIOS, { BASE_URL } from "@/api/constant";
import { IAttachment } from "@/models/file/fileModel";

export const fileApi = {
      getFile: (file: IAttachment) => {

            const options: AxiosRequestConfig = {
                  method: "GET",
                  baseURL: `${BASE_URL}/assets`,
                  url: `/${file.basePath}/${file.fileName}`,
                  responseType: "blob"// to get image/pdf as response, responseType should be specified as blob
            };

            return AXIOS.request(options);
      },
}