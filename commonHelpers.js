import{S as f,i as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(s){const t="https://pixabay.com/api/",o="26468965-37c536f46ba330a607460f03f",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${t}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(s){return s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:d})=>`<li class ='gallery-item'>
            <a class="gallery-link" href="${o}">
                <img class="gallery-image"
                  src="${t}"
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
      </li>`).join("")}const l=document.querySelector(".gallery"),m=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=new f(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});m.addEventListener("submit",g);function g(s){s.preventDefault(),l.innerHTML="",c.classList.remove("is-hidden");const t=s.currentTarget.elements.search.value.trim();u(t).then(o=>{if(t===""){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"});return}const i=h(o.hits);l.innerHTML=i,p.refresh(),s.target.reset()}).catch(o=>{n.error({title:"Error",message:`${o}`})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
