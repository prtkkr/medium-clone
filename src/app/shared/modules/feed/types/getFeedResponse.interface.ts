import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface GetFeedResponsenterface {
  articles: ArticleInterface[],
  articlesCount: number
}
