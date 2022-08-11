//!Вариант 1
//!Вариант 2
const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let a=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,a=setInterval((()=>{o.style.backgroundColor=(console.log(`#${Math.floor(16777215*Math.random()).toString(16)}`),`#${Math.floor(16777215*Math.random()).toString(16)}`)}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.9c43a190.js.map
