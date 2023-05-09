import {Validators} from '@angular/forms';

export function createTextValidator() {
    return Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp(/^[A-Za-z0-9,.\- ]+$/))]
    );
}