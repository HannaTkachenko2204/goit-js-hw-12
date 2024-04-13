import{a as g,i as p,S as y}from"./assets/vendor-6e0bf343.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b="43261093-4c9b6888dd775193ca00ecdb2",x="https://pixabay.com/api/";async function m(s,l){try{const o={params:{key:b,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}},{data:i}=await g.get(`${x}`,o);return i}catch(o){alert(o)}}function f(s){return s.map(({webformatURL:l,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:h})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${l}" alt="${i}" />
            <ul class="box-list">
              <li>
                <h2 class="box-title">Likes</h2>
                <p class="box-text">${e}</p>
              </li>
              <li>
                <h2 class="box-title">Views</h2>
                <p class="box-text">${t}</p>
              </li>
              <li class="box-item">
                <h2 class="box-title">Comments</h2>
                <p class="box-text">${a}</p>
              </li>
              <li class="box-item">
                <h2 class="box-title">Downloads</h2>
                <p class="box-text">${h}</p>
              </li>
            </ul>
          </a>
        </li>`).join("")}const F=document.querySelector("form"),u=document.querySelector("ul"),r=document.querySelector(".loader"),n=document.querySelector(".btn");let c,d=1;r.style.display="none";n.style.display="none";F.addEventListener("submit",L);function L(s){s.preventDefault();const l=s.target;if(c=l.elements.imgname.value,console.log(c),c===""){p.show({message:"Field must be filled in!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}r.style.display="block",m(c,d).then(o=>{if(o.hits.length===0){p.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}),r.style.display="none",n.style.display="none",u.innerHTML="";return}r.style.display="none",u.innerHTML=f(o.hits),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),n.style.display="block"}).catch(o=>alert(o)).finally(()=>l.reset())}n.addEventListener("click",S);function S(){n.style.display="none",r.style.display="block",d+=1,m(c,d).then(s=>{r.style.display="none",u.insertAdjacentHTML("beforeend",f(s.hits)),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),n.style.display="block"}).catch(s=>alert(s))}
//# sourceMappingURL=commonHelpers.js.map
