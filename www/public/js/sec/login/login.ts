/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/21/2015
@ Date update: 4/21/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Login
**/
class Login {

    private formValidator;
    private loginFrm;

    constructor() {
    }

    public init() {
        //atributtes
        this.loginFrm = document.getElementById('login-frm');
        this.formValidator = new FormValidator(this.loginFrm);
        //functions
        this.loginFormOnSubmit();
    }

    /*
     * onsubmit user register form
     */
    private loginFormOnSubmit() {
        this.formValidator.onsubmit(() => {
            if (this.formValidator.isValid()) {
                alert('ok');
            }
        });
    }
}