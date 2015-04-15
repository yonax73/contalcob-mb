// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true

});
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'employee') {
        config();
    }
});
try {
    window.addEventListener('native.keyboardshow', function (e) {
        var deviceHeight = window.innerHeight;
        var keyboardHeight = e.keyboardHeight;
        var height = deviceHeight - keyboardHeight;
        height = height < 0 ? (height * -1) : height;
        document.getElementById('page').style.height = height + 'px';
        $$('.page-content').scrollTop(height);

    });

    window.addEventListener('native.keyboardhide', function (e) {
        setTimeout(function () {
            var deviceHeight = window.innerHeight;
            document.getElementById('page').style.height = deviceHeight + 'px';
        }, 100)

    });

} catch (ex) {
    alert(ex.message);
}
//init config
config();
//config
function config() {
    adjusteResizeWindow();
}


