!function(){
//!Вариант 1
//!Вариант 2
var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),n=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){o.style.backgroundColor=(console.log("#".concat(Math.floor(16777215*Math.random()).toString(16))),"#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.308c28ca.js.map
