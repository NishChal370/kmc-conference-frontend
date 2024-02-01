import NewsHeader from "./components/NewsHeader";
import NewsListContainer from "./container/NewsListContainer";
import "./style/news.css";

function News() {
      return (
            <span className="flex flex-col w-full h-full justify-start items-center gap-20 min-h-[80vh]">
                  <NewsHeader />

                  <span className="flex flex-col items-center w-full h-full ">
                        <NewsListContainer />
                  </span>
            </span>
      );
}

export default News;
