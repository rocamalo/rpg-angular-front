import { AbstractControl, ValidationErrors } from "@angular/forms";

export function  matchingFields( field1: string, field2: string) {

    return ( formGroup: AbstractControl) => {
        const password = formGroup.get(field1);
        const password2 = formGroup.get(field2);
       if (password!.value !== password2!.value) {
        password2!.setErrors({notEqual: true});
       } else {
        password2!.setErrors(null);
       }
       
    }
  }