import"./scroll-up-8b6e3f07.js";function L(t){return t.map((o,e)=>`<li class="shopping-item">
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
      <button class="shopping-trash" type="button" data-id="${o._id}" data-index="${e}">
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
  </li>`).join("")}function l(t){try{return JSON.parse(localStorage.getItem(t))}catch(n){console.log(n)}}const E=window.innerWidth,v=E<768;let c=3;v&&(c=4);const s="shoppingList";let a;const r=document.querySelector(".pagination-list"),p=document.querySelector(".shopping__list");function k(t){const n=Math.ceil(t.length/c),o=[];for(let i=1;i<=n;i+=1){const y=`<button type="button" class="pagination-btn">${i}</button>`;o.push(y)}const e=o.join("");r.innerHTML=e}function S(){localStorage.getItem(s)?(a=l(s),k(a),B(a)):(p.innerHTML="",r.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden"))}S();function B(t){console.log(t),r.children[0].classList.add("curent-btn-pagination"),t.length<=3?(p.innerHTML=L(t),d()):(g(1,t),r.addEventListener("click",w))}function g(t,n){let o=c*t-3,e=c*t;v&&(o=c*(t-1));const i=n.slice(o,e);p.innerHTML=L(i),d()}window.addEventListener("storage",function(t){t.key===s&&!t.newValue&&S()});function w(t){const n=t.target.closest("button");if(n!==null){const o=n.textContent;g(o,l(s)),d(),document.querySelector(".curent-btn-pagination").classList.remove("curent-btn-pagination"),n.classList.add("curent-btn-pagination")}}function d(){document.querySelectorAll(".shopping-trash").forEach(n=>n.addEventListener("click",M))}function M(t){const o=t.target.closest(".shopping-trash").dataset.id;console.log(o),$(o);const e=l(s);g(1,e),k(e)}function $(t){const n=q(),o=n.findIndex(e=>e._id===t);o!==-1&&(n.splice(o,1),F(n))}function q(){return JSON.parse(localStorage.getItem(s))||[]}function F(t){localStorage.setItem(s,JSON.stringify(t))}const h=document.querySelector(".footer-btn"),u=document.querySelector(".footer-modal-close-btn"),b=document.querySelector(".footer-backdrop");h.addEventListener("click",m);u.addEventListener("click",f);function m(){b.classList.remove("is-open"),h.removeEventListener("click",m),u.addEventListener("click",f)}function f(){b.classList.add("is-open"),u.removeEventListener("click",f),h.addEventListener("click",m)}
