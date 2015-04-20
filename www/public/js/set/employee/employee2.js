
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