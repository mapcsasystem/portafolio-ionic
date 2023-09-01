import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  private _fb = inject(FormBuilder);
  private _v = inject(ValidatorsService);
  public form = this._fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(this._v.emailPattern)],
    ],
  });

  public onSubmit(): void {}

  public errorInput(field: string) {
    const errors = this._v.field(this.form, field)?.errors;
    if (!errors) return '';

    return this._v.setValidationsErrors(errors, field);
  }
}
