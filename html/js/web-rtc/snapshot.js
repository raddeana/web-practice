/**
 * 截屏
 * @author Philip
 */

let video = document.querySelector('#webcam');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let localMediaStream = null;

function snapshot () {
    ctx.drawImage(video, 0, 0);
    document.querySelector('img').src = canvas.toDataURL('image/webp');
}

video.addEventListener('click', snapshot, false);

navigator.getUserMedia({ video: true }, function(stream) {
    video.srcObject = stream;
    video.autoplay = true;
}, function () {});
