import{S as m,i as n}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(t){const s="https://pixabay.com/api/",o="26468965-37c536f46ba330a607460f03f",i=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(t){const s=document.querySelector(".gallery");document.querySelector(".search-form");const o=document.querySelector(".loader"),i=new m(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});if(!t||t.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),o.classList.add("is-hidden");return}if(!(t&&t.length>0)){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"});return}const r=t.map(({webformatURL:a,largeImageURL:l,tags:c,likes:d,views:f,comments:h,downloads:u})=>`<li class ='gallery-item'>
            <a class="gallery-link" href="${l}">
                <img class="gallery-image"
                  src="${a}"
                  alt="${c}"
                  width="360"
                  height="152"/>
            </a>  
            <div class='info-block'>
                <div class="info">
                    <h3 class = "head-likes">Likes</h3>
                    <p>${d}</p>
                </div>
                <div class="info">
                    <h3 class = "head-views">Views</h3>
                    <p>${f}</p>
                </div>
                <div class="info">
                    <h3 class = "head-comments">Comments</h3>
                    <p>${h}</p>
                </div>
                            <div class="info">
                    <h3 class = "head-downloads">Downloads</h3>
                    <p>${u}</p>
                </div>
            </div>
      </li>`).join("");s.innerHTML=r,i.refresh(),o.classList.add("is-hidden")}const y=document.querySelector(".search-form");y.addEventListener("submit",L);function L(t){t.preventDefault();const s=document.querySelector(".gallery"),o=document.querySelector(".loader");s.innerHTML="",o.classList.remove("is-hidden");const i=t.currentTarget.elements.search.value.trim();if(i===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),o.classList.add("is-hidden");return}o.classList.remove("is-hidden"),g(i).then(e=>{p(e.hits),t.target.reset()}).catch(e=>{n.error({title:"Error",message:`${e}`})}).finally(()=>{o.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
