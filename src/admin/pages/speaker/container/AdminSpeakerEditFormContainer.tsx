import { useEffect } from "react";
import AdminAddOrEditSpeakerForm from "../components/AdminSpeakerAddOrEditForm";
import useAppForm from "@/hooks/form/useAppForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { speakerSliceAction, speakerState } from "../feature/speakerSlice";
import { IAdminSpeakerEditForm, IAdminSpeakerPutRequest } from "@/admin/model/speaker/adminSpeakerModel";
import { Status } from "@/enum/commonEnum";

interface IAdminSpeakerEditFormContainer {
      selectedSpeakerId: number;
      closeModalHandler: () => void;
}

function AdminSpeakerEditFormContainer({
      selectedSpeakerId,
      closeModalHandler,
}: IAdminSpeakerEditFormContainer) {
      const speakerEditForm = useAppForm<IAdminSpeakerEditForm>();
      //       {
      //       defaultValues: {
      //             referenceContacts: [
      //                   {
      //                         phone: "+9779805169543",
      //                   },
      //             ],
      //             publications: [
      //                   {
      //                         value: "https://pub.com",
      //                   },
      //             ],
      //             previousSpeakingEngagements: [
      //                   {
      //                         value: "https://speEng.com",
      //                   },
      //             ],
      //             firstName: "Nish",
      //             middleName: "middle",
      //             lastName: "Chal",
      //             email: "np01cp4a190072@islingtoncollege.edu.np",
      //             title: "dev",
      //             affiliation: "I comapnt",
      //             jobTitle: "deve",
      //             linkedInProfile: "https://link.com",
      //             twitterHandle: "https://Twitter.com",
      //             professionalWebsite: "https://website.com",
      //             willingToTravel: false,
      //             avRequirements: "av req",
      //             preferredSessionLengthMinutes: 1,
      //             // sessionProposal: {
      //             //       "0": {},
      //             // },
      //             phone: "+9779805169542",
      //             bio: "<p>I dont have bio</p>",
      //             previousExperience:
      //                   '<p>i dont have prev <span style="color: rgb(0, 0, 0);">Experience</span></p>',
      //             previousConferences:
      //                   '<p>i dont have prev <span style="color: rgb(0, 0, 0);">Conference</span></p>',
      //             accommodationNeeds:
      //                   '<p>i dont haVE  <span style="color: rgb(0, 0, 0);">Accommodation Needs</span></p>',
      //       },
      //       // defaultValues: {
      //       //       referenceContacts: [{ phone: "" }],
      //       //       publications: [{ value: "" }],
      //       //       previousSpeakingEngagements: [{ value: "" }],
      //       // },
      // }
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(speakerState).speakerFullDetailedInfo;

      const { updateAdminSpeakerFullDetail, getAdminSpeakerFullDetailedInfo } = useSpeakerApi();

      const { handleSubmit, reset } = speakerEditForm;

      const formSubmitHandler = handleSubmit((speakerDetails) => {
            const updatedSpeaker: IAdminSpeakerPutRequest = {
                  ...speakerDetails,
                  speakerId: selectedSpeakerId,
                  referenceContacts: speakerDetails.referenceContacts.map((contact) => contact.phone),
                  publications: speakerDetails.publications.map((publication) => publication.value),
                  previousSpeakingEngagements: speakerDetails.previousSpeakingEngagements.map(
                        (previousSpeakingEngagement) => previousSpeakingEngagement.value
                  ),
                  sessionProposal: speakerDetails.proposalFile.newFiles,
                  oldSessionProposal: speakerDetails.proposalFile.oldFiles,
            };

            updateAdminSpeakerFullDetail(updatedSpeaker).then(closeModalHandler);
      });

      const fetchData = () => {
            getAdminSpeakerFullDetailedInfo({ speakerId: selectedSpeakerId });
      };

      const setInitialData = () => {
            if (data) {
                  const speakerEditingDetail: IAdminSpeakerEditForm = {
                        ...data,
                        referenceContacts: data!.referenceContacts.map((phone) => ({ phone })),
                        publications: data!.publications.map((value) => ({ value })),
                        previousSpeakingEngagements: data!.previousSpeakingEngagements.map((value) => ({
                              value,
                        })),
                        proposalFile: {
                              newFiles: [],
                              oldFiles: data!.sessionProposal,
                        },
                  };

                  reset(speakerEditingDetail);
            }
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(speakerSliceAction.resetSpeakerFullDetailedInfoSlice());
            };
      }, [selectedSpeakerId]);

      useEffect(() => {
            setInitialData();
      }, [data]);

      return (
            status === Status.SUCCEEDED && (
                  <AdminAddOrEditSpeakerForm
                        modalType="Edit"
                        speakerEditForm={speakerEditForm}
                        formSubmitHandler={formSubmitHandler}
                        formResetHandler={reset}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminSpeakerEditFormContainer;
