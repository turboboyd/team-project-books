import{a as v,b as w,c as S,d as T,e as M,f as y}from"./book-shop@2x-2b870c9d.js";function l(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){console.log(e)}}function _(t){return t.map((n,s)=>`<li class="shopping-item">
    <img
      class="shopping-book-cover"
      src="${n.book_image}"
      alt="${n.title}"
      width="100"
      height="142"
      loading="lazy"
    />
    <div class="shopping-wrap">
      <h2 class="shopping-book-title">${n.title}</h2>
      <button class="shopping-trash" type="button" data-id="${n._id}" data-index="${s}">
        <svg class="icon-shopping-trash" width="18" height="18">
          <use href="./images/sprite.svg#icon-trash"></use>
        </svg>
      </button>

      <p class="shopping-book-categories">${n.list_name}</p>
      <p class="shopping-book-description text">${n.description}</p>
      <div class="shopping-wrapper">
        <p class="shopping-book-author">${n.author}</p>

        <ul class="shop-list">
          <li>
            <a class="shop-link" href="${n.buy_links[0].url}" target="_blank">
              <img
                class="shop-img amazon icon-shop-1"
                srcset="${v} 1x, ${w} 2x"
                src="${v}";
                alt="Amazon shop"
                width="32"
                height="11"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${n.buy_links[1].url}" target="_blank">
              <img
                class="shop-img icon-shop-2"
                srcset="${S} 1x, ${T} 2x"
                src="${S}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${n.buy_links[4].url}" target="_blank">
              <img
                class="shop-img icon-shop-3"
                srcset=" ${M} 1x, ${y} 2x"
                src="${y}"
                alt="Book shop"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>`).join("")}const p=document.querySelector(".pagination-list");let u=3;P()&&(u=4);const F=document.querySelector('button[data-go-to="first-page"]'),G=document.querySelector('button[data-go-to="previos-page"]'),I=document.querySelector('button[data-go-to="next-page"]'),O=document.querySelector('button[data-go-to="last-page"]');F.addEventListener("click",N);G.addEventListener("click",z);I.addEventListener("click",H);O.addEventListener("click",R);function P(){return window.innerWidth<768}function c(t){const e=document.querySelector(".pagination-list");if(e&&document.querySelector(".current-btn-pagination")&&document.querySelector(".current-btn-pagination").classList.remove("current-btn-pagination"),e&&e.childElementCount!==0){const n=e.children[t-1].querySelector("button");n&&n.classList.add("current-btn-pagination")}}function m(t,e){const n=Math.ceil(t.length/u),s=[];for(let d=1;d<=n;d+=1){const B=`<li class="pagination-item"><button type="button" class="pagination-btn">${d}</button></li>`;s.push(B)}const a=s.join("");p.innerHTML=a}function N(){if(o>1){g(1);const t=l(i);r(t,o),c(o)}}function z(){if(o>1){g(o-1);const t=l(i);r(t,o),c(o)}}function H(){const t=p.childElementCount;if(o<t){g(o+1);const e=l(i);r(e,o),c(o)}}function R(){const t=p.childElementCount;if(o!==t){g(t);const e=l(i);r(e,o),c(o)}}function V(){document.querySelectorAll(".shopping-trash").forEach(e=>e.addEventListener("click",W))}function W(t){const n=t.target.closest(".shopping-trash").dataset.id,s=p.childElementCount;j(n);const a=l(i),d=a.length;d!==0&&Number(s)===Number(o)&&d%u===0?(g(o-1),m(a),c(o),r(a,o)):d===0?(q(),localStorage.removeItem(i)):(m(a),c(o),r(a,o))}function j(t){const e=l(i),n=e.findIndex(s=>s._id===t);n!==-1&&(e.splice(n,1),localStorage.setItem(i,JSON.stringify(e)))}let o=1;const i="shoppingList",$=document.querySelector(".shopping__list");let h;const A=document.querySelector(".pagination-btn-left"),J=document.querySelector(".pagination-btn-right");function g(t){o=t}function C(){const t=localStorage.getItem(i);t&&t.length!==0?(h=l(i),m(h),c(o),r(h,o)):q()}C();function q(){$.innerHTML="",p.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden"),A.classList.add("visually-hidden"),J.classList.add("visually-hidden")}function r(t,e){t.length<=3?E(e,t):(E(e,t),p.addEventListener("click",K))}function E(t,e){let n=u*t-3,s=u*t;P()&&(n=u*(t-1));const a=e.slice(n,s);$.innerHTML=_(a),V()}function K(t){D(t),r(l(i),o),c(o)}function D(t){const e=t.target.closest("button"),n=Number(e.textContent);g(n)}const f=document.querySelector(".footer-btn"),b=document.querySelector(".footer-modal-close-btn"),x=document.querySelector(".footer-backdrop");f.addEventListener("click",L);b.addEventListener("click",k);function L(){x.classList.remove("is-open"),f.removeEventListener("click",L),b.addEventListener("click",k)}function k(){x.classList.add("is-open"),b.removeEventListener("click",k),f.addEventListener("click",L)}window.addEventListener("storage",function(t){(t.key===i&&t.newValue===null||!t.key&&t.newValue===null)&&C()});
