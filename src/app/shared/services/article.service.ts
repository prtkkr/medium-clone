import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiURL}/articles/${slug}`
    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(map((response: GetArticleResponseInterface) => response.article))
  }
}
