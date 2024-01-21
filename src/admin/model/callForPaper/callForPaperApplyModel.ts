import { IFilUpdateDetail } from "@/models/file/fileModel";
import { IScheduleChoice, IScheduleModel } from "../schedule/scheduleModel";
import { IMultipleInputFields } from "@/models/input/multiplePhoneInputModel";



/**
 * used call for paper apply modal
 */
export interface ICallForPaperAddModal {
      sessionChoice: IScheduleChoice;
      dayDate: string;
      startTime: IScheduleModel["startTime"]
      endTime: IScheduleModel["endTime"];
      dayLocation: string;
      sessionLocation: IScheduleModel["location"]
}



export interface ICallForPaperPostRequest {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      sessions: IScheduleChoice["sessionId"][];
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
      availabilityDaysTimes?: string | null; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
      fullPaperORExtendedAbstract?: File | null;
}




export interface ICallForPaperPostForm {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      sessions: IScheduleChoice["sessionId"];
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
      confirmPresent: boolean;
      acceptTandC: boolean;
      fullPaperORExtendedAbstract: IFilUpdateDetail;
}



export interface ICallForPaperPostPersonalForm {
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      briefBiography: string;
}



export interface ICallForPaperPostSessionProposalForm {
      proposedPaperSessionTitle: string;
      keywords: IMultipleInputFields;
      primaryFieldCategory: string;
      researchMethodology: string;
      abstractSummary: string;
      referencesOrCitations: IMultipleInputFields;
}




export interface ICallForPaperPostPresentationForm {
      preferredPresentationFormat: string;
      keyObjectives: IMultipleInputFields;
      contributions: IMultipleInputFields;
      significanceRelevance?: string;
      audioVisualRequirements: string;
      fullPaperORExtendedAbstract: IFilUpdateDetail;
}



export interface ICallForPaperPostExperienceForm {
      previousExperience: IMultipleInputFields;
      listOfConferences: IMultipleInputFields;
}



export interface IParticipationPostPreferenceForm {
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
}



export interface IParticipationPostAdditionalForm {
      additionalRequirements: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
}




export interface ICallForPaperAddNewSessionPostRequest {
      sessionId: IScheduleChoice["sessionId"];
}