import{S as f,i as n}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(t){const o="https://pixabay.com/api/",s="26468965-37c536f46ba330a607460f03f",i=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(t){return!t||t.length===0?(iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),""):t.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:d})=>`<li class ='gallery-item'>
            <a class="gallery-link" href="${s}">
                <img class="gallery-image"
                  src="${o}"
                  alt="${i}"
                  width="360"
                  height="152"/>
            </a>  
            <div class='info-block'>
                <div class="info">
                    <h3 class = "head-likes">Likes</h3>
                    <p>${e}</p>
                </div>
                <div class="info">
                    <h3 class = "head-views">Views</h3>
                    <p>${r}</p>
                </div>
                <div class="info">
                    <h3 class = "head-comments">Comments</h3>
                    <p>${a}</p>
                </div>
                            <div class="info">
                    <h3 class = "head-downloads">Downloads</h3>
                    <p>${d}</p>
                </div>
            </div>
      </li>`).join("")}const l=document.querySelector(".gallery"),m=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=new f(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});m.addEventListener("submit",g);function g(t){t.preventDefault(),l.innerHTML="";const o=t.currentTarget.elements.search.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c.classList.remove("is-hidden"),u(o).then(s=>{const i=h(s.hits);l.innerHTML=i,p.refresh(),t.target.reset()}).catch(s=>{n.error({title:"Error",message:`${s}`})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
