import { IBasicApiResponse } from "@/models/commonModel";
import { ContactReplyStatus } from "@/enum/contactUs/contactUsEnum";


export interface IContactUsModel {
      id: number;
      subject: string;
      description: string;
      fullName: string;
      email: string;
      requestedDate: string;
      replyStatus: ContactReplyStatus,
}


export interface IContactUsResponse extends IBasicApiResponse {
      contactUs: IContactUsModel[];
}

export interface IContactUsSearch {
      pageNumber: number;
}


export interface IContactUsPostRequest {
      fullName: string;
      email: string;
      subject: string;
      description: string;
}


export interface IContactUsPutRequest {
      id: number;
      status: ContactReplyStatus;
}



export interface IContactUsDeleteRequest {
      id: number;
}


export type IContactUsAddForm = IContactUsPostRequest;

export interface IContactUsUpdateForm extends IContactUsPutRequest {
      fullName: string;
      email: string;
}

export type IContactUsViewModal = IContactUsModel;