import NewsList from "./components/NewsList";
import NewsHeader from "./components/NewsHeader";
import "./style/news.css";

function News() {
      return (
            <span className="flex flex-col w-full h-full justify-start items-center gap-20 min-h-[80vh]">
                  <NewsHeader />

                  <span className="flex flex-col items-center w-full h-full ">
                        <NewsList />
                  </span>
            </span>
      );
}

export default News;
