/**
 * 捕获麦克风声音
 * @author Philip
 */
window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;

let context = new AudioContext();

function onSuccess(stream) {
    let audioInput = context.createMediaStreamSource(stream);
    audioInput.connect(context.destination);
}

function onError () {}

navigator.getUserMedia({ audio:true }, onSuccess, onError);