import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/article/store/action/getArticle.action'

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )
}
