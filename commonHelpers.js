import{a as b,i as d,S as h}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const F="43261093-4c9b6888dd775193ca00ecdb2",x="https://pixabay.com/api/";async function g(s,r){try{const t={params:{key:F,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}},{data:l}=await b.get(`${x}`,t);return l}catch(t){alert(t)}}function m(s){return s.map(({webformatURL:r,largeImageURL:t,tags:l,likes:e,views:o,comments:c,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${r}" alt="${l}" />
            <ul class="box-list">
              <li>
                <h2 class="box-title">Likes</h2>
                <p class="box-text">${e}</p>
              </li>
              <li>
                <h2 class="box-title">Views</h2>
                <p class="box-text">${o}</p>
              </li>
              <li class="box-item">
                <h2 class="box-title">Comments</h2>
                <p class="box-text">${c}</p>
              </li>
              <li class="box-item">
                <h2 class="box-title">Downloads</h2>
                <p class="box-text">${f}</p>
              </li>
            </ul>
          </a>
        </li>`).join("")}const w=document.querySelector("form"),y=document.querySelector("ul"),i=document.querySelector(".loader"),a=document.querySelector(".btn");let u,n=1,p;i.style.display="none";a.style.display="none";w.addEventListener("submit",L);async function L(s){s.preventDefault();const r=s.target;if(n=1,u=r.elements.imgname.value,u===""){d.show({message:"Field must be filled in!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}i.style.display="block";try{const t=await g(u,n);if(t.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}),i.style.display="none",a.style.display="none",y.innerHTML="";return}i.style.display="none",y.innerHTML=m(t.hits),a.style.display="block",p=Math.ceil(t.totalHits/t.hits.length),n>=p&&(a.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"green",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3})),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),r.reset()}catch(t){alert(t)}}a.addEventListener("click",S);async function S(){a.style.display="none",i.style.display="block",n+=1;try{const s=await g(u,n);i.style.display="none",y.insertAdjacentHTML("beforeend",m(s.hits)),a.style.display="block",n>=p&&(a.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"green",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}));const t=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(s){alert(s)}}
//# sourceMappingURL=commonHelpers.js.map
