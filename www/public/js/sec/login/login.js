/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/21/2015
@ Date update: 4/21/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Login
**/
var Login = (function () {
    function Login() {
    }
    Login.prototype.init = function () {
        //atributtes
        this.loginFrm = document.getElementById('login-frm');
        this.formValidator = new FormValidator(this.loginFrm);
        //functions
        this.loginFormOnSubmit();
    };
    /*
     * onsubmit user register form
     */
    Login.prototype.loginFormOnSubmit = function () {
        var _this = this;
        this.formValidator.onsubmit(function () {
            if (_this.formValidator.isValid()) {
                alert('ok');
            }
        });
    };
    return Login;
})();
