
window.onload = function(){ 
		
	var frame = document.getElementById("frame");
	for(var i = 0; i < 361; i++) {
	  timeOutSquare(i);
	}

	function timeOutSquare(i) {
	  var input = document.createElement("input")
	  input.setAttribute("type","checkbox");
	  input.setAttribute("id","pixel-" + i); 
	  setTimeout(function(){ 
		frame.appendChild(input);
		}, 
		i*10
	  );
	  input.style.background = "#ABEBC6";	  
	}
	
	var invaders = [101,107,
					121,125,
					139,140,141,142,143,144,145,
					157,158,160,161,162,164,165,
					175,176,177,178,179,180,181,182,183,184,185,
					194,196,197,198,199,200,201,202,204,
					213,215,221,223,
					235,236,238,239]

	var transformation = document.getElementById("transformation");
	var btn_invaders = document.createElement("button");
	btn_invaders.innerText = "Invaders"
	btn_invaders.onclick = function() {
		turnIntoPixelArt(invaders);
	}
	transformation.appendChild(btn_invaders)


	function turnIntoPixelArt(arr) {
		for(var i = 0; i < arr.length; i++) {
			var pixel = document.getElementById("pixel-"+arr[i])
			pixel.style.animation = "1s randomColor 1 running"
	  }
	}
};
