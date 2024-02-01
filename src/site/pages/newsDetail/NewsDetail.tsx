import OtherNews from "./components/OtherNews";
import NewsDetailArticleContainer from "./container/NewsDetailArticleContainer";

function NewsDetail() {
      return (
            <span className="flex flex-col items-center gap-0 w-full min-h-[80vh]">
                  <span className=" h-36 bg-black/90 w-full"></span>

                  <NewsDetailArticleContainer />

                  <OtherNews />
            </span>
      );
}

export default NewsDetail;
