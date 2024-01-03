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
                  <div className="relative w-70 h-fit">
                        <img className="w-full h-full hover:grayscale" src={img} alt="" />
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
