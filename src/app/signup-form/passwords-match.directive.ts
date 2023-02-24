import {AbstractControl, ɵGetProperty} from '@angular/forms'

export function passwordsMatchValidator(password: string) {
  return (control: AbstractControl) => {
    const passwordControl = control.parent?.get(password)
    if (passwordControl && passwordControl.value !== control.value) {
      return {passwordsMatch: true}
    }
    return null
  }
}
