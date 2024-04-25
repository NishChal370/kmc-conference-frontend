export interface IVerifyApplicantModel {
      scannedBy: string,
      qrCodeOwner: string,
      createdDate: string,
      email: string,
      callSessions: string[],
      speakerSessions: string[],
      participantSessions: string[],
}


export type IVerifyUserResponse = IVerifyApplicantModel;


export interface IVerifyApplicantSearch {
      qrId: string;
      userCode: string;
}


export interface IVerifyApplicantPostRequest {
      qrId: string;
      userCode: string;
}