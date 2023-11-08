import{n as z,b as W,s as b,a as x,d as j,e as B,f as R,h as V,i as M,g as D}from"./book-shop@2x-dda882ae.js";function c(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n),z.Notify.failure(`${n}`)}}function J(t){return t.map((e,i)=>`<li class="shopping-item">
    <img 
      class="shopping-book-cover"
      src="${e.book_image}"
      alt="${e.title}?${e.title}:${{boookDefault:W}}"
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
                srcset="${x} 1x, ${j} 2x"
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
                srcset="${B} 1x, ${R} 2x"
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
                srcset=" ${V} 1x, ${M} 2x"
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
  </li>`).join("")}function K(){return`<ul class="nav-pagination-btn pagination-btn-left"><li class="nav-btn-item">
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
    </li></ul>`}function Q(){return`<ul class="nav-pagination-btn pagination-btn-right"><li class="nav-btn-item">
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
    </li></ul>`}const d=document.querySelector(".pagination-list");let m=y()?4:3,k=y()?2:3,a=document.querySelector(".more-btn-pagination"),l=document.querySelector(".pagination-btn-left"),u=document.querySelector(".pagination-btn-right");const T=document.querySelector(".pagination-wrap");function v(){const t=h();t>1?(t<2?(l&&u&&q(),L()):(!l&&!u&&X(),L()),t>k&&Y(),t<=k&&a&&a.remove()):(d.innerHTML="",l&&u&&q(),a&&(a.innerHTML=""))}function L(){const t=h();let n,e;y()?(n=o>1?o:1,e=o<t?o+1:t,o===t&&(n=o-1,e=t),t<=k&&(n=1,e=t)):(n=o>1?o-1:1,e=o-1<t?o+1:t,o===1&&(e=o+2),o===t&&(n=o-2,e=t),t<=k&&(n=1,e=t));const i=[];for(let p=n;p<=e;p+=1){const G=`<li class="pagination-item"><button type="button" class="pagination-btn">${p}</button></li>`;i.push(G)}const r=i.join("");d.innerHTML=r,d.addEventListener("click",ct),E()}function y(){return window.innerWidth<768}function h(){const t=c(s);return Math.ceil(t.length/m)}function U(){const t=h(),n=[];for(let i=1;i<=t;i+=1){const r=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;n.push(r)}const e=n.join("");d.innerHTML=e}function X(){l=document.createElement("ul"),l.innerHTML=K(),T.prepend(l),l.classList.add("nav-pagination-btn","pagination-btn-left"),u=document.createElement("ul"),u.innerHTML=Q(),T.append(u),u.classList.add("nav-pagination-btn","pagination-btn-right"),tt()}function q(){l.remove(),u.remove()}function Y(){a||(a=document.createElement("button"),a.textContent="...",d.after(a),a.classList.add("pagination-btn-nav","more-btn-pagination"),a.addEventListener("click",S))}function S(){U(),E(),a.removeEventListener("click",S),a.addEventListener("click",Z)}function Z(){v(),a.addEventListener("click",S)}function tt(){const t=document.querySelector('button[data-go-to="first-page"]'),n=document.querySelector('button[data-go-to="previos-page"]'),e=document.querySelector('button[data-go-to="next-page"]'),i=document.querySelector('button[data-go-to="last-page"]');t.addEventListener("click",nt),n.addEventListener("click",et),e.addEventListener("click",ot),i.addEventListener("click",it)}function nt(){if(o>1){f(1);const t=c(s);g(t,o),v()}}function et(){if(o>1){f(o-1);const t=c(s);g(t,o),L()}}function ot(){const t=h();if(o<t){o<t&&f(o+1);const n=c(s);g(n,o),L()}}function it(){const t=h();if(o!==t){f(t);const n=c(s);g(n,o),L()}}function E(){const t=d.querySelectorAll("li"),n=document.querySelector(".current-btn-pagination");t.forEach(e=>{const i=e.querySelector("button");Number(i.textContent)===o&&(n&&n.classList.remove("current-btn-pagination"),i.classList.add("current-btn-pagination"))})}function at(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",st))}function st(t){const e=t.target.closest(".shopping-trash").dataset.id,i=h();rt(e);const r=c(s),p=r.length;p!==0&&Number(i)===Number(o)&&p%m===0?(f(o-1),v(),g(r,o)):p===0?(I(),localStorage.removeItem(s)):(v(),g(r,o))}function rt(t){D(t);const n=c(s),e=n.findIndex(i=>i._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(s,JSON.stringify(n)))}let o=1;const s="shoppingList",O=document.querySelector(".shopping__list");let _;function f(t){o=t}function H(){const t=localStorage.getItem(s);t&&t.length!==0?(_=c(s),v(),g(_,o)):I()}H();function I(){O.innerHTML="",d.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden")}function g(t,n){t.length<=3,F(n,t)}function F(t,n){let e=m*t-3,i=m*t;y()&&(e=m*(t-1));const r=n.slice(e,i);O.innerHTML=J(r),at()}function ct(t){lt(t),g(c(s),o),E()}function lt(t){const n=t.target.closest("button"),e=Number(n.textContent);f(e)}const w=document.querySelector(".footer-btn"),$=document.querySelector(".footer-modal-close-btn"),N=document.querySelector(".footer-backdrop"),A=document.querySelector(".footer-modal");w.addEventListener("click",C);$.addEventListener("click",P);function C(){N.classList.remove("visually-hidden"),A.classList.remove("visually-hidden"),w.removeEventListener("click",C),$.addEventListener("click",P)}function P(){N.classList.add("visually-hidden"),A.classList.add("visually-hidden"),$.removeEventListener("click",P),w.addEventListener("click",C)}window.addEventListener("storage",function(t){(t.key===s&&t.newValue===null||!t.key&&t.newValue===null)&&H()});
