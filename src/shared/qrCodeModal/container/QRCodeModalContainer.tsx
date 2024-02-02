import { useAppSelector } from "@/app/hooks";
import { qrModalState } from "@/service/qrModal/feature/qrModalSlice";
import QRCodeModal from "../QRCodeModal";

function QRCodeModalContainer() {
      const { isOpen } = useAppSelector(qrModalState);

      if (!isOpen) return <></>;

      return <QRCodeModal />;
}

export default QRCodeModalContainer;
