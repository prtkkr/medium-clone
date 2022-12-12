import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'

import {AuthRoutingModule} from 'src/app/auth/auth-routing.module'
import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {reducers} from 'src/app/auth/store/reducers'
import {AuthService} from 'src/app/auth/service/auth.service'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/modules/BackendErrorMessages/backend-error-messages/backend-error-messages.module'
import {PersistanceService} from '../shared/services/persistance.service'

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
