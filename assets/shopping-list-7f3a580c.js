import{a as x,b as I,c as $,d as N,e as A,f as B}from"./book-shop@2x-816fbb2c.js";function c(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}function z(t){return t.map((e,i)=>`<li class="shopping-item">
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
          <use href="./images/sprite.svg#icon-trash"></use>
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
                srcset="${x} 1x, ${I} 2x"
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
                srcset="${$} 1x, ${N} 2x"
                src="${$}"
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
                srcset=" ${A} 1x, ${B} 2x"
                src="${B}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>`).join("")}function W(){return`<ul class="nav-pagination-btn pagination-btn-left"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="first-page">
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="../../images/sprite.svg#icon-angle-up"></use>
        </svg>
        <svg class="icon-arrow icon-arrow-left" width="18" height="18">
          <use href="../../images/sprite.svg#icon-angle-up"></use>
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
          <use href="../../images/sprite.svg#icon-angle-up"></use>
        </svg>
      </button>
    </li></ul>`}function j(){return`<ul class="nav-pagination-btn pagination-btn-right"><li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="next-page">
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="../../images/sprite.svg#icon-angle-up"></use>
        </svg>
      </button>
    </li>
    <li class="nav-btn-item">
      <button type="button" class="pagination-btn-nav" data-go-to="last-page">
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="../../images/sprite.svg#icon-angle-up"></use>
        </svg>
        <svg class="icon-arrow icon-arrow-right" width="18" height="18">
          <use href="../../images/sprite.svg#icon-angle-up"></use>
        </svg>
      </button>
    </li></ul>`}const d=document.querySelector(".pagination-list");let m=k()?4:3,L=k()?2:3,a=document.querySelector(".more-btn-pagination"),g=document.querySelector(".pagination-btn-left"),p=document.querySelector(".pagination-btn-right");const M=document.querySelector(".pagination-wrap");function b(){const t=h();t<2?(g&&p&&J(),v()):(!g&&!p&&V(),v()),t>L&&K(),t<=L&&a&&a.remove()}function v(){const t=h();let n,e;k()?(n=o>1?o:1,e=o<t?o+1:t,o===t&&(n=o-1,e=t),t<=L&&(n=1,e=t)):(n=o>1?o-1:1,e=o-1<t?o+1:t,o===1&&(e=o+2),o===t&&(n=o-2,e=t),t<=L&&(n=1,e=t));const i=[];for(let u=n;u<=e;u+=1){const H=`<li class="pagination-item"><button type="button" class="pagination-btn">${u}</button></li>`;i.push(H)}const r=i.join("");d.innerHTML=r,d.addEventListener("click",ot),y()}function k(){return window.innerWidth<768}function h(){const t=c(s);return Math.ceil(t.length/m)}function R(){const t=h(),n=[];for(let i=1;i<=t;i+=1){const r=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;n.push(r)}const e=n.join("");d.innerHTML=e}function V(){g=document.createElement("ul"),g.innerHTML=W(),M.prepend(g),g.classList.add("nav-pagination-btn","pagination-btn-left"),p=document.createElement("ul"),p.innerHTML=j(),M.append(p),p.classList.add("nav-pagination-btn","pagination-btn-right"),Q()}function J(){g.remove(),p.remove()}function K(){a||(a=document.createElement("button"),a.textContent="...",d.after(a),a.classList.add("pagination-btn-nav","more-btn-pagination"),a.addEventListener("click",w))}function w(){R(),y(),a.removeEventListener("click",w),a.addEventListener("click",D)}function D(){b(),a.addEventListener("click",w)}function Q(){const t=document.querySelector('button[data-go-to="first-page"]'),n=document.querySelector('button[data-go-to="previos-page"]'),e=document.querySelector('button[data-go-to="next-page"]'),i=document.querySelector('button[data-go-to="last-page"]');t.addEventListener("click",U),n.addEventListener("click",X),e.addEventListener("click",Y),i.addEventListener("click",Z)}function U(){if(o>1){f(1);const t=c(s);l(t,o),b()}}function X(){if(o>1){f(o-1);const t=c(s);l(t,o),v()}}function Y(){const t=h();if(o<t){o<t&&f(o+1);const n=c(s);l(n,o),v()}}function Z(){const t=h();if(o!==t){f(t);const n=c(s);l(n,o),v()}}function y(){const t=d.querySelectorAll("li"),n=document.querySelector(".current-btn-pagination");t.forEach(e=>{const i=e.querySelector("button");Number(i.textContent)===o&&(n&&n.classList.remove("current-btn-pagination"),i.classList.add("current-btn-pagination"))})}function tt(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",nt))}function nt(t){const e=t.target.closest(".shopping-trash").dataset.id,i=h();et(e);const r=c(s),u=r.length;u!==0&&Number(i)===Number(o)&&u%m===0?(f(o-1),b(),l(r,o)):u===0?(F(),localStorage.removeItem(s)):(b(),l(r,o))}function et(t){const n=c(s),e=n.findIndex(i=>i._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(s,JSON.stringify(n)))}let o=1;const s="shoppingList",_=document.querySelector(".shopping__list");let T;function f(t){o=t}function O(){const t=localStorage.getItem(s);t&&t.length!==0?(T=c(s),b(),l(T,o)):F()}O();function F(){_.innerHTML="",d.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden")}function l(t,n){t.length<=3,q(n,t)}function q(t,n){let e=m*t-3,i=m*t;k()&&(e=m*(t-1));const r=n.slice(e,i);_.innerHTML=z(r),tt()}function ot(t){it(t),l(c(s),o),y()}function it(t){const n=t.target.closest("button"),e=Number(n.textContent);f(e),console.log("currentPage",o)}const S=document.querySelector(".footer-btn"),E=document.querySelector(".footer-modal-close-btn"),G=document.querySelector(".footer-backdrop");S.addEventListener("click",P);E.addEventListener("click",C);function P(){G.classList.remove("is-open"),S.removeEventListener("click",P),E.addEventListener("click",C)}function C(){G.classList.add("is-open"),E.removeEventListener("click",C),S.addEventListener("click",P)}window.addEventListener("storage",function(t){(t.key===s&&t.newValue===null||!t.key&&t.newValue===null)&&O()});
