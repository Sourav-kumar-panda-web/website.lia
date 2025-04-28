// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

const scrollContainer = document.getElementById('gameScroll');

scrollContainer.addEventListener('mouseenter', () => {
  scrollContainer.style.scrollBehavior = 'auto'; // slows down feel
});

scrollContainer.addEventListener('mouseleave', () => {
  scrollContainer.style.scrollBehavior = 'smooth'; // back to smooth scroll
});
// buttons in 
const referralBtn = document.getElementById('referralBtn');

referralBtn.addEventListener('click', () => {
  // Example: Redirect to referral page
  window.location.href = 'referral.html';
  
  // OR if you want to scroll to a section in the same page
  // document.getElementById('referralSection').scrollIntoView({ behavior: 'smooth' });
});

