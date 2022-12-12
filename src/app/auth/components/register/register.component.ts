import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {registerAction} from 'src/app/auth/store/actions/register.actions'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {
  isSubmittedSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitted$!: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
    })
  }

  initializeValues(): void {
    this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    // console.log(this.isSubmitted$)
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
