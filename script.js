AFRAME.registerComponent('videoplayer', {

init: function () {

let videosource = document.querySelector('#videoclip');

let videoplay = () => {

videosource.play();

}

this.el.addEventListener('click', videoplay);

}});

AFRAME.registerComponent('videopauser', {

init: function () {

let videosource = document.querySelector('#videoclip');

let videopause = () => {

videosource.pause();

}

this.el.addEventListener('click', videopause);

}});


<script src="https://gftruj.github.io/webzamples/aframe/controls/oculus-thumbstick-controls.js"></script>