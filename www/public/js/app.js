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

    switch (e.detail.page.name) {
        case 'employee':                                                        //employee           
            var employee = new Employee(myApp);
            employee.init();
            break;
        case 'picture-crop':                                                    //picture-crop
            var userPictureImg = document.getElementById('user-picture-img');
            var pictureCrop = new PictureCrop(myApp, userPictureImg.src);
            pictureCrop.init();
            pictureCrop.saveChangesAction(function (result) {
                PictureCrop.myApp.showPreloader();
                userPictureImg.src = result.toDataURL();
                myApp.hidePreloader();
                mainView.router.back();
            });
            pictureCrop.takePictureAction({ quality: 50, destinationType: Camera.DestinationType.FILE_URI });
            pictureCrop.importPictureAction({ quality: 50, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
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





