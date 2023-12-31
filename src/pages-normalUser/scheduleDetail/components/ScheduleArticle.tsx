interface IScheduleArticle {
      title: string;
      article: string;
}

function ScheduleArticle({ title, article }: IScheduleArticle) {
      return (
            <span>
                  <h5>{title}</h5>
                  <p>{article}</p>
            </span>
      );
}

export default ScheduleArticle;
