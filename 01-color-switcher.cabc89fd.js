!function(){var e,t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");function a(){document.querySelector("body").style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}d.disabled=!0,t.addEventListener("click",(function(n){t.disabled=!0,d.disabled=!1,e=setInterval(a,1e3)})),d.addEventListener("click",(function(a){t.disabled=!1,d.disabled=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.cabc89fd.js.map