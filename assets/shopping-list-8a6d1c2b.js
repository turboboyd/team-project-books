import"./support-f087b818.js";function b(t){return t.map((e,o)=>`<li class="shopping-item">
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
  </li>`).join("")}function d(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}let r=3;y()&&(r=4);function y(){return window.innerWidth<768}function E(t){document.querySelector(".current-btn-pagination")&&document.querySelector(".current-btn-pagination").classList.remove("current-btn-pagination"),t.classList.add("current-btn-pagination")}function B(t){const n=Math.ceil(t.length/r),e=[];for(let i=1;i<=n;i+=1){const g=`<li class="pagination-item"><button type="button" class="pagination-btn">${i}</button></li>`;e.push(g)}const o=e.join("");a.innerHTML=o;const c=a.children[s-1].querySelector("button");E(c)}const h="shoppingList";function m(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",q))}function q(t){const n=document.querySelector(".pagination-list"),o=t.target.closest(".shopping-trash").dataset.id,c=n.childElementCount;C(o);const i=d(h);B(i);const g=n.childElementCount;p(c===g?s:s-1,i),n.children[s-1].querySelector("button").classList.add("curent-btn-pagination")}function C(t){const n=$(),e=n.findIndex(o=>o._id===t);e!==-1&&(n.splice(e,1),F(n))}function $(){return JSON.parse(localStorage.getItem(h))||[]}function F(t){localStorage.setItem(h,JSON.stringify(t))}let s=1;const a=document.querySelector(".pagination-list"),L=document.querySelector(".shopping__list"),l="shoppingList";let u;function w(){localStorage.getItem(l)?(u=d(l),B(u),P(u)):(L.innerHTML="",a.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden"))}function P(t){t.length<=3?(L.innerHTML=b(t),m()):(p(s,t),a.addEventListener("click",T))}function p(t,n){let e=r*t-3,o=r*t;y()&&(e=r*(t-1));const c=n.slice(e,o);L.innerHTML=b(c),m()}function T(t){const n=t.target.closest("button");if(n!==null){const e=n.textContent;s=e,p(e,d(l)),m(),E(n)}}w();const f=document.querySelector(".footer-btn"),v=document.querySelector(".footer-modal-close-btn"),M=document.querySelector(".footer-backdrop");f.addEventListener("click",S);v.addEventListener("click",k);function S(){M.classList.remove("is-open"),f.removeEventListener("click",S),v.addEventListener("click",k)}function k(){M.classList.add("is-open"),v.removeEventListener("click",k),f.addEventListener("click",S)}window.addEventListener("storage",function(t){(t.key===l&&t.newValue===null||!t.key&&t.newValue===null)&&w()});
