const miModulo=(()=>{"use strict";const e=["C","D","H","S"],t=["A","J","Q","K"],o=(document.querySelector(".button-new"),document.querySelector(".button-primary")),n=document.querySelector(".button-danger"),r=document.querySelectorAll("small"),a=document.querySelectorAll(".container-card"),l=document.querySelector(".modal");let s=[],d=[];const c=()=>{s=[];for(let t=2;t<10;t++)for(let o of e)s.push(t+o);for(let o of e)for(let e of t)s.push(e+o);return _.shuffle(s)},u=()=>{if(0===s.length)throw"No hay cartas en el deck";return s.pop()},i=(e,t)=>(d[t]=d[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),r[t].textContent=d[t],d[t]),m=(e,t)=>{const o=document.createElement("img");o.classList.add("card"),o.src=`assets/cartas/${e}.png`,a[t].appendChild(o)},h=e=>{l.classList.add("modal--show"),l.firstElementChild.firstElementChild.textContent=e},f=e=>{let t=0;do{const o=u();if(t=i(o,d.length-1),m(o,d.length-1),e>21)break}while(t<e&&e<=21);(()=>{const[e,t]=d;setTimeout(()=>{h(t===e?"Nadie gana :(":e>21?"Computadora gana!":t>21?"Jugador gana ❤️!":"Computadora gana!")},100)})()};return o.addEventListener("click",()=>{const e=u(),t=i(e,0);m(e,0),t>21?(o.disabled=!0,n.disabled=!0,f(t)):21===t&&(n.disabled=!0,f(d[1]))}),n.addEventListener("click",()=>{o.disabled=!0,n.disabled=!0,f(d[0])}),{nuevoJuego:(e=2)=>{s=c(),d=[];for(let t=0;t<e;t++)d.push(0);r.forEach(e=>e.textContent=0),a.forEach(e=>e.innerHTML=""),n.disabled=!1,o.disabled=!1,l.classList.remove("modal--show")}}})();