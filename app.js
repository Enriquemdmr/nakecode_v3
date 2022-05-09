// SCROLL ANIMATION

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});

ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});

// CLIP PATH

var clipbackground = document.querySelector('div.clip-background');
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    clipbackground.style.clipPath = "circle(" + value + "px at bottom 80px right 58px)";
})

// NAVBAR COLOR CHANGE

// const blackbg = gsap.utils.toArray('.black-bg');
// blackbg.forEach(bg => {
//   gsap.to("#line", { 
//     backgroundColor: "#e8e8e8",
//     scrollTrigger: {
//       trigger: bg,
//       toggleActions: "play reset play reset",
//       start: "top-=32 top",
//       end:"bottom-=32 top"
//     }
//   }),

//   gsap.to("#nav-logo", { 
//     fill: "#e8e8e8",
//     scrollTrigger: {
//       trigger: bg,
//       toggleActions: "play reset play reset",
//       start: "top-=32 top",
//       end:"bottom-=32 top"
//     }
//   })
// });

// TEXT REVEAL

