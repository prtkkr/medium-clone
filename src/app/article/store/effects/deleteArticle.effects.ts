import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { ArticleService } from 'src/app/article/services/article.service'
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from 'src/app/article/store/action/deleteArticle.action'

@Injectable()
export class DeleteArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.delete(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction()
          }),
          catchError(() => {
            return of(deleteArticleFailureAction)
          })
        )
      })
    )
  )
}
