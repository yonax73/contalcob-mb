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
    private userPictureImg;

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
        this.takePictureBtn = document.getElementById('take-picture-btn');
        this.uploadPictureGalleryBtn = document.getElementById('upload-picture-gallery-btn');
        this.userPictureImg = document.getElementById('user-picture-img');
        //functions
        Utils.keyBoardScroller();
        this.userNameOnKeyUp();
        this.userRegisterFormOnSubmit();
        this.takePictureOnclick();
        this.uploadPictureGalleryOnclick();
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
     * onclick take picture
     */
    private takePictureOnclick() {
        this.takePictureBtn.click = () => {
            this.takePicture();
        }
    }
    /*
     * onclick upload picture gallery
     */
    private uploadPictureGalleryOnclick() {
        this.uploadPictureGalleryBtn.click = () => {
            this.uploadPictureGallery();
        }
    }
    /*
     * take picture
     */
    private takePicture() {
        try {
            navigator.camera.getPicture(this.onSuccessPicture, this.onErrorPicture, {
                quality: 50
                , destinationType: Camera.DestinationType.FILE_URI
            });
        } catch (ex) {
            alert(ex.message);
            console.log(ex);
        }
    }
    /*
     * upload picture gallery
     */
    private uploadPictureGallery() {
        try {
            navigator.camera.getPicture(this.onSuccessPicture, this.onErrorPicture, {
                quality: 50
                , destinationType: Camera.DestinationType.FILE_URI
                , sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
        } catch (ex) {
            alert(ex.message);
            console.log(ex);
        }
    }
    /*
     * on success picture
     */
    private onSuccessPicture(dataURI) {
        this.uploaadPictureServer(dataURI);
    }
    /*
     * on error picture
     */
    private onErrorPicture(message) {
        alert('Failed because: ' + message);
    }
    /*
     * upload picture server
     */
    private uploaadPictureServer(dataURI) {
        this.userPictureImg.src = dataURI;
    }

}