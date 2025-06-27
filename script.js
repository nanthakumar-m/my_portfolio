"use strict";

// academics tab

const tabContainer = document.querySelector(".academics-tab-container");
const tabs = document.querySelectorAll(".academics-tab");
const academicsContent = document.querySelectorAll(".academics-content");

tabContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("academics-tab")) {
    //  de activating the active class
    tabs.forEach((t) => t.classList.remove("btn-active"));
    academicsContent.forEach((c) =>
      c.classList.remove("academics-content--acitve")
    );

    // activating the tab
    e.target.classList.add("btn-active");
    console.log(e.target.dataset.tab);
    document
      .querySelector(`.academics-content-${e.target.dataset.tab}`)
      .classList.add("academics-content--acitve");
  }

  // guard clause
  // if (!clicked) return;
});

// ============REVEALING THE SECTION ON SCROLL =========

// const sections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   // guard clause
//   if (!entry.isIntersecting) return;

//   // remove the section-hidden class
//   entry.target.classList.remove("section-hidden");
//   // console.log(entry);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
//   rootMargin: "20px",
// });

// sections.forEach(function (sec) {
//   sec.classList.add("section-hidden");
//   sectionObserver.observe(sec);
// });
