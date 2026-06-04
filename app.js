var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Python Developer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
// =================== Hamburger Menu ===================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Close menu when any nav link is clicked
document.querySelectorAll('.nav-item a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});
// var typeData = new Typed("role", {
//     strings: [
//       "Full Stack Developer",
//       "MERN Stack Developer",
//       "Python Developer",
//       "Backend Developer",
//       "Coder",
//     ],
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 1000,
//   });
