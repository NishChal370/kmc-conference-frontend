export interface IAttachment {
      fileName: string;
      basePath: string;
      originalName: string;
      contentType: string;
      sizeBytes: number;
}


export interface IFilUpdateDetail {
      newFiles?: File[],
      oldFiles?: IAttachment[],
}