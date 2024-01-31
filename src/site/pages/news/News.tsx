import NewsList from "./components/NewsList";
import NewsHeader from "./components/NewsHeader";
import "./style/news.css";

function News() {
      return (
            <span className="flex flex-col items-center w-full h-full gap-44   min-h-[80vh]">
                  <NewsHeader />

                  <NewsList />
            </span>
      );
}

export default News;
