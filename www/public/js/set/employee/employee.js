/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Employee
**/
(function () {

    'use strict';

    var userFullNameTxt,
    userNamePicture,
    userNameTxt;

    window.Employee = function () {
        init();
    }
    /*
     * init
     */
    function init() {
        //atributtes
        userFullNameTxt = document.getElementById('user-full-name');
        userNamePicture = document.getElementById('user-name-picture');
        userNameTxt = document.getElementById('user-name');
        //functions
        keyBoardScroller();        
        userNameOnKeyUp();        
    }
    /*
     * key up event user name
     */
    function userNameOnKeyUp() {
        userNameTxt.onkeyup = function () {
            userNamePicture.textContent = this.value;            
        };
    }







})();