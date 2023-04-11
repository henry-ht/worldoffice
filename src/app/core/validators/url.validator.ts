import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class UrlValidator {
  static validUrl: ValidatorFn = (control: FormControl): ValidationErrors | null  => {
    try {
      let str = control.value;
      if (str.indexOf('://') === -1) {
        return { invalidUrl: true };
      }
      const url = new URL(str);
      return null;
    } catch (_) {
      return { invalidUrl: true };
    }
  }
}
