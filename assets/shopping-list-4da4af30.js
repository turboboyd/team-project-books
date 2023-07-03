import"./scroll-up-352c78dd.js";function b(t){return t.map((e,o)=>`<li class="shopping-item">
    <img
      class="shopping-book-cover"
      src="${e.book_image}"
      alt="book cover"
      width="100"
      height="142"
      loading="lazy"
    />
    <div class="shopping-wrap">
      <h2 class="shopping-book-title">${e.title}</h2>
      <button class="shopping-trash" type="button" data-id="${e._id}" data-index="${o}">
        <svg class="icon-shopping-trash" width="18" height="18">
          <use href="./images/sprite.svg#icon-trash"></use>
        </svg>
      </button>

      <p class="shopping-book-categories">${e.categoris}</p>
      <p class="shopping-book-description text">${e.description}</p>
      <div class="shopping-wrapper">
        <p class="shopping-book-author">${e.author}</p>

        <ul class="shop-list">
          <li>
            <a class="shop-link" href="${e.amazon_product_url}">
              <img
                class="shop-img"
                src="./images/amazon.png"
                alt="amazon"
                width="32"
                height="11"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="#">
              <img
                class="shop-img"
                src="./images/books-io.png"
                alt="books-io"
                width="16"
                height="16"
              />
            </a>
          </li>
          <li>
            <a class="shop-link" href="#">
              <img
                class="shop-img"
                src="./images/bookshop.png"
                alt="bookshop"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>`).join("")}function u(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}const d="shoppingList";function w(t){const n=document.querySelector(".pagination-list"),o=t.target.closest(".shopping-trash").dataset.id,i=n.childElementCount;M(o);const c=u(d);y(c);const q=n.childElementCount;p(i===q?s:s-1,c),n.children[s-1].querySelector("button").classList.add("curent-btn-pagination")}function M(t){const n=P(),e=n.findIndex(o=>o._id===t);e!==-1&&(n.splice(e,1),$(n))}function P(){return JSON.parse(localStorage.getItem(d))||[]}function $(t){localStorage.setItem(d,JSON.stringify(t))}const C=window.innerWidth,k=C<768;let r=3;k&&(r=4);const a="shoppingList";let g;const l=document.querySelector(".pagination-list"),h=document.querySelector(".shopping__list");let s=1;function y(t){const n=Math.ceil(t.length/r),e=[];for(let i=1;i<=n;i+=1){const c=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;e.push(c)}const o=e.join("");l.innerHTML=o}function E(){localStorage.getItem(a)?(g=u(a),y(g),F(g)):(h.innerHTML="",l.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden"))}function F(t){document.querySelector(".current-btn-pagination")&&document.querySelector(".curent-btn-pagination").classList.remove("curent-btn-pagination"),l.children[s-1].querySelector("button").classList.add("curent-btn-pagination"),t.length<=3?(h.innerHTML=b(t),m()):(p(s,t),l.addEventListener("click",I))}function p(t,n){let e=r*t-3,o=r*t;k&&(e=r*(t-1));const i=n.slice(e,o);h.innerHTML=b(i),m()}function I(t){const n=t.target.closest("button");if(n!==null){const e=n.textContent;s=e,p(e,u(a)),m(),document.querySelector(".curent-btn-pagination").classList.remove("curent-btn-pagination"),n.classList.add("curent-btn-pagination")}}function m(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",w))}window.addEventListener("storage",function(t){t.key===a&&!t.newValue&&E()});E();const L=document.querySelector(".footer-btn"),f=document.querySelector(".footer-modal-close-btn"),B=document.querySelector(".footer-backdrop");L.addEventListener("click",v);f.addEventListener("click",S);function v(){B.classList.remove("is-open"),L.removeEventListener("click",v),f.addEventListener("click",S)}function S(){B.classList.add("is-open"),f.removeEventListener("click",S),L.addEventListener("click",v)}
