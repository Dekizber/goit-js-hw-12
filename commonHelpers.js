import{i as c,S as g}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){const t=new URLSearchParams({key:"44997411-463a4997c6162e49e75a100fc",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o.hits)}const u=document.querySelector(".images-list"),l=document.querySelector(".loader"),h=s=>{const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:p,downloads:d})=>`<li class="images-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
          
          <div class="property">
          <p><span class="weight">Likes</span> ${r}</p>
          <p><span class="weight">Views</span> ${n}</p>
          <p><span class="weight">Comments</span> ${p}</p>
          <p><span class="weight">Downloads</span> ${d}</p>
          </div>
        </a>
      </li>`).join("");u.insertAdjacentHTML("beforeend",t)},y=()=>u.innerHTML="",i=(s=!1)=>{if(s)return l.classList.add("loader-open");l.classList.remove("loader-open")},m=document.querySelector("#search_img"),L=document.querySelector("#search_img input"),w=()=>{const s=L.value.trim();f(s).then(t=>{if(console.log(t),t.length===0){i(),c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"bottomRight"});return}i(),h(t),new g(".images-list a",{captionsData:"alt",captionDelay:250}).refresh(),m.reset()}).catch(t=>{i(),c.error({title:"Error",message:`Something went wrong: ${t.message}`,color:"red",position:"bottomRight"})})},S=s=>{s.preventDefault(),y(),i(!0),w()};m.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
