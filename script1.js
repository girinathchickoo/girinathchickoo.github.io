var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var h3=document.querySelector("h3");
var body=document.getElementById("bg");




function setcolor(){

	body.style.background= "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
   console.log(body.style);
    
   h3.textContent= body.style.background;
}

color1.addEventListener("input",setcolor);
color2.addEventListener("input",setcolor);

