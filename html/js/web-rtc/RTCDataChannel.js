// RTCDataChannel的作用是在点对点之间，传播任意数据
// 它的API与WebSockets的API相同

let pc = new webkitRTCPeerConnection(servers, {
    optional: [{
        RtpDataChannels: true
}]});

pc.ondatachannel = function(event) {
  receiveChannel = event.channel;

  receiveChannel.onmessage = function(event){
    document.querySelector("div#receive").innerHTML = event.data;
  };
};

sendChannel = pc.createDataChannel("sendDataChannel", {reliable: false});

document.querySelector("button#send").onclick = function (){
  var data = document.querySelector("textarea#send").value;
  sendChannel.send(data);
};