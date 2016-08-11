var HeaderMouseIn = function(e) {
	e.style.backgroundColor = "rgba(255,255,255,0.8)";
}
var HeaderMouseOut = function(e) {
	e.style.backgroundColor = "rgba(255,255,255,0.5)";
}

var mainBackgroundChange = function() {
	var imgarr = ["yel", "gra", "bla", "ora", "red", "blu", "pin"];
	var bgimg = document.body.style.backgroundImagei;
	var idx = bgimg.indexOf("slash")+6;
	var imgname = bgimg.substring(idx,idx+3);
	var nxtimgidx = imgarr.indexOf(imgname);
	if(nxtimgidx < 6) document.body.style.backgroundImage = bgimg.substring(0,idx) + imgarr[nxtimgidx+1] + bgimg.substring(idx+4);
	else document.body.style.backgroundImage = bgimg.substring(0,idx) + imgarr[0] + bgimg.substring(idx+4);
}

window.onload = mainBackgroundChange;
