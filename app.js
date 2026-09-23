// Slideshow Logic
let slideIndex = 1;
let slideTimer;

function initializeSlideshow() {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    showSlides(slideIndex);
    slideTimer = setInterval(() => { changeSlide(1) }, 5000);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => { changeSlide(1) }, 5000);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Render Videos with Staggered Animation
function renderVideoGrid(videosToRender = videosData) {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    if (videosToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); font-size: 1.1rem; padding: 3rem;">No videos match your search criteria.</p>';
        return;
    }
    
    videosToRender.forEach((video, index) => {
        const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`; // Upgraded to higher resolution thumbnail
        
        const card = document.createElement('a');
        card.href = `video.html?id=${video.id}`;
        card.className = 'video-card';
        // Add dynamic animation delay for a cascading load effect
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${thumbnailUrl}" alt="${video.title} thumbnail" onerror="this.src='https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg'">
                <span class="module-badge">${video.module}</span>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Advanced Search with Debounce
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function initializeSearch() {
    const searchBar = document.getElementById('search-bar');
    if (!searchBar) return;

    const performSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase().trim();
        
        const filteredVideos = videosData.filter(video => {
            return video.title.toLowerCase().includes(searchQuery) || 
                   video.description.toLowerCase().includes(searchQuery) ||
                   video.module.toLowerCase().includes(searchQuery); // Added module search
        });
        
        renderVideoGrid(filteredVideos);
    };

    // Apply 300ms debounce to the search input
    searchBar.addEventListener('input', debounce(performSearch, 300));
}

// Load Video Details
function loadVideoDetails() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('id');
    
    if (!videoId) return;

    const video = videosData.find(v => v.id === videoId);
    
    if (video) {
        document.title = `${video.title} - CCL IITGn`;
        
        document.getElementById('video-title').textContent = video.title;
        document.getElementById('video-desc').textContent = video.description;
        document.getElementById('video-module').textContent = `Module: ${video.module}`;
        
        const playerContainer = document.getElementById('player-container');
        playerContainer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        const resourcesList = document.getElementById('resources-list');
        resourcesList.innerHTML = '';
        
        if (video.resources && video.resources.length > 0) {
            video.resources.forEach(res => {
                const li = document.createElement('li');
                // Updated icons based on resource type
                const icon = res.type.toLowerCase() === 'pdf' ? '📄' : res.type.toLowerCase() === 'link' ? '🔗' : '📝';
                li.innerHTML = `<a href="${res.link}" target="_blank">${icon} ${res.title}</a>`;
                resourcesList.appendChild(li);
            });
        } else {
            resourcesList.innerHTML = '<li style="color: var(--text-muted);">No resources currently available.</li>';
        }
    }
}

// Theme Toggle Logic
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check localStorage or OS preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }

    // Toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
            themeToggle.style.transform = 'rotate(-360deg)'; // Spin animation
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
            themeToggle.style.transform = 'rotate(360deg)'; // Spin animation
        }
        
        // Reset transform after animation
        setTimeout(() => {
            themeToggle.style.transition = 'none';
            themeToggle.style.transform = 'none';
            // Force reflow
            themeToggle.offsetHeight; 
            themeToggle.style.transition = 'all 0.3s ease';
        }, 300);
    });
}

// Initialize on Load 
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme(); // Call this first so the theme applies instantly
    
    if (document.getElementById('video-grid')) {
        initializeSlideshow();
        renderVideoGrid();
        initializeSearch();
    } else if (document.getElementById('player-container')) {
        loadVideoDetails();
    }
});
