import{a as b,i as d,S as p}from"./assets/vendor-6e0bf343.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const F="43261093-4c9b6888dd775193ca00ecdb2",x="https://pixabay.com/api/";async function g(s,l){try{const t={params:{key:F,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}},{data:r}=await b.get(`${x}`,t);return r}catch(t){alert(t)}}function m(s){return s.map(({webformatURL:l,largeImageURL:t,tags:r,likes:e,views:o,comments:c,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${l}" alt="${r}" />
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
        </li>`).join("")}const L=document.querySelector("form"),y=document.querySelector("ul"),n=document.querySelector(".loader"),i=document.querySelector(".btn");let u,a=1,h;n.style.display="none";i.style.display="none";L.addEventListener("submit",w);function w(s){s.preventDefault();const l=s.target;if(a=1,u=l.elements.imgname.value,u===""){d.show({message:"Field must be filled in!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}n.style.display="block",g(u,a).then(t=>{if(t.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}),n.style.display="none",i.style.display="none",y.innerHTML="";return}n.style.display="none",y.innerHTML=m(t.hits),i.style.display="block",h=Math.ceil(t.totalHits/t.hits.length),a>=h&&(i.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"green",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3})),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>alert(t)).finally(()=>l.reset())}i.addEventListener("click",S);function S(){i.style.display="none",n.style.display="block",a+=1,g(u,a).then(s=>{n.style.display="none",y.insertAdjacentHTML("beforeend",m(s.hits)),i.style.display="block",a>=h&&(i.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"green",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}));const t=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>alert(s))}
//# sourceMappingURL=commonHelpers.js.map
