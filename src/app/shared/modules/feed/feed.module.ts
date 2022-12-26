import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { RouterModule } from '@angular/router'

import { FeedRoutingModule } from 'src/app/shared/modules/feed/feed-routing.module'
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect'
import { reducers } from 'src/app/shared/modules/feed/store/reducers'
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module'
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HttpClientModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
