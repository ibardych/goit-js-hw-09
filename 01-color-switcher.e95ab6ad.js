!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=0;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),o(),n=setInterval(o,1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",""),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.e95ab6ad.js.map