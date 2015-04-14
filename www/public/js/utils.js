function adjusteResizeWindow() {
    var inputs = document.querySelectorAll('input');
    var n = inputs.length;
    for (var i = 0; i < n; i++) {
        var input = inputs[i];
        input.addEventListener('focus', function (e) {
            var inp = this;
            setTimeout(function () {
                $$('.page-content').scrollTop($$(inp).offset().top);
                inp.focus();
            }, 1000);

        }, true);
    }
}