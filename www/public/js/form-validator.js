/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: form-validator framework-7
**/
var FormValidator = (function () {
    function FormValidator(element) {
        this.validateInputCl = 'validate-input';
        this.errorInputCl = 'error-input';
        this.validateMsgCl = 'validate-msg';
        try {
            this.element = element;
            this.inputs = element.getElementsByClassName(this.validateInputCl);
            this.result = true;
        }
        catch (ex) {
            alert('Error tryning create object FormValidator');
            console.error(ex);
        }
    }
    FormValidator.prototype.isValid = function () {
        var n;
    };
    return FormValidator;
})();
