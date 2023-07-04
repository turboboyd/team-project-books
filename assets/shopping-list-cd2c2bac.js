import"./support-d921b93a.js";function p(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}function w(t){return t.map((e,i)=>`<li class="shopping-item">
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
            <a class="shop-link" href="${e.amazon_product_url}" target="_blank">
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
            <a class="shop-link" href="${e.buy_links[1].url}" target="_blank">
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
            <a class="shop-link" href="${e.buy_links[4].url}" target="_blank">
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
  </li>`).join("")}const u=document.querySelector(".pagination-list");let c=3;k()&&(c=4);function k(){return window.innerWidth<768}function P(t){const n=document.querySelector(".pagination-list");if(n&&document.querySelector(".current-btn-pagination")&&document.querySelector(".current-btn-pagination").classList.remove("current-btn-pagination"),n&&n.childElementCount!==0){const e=n.children[t-1].querySelector("button");e&&e.classList.add("current-btn-pagination")}}function d(t){const n=Math.ceil(t.length/c),e=[];for(let o=1;o<=n;o+=1){const a=`<li class="pagination-item"><button type="button" class="pagination-btn">${o}</button></li>`;e.push(a)}const i=e.join("");u.innerHTML=i}function _(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",B))}function B(t){const e=t.target.closest(".shopping-trash").dataset.id,i=u.childElementCount;C(e);const o=p(r),a=o.length;a!==0&&Number(i)===Number(s)&&a%c===0?(M(s-1),d(o),l(o,s)):a===0?(S(),localStorage.removeItem(r)):(d(o),l(o,s))}function C(t){const n=p(r),e=n.findIndex(i=>i._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem(r,JSON.stringify(n)))}let s=1;function M(t){s=t}const v=document.querySelector(".shopping__list"),r="shoppingList";let g;function y(){const t=localStorage.getItem(r);t&&t.length!==0?(g=p(r),d(g),l(g,s)):S()}y();function S(){v.innerHTML="",u.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden")}function l(t,n){t.length<=3?L(n,t):(L(n,t),u.addEventListener("click",q)),P(n)}function L(t,n){let e=c*t-3,i=c*t;k()&&(e=c*(t-1));const o=n.slice(e,i);v.innerHTML=w(o),_()}function q(t){$(t),l(p(r),s)}function $(t){s=t.target.closest("button").textContent}const h=document.querySelector(".footer-btn"),m=document.querySelector(".footer-modal-close-btn"),E=document.querySelector(".footer-backdrop");h.addEventListener("click",f);m.addEventListener("click",b);function f(){E.classList.remove("is-open"),h.removeEventListener("click",f),m.addEventListener("click",b)}function b(){E.classList.add("is-open"),m.removeEventListener("click",b),h.addEventListener("click",f)}window.addEventListener("storage",function(t){(t.key===r&&t.newValue===null||!t.key&&t.newValue===null)&&y()});
