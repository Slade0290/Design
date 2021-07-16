var onoff = false;

window.onload = function(){ 

	const animated = document.getElementById("lamp-trigger");
	var lampTriggerHolder = document.getElementById("lamp-trigger-holder");

	lampTriggerHolder.onclick = async function() {
			document.getElementById("lamp-trigger").style.animation = "1s turnlightonoff 1"
		await sleep(400);
		if(!onoff) {
		  // color handler
		  var mainbg = "rgb(228,225,193)";
		  document.getElementById("lamp").style.backgroundColor = mainbg;
		  var bg = "radial-gradient(circle at 105px 80px, rgba(228,225,193,1) 7%, rgba(68,61,61,0.90) 40%)";
		  document.getElementById("lamp").style.background = bg;
		  var ds = "drop-shadow(0 0 0.75rem rgb(228,225,193))";
		  document.getElementById("lamp-body").style.filter = ds;
		  document.getElementById("main").style.backgroundColor = "rgba(48,41,41,0.90)"
		} else {
		  document.getElementById("main").style.backgroundColor = "white"
		  document.getElementById("lamp").style.backgroundColor = "white";
		  document.getElementById("lamp").style.background = "white";
		  document.getElementById("lamp-body").style.filter = "";
		}
		onoff = !onoff;	
	}
	
	animated.addEventListener('animationend', () => {
	  document.getElementById("lamp-trigger").style.animation = "";
	});
	
	
};


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


