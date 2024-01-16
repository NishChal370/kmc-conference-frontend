import ProfileCardHeader from "./ProfileCardHeader";

interface IProfileCard {
      cardTitle: string;
      editButtonHandler?: () => void;
      detail: ({ label: string; data?: string | number } & (
            | { type?: never; linkLabel?: never; linkHandler?: never }
            | {
                    type: "link";
                    linkLabel: string;
                    linkHandler: () => void;
              }
      ))[];
}

function ProfileCard({ cardTitle, editButtonHandler, detail }: IProfileCard) {
      return (
            <section className="w-full flex flex-col gap-10 border  px-6 py-6 rounded-2xl">
                  <ProfileCardHeader title={cardTitle} editButtonHandler={editButtonHandler} />

                  <article
                        className="grid grid-cols-1 gap-y-6 gap-x-2 w-full text-sm
                              sm:grid-cols-3 sm:gap-y-8
                              [&>span]:flex [&>span]:flex-col [&>span]:gap-1.5 
                        "
                  >
                        {detail.map((data, index) => (
                              <span key={index} className="flex flex-col gap-0.5 w-full">
                                    <h6 className="font-medium text-gray-700">{data.label}</h6>

                                    {data.type === "link" && data.data ? (
                                          <button
                                                type="button"
                                                onClick={data.linkHandler}
                                                className="font-semibold w-fit h-fit text-primary active:text-rose-400"
                                          >
                                                {data.linkLabel || "N/A"}
                                          </button>
                                    ) : (
                                          <p className="font-semibold">{data.data || "N/A"}</p>
                                    )}
                              </span>
                        ))}
                  </article>
            </section>
      );
}

export default ProfileCard;
