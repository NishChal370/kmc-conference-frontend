import AppIcon from "@/shared/icon/AppIcon";

interface IProfileCardHeader {
      title: string;
      editButtonHandler?: () => void;
}
function ProfileCardHeader({ title, editButtonHandler }: IProfileCardHeader) {
      return (
            <span className="flex justify-between items-center gap-1.5">
                  <h1 className=" font-bold text-base">{title}</h1>

                  {editButtonHandler && (
                        <button
                              type="button"
                              title="edit"
                              className="active:text-primary"
                              onClick={editButtonHandler}
                        >
                              <AppIcon name="update" />
                        </button>
                  )}
            </span>
      );
}

export default ProfileCardHeader;
