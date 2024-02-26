import{S as f,i as n}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s){const o="https://pixabay.com/api/",r="26468965-37c536f46ba330a607460f03f",i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class ='gallery-item'>
            <a class="gallery-link" href="${r}">
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
                    <p>${t}</p>
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
      </li>`).join("")}const l=document.querySelector(".gallery"),m=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=new f(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});m.addEventListener("submit",g);function g(s){s.preventDefault(),l.innerHTML="";const o=s.currentTarget.elements.search.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c.classList.remove("is-hidden"),u(o).then(r=>{if(!r.hits||r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"});return}const i=h(r.hits);l.innerHTML=i,p.refresh(),s.target.reset()}).catch(r=>{n.error({title:"Error",message:`${r}`})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
