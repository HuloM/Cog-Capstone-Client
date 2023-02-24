import {AbstractControl, ValidatorFn} from '@angular/forms'

export function FileUploadFormatValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const fileName = control.value;
    const allowed = fileName.toLowerCase().match(/\.(jpg|jpeg|png)$/i);
    return allowed ? null : {fileUploadFormat: {value: control.value}};
  };
}
