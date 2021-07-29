
function createSection() {
	var content = document.getElementById("content")
  content.style.display = "grid"
  content.style.gridTemplateColumns = "1fr 1fr 1fr"
  content.style.gridTemplateRows = "1fr 1fr"
	var arr = []
  var titles = ["Lamp", "Invaders", "Cellular", "Countdown", "Unknown", "Unknown"]
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
  var div = document.createElement("div")
  div.setAttribute("id","title-" + i);
  div.classList.add("title")
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
  }, 2000)
}

function removeAndRebuild(i) {
    var val = document.getElementById("square-"+i)
    val.remove();
    createSection();
}

function waitAndRemove(time, val){
  setTimeout(function(){
    val.remove();
  }, time)
}

function expendSquare(index, titles, content) {
  for(let i = 1; i < titles.length+1; i++) {
    var val = document.getElementById("square-"+i)
    hideSection(i, val)
    val.style.visibility = "hidden";
    wait(i, val)
    if(i != index) {
    	waitAndRemove(2000, val)
    }
  }
  var val = document.getElementById("square-"+index)
  var close = document.getElementById("close-"+index)
  setTimeout(function(){
  	val.style.visibility = "visible";
    val.style.display = "block";
  	val.style.position = "absolute"
    val.style.top = 0
    val.style.bottom = 0
    val.style.left = 0
    val.style.right = 0
    val.style.height = window.innerHeight
    val.style.width = window.innerWidth
  }, 2500)  
    setTimeout(function(){
    val.style.opacity = 1;
  	content.style.gridTemplateColumns = "1fr"
  	content.style.gridTemplateRows = "1fr"
  	close.style.visibility = "visible"
  }, 2700)
  val.firstElementChild.children[1].onclick = function() {
  	removeAndRebuild(index)
  }
  setTimeout(function(){
    createSectionContent(titles[index-1].replace("<span>", "").replace("</span>",""), index)    
}, 2800)
}

function createSectionContent(sectionName, index) {
  console.log("In createSectionContent")
  console.log(sectionName)
  console.log(index)
  if(sectionName == "Countdown") {
    console.log("In if sectionName == countdown")
    createCountdown(index);
  }
}

function createLampSection(index) {
	var lamp = "<div id=\"lamp\">" +
		  "<div id=\"lamp-body\"></div>" +
		  "<div id=\"lamp-body-shadow\"></div>"+
		  "<div id=\"lamp-trigger\"></div>"+
		  "<div id=\"lamp-trigger-holder\"></div>"+
		  "<div id=\"lamp-ray\"></div>"+
			"</div>"
  var el = document.getElementById("section-" + index)
  el.append(lamp)
  console.log("END - createLampSection")
  
}

function createCountdown(index) {
  var countdown = "<div id=\"countdown\" class=\"section-content\">" +
  "<h1>Another world will be created in : </h1>" +
    "<div class=\"countdown\">" +
      "<div class=\"number-content\"><div id=\"days\" class=\"number\">*</div><div class=\"label\">days</div></div>" +
      "<div class=\"number-content\"><div id=\"hours\" class=\"number\">*</div><div class=\"label\">hours</div></div>" +
      "<div class=\"number-content\"><div id=\"minutes\" class=\"number\">*</div><div class=\"label\">minutes</div></div>" +
      "<div class=\"number-content\"><div id=\"seconds\" class=\"number\">*</div><div class=\"label\">seconds</div></div>" +
    "</div>" +
  "</div>";
  var el = document.getElementById("section-" + index);
  el.insertAdjacentHTML( 'beforeend', countdown );
  console.log("END - createCountdown")
    
  // Set the date we're counting down to
  var countDownDate = new Date("Aug 24, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}