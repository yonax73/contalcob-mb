/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Employee
**/
var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.contructor = function () {
        this.init();
    };
    Employee.prototype.init = function () {
        //atributtes
        this.userFullNameTxt = document.getElementById('user-full-name');
        this.userNamePicture = document.getElementById('user-name-picture');
        this.userNameTxt = document.getElementById('user-name');
        //functions
        Utils.keyBoardScroller();
        this.userNameOnKeyUp();
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
    return Employee;
})();
