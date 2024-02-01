export const NEWS_PATH = {
      news: {
            basic: "news",
            full: "/news"
      },
      newsDetail: {
            basic: ":newsId/detail",
            paramName: "newsId",
            full: (newsId: number) => `/news/${newsId}/detail`
      },
};