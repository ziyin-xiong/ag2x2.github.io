let currentVideoIndex = 0; // Track the current video index
const videos = [
    "static/videos/lift_pot_2x.mp4",
    "static/videos/straighten_rope_2x.mp4",
    "static/videos/sweep_dirt_2x.mp4",
    "static/videos/swing_cup_2x.mp4"
];

// DOM Elements
const leftVideo = document.getElementById("left-video");
const centerVideo = document.getElementById("center-video");
const rightVideo = document.getElementById("right-video");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function updateVideos() {
    // Update the video sources based on the current index
    leftVideo.src = videos[(currentVideoIndex - 1 + videos.length) % videos.length];
    centerVideo.src = videos[currentVideoIndex];
    rightVideo.src = videos[(currentVideoIndex + 1) % videos.length];
    
    // Restart the center video
    centerVideo.load();
    centerVideo.play();
}

// Function to move the videos to the left
function moveLeft() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideos();
}

// Function to move the videos to the right
function moveRight() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideos();
}

// Event listeners for the navigation buttons
prevButton.addEventListener("click", moveRight);
nextButton.addEventListener("click", moveLeft);

// Auto-scroll functionality when center video finishes playing
centerVideo.addEventListener("ended", moveLeft);

// Initialize the video carousel
updateVideos();
