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
        this.validateContentCl = 'validate-content';
        this.validateCl = 'validate';
        this.errorInputCl = 'error-input';
        this.validateMsgCl = 'validate-msg';
        this.hiddenCl = 'hidden';
        try {
            this.element = element;
            this.contents = element.getElementsByClassName(this.validateContentCl);
            this.result = true;
        }
        catch (ex) {
            alert('Error tryning create object FormValidator');
            console.error(ex);
        }
    }
    FormValidator.prototype.isValid = function () {
        try {
            var totalMutiple = 1;
            var i = 0;
            var n = this.contents.length;
            this.multiples = new Array();
            this.result = true;
            while (i < n) {
                var content = this.contents[i];
                var input = content.getElementsByClassName(this.validateCl)[0];
                var msg = content.getElementsByClassName(this.validateMsgCl)[0];
                if (input != null && msg != null) {
                    this.validate(input, msg);
                    this.multiples.push(this.result ? 1 : 0);
                }
                i++;
            }
            i = 0;
            var n = this.multiples.length;
            while (i < n) {
                totalMutiple *= this.multiples[i];
                i++;
            }
            return totalMutiple > 0;
        }
        catch (ex) {
            alert('Error tryning check the validation form');
            console.log(ex);
        }
    };
    FormValidator.prototype.validate = function (input, msg) {
        switch (input.type) {
            case 'text':
            case 'search':
            case 'email':
            case 'url':
            case 'tel':
            case 'number':
            case 'range':
            case 'date':
            case 'month':
            case 'week':
            case 'time':
            case 'datetime':
            case 'datetime-local':
            case 'color':
            case 'textarea':
            case 'password':
                //Check required
                if (input.dataset.required) {
                    if (FormValidator.isEmpty(input.value)) {
                        this.showError(input, msg);
                    }
                    else {
                        this.clear(input, msg);
                        this.generalValidations(input, msg);
                    }
                }
                else {
                    this.generalValidations(input, msg);
                }
                break;
            case 'checkbox':
                //is checked
                if (input.dataset.required) {
                    if (FormValidator.isChecked(input)) {
                        this.clear(input, msg);
                    }
                    else {
                        this.showError(input, msg);
                    }
                }
                break;
            case 'radio':
                break;
            default:
                //The other inputs by default are valid
                this.result = true;
                break;
        }
    };
    FormValidator.prototype.showError = function (input, msg) {
        if (!input.classList.contains(this.errorInputCl)) {
            input.classList.add(this.errorInputCl);
        }
        if (msg.classList.contains(this.hiddenCl)) {
            msg.classList.remove(this.hiddenCl);
        }
        this.result = false;
    };
    FormValidator.prototype.clear = function (input, msg) {
        if (input.classList.contains(this.errorInputCl)) {
            input.classList.remove(this.errorInputCl);
        }
        if (!msg.classList.contains(this.hiddenCl)) {
            msg.classList.add(this.hiddenCl);
        }
        this.result = true;
    };
    FormValidator.prototype.generalValidations = function (input, msg) {
        //Check name
        if (input.dataset.name) {
            if (FormValidator.isFullName(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check email
        if (input.dataset.email) {
            if (FormValidator.isEmail(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check equals to
        if (input.dataset.equalsto) {
            var input2 = document.getElementById(input.dataset.equalsto);
            var msg2 = document.getElementById(input.dataset.inputmsg);
            if (FormValidator.isEqualsTo(input2.value, input.value)) {
                this.clear(input, msg);
                this.clear(input2, msg2);
                this.generalValidations(input2, msg);
            }
            else {
                this.showError(input, msg);
                this.showError(input2, msg2);
            }
        }
        //Check money
        if (input.dataset.money) {
            if (FormValidator.isMoney(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //check maxlength            
        if (input.dataset.maxlength) {
            if (FormValidator.maxLength(input.value, input.dataset.maxlength)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check min length
        if (input.dataset.minlength) {
            if (FormValidator.minLength(input.value, input.dataset.minlength)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check range length
        if (input.dataset.rangelength) {
            var args = input.dataset.rangelength.split("-");
            var min = args[0];
            var max = args[1];
            if (FormValidator.rangeLength(input.value, min, max)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check max number
        if (input.dataset.max) {
            if (FormValidator.max(input.value, input.dataset.max)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //check min number
        if (input.dataset.min) {
            if (FormValidator.min(input.value, input.dataset.min)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check range number
        if (input.dataset.range) {
            var args = input.dataset.range.split("-");
            var min = args[0];
            var max = args[1];
            if (FormValidator.range(input.value, min, max)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check URL
        if (input.dataset.url) {
            if (FormValidator.isURL(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check date
        if (input.dataset.date) {
            if (FormValidator.isDate(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check number
        if (input.dataset.number) {
            if (FormValidator.isNumber(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check credit card
        if (input.dataset.creditcard) {
            if (FormValidator.isCreditCard(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
        //Check user
        if (input.dataset.user) {
            if (FormValidator.isUserName(input.value)) {
                this.clear(input, msg);
            }
            else {
                this.showError(input, msg);
            }
        }
    };
    FormValidator.prototype.onsubmit = function (callback) {
        try {
            this.element.onsubmit = function (e) {
                e.preventDefault();
                callback();
            };
        }
        catch (ex) {
            alert('Error tryning submit form');
            console.log(ex);
        }
    };
    /*
    * @param String value
    * @returns true if value is fullname
    */
    FormValidator.isFullName = function (value) {
        return value.match(/^[a-zA-Z][a-zA-Z ]+$/);
    };
    /*
    * @param String value
    * @returns true if value is email
    */
    FormValidator.isEmail = function (value) {
        return value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    /*
    * @param String value
    * @returns true if value is empty
    */
    FormValidator.isEmpty = function (value) {
        return !value.match(/^\S+$|[^\s]+$/);
    };
    /*
    * @param String value
    * @param String value1
    * @returns true if both values are equals
    */
    FormValidator.isEqualsTo = function (value, value1) {
        return value === value1;
    };
    /*
    * @param String value
    * @returns true if value is money format
    */
    FormValidator.isMoney = function (value) {
        return value.match(/^\d+(,\d{3})*(\.\d*)?$/);
    };
    /*
    * @param String value
    * @param length, number of characters
    * @returns true if  value  has length characters or less
    */
    FormValidator.maxLength = function (value, length) {
        return !isNaN(length) && value.length <= length;
    };
    /*
    * @param String value
    * @param length, number of characters
    * @returns true if  value has length characters or more
    */
    FormValidator.minLength = function (value, length) {
        return !isNaN(length) && value.length >= length;
    };
    /*
    * @param String value
    * @param min, number minimum of characters
    * @param max, number maximum of characters
    * @returns true if  value is between min and max
    */
    FormValidator.rangeLength = function (value, min, max) {
        var length = value.length;
        return ((!isNaN(min) && length >= min) && (!isNaN(max) && length <= max));
    };
    /*
    * @param String value
    * @param max, number maximun
    * @returns true if  value is equals or less that max
    */
    FormValidator.max = function (value, max) {
        return (!isNaN(max) && value <= max);
    };
    /*
    * @param String value
    * @param min, number minimun
    * @returns true if value is equals or greater that min
    */
    FormValidator.min = function (value, min) {
        return (!isNaN(min) && value >= min);
    };
    /*
    * @param String value
    * @param min, number minimum
    * @param max, number maximum
    * @returns true if value is between min and max number
    */
    FormValidator.range = function (value, min, max) {
        return ((!isNaN(min) && value >= min) && (!isNaN(max) && value <= max));
    };
    /*
    * @param String value
    * @returns true if value is URL
    */
    FormValidator.isURL = function (value) {
        return value.match(/https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}/);
    };
    /*
    * @param String value
    * @returns true if value is Date
    */
    FormValidator.isDate = function (value) {
        var parms = value.split(/[\.\-\/]/);
        var yyyy = parseInt(parms[2], 10);
        ;
        var mm = parseInt(parms[1], 10);
        var dd = parseInt(parms[0], 10);
        if (yyyy < 1582) {
            var tmp = yyyy;
            yyyy = dd;
            dd = tmp;
        }
        var date = new Date(yyyy, mm - 1, dd);
        return (mm === (date.getMonth() + 1) && dd === date.getDate() && yyyy === date.getFullYear());
    };
    /*
    * @param String value
    * @returns true if value is Number
    */
    FormValidator.isNumber = function (value) {
        return !isNaN(value);
    };
    /*
    * @param String value
    * @returns true if value is credit card
    */
    FormValidator.isCreditCard = function (value) {
        return value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/);
    };
    /*
   * @param HtmlElement input
   * @returns true if input is Checked
   */
    FormValidator.isChecked = function (input) {
        return input.checked;
    };
    /*
    * @param HtmlElement input
    * @param option
    * @returns true if option is greater than zero
    */
    FormValidator.isValidOption = function (input, option) {
        return (!isNaN(option) && option > 0);
    };
    /*
    * @param HtmlElement input
    * @returns true if value is user name
    */
    FormValidator.isUserName = function (value) {
        return value.match(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/);
    };
    return FormValidator;
})();
