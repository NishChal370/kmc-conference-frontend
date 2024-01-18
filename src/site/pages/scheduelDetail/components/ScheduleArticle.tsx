import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";

interface IScheduleArticle {
      title: string;
      article: string;
}

function ScheduleArticle({ title, article }: IScheduleArticle) {
      return (
            <span>
                  <h5>{title}</h5>

                  <SanitizedContent htmlContent={article} />
            </span>
      );
}

export default ScheduleArticle;
