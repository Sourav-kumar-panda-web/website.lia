function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Refresh to homepage on logo click
  document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    if (logo) {
      logo.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
  });
  // Scroll animation logic
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });
  
  // Modal control
  function openModal(videoURL) {
    document.getElementById('videoModal').style.display = 'block';
    document.getElementById('videoFrame').src = videoURL;
  }
  
  function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoFrame').src = '';
  }
  


