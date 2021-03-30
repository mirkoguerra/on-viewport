const SectionOne = document.querySelector("section.one");

const Sections = document.querySelectorAll("section");

const options = {
  // root: null, valore di default
  // threshold: 0, da 0 a 1, la % necessaria nella viewport
  // rootMargin: "0px 0px 0px 0px" il margine
};

// const observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//     console.log(entry.target);
//   });
// }, options);

// observer.observe(SectionOne);

// su una singola sezione

// const observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     if(!entry.isIntersecting) {
//       return ;
//     }
//     console.log(entry);
//     console.log(entry.target);
//   });
// }, options);

// const observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     if(!entry.isIntersecting) {
//       return ;
//     }
//     console.log(entry);
//     console.log(entry.target);
//     observer.unobserve(entry.target);
//   });
// }, options);

// Sections.forEach(section => {
//   observer.observe(section);
// });

// su più sezioni, sia andata che ritorno, solo andata
