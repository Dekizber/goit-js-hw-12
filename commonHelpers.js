import{a as b,S as v,i as l}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function S(t,r,o){return(await b.get("https://pixabay.com/api/",{params:{key:"44997411-463a4997c6162e49e75a100fc",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}})).data}const g=document.querySelector(".images-list"),m=document.querySelector(".loader"),q=t=>{const r=t.hits.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:i,comments:L,downloads:w})=>`<li class="images-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
          
          <div class="property">
          <p><span class="weight">Likes</span> ${s}</p>
          <p><span class="weight">Views</span> ${i}</p>
          <p><span class="weight">Comments</span> ${L}</p>
          <p><span class="weight">Downloads</span> ${w}</p>
          </div>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",r)},E=()=>g.innerHTML="",c=(t=!1)=>{if(t)return m.classList.add("loader-open");m.classList.remove("loader-open")},f=document.querySelector("#search_img"),$=document.querySelector("#search_img input"),d=document.querySelector(".loadBtn"),C=document.querySelector(".images-list");let n;const u=15;let p=0,h;const M=new v(".images-list a",{captionsData:"alt",captionDelay:250}),B=()=>{h=$.value.trim(),f.reset(),y()},O=t=>{t.preventDefault(),n=0,E(),B()},y=async()=>{n+=1;try{c(!0);const t=await S(h,n,u);if(t.hits.length===0){c(),l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"bottomRight"});return}if(q(t),c(),M.refresh(),p=Math.ceil(t.totalHits/u),n>=p?(d.classList.remove("loadBtn-open"),l.info({message:"We're sorry, but you've reached the end of search results.",color:"yellow",position:"bottomCenter"})):d.classList.add("loadBtn-open"),n!==1){const o=C.firstElementChild.getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}}catch{c(),l.error({title:"Error",message:`Something went wrong: ${err.message}`,color:"red",position:"bottomRight"})}},P=()=>{y()};f.addEventListener("submit",O);d.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
