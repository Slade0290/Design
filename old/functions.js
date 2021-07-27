
function createSection() {
	var content = document.getElementById("content")
  content.style.gridTemplateColumns = "1fr 1fr 1fr"
  content.style.gridTemplateRows = "1fr 1fr"
	var arr = []
  var titles = ["Lamp", "Invaders", "Cellular", "Unknown", "Unknown", "Unknown"]
  for(var i = 1; i < titles.length+1; i++) {
    arr.push(getRandomColor())
    addSection(content, arr, titles, i)
	}
}

function getRandomColor() {
	return ("rgba("+getRandomInt(255) + "," +
  				getRandomInt(255) + "," +
          getRandomInt(255) + ", 0.5)")
} 

function addSection(content, arr, titles, i) {
	var square = document.createElement("div")
  square.classList.add("square")
  square.setAttribute("id","square-"+i)
	var section = document.createElement("section")
  section.setAttribute("id","section-"+i)
  section.classList.add("section")
  section.style.background = "black"
  var div = document.createElement("div")
  div.onclick = function() {expendSquare(i, titles, content)};
  var letter = titles[i-1][getRandomInt(titles.length-1)]
  titles[i-1] = titles[i-1].replace(letter, "<span>"+letter+"</span>")
  div.innerHTML = titles[i-1]
  var spanClose = document.createElement("span")
  spanClose.classList.add("close")
  spanClose.setAttribute("id","close-"+i)
  spanClose.onclick = function() {
  	removeAndRebuild(i)
  }
  section.appendChild(spanClose)
  section.appendChild(div)
  square.appendChild(section)
  setTimeout(function(){content.appendChild(square);}, i*200)
  setTimeout(function(){
  		section.style.background = arr[i-1];
      section.style.transform = "rotateY(0deg)"
      div.style.display = "block"
      }, i*400)
} 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function hideSection(i, val) {
  setTimeout(function(){
  	val.style.opacity = 0;
  }, 200*i)
}

function wait(i, val) {
  setTimeout(function(){
    val.style.display = "none";
    val.remove();
  }, 2000)
}


function removeAndRebuild(i) {
    var val = document.getElementById("square-"+i)
    val.remove();
    createSection();
}

function justWait(time){
  setTimeout(function(){
      console.log("waiting...");
  }, time)
}

function expendSquare(index, titles, content) {
  for(let i = 1; i < titles.length+1; i++) {
  	if(i != index) {
    	var val = document.getElementById("square-"+i)  
      hideSection(i, val)
    	val.style.visibility = "hidden";
      wait(i, val)
    } else {
    	justWait(i*200)
    }
  }
  var close = document.getElementById("close-"+index)
  var val = document.getElementById("square-"+index) 
  setTimeout(function(){
  	val.style.position = "absolute"
    val.style.top = 0
    val.style.bottom = 0
    val.style.left = 0
    val.style.right = 0
    val.style.height = window.innerHeight
    val.style.width = window.innerWidth
  }, 1700)  
    setTimeout(function(){
  	content.style.gridTemplateColumns = "1fr"
  	content.style.gridTemplateRows = "1fr"
  	close.style.visibility = "visible"
  }, 2000)  
}

function createLampSection() {
	var lamp = "<div id=\"lamp\">" +
		  "<div id=\"lamp-body\"></div>" +
		  "<div id=\"lamp-body-shadow\"></div>"+
		  "<div id=\"lamp-trigger\"></div>"+
		  "<div id=\"lamp-trigger-holder\"></div>"+
		  "<div id=\"lamp-ray\"></div>"+
			"</div>"
  var section1 = document.getElementById("section-1")
  
}