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
    private takePictureBtn;
    private uploadPictureGalleryBtn;
    public userPictureImg;


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
        this.userPictureImg = document.getElementById('user-picture-img');
        //functions      
        Utils.keyBoardScroller();
        this.userNameOnKeyUp();
        this.userRegisterFormOnSubmit();
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


}