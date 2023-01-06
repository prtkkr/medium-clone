import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ArticleRoutingModule } from 'src/app/article/article-routing.module'
import { ArticleComponent } from 'src/app/article/components/article/article.component'
import { ArticleService } from 'src/app/shared/services/article.service'
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect'
import { reducers } from 'src/app/article/store/reducers'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module'
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module'

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    RouterModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  exports: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
