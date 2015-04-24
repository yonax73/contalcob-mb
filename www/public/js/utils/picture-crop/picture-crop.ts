/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/23/2015
@ Date update: 4/23/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: picture crop
**/
class PictureCrop {

    private takePictureBtn;
    private importPictureBtn;
    static pictureCropImg;
    static saveChangesActionFn;
    static myApp;

    constructor(myApp,dataURI) {
        this.takePictureBtn = document.getElementById('take-picture-pc-btn');
        this.importPictureBtn = document.getElementById('import-picture-pc-btn');        
        PictureCrop.pictureCropImg = document.getElementById('picture-crop-img');
        PictureCrop.pictureCropImg.src = dataURI;
        PictureCrop.myApp = myApp;
    }

    public init() {
        //init croppper
        var $image = $('.img-container > img');
        $image.cropper({
            autoCropArea: 0.65,
            highlight: false,
            dragCrop: false,
            movable: false,
            resizable: false,
            minContainerWidth: 132,
            minContainerHeight: 132,
            minCropBoxWidth: 132,
            minCropBoxHeight: 132,
            preview: ".img-preview"
        });
        // Methods
        $(document.body).on('click', '[data-method]', function () {
            var data = $(this).data(),
                $target,
                result;
            if (data.method) {
                data = $.extend({}, data); // Clone a new one
                if (typeof data.target !== 'undefined') {
                    $target = $(data.target);
                    if (typeof data.option === 'undefined') {
                        try {
                            data.option = JSON.parse($target.val());
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                }
                result = $image.cropper(data.method, data.option);
                if (data.method === 'getCroppedCanvas') {                    
                    if (PictureCrop.saveChangesActionFn) {
                        try {
                            PictureCrop.saveChangesActionFn(result);
                        } catch (ex) {
                            PictureCrop.myApp.hidePreloader();
                            alert(ex.message);
                            console.log(ex);
                        }
                    }
                }
            }
        }).on('keydown', function (e) {
            switch (e.which) {
                case 37:
                    e.preventDefault();
                    $image.cropper('move', -1, 0);
                    break;
                case 38:
                    e.preventDefault();
                    $image.cropper('move', 0, -1);
                    break;
                case 39:
                    e.preventDefault();
                    $image.cropper('move', 1, 0);
                    break;
                case 40:
                    e.preventDefault();
                    $image.cropper('move', 0, 1);
                    break;
            }
        });
    }


    public saveChangesAction(fn) {
        PictureCrop.saveChangesActionFn = fn;
    }

    public takePictureAction(parameters) {
        this.takePictureBtn.onclick = () => {
            this.getPicture(parameters);
        }
    }

    public importPictureAction(parameters) {
        this.importPictureBtn.onclick = () => {
            this.getPicture(parameters);
        }
    }

    private getPicture(parameters) {
        try {
            PictureCrop.disabled(true);
            PictureCrop.myApp.showPreloader();
            navigator.camera.getPicture(this.onSuccess, this.onError, parameters);
        } catch (ex) {
            PictureCrop.myApp.hidePreloader();
            PictureCrop.disabled(false);
            alert(ex.message);
            console.log(ex);
        }
    }

    public onSuccess(dataURI) {
        PictureCrop.refresh(dataURI);
    }

    public onError(message) {
        alert('failed because: ' + message);
    }

    static refresh(dataURI) {
        try {
            var $image = $('.img-container > img');
            $image.one('built.cropper', function () {
                PictureCrop.disabled(false);
                PictureCrop.myApp.hidePreloader();
            }).cropper('reset', true).cropper('replace', dataURI);
        } catch (ex) {
            PictureCrop.myApp.hidePreloader();
            PictureCrop.disabled(false);
            alert(ex.message);
            console.log(ex);
        }
    }

    static disabled(value) {
        document.getElementById('zoom-plus-pc-btn').disabled = value;
        document.getElementById('zoom-minus-pc-btn').disabled = value;
        document.getElementById('rotate-pc-btn').disabled = value;
        document.getElementById('save-changes-pc-btn').disabled = value;
        document.getElementById('import-picture-pc-btn').disabled = value;
        document.getElementById('take-picture-pc-btn').disabled = value;
    }

}