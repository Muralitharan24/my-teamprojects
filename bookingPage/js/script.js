

var themebtn = document.querySelector("body");

function changetheme(){
  // var changeval = themebtn.getAttribute("theme-type")
   if(themebtn.getAttribute("theme-type")=="light"){
      themebtn.setAttribute("theme-type","dark");
   }else{
      themebtn.setAttribute("theme-type","light");
   }
}