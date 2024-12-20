import { useEffect } from "react";
import QRCode from "qrcode.react";
import { Modal } from "../modal";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { qrModalAction, qrModalState } from "@/service/qrModal/feature/qrModalSlice";
import Button from "../button/Button";
import appLogoSmall from "@/assets/image/webp/appLogoSmall.webp";
import useQRApi from "@/admin/hooks/qr/useQRApi";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage, NotFoundMessage } from "../errorMessage";
import LoadingMessage from "../loading/LoadingMessage";
import { ADMIN_VERIFY_APPLICANT } from "@/admin/constants/routePath";

function QRCodeModal() {
      const dispatch = useAppDispatch();
      const { qrCodeData, title, message, status, error } = useAppSelector(qrModalState);

      const { getQR } = useQRApi();

      const downloadQRCode = () => {
            // Assuming qrCodeEl is an ID of a canvas element where the QR code is drawn
            const canvas = document.getElementById("qrCodeEl") as HTMLCanvasElement;

            if (canvas) {
                  const qrCodeURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

                  // Create an anchor element and trigger a download
                  const aEl = document.createElement("a");
                  aEl.href = qrCodeURL;
                  aEl.download = "KMC_IT_Conference_QR_Code.png";
                  document.body.appendChild(aEl);
                  aEl.click();
                  document.body.removeChild(aEl);
            } else {
                  console.error("The canvas element was not found.");
            }
      };

      const closeHandler = () => {
            dispatch(qrModalAction.hideQRModal());
      };

      useEffect(() => {
            getQR();
      }, []);

      console.log(window.location.origin);
      return (
            <Modal title="" size="w-full sm:!max-w-[36rem]">
                  <span className="flex flex-col gap-12 items-center text-center justify-center w-full h-full">
                        <section className="flex flex-col gap-2 sm:max-w-[50%]">
                              {title ? <p className="text-3xl font-bold">{title}</p> : undefined}

                              {message ? <p className="text-mute">{message}</p> : undefined}
                        </section>

                        <>
                              {status === Status.SUCCEEDED ? (
                                    <>
                                          <QRCode
                                                id="qrCodeEl"
                                                className="border-2 rounded-xl p-4"
                                                value={
                                                      qrCodeData
                                                            ? `${
                                                                    window.location.origin +
                                                                    ADMIN_VERIFY_APPLICANT.verifyApplicant
                                                                          .full
                                                              }?qrId=${qrCodeData.id}&userCode=${
                                                                    qrCodeData.userCode
                                                              }`
                                                            : ""
                                                }
                                                size={250}
                                                bgColor="#ffffff"
                                                fgColor="#000000"
                                                level="H"
                                                includeMargin={false}
                                                imageSettings={{
                                                      src: appLogoSmall,
                                                      x: undefined,
                                                      y: undefined,
                                                      height: 70,
                                                      width: 70,
                                                      excavate: true,
                                                }}
                                          />

                                          <section className="flex flex-col gap-1.5 text-center items-center">
                                                <p className="text-mute">
                                                      Carry with you through the conference
                                                </p>

                                                <Button
                                                      type="button"
                                                      variant="text"
                                                      title="Download QR Code"
                                                      onClickHandler={downloadQRCode}
                                                />
                                          </section>
                                    </>
                              ) : undefined}

                              {status === Status.FAILED ? (
                                    <ErrorMessage
                                          title={error?.title}
                                          detail={error?.detail}
                                          needTopPadding={false}
                                          traceId={error?.traceId}
                                    />
                              ) : undefined}

                              {status === Status.DATA_NOT_FOUND ? (
                                    <NotFoundMessage needTopPadding={false} />
                              ) : undefined}

                              {status === Status.IDEL || status === Status.LOADING ? (
                                    <LoadingMessage />
                              ) : undefined}
                        </>

                        <Button
                              disable={status === Status.LOADING}
                              type="button"
                              title="Close"
                              onClickHandler={closeHandler}
                        />
                  </span>
            </Modal>
      );
}

export default QRCodeModal;
