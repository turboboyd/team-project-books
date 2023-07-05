import{s as d,a as x,b as N,c as B,d as A,e as z,f as M}from"./book-shop@2x-5f44925e.js";function c(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}function W(t){return t.map((e,i)=>`<li class="shopping-item">
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
          <use href="${d}#icon-trash"></use>
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
                srcset="${x} 1x, ${N} 2x"
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
                srcset="${B} 1x, ${A} 2x"
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
                srcset=" ${z} 1x, ${M} 2x"
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
  </li>`).join("")}function j(){return`<ul class="nav-pagination-btn pagination-btn-left"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="first-page">
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="${d}#icon-angle-up"></use>
        </svg>
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="${d}#icon-angle-up"></use>
        </svg>
      </button>
    </li>
    <li class="nav-btn-item">
      <button
        type="button"
        class="pagination-btn-nav"
        data-go-to="previos-page"
      >
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="${d}#icon-angle-up"></use>
        </svg>
      </button>
    </li></ul>`}function R(){return`<ul class="nav-pagination-btn pagination-btn-right"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="next-page">
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="${d}#icon-angle-up"></use>
        </svg>
      </button>
    </li>
    <li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="last-page">
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="${d}#icon-angle-up"></use>
        </svg>
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="${d}#icon-angle-up"></use>
        </svg>
      </button>
    </li></ul>`}const h=document.querySelector(".pagination-list");let m=w()?4:3,k=w()?2:3,s=document.querySelector(".more-btn-pagination"),g=document.querySelector(".pagination-btn-left"),p=document.querySelector(".pagination-btn-right");const T=document.querySelector(".pagination-wrap");function v(){const t=f();t<2?(g&&p&&K(),L()):(!g&&!p&&J(),L()),t>k&&D(),t<=k&&s&&s.remove()}function L(){const t=f();let n,e;w()?(n=o>1?o:1,e=o<t?o+1:t,o===t&&(n=o-1,e=t),t<=k&&(n=1,e=t)):(n=o>1?o-1:1,e=o-1<t?o+1:t,o===1&&(e=o+2),o===t&&(n=o-2,e=t),t<=k&&(n=1,e=t));const i=[];for(let u=n;u<=e;u+=1){const I=`<li class="pagination-item"><button type="button" class="pagination-btn">${u}</button></li>`;i.push(I)}const r=i.join("");h.innerHTML=r,h.addEventListener("click",it),S()}function w(){return window.innerWidth<768}function f(){const t=c(a);return Math.ceil(t.length/m)}function V(){const t=f(),n=[];for(let i=1;i<=t;i+=1){const r=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;n.push(r)}const e=n.join("");h.innerHTML=e}function J(){g=document.createElement("ul"),g.innerHTML=j(),T.prepend(g),g.classList.add("nav-pagination-btn","pagination-btn-left"),p=document.createElement("ul"),p.innerHTML=R(),T.append(p),p.classList.add("nav-pagination-btn","pagination-btn-right"),U()}function K(){g.remove(),p.remove()}function D(){s||(s=document.createElement("button"),s.textContent="...",h.after(s),s.classList.add("pagination-btn-nav","more-btn-pagination"),s.addEventListener("click",y))}function y(){V(),S(),s.removeEventListener("click",y),s.addEventListener("click",Q)}function Q(){v(),s.addEventListener("click",y)}function U(){const t=document.querySelector('button[data-go-to="first-page"]'),n=document.querySelector('button[data-go-to="previos-page"]'),e=document.querySelector('button[data-go-to="next-page"]'),i=document.querySelector('button[data-go-to="last-page"]');t.addEventListener("click",X),n.addEventListener("click",Y),e.addEventListener("click",Z),i.addEventListener("click",tt)}function X(){if(o>1){b(1);const t=c(a);l(t,o),v()}}function Y(){if(o>1){b(o-1);const t=c(a);l(t,o),L()}}function Z(){const t=f();if(o<t){o<t&&b(o+1);const n=c(a);l(n,o),L()}}function tt(){const t=f();if(o!==t){b(t);const n=c(a);l(n,o),L()}}function S(){const t=h.querySelectorAll("li"),n=document.querySelector(".current-btn-pagination");t.forEach(e=>{const i=e.querySelector("button");Number(i.textContent)===o&&(n&&n.classList.remove("current-btn-pagination"),i.classList.add("current-btn-pagination"))})}function nt(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",et))}function et(t){const e=t.target.closest(".shopping-trash").dataset.id,i=f();ot(e);const r=c(a),u=r.length;u!==0&&Number(i)===Number(o)&&u%m===0?(b(o-1),v(),l(r,o)):u===0?(G(),localStorage.removeItem(a)):(v(),l(r,o))}function ot(t){const n=c(a),e=n.findIndex(i=>i._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(a,JSON.stringify(n)))}let o=1;const a="shoppingList",O=document.querySelector(".shopping__list");let q;function b(t){o=t}function F(){const t=localStorage.getItem(a);t&&t.length!==0?(q=c(a),v(),l(q,o)):G()}F();function G(){O.innerHTML="",h.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden")}function l(t,n){t.length<=3,_(n,t)}function _(t,n){let e=m*t-3,i=m*t;w()&&(e=m*(t-1));const r=n.slice(e,i);O.innerHTML=W(r),nt()}function it(t){at(t),l(c(a),o),S()}function at(t){const n=t.target.closest("button"),e=Number(n.textContent);b(e),console.log("currentPage",o)}const E=document.querySelector(".footer-btn"),$=document.querySelector(".footer-modal-close-btn"),H=document.querySelector(".footer-backdrop");E.addEventListener("click",P);$.addEventListener("click",C);function P(){H.classList.remove("is-open"),E.removeEventListener("click",P),$.addEventListener("click",C)}function C(){H.classList.add("is-open"),$.removeEventListener("click",C),E.addEventListener("click",P)}window.addEventListener("storage",function(t){(t.key===a&&t.newValue===null||!t.key&&t.newValue===null)&&F()});
