import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TagFeedComponent } from 'src/app/tag-feed/components/tag-feed/tag-feed.component'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module'

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
]

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule
  ],
  exports: [TagFeedComponent],
})
export class TagFeedModule {}
