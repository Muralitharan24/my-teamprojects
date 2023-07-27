var body = document.querySelector("body");
var activeoption1 = document.querySelectorAll("[option-active='false']");
var activeoption2 = document.querySelectorAll("[option-active='true']");
var customselect = document.querySelectorAll("[custom-select='true']");
var dropdownlist = document.querySelectorAll("[custom-select='false']");

/* Applying background for radio button when selecting */

activeoption1.forEach(function(el){
    el.addEventListener("click",function(){
        activeoption1.forEach(function(e){
            e.classList.remove("zln-active");
        })
        el.classList.add("zln-active");
    })  
})

activeoption2.forEach(function(el){
    el.addEventListener("click",function(){
        activeoption2.forEach(function(e){
            e.classList.remove("zln-active");
        })
        el.classList.add("zln-active");
    })  
})

/* Applying background for radio button when selecting */
