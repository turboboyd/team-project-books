import"./scroll-up-9687cf48.js";function r(o){return o.map(t=>`<li class="shopping-item">
      <p>${t}</p>
      <img
        class="shopping-book-cover"
        src="${t.book_image}"
        alt="book cover"
        width="100"
        height="142"
        loading="lazy"
      />
      <div class="shopping-wrap">
        <h2 class="shopping-book-title">${t.title}</h2>
        <button class="shopping-trash" type="button" data-id-book="${t.id}">
          <svg class="icon-shopping-trash" width="18" height="18">
            <use href="../../images/sprite.svg#icon-trash"></use>
          </svg>
        </button>
        <p class="shopping-book-categories">${t.categoris}</p>
        <p class="shopping-book-description">${t.description}</p>
        <div class="shopping-wrapper">
          <p class="shopping-book-author">${t.author}</p>
          <ul class="shop-list">
            <li>
              <a class="shop-link" href="${t.linksAmazon}">
                <img
                  class="shop-img"
                  src="../../images/amazon.png"
                  alt="amazon"
                  width="32"
                  height="11"
                />
              </a>
            </li>
            <li>
              <a class="shop-link" href="${t.linkBookIo}">
                <img
                  class="shop-img"
                  src="../../images/books-io.png"
                  alt="books-io"
                  width="16"
                  height="16"
                />
              </a>
            </li>
            <li>
              <a class="shop-link" href="${t.linkBookshop}">
                <img
                  class="shop-img"
                  src="../../images/bookshop.png"
                  alt="bookshop"
                  width="16"
                  height="16"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>`).join("")}function p(o){try{return JSON.parse(localStorage.getItem(o))}catch(n){console.log(n)}}const f=window.innerWidth,g=f<768;let i=3;g&&(i=4);console.log("in",i);let l;const c=document.querySelector(".pagination-list"),a=document.querySelector(".shopping__list");function k(o){const n=Math.ceil(o.length/i),t=[];for(let e=1;e<=n;e+=1){console.log("countofBook",e);const m=`<li class="pagination-item"><p class="pagination-text">${e}</p></li>`;t.push(m)}const s=t.join("");c.innerHTML=s}function h(){localStorage.getItem("shoppingList")?(l=p("shoppingList"),k(l),L(l)):(a.innerHTML="",c.innerHTML="",document.querySelector(".empty").classList.remove("visually-hidden"))}h();function L(o){console.log(o),c.children[0].classList.add("curent-btn-pagination"),o.length<=3?a.innerHTML=r(o):(d(1,o),c.addEventListener("click",v))}function d(o,n){let t=i*o-3,s=i*o;g&&(t=i*(o-1));const e=n.slice(t,s);a.innerHTML=r(e)}window.addEventListener("storage",function(o){console.log("Storage event:",o),o.key==="shoppingList"&&!o.newValue&&h()});function v(o){const n=o.target.closest("li");if(n!==null){const s=n.querySelector("p").textContent;console.log(s),d(s,p("shoppingList")),document.querySelector(".curent-btn-pagination").classList.remove("curent-btn-pagination"),n.classList.add("curent-btn-pagination")}}const S=document.querySelector(".footer-btn"),y=document.querySelector(".footer-modal-close-btn"),u=document.querySelector(".footer-backdrop");S.addEventListener("click",B);y.addEventListener("click",b);function B(){u.classList.remove("is-open")}function b(){u.classList.add("is-open")}
