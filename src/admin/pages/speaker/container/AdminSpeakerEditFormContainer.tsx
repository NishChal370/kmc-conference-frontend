import AdminAddOrEditSpeakerForm from "../components/AdminSpeakerAddOrEditForm";
import useAppForm from "@/hooks/form/useAppForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { IAdminSpeakerEditForm, IAdminSpeakerPutRequest } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminSpeakerEditFormContainer {
      closeModalHandler: () => void;
}

function AdminSpeakerEditFormContainer({ closeModalHandler }: IAdminSpeakerEditFormContainer) {
      const speakerEditForm = useAppForm<IAdminSpeakerEditForm>({
            defaultValues: {
                  referenceContacts: [
                        {
                              phone: "+9779805169543",
                        },
                  ],
                  publications: [
                        {
                              value: "https://pub.com",
                        },
                  ],
                  previousSpeakingEngagements: [
                        {
                              value: "https://speEng.com",
                        },
                  ],
                  firstName: "Nish",
                  middleName: "middle",
                  lastName: "Chal",
                  email: "np01cp4a190072@islingtoncollege.edu.np",
                  title: "dev",
                  affiliation: "I comapnt",
                  jobTitle: "deve",
                  linkedInProfile: "https://link.com",
                  twitterHandle: "https://Twitter.com",
                  professionalWebsite: "https://website.com",
                  willingToTravel: false,
                  avRequirements: "av req",
                  preferredSessionLengthMinutes: 1,
                  // sessionProposal: {
                  //       "0": {},
                  // },
                  phone: "+9779805169542",
                  bio: "<p>I dont have bio</p>",
                  previousExperience:
                        '<p>i dont have prev <span style="color: rgb(0, 0, 0);">Experience</span></p>',
                  previousConferences:
                        '<p>i dont have prev <span style="color: rgb(0, 0, 0);">Conference</span></p>',
                  accommodationNeeds:
                        '<p>i dont haVE  <span style="color: rgb(0, 0, 0);">Accommodation Needs</span></p>',
            },
            // defaultValues: {
            //       referenceContacts: [{ phone: "" }],
            //       publications: [{ value: "" }],
            //       previousSpeakingEngagements: [{ value: "" }],
            // },
      });

      const { updateAdminSpeakerFullDetail } = useSpeakerApi();

      const { handleSubmit, reset } = speakerEditForm;

      const formSubmitHandler = handleSubmit((speakerDetails) => {
            const updatedSpeaker: IAdminSpeakerPutRequest = {
                  ...speakerDetails,
                  speakerId: 1,
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

      return (
            <AdminAddOrEditSpeakerForm
                  modalType="Edit"
                  speakerEditForm={speakerEditForm}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={reset}
                  closeModalHandler={closeModalHandler}
            />
      );
}

export default AdminSpeakerEditFormContainer;
