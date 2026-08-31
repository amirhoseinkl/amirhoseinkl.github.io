const body = document.querySelector("body");
const colorElem = document.querySelector("#color")
body.addEventListener("keyup", function(e){
      let red = Math.floor(Math.random() * 255)
      let green = Math.floor(Math.random() * 255)
      let blu = Math.floor(Math.random() * 255)

      let generateColor = `rgb(${red}, ${green}, ${blu})`;
      
      if(e.keyCode === 32){
   body.style.backgroundColor = generateColor;
   colorElem.innerHTML=generateColor
      }
})
