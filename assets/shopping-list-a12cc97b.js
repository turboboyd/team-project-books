import{n as z,s as b,a as x,b as W,d as M,e as j,f as R,g as T}from"./book-shop@2x-f35c1a4c.js";function c(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n),z.Notify.failure(`${n}`)}}function V(t){return t.map((e,i)=>`<li class="shopping-item">
    <img
      class="shopping-book-cover"
      src="${e.book_image}"
      alt="${e.title}"
      width="100"
      height="142"
      loading="lazy"
    />
    <div class="shopping-wrap">
      <h2 class="shopping-book-title">${e.title}</h2>
      <button class="shopping-trash" type="button" data-id="${e._id}" data-index="${i}">
        <svg class="icon-shopping-trash" width="18" height="18">
          <use href="${b}#icon-trash"></use>
        </svg>
      </button>

      <p class="shopping-book-categories">${e.list_name}</p>
      <p class="shopping-book-description text">${e.description}</p>
      <div class="shopping-wrapper">
        <p class="shopping-book-author">${e.author}</p>

        <ul class="shop-list">
          <li>
            <a class="shop-link" href="${e.buy_links[0].url}" target="_blank">
              <img
                class="shop-img amazon icon-shop-1"
                srcset="${x} 1x, ${W} 2x"
                src="${x}";
                alt="Amazon shop"
                width="32"
                height="11"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${e.buy_links[1].url}" target="_blank">
              <img
                class="shop-img icon-shop-2"
                srcset="${M} 1x, ${j} 2x"
                src="${M}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${e.buy_links[4].url}" target="_blank">
              <img
                class="shop-img icon-shop-3"
                srcset=" ${R} 1x, ${T} 2x"
                src="${T}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>`).join("")}function J(){return`<ul class="nav-pagination-btn pagination-btn-left"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="first-page">
        <svg class="icon-arrow icon-arrow-left" width="24" height="24">
          <use href="${b}#icon-double-small-left"></use>
        </svg>
        
      </button>
    </li>
    <li class="nav-btn-item">
      <button
        type="button"
        class="pagination-btn-nav"
        data-go-to="previos-page"
      >
        <svg class="icon-arrow icon-arrow-left" width="24" height="24">
          <use href="${b}#icon-small-left"></use>
        </svg>
      </button>
    </li></ul>`}function K(){return`<ul class="nav-pagination-btn pagination-btn-right"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="next-page">
        <svg class="icon-arrow icon-arrow-right" width="24" height="24">
          <use href="${b}#icon-small-right"></use>
        </svg>
      </button>
    </li>
    <li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="last-page">
        <svg class="icon-arrow icon-arrow-right" width="24" height="24">
          <use href="${b}#icon-double-small-right"></use>
        </svg>
        
      </button>
    </li></ul>`}const d=document.querySelector(".pagination-list");let m=y()?4:3,k=y()?2:3,a=document.querySelector(".more-btn-pagination"),l=document.querySelector(".pagination-btn-left"),u=document.querySelector(".pagination-btn-right");const B=document.querySelector(".pagination-wrap");function v(){const t=h();t>1?(t<2?(l&&u&&q(),L()):(!l&&!u&&Q(),L()),t>k&&U(),t<=k&&a&&a.remove()):(d.innerHTML="",l&&u&&q(),a&&(a.innerHTML=""))}function L(){const t=h();let n,e;y()?(n=o>1?o:1,e=o<t?o+1:t,o===t&&(n=o-1,e=t),t<=k&&(n=1,e=t)):(n=o>1?o-1:1,e=o-1<t?o+1:t,o===1&&(e=o+2),o===t&&(n=o-2,e=t),t<=k&&(n=1,e=t));const i=[];for(let p=n;p<=e;p+=1){const I=`<li class="pagination-item"><button type="button" class="pagination-btn">${p}</button></li>`;i.push(I)}const r=i.join("");d.innerHTML=r,d.addEventListener("click",st),E()}function y(){return window.innerWidth<768}function h(){const t=c(s);return Math.ceil(t.length/m)}function D(){const t=h(),n=[];for(let i=1;i<=t;i+=1){const r=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;n.push(r)}const e=n.join("");d.innerHTML=e}function Q(){l=document.createElement("ul"),l.innerHTML=J(),B.prepend(l),l.classList.add("nav-pagination-btn","pagination-btn-left"),u=document.createElement("ul"),u.innerHTML=K(),B.append(u),u.classList.add("nav-pagination-btn","pagination-btn-right"),Y()}function q(){l.remove(),u.remove()}function U(){a||(a=document.createElement("button"),a.textContent="...",d.after(a),a.classList.add("pagination-btn-nav","more-btn-pagination"),a.addEventListener("click",S))}function S(){D(),E(),a.removeEventListener("click",S),a.addEventListener("click",X)}function X(){v(),a.addEventListener("click",S)}function Y(){const t=document.querySelector('button[data-go-to="first-page"]'),n=document.querySelector('button[data-go-to="previos-page"]'),e=document.querySelector('button[data-go-to="next-page"]'),i=document.querySelector('button[data-go-to="last-page"]');t.addEventListener("click",Z),n.addEventListener("click",tt),e.addEventListener("click",nt),i.addEventListener("click",et)}function Z(){if(o>1){f(1);const t=c(s);g(t,o),v()}}function tt(){if(o>1){f(o-1);const t=c(s);g(t,o),L()}}function nt(){const t=h();if(o<t){o<t&&f(o+1);const n=c(s);g(n,o),L()}}function et(){const t=h();if(o!==t){f(t);const n=c(s);g(n,o),L()}}function E(){const t=d.querySelectorAll("li"),n=document.querySelector(".current-btn-pagination");t.forEach(e=>{const i=e.querySelector("button");Number(i.textContent)===o&&(n&&n.classList.remove("current-btn-pagination"),i.classList.add("current-btn-pagination"))})}function ot(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",it))}function it(t){const e=t.target.closest(".shopping-trash").dataset.id,i=h();at(e);const r=c(s),p=r.length;p!==0&&Number(i)===Number(o)&&p%m===0?(f(o-1),v(),g(r,o)):p===0?(N(),localStorage.removeItem(s)):(v(),g(r,o))}function at(t){const n=c(s),e=n.findIndex(i=>i._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(s,JSON.stringify(n)))}let o=1;const s="shoppingList",O=document.querySelector(".shopping__list");let _;function f(t){o=t}function H(){const t=localStorage.getItem(s);t&&t.length!==0?(_=c(s),v(),g(_,o)):N()}H();function N(){O.innerHTML="",d.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden")}function g(t,n){t.length<=3,F(n,t)}function F(t,n){let e=m*t-3,i=m*t;y()&&(e=m*(t-1));const r=n.slice(e,i);O.innerHTML=V(r),ot()}function st(t){rt(t),g(c(s),o),E()}function rt(t){const n=t.target.closest("button"),e=Number(n.textContent);f(e)}const w=document.querySelector(".footer-btn"),$=document.querySelector(".footer-modal-close-btn"),A=document.querySelector(".footer-backdrop"),G=document.querySelector(".footer-modal");w.addEventListener("click",C);$.addEventListener("click",P);function C(){A.classList.remove("visually-hidden"),G.classList.remove("visually-hidden"),w.removeEventListener("click",C),$.addEventListener("click",P)}function P(){A.classList.add("visually-hidden"),G.classList.add("visually-hidden"),$.removeEventListener("click",P),w.addEventListener("click",C)}window.addEventListener("storage",function(t){(t.key===s&&t.newValue===null||!t.key&&t.newValue===null)&&H()});
