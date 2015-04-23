// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true

});
//start app
startApp();
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    switch (e.detail.page.name) {
        case 'employee':                                                        //employee
            var employee = new Employee(myApp);
            employee.init();
            break;
        case 'picture-crop':                                                    //picture-crop
            var pictureCrop = new PictureCrop();
            pictureCrop.init();
            break;
    }

});
/*
 * start app
 */
function startApp() {
    //keyboard listeners
    Utils.keyBoardListener();
    Utils.keyBoardScroller();
    //Init login view
    var login = new Login();
    login.init();
}





