// initialize aos
AOS.init();

// closing side menu
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  sideBar.classList.toggle("active");
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
// smooth scroll to section
const links = document.querySelectorAll(".sidebar ul li a");

function scrollToSection(element) {
  element.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      // remove active classes
      element.forEach((activeLink) => {
        activeLink.classList.remove("active");
      });
      anchor.classList.add("active");
      sideBar.classList.remove("active");
      menuToggle.classList.remove("active");
      const section = document.querySelector(e.target.dataset.link).offsetTop;
      window.scrollTo({
        top: section,
        left: 0,
        behavior: "smooth",
      });
    });
  });
}
scrollToSection(links);

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
