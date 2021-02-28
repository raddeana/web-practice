// RTCPeerConnectionl
// RTCPeerConnection的作用是在浏览器之间建立数据的“点对点”（peer to peer）通信，也就是将浏览器获取的麦克风或摄像头数据，传播给另一个浏览器。这里面包含了很多复杂的工作，比如信号处理、多媒体编码/解码、点对点通信、数据安全、带宽管理等等。

// 不同客户端之间的音频/视频传递，是不用通过服务器的。但是，两个客户端之间建立联系，需要通过服务器。服务器主要转递两种数据。

// 通信内容的元数据：打开/关闭对话（session）的命令、媒体文件的元数据（编码格式、媒体类型和带宽）等。
// 网络通信的元数据：IP地址、NAT网络地址翻译和防火墙等。
// WebRTC协议没有规定与服务器的通信方式，因此可以采用各种方式，比如WebSocket。通过服务器，两个客户端按照Session Description Protocol（SDP协议）交换双方的元数据。

var signalingChannel = createSignalingChannel();
var pc;
var configuration = {};

// run start(true) to initiate a call
function start(isCaller) {
    pc = new RTCPeerConnection(configuration);

    // send any ice candidates to the other peer
    pc.onicecandidate = function (evt) {
        signalingChannel.send(JSON.stringify({ "candidate": evt.candidate }));
    };

    // once remote stream arrives, show it in the remote video element
    pc.onaddstream = function (evt) {
        remoteView.src = URL.createObjectURL(evt.stream);
    };

    // get the local stream, show it in the local video element and send it
    navigator.getUserMedia({ "audio": true, "video": true }, function (stream) {
        selfView.src = URL.createObjectURL(stream);
        pc.addStream(stream);

        if (isCaller)
            pc.createOffer(gotDescription);
        else
            pc.createAnswer(pc.remoteDescription, gotDescription);

        function gotDescription(desc) {
            pc.setLocalDescription(desc);
            signalingChannel.send(JSON.stringify({ "sdp": desc }));
        }
    });
}

signalingChannel.onmessage = function (evt) {
    if (!pc)
        start(false);

    var signal = JSON.parse(evt.data);
    if (signal.sdp)
        pc.setRemoteDescription(new RTCSessionDescription(signal.sdp));
    else
        pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
};
