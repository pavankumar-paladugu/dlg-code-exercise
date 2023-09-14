export interface IField {
    label: String;
    placeholder: String;
    requiredErrorMsg: String;
    formControlName: string;
    emailErrorMsg: string;
}

export class Field implements IField {
    label: String = '';
    placeholder: String = '';
    requiredErrorMsg: String = '';
    formControlName: string = '';
    emailErrorMsg: string = '';

    constructor() {
        this.label = '';
        this.placeholder = '';
        this.requiredErrorMsg = '';
        this.formControlName = '';
        this.emailErrorMsg = '';
    }
}