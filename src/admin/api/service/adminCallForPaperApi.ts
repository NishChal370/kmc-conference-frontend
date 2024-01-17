import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";
import { IAdminCallForPaperDeleteRequest, IAdminCallForPaperPutRequest, IAdminCallForPaperStatusChangeReq, ICallForPaperBasicSearch, ICallForPaperByIdSearch } from "@/admin/model/callForPaper/callForPaperModel";

export const adminCallForPaperApi = {
      getBasicInfo: (searchDetail: ICallForPaperBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `CallForPaper?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },


      getCallForPaperDetailedById: ({ id }: ICallForPaperByIdSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `CallForPaper/${id}`,
            };

            return AXIOS.request(options);
      },

      putCallForPaperDetailed: (callForPaperUpdateDetail: IAdminCallForPaperPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `CallForPaper`,
                  data: convertObjectToFormData(callForPaperUpdateDetail)
            };

            return AXIOS.request(options);
      },


      putCallForPaperApprovalStatus: (approvalDetail: IAdminCallForPaperStatusChangeReq) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `CallForPaper/update-status`,
                  data: approvalDetail
            };


            return AXIOS.request(options);
      },


      deleteCallForPaperDetail: (deletingDetail: IAdminCallForPaperDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `CallForPaper`,
                  data: deletingDetail
            };


            return AXIOS.request(options);
      }
}