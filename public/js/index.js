// side-cart, side-login

const cart = document.getElementById("cart");
const sideCart = document.getElementById("side-cart");
const closeCart = document.getElementById("close-side-cart");

const account = document.getElementById("account");
const sideAccount = document.getElementById("side-account");
const closeAccount = document.getElementById("close-side-account");

function handleClick(displayButton, object, close) {
  displayButton.addEventListener("click", () => {
    object.style.display = "block";
  });
  close.addEventListener("click", () => {
    object.style.display = "none";
  });
}

handleClick(cart, sideCart, closeCart);
handleClick(account, sideAccount, closeAccount);

// switch large banners by dot

const btnLeft = document.querySelector(".chevron-l");
const btnRight = document.querySelector(".chevron-r");
let dots = document.querySelectorAll(".switch-dot");

dots.forEach((e, i) => {
  e.addEventListener("click", () => {
    dots.forEach((dot, j) => {
      dot.classList.remove("active");
      document.getElementById(`large-banner-${j + 1}`).style.display = "none";
    });
    e.classList.add("active");
    document.getElementById(`large-banner-${i + 1}`).style.display = "block";
  });
});

// prev - next

document.getElementById("next").onclick = function () {
  let bg = document.querySelectorAll(".slide-show");
  const index = bg[1].getAttribute("id");
  document.querySelector("#list-banner").appendChild(bg[0]);
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index[index.length - 1] - 1].classList.add("active");
};

document.getElementById("prev").onclick = function () {
  let bg = document.querySelectorAll(".slide-show");
  const index = bg[bg.length - 1].getAttribute("id");
  document.querySelector("#list-banner").prepend(bg[bg.length - 1]);
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index[index.length - 1] - 1].classList.add("active");
};

// add to cart - submit -view

const addToCart = document.querySelectorAll(".btn-add");
const submit = document.querySelectorAll(".submit");
const view = document.querySelectorAll(".view-product");
const closeSubmit = document.querySelectorAll(".close");

addToCart.forEach((add, i) => {
  add.addEventListener("click", () => {
    submit[i].style.display = "block";
    view[i].style.display = "flex";
  });
});
closeSubmit.forEach((close, i) => {
  close.addEventListener("click", () => {
    submit[i].style.display = "none";
    view[i].style.display = "none";
  });
});

// sidebar

const socials = document.getElementById("socials");
const mailDetail = document.getElementById("mail-detail");
const iconMail = document.getElementById("icon-mail");

socials.addEventListener("click", () => {
  if (document.getElementById("socials-lists").style.display == "block") {
    document.getElementById("socials-lists").style.display = "none";
  } else {
    document.getElementById("socials-lists").style.display = "block";
  }
});
iconMail.addEventListener("click", () => {
  if (mailDetail.style.display == "flex") {
    mailDetail.style.display = "none";
  } else {
    mailDetail.style.display = "flex";
  }
});
