var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	var playButton = document.querySelectorAll("button");
	playButton[0].innerHTML = "<img src = './images/play.png' alt = 'Play Video' width = 30>";
	// cited from https://www.google.com/search?newwindow=1&hl=en&tbm=isch&source=hp&biw=1129&bih=862&ei=natZXrmgFKLi9AOB9pzACg&q
	playButton[1].innerHTML = "<img src = './images/pause.jpg' alt = 'pause Video' width = 30>";
	// https://www.google.com/search?q=stop+icon&tbm=isch&ved=2ahUKEwj05ouZvPXnAhXJWKwKHW_SD2sQ2-cCegQIABAA&oq=stop+icon&gs_l=img.3..0i67l2j0l8.28217.31196..31465...1.0..1.464.2630.0j1j2j3j2......0....1..gws-wiz-img.......0i7i30j0i8i7i30j0i5i30j0i8i30.IPHY2IA_pWw&ei=oatZXrSSJsmxsQXvpL_YBg&bih=862&biw=1129&hl=en#imgrc=X16lrBXTTCqiCM
}

function playVid() { 

	console.log("Play Video");
	video.play();
} 

function pauseVid() { 

	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate );
} 

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= video.duration){
			video.currentTime = 0;
			video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
		if (video.muted){
			console.log("Unmuted");
			document.getElementById('mute').innerHTML = "Mute";
			video.muted = false;
		}
		else{
			console.log("Muted");
			document.getElementById('mute').innerHTML = "Unmuted";
			video.muted = true;
		}    	
}

function changeVolume() {
	video.volume = document.getElementById("volumeSlider").value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
;	console.log("Volume is " + video.volume * 100);
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color") 
}
