// testing scrollSpy functionality #1
let mySections = document.querySelectorAll("section");
console.log(mySections);

window.addEventListener("scroll", () => {
  mySections.forEach((sec, i) => {
    const sectionViewport = sec.getBoundingClientRect().y;
    if (sectionViewport < window.innerHeight - 200) {
      links.forEach((lnk) => lnk.classList.remove("active"));
      links[i].classList.add("active");
    }
  });
});

// testing scrollSpy functionality #2
let mySections = document.querySelectorAll("section");
console.log(mySections);

window.addEventListener("scroll", () => {
  mySections.forEach((sec, i) => {
    const sectionViewport = sec.getBoundingClientRect();
    if (sectionViewport.top <= 150 && sectionViewport.bottom >= 150) {
      links.forEach((lnk) => lnk.classList.remove("active"));
      links[i].classList.add("active");
    }
  });
});
