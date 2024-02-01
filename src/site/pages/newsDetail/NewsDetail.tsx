import OtherNews from "./components/OtherNews";
import NewsDetailArticle from "./components/NewsDetailArticle";

function NewsDetail() {
      return (
            <span className="flex flex-col items-center gap-0 w-full min-h-[80vh]">
                  <span className="h-32 bg-black/90 w-full"></span>

                  <NewsDetailArticle />

                  <OtherNews />
            </span>
      );
}

export default NewsDetail;
