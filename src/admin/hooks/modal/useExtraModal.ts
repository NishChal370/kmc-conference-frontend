import { useState } from 'react'

interface IExtraModalState<TData> {
      isOpen: boolean,
      data?: TData,
}


/**
 * @hook
 * Responsibility to provide functionality to open, close Modal.
 * also store the extra information if required.
 * 
 * @returns 
 */
function useExtraModal<TData>() {
      const [extraModal, setExtraModal] = useState<IExtraModalState<TData>>();

      const openExtraModalHandler = (data?: TData) => {
            setExtraModal({
                  isOpen: true,
                  data: data,
            })
      }

      const closeExtraModalHandler = () => {
            setExtraModal({
                  isOpen: false,

            })
      }

      return [extraModal, openExtraModalHandler, closeExtraModalHandler] as const;
}

export default useExtraModal