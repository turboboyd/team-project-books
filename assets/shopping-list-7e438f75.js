import{s as b,a as x,b as A,c as B,d as z,e as W,f as M}from"./book-shop@2x-97d70341.js";function r(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}function j(t){return t.map((e,i)=>`<li class="shopping-item">
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
                srcset="${x} 1x, ${A} 2x"
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
                srcset="${B} 1x, ${z} 2x"
                src="${B}"
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
                srcset=" ${W} 1x, ${M} 2x"
                src="${M}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>`).join("")}function R(){return`<ul class="nav-pagination-btn pagination-btn-left"><li class="nav-btn-item">
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
    </li></ul>`}function V(){return`<ul class="nav-pagination-btn pagination-btn-right"><li class="nav-btn-item">
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
    </li></ul>`}const d=document.querySelector(".pagination-list");let m=y()?4:3,k=y()?2:3,s=document.querySelector(".more-btn-pagination"),p=document.querySelector(".pagination-btn-left"),g=document.querySelector(".pagination-btn-right");const T=document.querySelector(".pagination-wrap");function v(){const t=h();t<2?(p&&g&&D(),L()):(!p&&!g&&K(),L()),t>k&&Q(),t<=k&&s&&s.remove()}function L(){const t=h();let n,e;y()?(n=o>1?o:1,e=o<t?o+1:t,o===t&&(n=o-1,e=t),t<=k&&(n=1,e=t)):(n=o>1?o-1:1,e=o-1<t?o+1:t,o===1&&(e=o+2),o===t&&(n=o-2,e=t),t<=k&&(n=1,e=t));const i=[];for(let u=n;u<=e;u+=1){const N=`<li class="pagination-item"><button type="button" class="pagination-btn">${u}</button></li>`;i.push(N)}const c=i.join("");d.innerHTML=c,d.addEventListener("click",at),E()}function y(){return window.innerWidth<768}function h(){const t=r(a);return Math.ceil(t.length/m)}function J(){const t=h(),n=[];for(let i=1;i<=t;i+=1){const c=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;n.push(c)}const e=n.join("");d.innerHTML=e}function K(){p=document.createElement("ul"),p.innerHTML=R(),T.prepend(p),p.classList.add("nav-pagination-btn","pagination-btn-left"),g=document.createElement("ul"),g.innerHTML=V(),T.append(g),g.classList.add("nav-pagination-btn","pagination-btn-right"),X()}function D(){p.remove(),g.remove()}function Q(){s||(s=document.createElement("button"),s.textContent="...",d.after(s),s.classList.add("pagination-btn-nav","more-btn-pagination"),s.addEventListener("click",S))}function S(){J(),E(),s.removeEventListener("click",S),s.addEventListener("click",U)}function U(){v(),s.addEventListener("click",S)}function X(){const t=document.querySelector('button[data-go-to="first-page"]'),n=document.querySelector('button[data-go-to="previos-page"]'),e=document.querySelector('button[data-go-to="next-page"]'),i=document.querySelector('button[data-go-to="last-page"]');t.addEventListener("click",Y),n.addEventListener("click",Z),e.addEventListener("click",tt),i.addEventListener("click",nt)}function Y(){if(o>1){f(1);const t=r(a);l(t,o),v()}}function Z(){if(o>1){f(o-1);const t=r(a);l(t,o),L()}}function tt(){const t=h();if(o<t){o<t&&f(o+1);const n=r(a);l(n,o),L()}}function nt(){const t=h();if(o!==t){f(t);const n=r(a);l(n,o),L()}}function E(){const t=d.querySelectorAll("li"),n=document.querySelector(".current-btn-pagination");t.forEach(e=>{const i=e.querySelector("button");Number(i.textContent)===o&&(n&&n.classList.remove("current-btn-pagination"),i.classList.add("current-btn-pagination"))})}function et(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",ot))}function ot(t){const e=t.target.closest(".shopping-trash").dataset.id,i=h();it(e);const c=r(a),u=c.length;u!==0&&Number(i)===Number(o)&&u%m===0?(f(o-1),v(),l(c,o)):u===0?(G(),localStorage.removeItem(a)):(v(),l(c,o))}function it(t){const n=r(a),e=n.findIndex(i=>i._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(a,JSON.stringify(n)))}let o=1;const a="shoppingList",F=document.querySelector(".shopping__list");let q;function f(t){o=t}function O(){const t=localStorage.getItem(a);t&&t.length!==0?(q=r(a),v(),l(q,o)):G()}O();function G(){F.innerHTML="",d.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden")}function l(t,n){t.length<=3,_(n,t)}function _(t,n){let e=m*t-3,i=m*t;y()&&(e=m*(t-1));const c=n.slice(e,i);F.innerHTML=j(c),et()}function at(t){st(t),l(r(a),o),E()}function st(t){const n=t.target.closest("button"),e=Number(n.textContent);f(e)}const w=document.querySelector(".footer-btn"),$=document.querySelector(".footer-modal-close-btn"),H=document.querySelector(".footer-backdrop"),I=document.querySelector(".footer-modal");w.addEventListener("click",C);$.addEventListener("click",P);function C(){H.classList.remove("is-open"),I.classList.remove("is-open"),w.removeEventListener("click",C),$.addEventListener("click",P)}function P(){H.classList.add("is-open"),I.classList.add("is-open"),$.removeEventListener("click",P),w.addEventListener("click",C)}window.addEventListener("storage",function(t){(t.key===a&&t.newValue===null||!t.key&&t.newValue===null)&&O()});
