interface IHomeNewCard {
      image: string;
      date: string;
      title: string;
}
function HomeNewsCard({ image, date, title }: IHomeNewCard) {
      return (
            <div
                  className=" w-72 h-72 min-w-[18rem] min-h-[18rem]
                        xl:w-80 xl:h-80 xl:min-w-[20rem] xl:min-h-[20rem]
                        2xl:w-[25.5rem] 2xl:h-[25.5rem] 2xl:min-w-[25.5rem] 2xl:min-h-[25.5rem]  flex flex-col gap-2 cursor-pointer
                  "
            >
                  <img className="w-full h-[18rem] object-cover" src={image} alt="news=and-updates" />

                  <article className="flex flex-col gap-3">
                        <p className="text-primary font-medium">{date}</p>
                        <h6 className="font-bold line-clamp-2">{title}</h6>
                  </article>
            </div>
      );
}

export default HomeNewsCard;
