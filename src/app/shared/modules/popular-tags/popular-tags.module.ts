import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from 'src/app/shared/modules/popular-tags/store/reducers'
import { PopularTagsComponent } from 'src/app/shared/modules/popular-tags/components/popular-tags/popular-tags.component'
import { PopularTagsService } from 'src/app/shared/modules/popular-tags/popular-tags.service'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module'
import { GetPopularTagsEffect } from 'src/app/shared/modules/popular-tags/store/effects/getPopularTags.effect'

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
