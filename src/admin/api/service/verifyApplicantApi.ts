import { IVerifyApplicantSearch } from "@/admin/model/verifyApplicant/verifyApplicantModel";
import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";

export const verifyApplicantApi = {
      post: (searchDetail: IVerifyApplicantSearch) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Qr`,
                  data: searchDetail,
            };

            return AXIOS.request(options);
      },
}