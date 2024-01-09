export interface IAttachment {
      id: number;
      originalName: string;
      contentType: string;
      fileName: string;
      fileSize: number;
}


export interface IFilUpdateDetail {
      newFiles?: File[],
      oldFiles?: IAttachment[],
}