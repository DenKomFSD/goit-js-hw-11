import{i as n,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(i){const o="https://pixabay.com/api/",t="26468965-37c536f46ba330a607460f03f",s=new URLSearchParams({key:t,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(i,o){if(!o){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"});return}return i.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:a,comments:f,downloads:h})=>`<li class ='gallery-item'>
            <a class="gallery-link" href="${s}">
                <img class="gallery-image"
                  src="${t}"
                  alt="${e}"
                  width="360"
                  height="152"/>
            </a>  
            <div class='info-block'>
                <div class="info">
                    <h3 class = "head-likes">Likes</h3>
                    <p>${r}</p>
                </div>
                <div class="info">
                    <h3 class = "head-views">Views</h3>
                    <p>${a}</p>
                </div>
                <div class="info">
                    <h3 class = "head-comments">Comments</h3>
                    <p>${f}</p>
                </div>
                            <div class="info">
                    <h3 class = "head-downloads">Downloads</h3>
                    <p>${h}</p>
                </div>
            </div>
      </li>`).join("")}const l=document.querySelector(".gallery"),g=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=new d(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});g.addEventListener("submit",y);function y(i){i.preventDefault(),l.innerHTML="";const o=i.currentTarget.elements.search.value.trim();if(o===""){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c.classList.remove("is-hidden"),u(o).then(t=>{const s=t.hits&&t.hits.length>0,e=m(t.hits,s);l.innerHTML=e,s?p.refresh():n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),i.target.reset()}).catch(t=>{n.error({title:"Error",message:`${t}`})}).finally(()=>{c.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
