import { SPEAKERS_DETAILS } from "@/pages-normalUser/speakers/seed.tsx/speakersDetailList";

function AdminSpeakersDetail() {
      return (
            <main
                  className="grid place-items-center w-fit h-fit gap-x-24 gap-y-24 auto-cols-auto items-center
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-4
                        [&>*]:w-fit 
                  "
            >
                  {SPEAKERS_DETAILS.filter((_: any, index: number) => index < 10).map(
                        ({ image, name, designation, company }, index) => (
                              <button key={index} className="relative w-full h-full flex text-start">
                                    <img
                                          className=" w-44 h-44 min-w-[240px] min-h-[240px] object-cover"
                                          src={image}
                                          alt="speaker"
                                    />
                                    <article className="absolute bottom-0 leading-5 text-shadow text-white font-semibold text-sm px-7 py-3">
                                          <p>{name}</p>
                                          <p>{designation}</p>
                                          <p>{company}</p>
                                    </article>
                              </button>
                        )
                  )}
            </main>
      );
}

export default AdminSpeakersDetail;
