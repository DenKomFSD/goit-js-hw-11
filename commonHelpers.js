import{i as l,S as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function g(t){const o="https://pixabay.com/api/",s="26468965-37c536f46ba330a607460f03f",i=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".gallery"),p=document.querySelector(".search-form"),a=document.querySelector(".loader");p.addEventListener("submit",y);function y(t){t.preventDefault(),c.innerHTML="",a.classList.remove("is-hidden");const o=t.currentTarget.elements.search.value.trim();if(o===""){l.error({title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),a.classList.add("is-hidden");return}a.classList.remove("is-hidden"),g(o).then(s=>{L(s.hits),t.target.reset()}).catch(s=>{l.error({title:"Error",message:`${s}`})}).finally(()=>{a.classList.add("is-hidden")})}function L(t){const o=new m(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});if(!t||t.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),a.classList.add("is-hidden");return}if(!(t&&t.length>0)){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"});return}const i=t.map(({webformatURL:e,largeImageURL:r,tags:n,likes:d,views:f,comments:h,downloads:u})=>`<li class ='gallery-item'>
            <a class="gallery-link" href="${r}">
                <img class="gallery-image"
                  src="${e}"
                  alt="${n}"
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
      </li>`).join("");c.innerHTML=i,o.refresh(),a.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
