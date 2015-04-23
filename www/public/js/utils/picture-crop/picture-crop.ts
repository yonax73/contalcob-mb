/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/23/2015
@ Date update: 4/23/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: picture crop
**/
class PictureCrop {

    public init() {
        var $image = $('.img-container > img');
        $image.cropper({
            aspectRatio: 16 / 9,
            autoCropArea: 0.65,
            highlight: false,
            dragCrop: false,
            movable: false,    
            resizable:false,       
            minContainerWidth: 180,
            minContainerHeight: 180,
            minCropBoxWidth: 180,
            minCropBoxHeight: 180,
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
                /*    var parameters = {
                        pictureId: {
                            name: 'id-picture-business',
                            value: document.getElementsByName('id-picture-business')[0].value
                        },
                        objectId: {
                            name: 'id-business',
                            value: document.getElementsByName('id-business')[0].value
                        }
                    };
                    uploadImage(result.toDataURL(), '/uploadpictureBusiness', 'picture-business-img', parameters);*/
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
        // Import image
        var $inputImage = $('#inputImage'),
            URL = window.URL || window.webkitURL,
            blobURL;
        if (URL) {
            $inputImage.change(function () {
                var files = this.files;
                if (files && files.length) {
                    var filePicture = files[0];
                    if (/^image\/\w+$/.test(filePicture.type)) {
                        blobURL = URL.createObjectURL(filePicture);
                        $image.one('built.cropper', function () {
                            URL.revokeObjectURL(blobURL); // Revoke when load complete
                        }).cropper('reset', true).cropper('replace', blobURL);
                        $inputImage.val('');
                    } else {
                        alert('Please choose an image file.');
                    }
                }
            });
        } else {
            $inputImage.parent().remove();
        }
    }
}