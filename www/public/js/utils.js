function keyBoardListener() {
    try {
        window.addEventListener('native.keyboardshow', function (e) {
            var deviceHeight = window.innerHeight;
            var keyboardHeight = e.keyboardHeight;
            var  deviceHeightAdjusted = deviceHeight - keyboardHeight;
            deviceHeightAdjusted = deviceHeightAdjusted < 0 ? (deviceHeightAdjusted * -1) : deviceHeightAdjusted;
            document.getElementById('page').style.height = deviceHeightAdjusted + 'px';
            document.getElementById('page').setAttribute('keyBoardHeight',keyboardHeight);
        });
        window.addEventListener('native.keyboardhide', function (e) {
            setTimeout(function () {
                document.getElementById('page').style.height = 100 + '%';
            }, 100);
        });
    } catch (ex) {
        alert(ex.message);
    }
}
function adjustDeviceSize() {
    try{
        var inputs = document.querySelectorAll('input');
        var n = inputs.length;
        for (var i = 0; i < n; i++) {
            var input = inputs[i];
            input.addEventListener('click', function (e) {
                var inp = this;                
                settimeout(function () {
                    var padding = 25;
                    var targetPosition = $$(inp).offset().top + padding;
                    var keyBoardHeight = document.getElementById('page').getAttribute('keyBoardHeight');
                    alert(targetPosition)
                    if (targetPosition >= keyBoardHeight) {                       
                            $$('.page-content').scrollTop(targetPosition);
                        }                    
                }, 400);
            }, true);
        }
    } catch (ex) {
        alert(ex.message);
    }
}