import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from 'src/app/auth/service/auth.service'
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/BackendErrorMessages/backend-error-messages/backend-error-messages.module'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { LoginEffect } from 'src/app/auth/store/effects/login.effect'
import { LoginComponent } from 'src/app/auth/components/login/login.component'
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/getCurrentUser.effect'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
