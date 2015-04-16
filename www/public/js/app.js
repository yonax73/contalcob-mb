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
    if (page.name === 'employee') {
        //adjuste deive
        configApp();
    }
});
/*
 * start app
 */
function startApp() {
    //keyboard listeners
    keyBoardListener();
    //config app
    configApp();
}
/*
 * config app
 */
function configApp() {
    //adjuste device
    adjustDeviceSize();
}




