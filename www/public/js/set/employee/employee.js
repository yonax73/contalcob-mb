/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Employee
**/
var Employee = (function () {
    function Employee(myApp) {
        this.myApp = myApp;
    }
    Employee.prototype.init = function () {
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
    };
    /*
     * key up event user name
     */
    Employee.prototype.userNameOnKeyUp = function () {
        var self = this;
        this.userNameTxt.onkeyup = function () {
            self.userNamePicture.textContent = this.value;
        };
    };
    /*
     * onsubmit user register form
     */
    Employee.prototype.userRegisterFormOnSubmit = function () {
        var _this = this;
        this.formValidator.onsubmit(function () {
            if (_this.formValidator.isValid()) {
                alert('ok');
            }
        });
    };
    /*
     * onclick take picture
     */
    Employee.prototype.takePictureOnclick = function () {
        var _this = this;
        this.takePictureBtn.click = function () {
            _this.takePicture();
        };
    };
    /*
     * onclick upload picture gallery
     */
    Employee.prototype.uploadPictureGalleryOnclick = function () {
        var _this = this;
        this.uploadPictureGalleryBtn.click = function () {
            _this.uploadPictureGallery();
        };
    };
    /*
     * take picture
     */
    Employee.prototype.takePicture = function () {
        try {
            navigator.camera.getPicture(this.onSuccessPicture, this.onErrorPicture, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            });
        }
        catch (ex) {
            alert(ex.message);
            console.log(ex);
        }
    };
    /*
     * upload picture gallery
     */
    Employee.prototype.uploadPictureGallery = function () {
        try {
            navigator.camera.getPicture(this.onSuccessPicture, this.onErrorPicture, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
        }
        catch (ex) {
            alert(ex.message);
            console.log(ex);
        }
    };
    /*
     * on success picture
     */
    Employee.prototype.onSuccessPicture = function (dataURI) {
        this.uploaadPictureServer(dataURI);
    };
    /*
     * on error picture
     */
    Employee.prototype.onErrorPicture = function (message) {
        alert('Failed because: ' + message);
    };
    /*
     * upload picture server
     */
    Employee.prototype.uploaadPictureServer = function (dataURI) {
        this.userPictureImg.src = dataURI;
    };
    return Employee;
})();
