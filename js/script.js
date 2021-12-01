// initialize aos
AOS.init();

// closing sidebar
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".sidebar");
const sideBarOverlay = document.querySelector(".sidebar-overlay-layer");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  sideBar.classList.toggle("active");
  sideBarOverlay.classList.toggle("active");
});

// scroll to top button
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", showScrollBtn);

function showScrollBtn() {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    scrollToTop.classList.add("show-scroll");
  } else {
    scrollToTop.classList.remove("show-scroll");
  }
}

scrollToTop.addEventListener("click", goUp);

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// scrollspy

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav li a");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let secOffset = section.offsetTop;
    let secHeight = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top > secOffset && top < secOffset + secHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document.querySelector(`nav li a[href*=${id}]`).classList.add("active");
        sideBarOverlay.classList.remove("active");
      });
    }
  });
});

// accordion logic

let accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    let activeHeader = document.querySelector(".accordion-header.show");
    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.toggle("show");
      activeHeader.nextElementSibling.style.maxHeight = "0";
    }

    // opening the body of accordion
    let accordionBody = header.nextElementSibling;
    header.classList.toggle("show");
    if (header.classList.contains("show")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = "0";
    }
  });
});

console.log(accordionHeaders);
