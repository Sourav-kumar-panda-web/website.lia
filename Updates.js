// Toggle Dark Mode
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
});

// Open Video Popup
function showVideo(videoUrl) {
    const videoPopup = document.getElementById('videoPopup');
    const iframe = videoPopup.querySelector('iframe');
    iframe.src = videoUrl;
    videoPopup.style.display = 'flex';
}

// Close Video Popup
document.getElementById('closePopup').addEventListener('click', function () {
    const videoPopup = document.getElementById('videoPopup');
    const iframe = videoPopup.querySelector('iframe');
    iframe.src = ''; // Stop the video when closed
    videoPopup.style.display = 'none';
});

// Event listener for Show Video buttons
document.querySelectorAll('.start-btn').forEach(button => {
    if (button.innerText.toLowerCase() === 'show video') {
        button.addEventListener('click', function () {
            const videoUrl = 'https://www.youtube.com/embed/your_video_id'; // Replace with your actual video URL
            showVideo(videoUrl);
        });
    }
});
