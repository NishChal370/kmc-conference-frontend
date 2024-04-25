import { IBasicApiResponse, IBasicSearchParam } from "@/models/commonModel";
import { IAttachment, IFilUpdateDetail } from "@/models/file/fileModel";


export interface INewsBasicModel {
      id: number;
      title: string;
      createdDate: string;
      bannerImage: IAttachment | null;
}


export interface INewsModel extends INewsBasicModel {
      content: string;
      createdBy: string;
}


export interface INewsBasicResponse extends IBasicApiResponse {
      news: INewsBasicModel[]
}


export interface INewsBasicSearch extends IBasicSearchParam {
      pageSize?: number;
}



export type INewsDetailResponse = INewsModel;


export interface INewsDetailSearch {
      id: INewsBasicModel["id"];
}





export interface INewsPostRequest {
      title: string;
      content: string;
      bannerImage: File | null;
}


export interface INewsPutRequest extends INewsPostRequest {
      id: INewsBasicModel["id"];
      removeOldImage: boolean;
}


export interface INewAddOrEditForm extends Omit<INewsPostRequest, "bannerImage"> {
      image: IFilUpdateDetail;
}



export interface INewsViewOrEditModal {
      newsId: INewsBasicModel["id"];
}

export interface INewsDeleteRequest {
      id: INewsBasicModel["id"];
}