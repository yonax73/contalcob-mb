/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: form-validator framework-7
**/
class FormValidator {

    private element: HTMLFormElement;
    private inputs: NodeList;
    private result: boolean;
    private multiples: Array<number>;
    private inputsLenght: number;
    private validateInputCl = 'validate-input';
    private errorInputCl = 'error-input';
    private validateMsgCl = 'validate-msg';

    constructor(element: HTMLFormElement) {
        try {
            this.element = element;
            this.inputs = element.getElementsByClassName(this.validateInputCl);
            this.result = true;
        } catch (ex) {
            alert('Error tryning create object FormValidator');
            console.error(ex);
        }
    }

    public isValid() {
        var n 
    }
}