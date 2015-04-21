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
        //functions
        Utils.keyBoardScroller();
        this.userNameOnKeyUp();
        this.userRegisterFormOnSubmit();
        this.cameraActionOnClick();
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
     * camera action
     */
    Employee.prototype.cameraActionOnClick = function () {
        var _this = this;
        this.cameraActionBtn.onclick = function () {
            var buttons = [
                {
                    text: 'Button1',
                    onClick: function () {
                        _this.myApp.alert('Button1 clicked');
                    }
                },
                {
                    text: 'Button2',
                    onClick: function () {
                        _this.myApp.alert('Button2 clicked');
                    }
                },
                {
                    text: 'Cancel',
                    color: 'red',
                    onClick: function () {
                        _this.myApp.alert('Cancel clicked');
                    }
                },
            ];
            _this.myApp.actions(buttons);
        };
    };
    return Employee;
})();
