import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import ProfileCard from "./ProfileCard";
import { IAdminProfileModel } from "@/admin/model/profile/adminProfileModel";

interface IProfileBody {
      detail: IAdminProfileModel;
      editButtonHandler: (adminProfileDetail: IAdminProfileModel) => () => void;
}
function ProfileBody({ detail, editButtonHandler }: IProfileBody) {
      return (
            <div className="flex flex-col gap-12">
                  <ProfileCard
                        cardTitle="Personal Information"
                        editButtonHandler={editButtonHandler(detail)}
                        detail={[
                              { label: "First Name", data: detail.firstName },
                              { label: "Middle Name", data: detail.middleName },
                              { label: "Last Name", data: detail.lastName },
                              { label: "Date Of Birth", data: changeDateFormat(detail.dateOfBirth) },
                              { label: "Gender", data: detail.gender },
                              { label: "Phone Number", data: detail.phoneNumber },
                              { label: "Email Address", data: detail.email },
                        ]}
                  />

                  <ProfileCard
                        cardTitle="Professional Information"
                        detail={[
                              { label: "Title", data: detail.title },
                              { label: "Affiliation", data: detail.affiliation },
                              { label: "Job Title", data: detail.jobTitle },
                        ]}
                  />
            </div>
      );
}

export default ProfileBody;
