import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";

interface IScheduleArticleText {
      title: string;
      article: string;
}

function ScheduleArticleText({ title, article }: IScheduleArticleText) {
      return (
            <span>
                  <h5>{title}</h5>

                  <SanitizedContent extraClassName="rich-text--loose" htmlContent={article} />
            </span>
      );
}

export default ScheduleArticleText;
