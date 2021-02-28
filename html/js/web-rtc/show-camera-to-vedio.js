/**
 * 将视频展示在页面上
 * @author Philip
 */
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia) {
    let constraints = {video: true};

    function onSuccess(stream) {
        let video = document.querySelector('#webcam');

        video.srcObject = stream;
        video.autoplay = true; 
    }

    function onError(error) {
        console.error('navigator.getUserMedia error: ', error);
    }

    navigator.getUserMedia(constraints, onSuccess, onError);
}