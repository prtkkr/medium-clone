import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from 'src/app/auth/service/auth.service'

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [AuthService],
})
export class AuthModule {}
