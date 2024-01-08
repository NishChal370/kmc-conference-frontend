export interface IModalOption<TViewData, TEditData> {
      view?: TViewData,
      edit?: TEditData,
}


export interface IModal<TModalData> {
      view?: TModalData,
      edit?: TModalData,
}


export interface IModalExtraInfo<IExtraInfo> {
      view?: IExtraInfo,
      edit?: IExtraInfo,
      add?: IExtraInfo
}

export interface IModalExtraInfoOption<IViewExtraInfo, IAddExtraInfo, IEditExtraInfo> {
      view?: IViewExtraInfo,
      add?: IAddExtraInfo
      edit?: IEditExtraInfo,
}