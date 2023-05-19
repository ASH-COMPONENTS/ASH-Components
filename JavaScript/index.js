var arVideos = document.getElementsByTagName('video');

for (var i = arVideos.length - 1; i >= 0; i--) {
	var elmVideo = arVideos[i];
	elmVideo.autoplay = true;
}