import"./scroll-up-6ce6bba6.js";function d(t){return t.map((o,s)=>`<li class="shopping-item">
    <img
      class="shopping-book-cover"
      src="${o.book_image}"
      alt="book cover"
      width="100"
      height="142"
      loading="lazy"
    />
    <div class="shopping-wrap">
      <h2 class="shopping-book-title">${o.title}</h2>
      <button class="shopping-trash" type="button" data-id="${o._id}" data-index="${s}">
        <svg class="icon-shopping-trash" width="18" height="18">
          <use href="./images/sprite.svg#icon-trash"></use>
        </svg>
      </button>

      <p class="shopping-book-categories">${o.categoris}</p>
      <p class="shopping-book-description text">${o.description}</p>
      <div class="shopping-wrapper">
        <p class="shopping-book-author">${o.author}</p>

        <ul class="shop-list">
          <li>
            <a class="shop-link" href="${o.amazon_product_url}">
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
  </li>`).join("")}function l(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}const S=window.innerWidth,u=S<768;let c=3;u&&(c=4);const e="shoppingList";let r;const a=document.querySelector(".pagination-list"),p=document.querySelector(".shopping__list");function m(t){const n=Math.ceil(t.length/c),o=[];for(let i=1;i<=n;i+=1){const v=`<button type="button" class="pagination-btn">${i}</button>`;o.push(v)}const s=o.join("");a.innerHTML=s}function f(){localStorage.getItem(e)?(r=l(e),m(r),k(r)):(p.innerHTML="",a.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden"))}f();function k(t){console.log(t),a.children[0].classList.add("curent-btn-pagination"),t.length<=3?(p.innerHTML=d(t),h()):(g(1,t),a.addEventListener("click",b))}function g(t,n){let o=c*t-3,s=c*t;u&&(o=c*(t-1));const i=n.slice(o,s);p.innerHTML=d(i),h()}window.addEventListener("storage",function(t){t.key===e&&!t.newValue&&f()});function b(t){const n=t.target.closest("button");if(n!==null){const o=n.textContent;g(o,l(e)),h(),document.querySelector(".curent-btn-pagination").classList.remove("curent-btn-pagination"),n.classList.add("curent-btn-pagination")}}function h(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",y))}function y(t){const o=t.target.closest(".shopping-trash").dataset.id;console.log(o),E(o);const s=l(e);g(1,s),m(s)}function E(t){const n=B(),o=n.findIndex(s=>s._id===t);o!==-1&&(n.splice(o,1),w(n))}function B(){return JSON.parse(localStorage.getItem(e))||[]}function w(t){localStorage.setItem(e,JSON.stringify(t))}const M=document.querySelector(".footer-btn"),$=document.querySelector(".footer-modal-close-btn"),L=document.querySelector(".footer-backdrop");M.addEventListener("click",q);$.addEventListener("click",F);function q(){L.classList.remove("is-open")}function F(){L.classList.add("is-open")}
