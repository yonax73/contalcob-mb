/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Employee
**/
class Employee {

    private userFullNameTxt;
    private userNamePicture;
    private userNameTxt;
    private userRegisterFrm;
    private formValidator;
    private myApp;
    private cameraActionBtn;

    constructor(myApp) {
        this.myApp = myApp;
    }

    public init() {
        //atributtes
        this.userFullNameTxt = document.getElementById('user-full-name');
        this.userNamePicture = document.getElementById('user-name-picture');
        this.userNameTxt = document.getElementById('user-name');
        this.userRegisterFrm = document.getElementById('user-register-frm');
        this.formValidator = new FormValidator(this.userRegisterFrm);
        this.cameraActionBtn = document.getElementById('camera-action');
        //functions
        Utils.keyBoardScroller();
        this.userNameOnKeyUp();
        this.userRegisterFormOnSubmit();
        this.cameraActionOnClick();
    }
    /*
     * key up event user name
     */
    private userNameOnKeyUp() {
        var self = this;
        this.userNameTxt.onkeyup = function () {
            self.userNamePicture.textContent = this.value;
        };
    }
    /*
     * onsubmit user register form
     */
    private userRegisterFormOnSubmit() {
        this.formValidator.onsubmit(() => {
            if (this.formValidator.isValid()) {
                alert('ok');
            }
        });
    }
    /*
     * camera action
     */
    private cameraActionOnClick() {
        this.cameraActionBtn.onclick =()=>{
            var buttons = [
                {
                    text: 'Button1',
                    onClick:()=> {
                        this.myApp.alert('Button1 clicked');
                    }
                },
                {
                    text: 'Button2',
                    onClick: () => {
                        this.myApp.alert('Button2 clicked');
                    }
                },
                {
                    text: 'Cancel',
                    color: 'red',
                    onClick: () => {
                        this.myApp.alert('Cancel clicked');
                    }
                },
            ];
            this.myApp.actions(buttons);
        };
    }

}