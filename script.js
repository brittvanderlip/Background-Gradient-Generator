window.addEventListener("load", init);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".random");
var body = document.getElementById("gradient");

function init() {
  color1.addEventListener("input", setGradient);

  color2.addEventListener("input", setGradient);

  random.addEventListener("click", randomColors);
}

//Change the background color gradient to current or selected colors
function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = "background: " + body.style.background + ";";
}

//Set random hexadecimal colors
function randomColors(){
  color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  setGradient();
}
