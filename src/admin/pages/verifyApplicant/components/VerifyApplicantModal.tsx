import { Modal, ModalText } from "@/shared/modal";
import { IVerifyApplicantModel } from "@/admin/model/verifyApplicant/verifyApplicantModel";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { IApiErrorDetail } from "@/models/commonModel";
import Button from "@/shared/button/Button";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IVerifyApplicantModal {
      status: Status;
      error?: IApiErrorDetail;
      applicantDetails?: IVerifyApplicantModel;
      closeModal: () => void;
}

function VerifyApplicantModal({ status, applicantDetails, error, closeModal }: IVerifyApplicantModal) {
      return (
            <Modal
                  title="Applicants Detail"
                  size="min-w-full sm:min-w-[95%] xl:min-w-[40%] max-w-[40rem]"
                  closeHandler={closeModal}
            >
                  <>
                        {status === Status.SUCCEEDED && applicantDetails ? (
                              <span
                                    className="grid gap-y-8 gap-x-10 w-full
                                          sm:px-2
                                    "
                              >
                                    <article
                                          className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2
                                          "
                                    >
                                          <ModalText title="Full Name" data={applicantDetails.qrCodeOwner} />
                                          <ModalText title="Email" data={applicantDetails.email} />
                                          <ModalText
                                                title="Created Date"
                                                data={
                                                      applicantDetails.createdDate
                                                            ? changeDateFormat(
                                                                    applicantDetails.createdDate,
                                                                    "long"
                                                              )
                                                            : "N/A"
                                                }
                                          />
                                          <ModalText title="Scanned By" data={applicantDetails.scannedBy} />
                                    </article>

                                    <div
                                          className="flex flex-col justify-between gap-2 border-b text-sm border-b-mute
                                                sm:flex-row items-start sm:text-end
                                          "
                                    >
                                          <h3 className="font-semibold py-2 text-start text-sm">
                                                Speaking Session
                                          </h3>

                                          <ul>
                                                {applicantDetails.speakerSessions.map(
                                                      (sessionName, index) => (
                                                            <li key={index}>{sessionName}</li>
                                                      )
                                                )}
                                                {!applicantDetails.speakerSessions.length ? "N/A" : ""}
                                          </ul>
                                    </div>

                                    <div
                                          className="flex flex-col justify-between gap-2 border-b text-sm border-b-mute
                                                sm:flex-row items-start sm:text-end
                                          "
                                    >
                                          <h3 className="font-semibold py-2 text-start text-sm">
                                                Participating Session
                                          </h3>

                                          <ul>
                                                {applicantDetails.participantSessions.map(
                                                      (sessionName, index) => (
                                                            <li key={index}>{sessionName}</li>
                                                      )
                                                )}
                                                {!applicantDetails.participantSessions.length ? "N/A" : ""}
                                          </ul>
                                    </div>

                                    <div
                                          className="flex flex-col justify-between gap-2 border-b text-sm border-b-mute
                                                sm:flex-row items-start sm:text-end
                                          "
                                    >
                                          <h3 className="font-semibold py-2 text-start text-sm">
                                                Call For Paper Session
                                          </h3>

                                          <ul>
                                                {applicantDetails.callSessions.map((sessionName, index) => (
                                                      <li key={index}>{sessionName}</li>
                                                ))}
                                                {!applicantDetails.callSessions.length ? "N/A" : ""}
                                          </ul>
                                    </div>
                              </span>
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

                        {status === Status.IDEL || status === Status.LOADING ? <LoadingMessage /> : undefined}

                        <Button
                              disable={status === Status.LOADING}
                              type="button"
                              title="Close"
                              extraClassName="mt-6"
                              onClickHandler={closeModal}
                        />
                  </>
            </Modal>
      );
}

export default VerifyApplicantModal;
