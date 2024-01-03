import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";

interface IHomeSpeakerCard {
      img: string;
      name: string;
      designation: string;
      company: string;
}
function HomeSpeakerCard({ img, name, designation, company }: IHomeSpeakerCard) {
      return (
            <ScaleRaiseUpAnimationWrapper>
                  <div className="relative w-full h-full">
                        <figure>
                              <img
                                    className=" w-72 h-72 min-w-[18rem] min-h-[18rem] object-cover  hover:grayscale
                                          lg:w-64 lg:h-64 lg:min-w-[256px] lg:min-h-[256px]
                                    "
                                    src={img}
                                    alt=""
                              />
                        </figure>
                        <article className="absolute bottom-0 leading-5 text-white font-semibold text-base [&>*]:text-shadow px-7 py-3">
                              <p>{name}</p>
                              <p>{designation}</p>
                              <p>{company}</p>
                        </article>
                  </div>
            </ScaleRaiseUpAnimationWrapper>
      );
}

export default HomeSpeakerCard;
