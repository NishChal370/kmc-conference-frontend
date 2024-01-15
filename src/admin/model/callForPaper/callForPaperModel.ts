import { IBasicApiResponse } from '@/models/commonModel';
import { IAttachment, IFilUpdateDetail } from '@/models/file/fileModel';
import { IMultipleInputFields } from '@/models/input/multiplePhoneInputModel';
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";

export interface ICallForPaperBasicModel {
      id: number,
      name: string,
      email: string,
      phoneNumber: string,
      jobTitle?: string,
      affiliation?: string,
      proposedPaperSessionTitle: string,
      approvalStatus: CallForPaperApprovalStatus,
}

export interface ICallForPaperDetailModel extends ICallForPaperBasicModel {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      abstractSummary: string;
      keywords: string[] | null;
      primaryFieldCategory: string;
      researchMethodology: string;
      keyObjectives: string[] | null;
      contributions: string[] | null;
      significanceRelevance?: string;
      preferredPresentationFormat: string;
      audioVisualRequirements: string;
      previousExperience: string[] | null;
      listOfConferences: string[] | null;
      referencesOrCitations: string[] | null;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
      fullPaperORExtendedAbstract: IAttachment | null;
}


export interface ICallForPaperBasicResponse extends IBasicApiResponse {
      calls: ICallForPaperBasicModel[];
}


export interface ICallForPaperBasicSearch {
      pageNumber: number;
}


export type ICallForPaperByIdResponse = ICallForPaperDetailModel;


export interface ICallForPaperByIdSearch {
      id: ICallForPaperBasicModel["id"];
}



export interface IAdminCallForPaperPostRequest {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      proposedPaperSessionTitle: string;
      abstractSummary: string;
      keywords: string[] | null;
      primaryFieldCategory: string;
      researchMethodology: string;
      keyObjectives: string[] | null;
      contributions: string[] | null;
      significanceRelevance?: string;
      preferredPresentationFormat: string;
      audioVisualRequirements: string;
      previousExperience: string[] | null;
      listOfConferences: string[] | null;
      referencesOrCitations: string[] | null;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
      fullPaperORExtendedAbstract?: File | null;
}




export interface IAdminCallForPaperPutRequest {
      callId: ICallForPaperBasicModel["id"];
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      proposedPaperSessionTitle: string;
      abstractSummary: string;
      keywords: string[] | null;
      primaryFieldCategory: string;
      researchMethodology: string;
      keyObjectives: string[] | null;
      contributions: string[] | null;
      significanceRelevance?: string;
      preferredPresentationFormat: string;
      audioVisualRequirements: string;
      previousExperience: string[] | null;
      listOfConferences: string[] | null;
      referencesOrCitations: string[] | null;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      fullPaperORExtendedAbstract?: File | null;
      oldFullPaperOrExtendedAbstract?: IAttachment["fileName"]
}



export interface IAdminCallForPaperForm {
      callId: ICallForPaperBasicModel["id"];
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      proposedPaperSessionTitle: string;
      abstractSummary: string;
      keywords: IMultipleInputFields;
      primaryFieldCategory: string;
      researchMethodology: string;
      keyObjectives: IMultipleInputFields;
      contributions: IMultipleInputFields;
      significanceRelevance?: string;
      preferredPresentationFormat: string;
      audioVisualRequirements: string;
      previousExperience: IMultipleInputFields;
      listOfConferences: IMultipleInputFields;
      referencesOrCitations: IMultipleInputFields;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      fullPaperORExtendedAbstract: IFilUpdateDetail;
}


export interface IAdminCallForPaperViewOrEditModal {
      id: ICallForPaperBasicModel["id"]
}



export interface IAdminCallForPaperDeleteRequest {
      callId: ICallForPaperBasicModel["id"];
}



export interface IAdminCallForPaperStatusChangeReq {
      id: ICallForPaperDetailModel["id"],
      approvalStatus: ICallForPaperDetailModel["approvalStatus"],
}


export interface IAdminCallForPaperStatusChangeModal {
      id: ICallForPaperDetailModel["id"],
      callForPaperName: ICallForPaperDetailModel["name"];
      approvalStatus: ICallForPaperDetailModel["approvalStatus"],
}