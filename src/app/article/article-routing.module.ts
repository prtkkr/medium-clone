import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ArticleComponent } from 'src/app/article/components/article/article.component'

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
