### RTCDataChannel 和 RTCPeerConnectionl
由于这两个API比较复杂，一般采用外部函数库进行操作。
目前，视频聊天的函数库有SimpleWebRTC、easyRTC、webRTC.io，点对点通信的函数库有PeerJS、Sharefest。

### WebVTT
- Web视频文本跟踪格式 (WebVTT) 是一种使用<track>元素显示定时文本轨道（如字幕或标题）的格式
- WebVTT文件的主要用途是将文本叠加添加到<video>
W- ebVTT是一种基于文本的格式，必须使用UTF-8进行编码

```
WEBVTT

00:01.000 --> 00:04.000
Never drink liquid nitrogen. 别喝液氮。

00:05.000 --> 00:09.000
- 它会刺穿你的胃。
- It will perforate your stomach.
- 你可能会因此挂掉。
- You could die.
```

### Styling WebVTT cues
```
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

### example
```
<video controls autoplay src="video.webm">
 <track default src="track.vtt">
</video>
```

```
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Style blocks cannot use blank lines nor "dash dash greater than" */

NOTE comment blocks can be used between style blocks.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Hello <b>world</b>.

NOTE style blocks cannot appear after the first cue.
```