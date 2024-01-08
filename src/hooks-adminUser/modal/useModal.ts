import { useState } from 'react';
import { FieldStatus } from '@/enum-adminUser/modal/modalEnum';
import { IModal, IModalExtraInfo, IModalExtraInfoOption, IModalOption } from '@/model-adminUser/modal/useModalModel';


interface IModalState<TModalData, TModalExtraInfo> {
      modalData: TModalData | null,
      modalStatus: FieldStatus,
      modalExtraInfo: TModalExtraInfo | null,
}

function useModal<
      TModalData extends IModalOption<unknown, unknown> | IModal<unknown>,
      TModalExtraInfo extends IModalExtraInfoOption<unknown, unknown, unknown> | IModalExtraInfo<unknown> = IModalExtraInfo<unknown>
>() {
      const [modalState, setModalState] = useState<IModalState<TModalData, TModalExtraInfo>>({
            modalData: null,
            modalStatus: FieldStatus.Idle,
            modalExtraInfo: null,
      });


      const openAddModal = (extraAddInfo?: TModalExtraInfo["add"]) => {
            setModalState({
                  modalData: null,
                  modalStatus: FieldStatus.Add,
                  modalExtraInfo: { add: extraAddInfo } as TModalExtraInfo || null,
            })
      }

      const openEditModal = ({ editingData, extraEditInfo }: { editingData: TModalData["edit"], extraEditInfo?: TModalExtraInfo["edit"] }) => {
            setModalState({
                  modalStatus: FieldStatus.Edit,
                  modalData: { edit: editingData } as TModalData,
                  modalExtraInfo: { edit: extraEditInfo } as TModalExtraInfo || null,
            })
      }


      const openViewModal = ({ viewingData, extraViewInfo }: { viewingData: TModalData["view"], extraViewInfo?: TModalExtraInfo["view"] }) => {
            setModalState({
                  modalStatus: FieldStatus.View,
                  modalData: { view: viewingData } as TModalData,
                  modalExtraInfo: { edit: extraViewInfo } as TModalExtraInfo || null,
            })
      }


      const closeModal = () => {
            setModalState({
                  modalData: null,
                  modalStatus: FieldStatus.Idle,
                  modalExtraInfo: null,
            })
      }

      return {
            modalState,
            openAddModal,
            openEditModal,
            openViewModal,
            closeModal
      } as const;
}

export default useModal