import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { YourFeedComponent } from 'src/app/your-feed/components/your-feed/your-feed.component'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  }
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
