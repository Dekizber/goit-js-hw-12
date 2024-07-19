import{i as c,S as g}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(r){const s=new URLSearchParams({key:"44997411-463a4997c6162e49e75a100fc",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o.hits)}const u=document.querySelector(".images-list"),l=document.querySelector(".loader"),h=r=>{const s=r.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:d})=>`<li class="images-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
          
          <div class="property">
          <p><span class="weight">Likes</span> ${t}</p>
          <p><span class="weight">Views</span> ${a}</p>
          <p><span class="weight">Comments</span> ${p}</p>
          <p><span class="weight">Downloads</span> ${d}</p>
          </div>
        </a>
      </li>`).join("");u.insertAdjacentHTML("beforeend",s)},y=()=>u.innerHTML="",i=(r=!1)=>{if(r)return l.classList.add("loader-open");l.classList.remove("loader-open")},m=document.querySelector("#search_img"),L=document.querySelector("#search_img input"),w=()=>{const r=L.value;f(r).then(s=>{if(r.length===0){i(),c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}i(),h(s),new g(".images-list a",{captionsData:"alt",captionDelay:250}),m.reset()}).catch(s=>{i(),c.error({title:"Error",message:`Something went wrong: ${s.message}`,color:"red"})})},S=r=>{r.preventDefault(),y(),i(!0),w()};m.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
