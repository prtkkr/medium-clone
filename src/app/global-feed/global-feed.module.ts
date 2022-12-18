import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GlobalFeedRoutingModule } from 'src/app/global-feed/global-feed-routing.module'
import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule, BannerModule],
})
export class GlobalFeedModule {}
