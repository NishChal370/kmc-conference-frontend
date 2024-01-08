interface IScheduleSpeakerCard {
      openDetailModalHandler: () => void;
      img: string;
      speakerName: string;
      designation: string;
      company: string;
}

function ScheduleSpeakerCard({
      openDetailModalHandler,
      img,
      speakerName,
      designation,
      company,
}: IScheduleSpeakerCard) {
      return (
            <button
                  type="button"
                  onClick={openDetailModalHandler}
                  className="w-36 h-44 border border-default flex flex-col items-center justify-center text-center text-xs gap-6 py-4 rounded-md"
            >
                  <img className="w-20 h-20 rounded-full hover:grayscale" src={img} alt="speaker-img" />

                  <article>
                        <p className="font-semibold leading-relaxed">{speakerName}</p>
                        <p>
                              {designation}; {company}
                        </p>
                  </article>
            </button>
      );
}

export default ScheduleSpeakerCard;
