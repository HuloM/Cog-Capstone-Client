import {AbstractControl} from '@angular/forms'

export function FileSizeLimitValidator(filesize: number) {
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log('in validator ' + filesize);
    return filesize > 1.28e5 ? {fileSizeLimit: true} : null;
  };

}
