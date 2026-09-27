// ================= Theme Toggle Logic =================
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const targetElement = document.documentElement; 
    
    // Check localStorage or OS preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the theme immediately (even if the toggle button isn't on the page)
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        targetElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        targetElement.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.textContent = '🌙';
    }

    // Only attach the click listener if the button exists
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = targetElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                targetElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
                themeToggle.style.transform = 'rotate(-360deg)';
            } else {
                targetElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
                themeToggle.style.transform = 'rotate(360deg)';
            }
            
            setTimeout(() => {
                themeToggle.style.transition = 'none';
                themeToggle.style.transform = 'none';
                themeToggle.offsetHeight; // Force browser reflow
                themeToggle.style.transition = 'all 0.3s ease';
            }, 300);
        });
    }
}

// ================= Slideshow Logic =================
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
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}


// ================= Grid Rendering =================
function renderVideoGrid(videosToRender = videosData) {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    if (videosToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); font-size: 1.1rem; padding: 3rem;">No videos match your search criteria.</p>';
        return;
    }
    
    videosToRender.forEach((video, index) => {
        const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
        
        const card = document.createElement('a');
        card.href = `video.html?id=${video.id}`;
        card.className = 'video-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${thumbnailUrl}" alt="${video.title} thumbnail" onerror="this.src='https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg'">
                <!-- Video Module badge has been removed -->
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderGamesGrid(gamesToRender = gamesData) {
    const grid = document.getElementById('games-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    if (gamesToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); font-size: 1.1rem; padding: 3rem;">No games match your search criteria.</p>';
        return;
    }
    
    gamesToRender.forEach((game, index) => {
        const card = document.createElement('a');
        card.href = `game.html?id=${game.id}`;
        card.className = 'video-card'; 
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Use the specific game grade, or default to Grade 4-8
        const gradeText = game.grade ? game.grade : "Grade 4-8";
        
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${game.thumbnail}" alt="${game.title} thumbnail">
                <span class="module-badge" style="background: var(--accent-orange);">${gradeText}</span>
            </div>
            <div class="video-info">
                <h3>${game.title}</h3>
                <p>${game.shortDescription}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ================= Advanced Search =================
// ================= Advanced Search & Filtering =================
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
    // 1. Module (Videos) Search
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        const performModuleSearch = (e) => {
            const searchQuery = e.target.value.toLowerCase().trim();
            const filteredVideos = videosData.filter(video => {
                return video.title.toLowerCase().includes(searchQuery) || 
                       video.description.toLowerCase().includes(searchQuery) ||
                       video.module.toLowerCase().includes(searchQuery);
            });
            renderVideoGrid(filteredVideos);
        };
        searchBar.addEventListener('input', debounce(performModuleSearch, 300));
    }

    // 2. Games Search AND Checkbox Filters
    const searchGamesBar = document.getElementById('search-games-bar');
    const gradeFilters = document.querySelectorAll('.grade-filter');
    const conceptFilters = document.querySelectorAll('.concept-filter');

    const filterGames = () => {
        const searchQuery = searchGamesBar ? searchGamesBar.value.toLowerCase().trim() : '';
        
        // Get arrays of active checkbox values
        const activeGradeFilters = Array.from(gradeFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
            
        const activeConceptFilters = Array.from(conceptFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const filteredGames = gamesData.filter(game => {
            // Check Text Match
            const matchesText = game.title.toLowerCase().includes(searchQuery) || 
                                game.shortDescription.toLowerCase().includes(searchQuery);

            // Check Grade Match
            let matchesGrade = true; 
            if (activeGradeFilters.length > 0) {
                const gradeMatch = game.grade ? game.grade.match(/\d+/) : null;
                const gradeNum = gradeMatch ? parseInt(gradeMatch[0]) : 0;
                
                const isPrimary = gradeNum >= 3 && gradeNum <= 5;
                const isMiddle = gradeNum >= 6 && gradeNum <= 8;

                matchesGrade = (activeGradeFilters.includes('primary') && isPrimary) || 
                               (activeGradeFilters.includes('middle') && isMiddle);
            }

            // Check Concept Match
            let matchesConcept = true;
            if (activeConceptFilters.length > 0) {
                // Check if the game has ANY of the selected concepts
                if (game.concepts && Array.isArray(game.concepts)) {
                    matchesConcept = activeConceptFilters.some(concept => game.concepts.includes(concept));
                } else {
                    matchesConcept = false; // If a game has no concepts defined, hide it when filtering by concept
                }
            }

            // Return true only if it passes all active filters
            return matchesText && matchesGrade && matchesConcept;
        });

        renderGamesGrid(filteredGames);
    };

    // Attach listeners
    if (searchGamesBar) {
        searchGamesBar.addEventListener('input', debounce(filterGames, 300));
    }
    
    gradeFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterGames);
    });

    conceptFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterGames);
    });
}


// ================= Details Loaders =================
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
                const icon = res.type.toLowerCase() === 'pdf' ? '📄' : res.type.toLowerCase() === 'link' ? '🔗' : '📝';
                li.innerHTML = `<a href="${res.link}" target="_blank">${icon} ${res.title}</a>`;
                resourcesList.appendChild(li);
            });
        } else {
            resourcesList.innerHTML = '<li style="color: var(--text-muted);">No resources currently available.</li>';
        }
    }
}

function loadGameDetails() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('id');
    if (!gameId) return;

    const game = gamesData.find(g => g.id === gameId);
    if (game) {
        document.title = `${game.title} - CCL IITGn`;
        const titleEl = document.getElementById('game-title');
        const contentEl = document.getElementById('game-content');
        
        if(titleEl) titleEl.textContent = game.title;
        if(contentEl) contentEl.innerHTML = game.content;
    }
}

// ================= Interactive Number Maze Logic =================

function createNumberMaze(containerId, gridData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Use a unique namespace for IDs so multiple games don't conflict
    const uid = containerId; 
    let currentPos = { r: 0, c: 0 };
    let pathHistory = [{ r: 0, c: 0 }];
    let isSolving = false;

    // Build the UI
    container.innerHTML = `
        <div class="maze-controls">
            <button id="reset-${uid}" class="maze-btn-reset">Reset</button>
            <button id="solve-${uid}" class="maze-btn-solve">Auto-Solve Animation</button>
        </div>
        <div class="maze-board" id="board-${uid}"></div>
        <p id="status-${uid}" class="maze-status">Click a pulsing cell to jump!</p>
    `;

    const board = document.getElementById(`board-${uid}`);
    const statusText = document.getElementById(`status-${uid}`);

    function renderBoard() {
        board.innerHTML = '';
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                const val = gridData[r][c];
                const cell = document.createElement('div');
                cell.className = 'maze-cell';
                cell.id = `cell-${uid}-${r}-${c}`;
                
                if (r === 0 && c === 0) {
                    cell.classList.add('start');
                    cell.innerHTML = `<span class="cell-label">Start</span>${val}`;
                } else if (r === 4 && c === 4) {
                    cell.classList.add('end');
                    cell.innerHTML = `${val}<span class="cell-label" style="top:auto; bottom:4px;">End</span>`;
                } else {
                    cell.textContent = val;
                }

                cell.addEventListener('click', () => handleCellClick(r, c));
                board.appendChild(cell);
            }
        }
        updateGameState();
    }

    function updateGameState() {
        // Clear all states in this specific board
        board.querySelectorAll('.maze-cell').forEach(cell => {
            cell.classList.remove('active', 'valid-move', 'path');
        });

        pathHistory.forEach(pos => {
            document.getElementById(`cell-${uid}-${pos.r}-${pos.c}`).classList.add('path');
        });

        const activeCell = document.getElementById(`cell-${uid}-${currentPos.r}-${currentPos.c}`);
        activeCell.classList.add('active');
        activeCell.classList.remove('path');

        if (currentPos.r === 4 && currentPos.c === 4) {
            statusText.textContent = "🎉 Puzzle Solved! Great job!";
            statusText.style.color = "#4ade80";
            return;
        }

        if (!isSolving) {
            const jump = gridData[currentPos.r][currentPos.c];
            const directions = [
                { r: currentPos.r + jump, c: currentPos.c },
                { r: currentPos.r - jump, c: currentPos.c },
                { r: currentPos.r, c: currentPos.c + jump },
                { r: currentPos.r, c: currentPos.c - jump }
            ];

            let hasMoves = false;
            directions.forEach(dir => {
                if (dir.r >= 0 && dir.r < 5 && dir.c >= 0 && dir.c < 5) {
                    document.getElementById(`cell-${uid}-${dir.r}-${dir.c}`).classList.add('valid-move');
                    hasMoves = true;
                }
            });

            if (!hasMoves) {
                statusText.textContent = "Dead end! Click Reset to try again.";
                statusText.style.color = "#ef4444";
            } else {
                statusText.textContent = "Click a pulsing cell to jump!";
                statusText.style.color = "var(--accent-gold)";
            }
        }
    }

    function handleCellClick(r, c) {
        if (isSolving) return;
        const cell = document.getElementById(`cell-${uid}-${r}-${c}`);
        if (cell.classList.contains('valid-move')) {
            currentPos = { r, c };
            pathHistory.push({ r, c });
            updateGameState();
        }
    }

    function solveMaze() {
        const queue = [[{ r: 0, c: 0 }]];
        const visited = new Set(['0,0']);

        while (queue.length > 0) {
            const path = queue.shift();
            const curr = path[path.length - 1];
            const val = gridData[curr.r][curr.c];

            if (curr.r === 4 && curr.c === 4) return path;

            const directions = [
                { r: curr.r + val, c: curr.c },
                { r: curr.r - val, c: curr.c },
                { r: curr.r, c: curr.c + val },
                { r: curr.r, c: curr.c - val }
            ];

            for (let dir of directions) {
                if (dir.r >= 0 && dir.r < 5 && dir.c >= 0 && dir.c < 5) {
                    const key = `${dir.r},${dir.c}`;
                    if (!visited.has(key)) {
                        visited.add(key);
                        queue.push([...path, dir]);
                    }
                }
            }
        }
        return null;
    }

    document.getElementById(`solve-${uid}`).addEventListener('click', () => {
        if (isSolving) return;
        isSolving = true;
        currentPos = { r: 0, c: 0 };
        pathHistory = [{ r: 0, c: 0 }];
        updateGameState();
        
        statusText.textContent = "Calculating solution...";
        const solutionPath = solveMaze();
        
        if (solutionPath) {
            let step = 1;
            statusText.textContent = "Auto-solving...";
            const interval = setInterval(() => {
                if (step < solutionPath.length) {
                    currentPos = solutionPath[step];
                    pathHistory.push(currentPos);
                    updateGameState();
                    step++;
                } else {
                    clearInterval(interval);
                    isSolving = false;
                }
            }, 800);
        } else {
            statusText.textContent = "No solution found!";
            isSolving = false;
        }
    });

    document.getElementById(`reset-${uid}`).addEventListener('click', () => {
        isSolving = false;
        currentPos = { r: 0, c: 0 };
        pathHistory = [{ r: 0, c: 0 }];
        updateGameState();
    });

    renderBoard();
}

function initAllMazes() {
    // Grid 1: From the image provided
    const grid1 = [
        [2, 3, 1, 1, 2],
        [4, 2, 1, 2, 2],
        [3, 3, 3, 2, 3],
        [2, 4, 1, 4, 1],
        [1, 4, 3, 3, 0]
    ];

    // Grid 2: A brand new puzzle with a different path
    const grid2 = [
        [2, 2, 2, 1, 3],
        [1, 3, 1, 2, 1],
        [3, 1, 2, 1, 2],
        [2, 2, 1, 3, 1],
        [1, 2, 3, 2, 0]
    ];

    createNumberMaze('number-maze-1', grid1);
    createNumberMaze('number-maze-2', grid2);
}

// Update your loadGameDetails function
function loadGameDetails() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('id');
    if (!gameId) return;

    const game = gamesData.find(g => g.id === gameId);
    if (game) {
        document.title = `${game.title} - CCL IITGn`;
        const titleEl = document.getElementById('game-title');
        const contentEl = document.getElementById('game-content');
        
        if(titleEl) titleEl.textContent = game.title;
        if(contentEl) {
            contentEl.innerHTML = game.content;
            initAllMazes(); // Call the initializer here
        }
    }
}

// ================= Interactive Colour Maze Logic =================
function createColourMaze(containerId, gridData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const uid = containerId; 
    let currentPos = { r: 0, c: 0, dir: null }; // dir: 0=UP, 1=RIGHT, 2=DOWN, 3=LEFT
    let pathHistory = [{ r: 0, c: 0, dir: null }];
    let isSolving = false;
    const gridSize = gridData.length;

    container.innerHTML = `
        <div class="maze-controls">
            <button id="reset-${uid}" class="maze-btn-reset">Reset</button>
            <button id="solve-${uid}" class="maze-btn-solve">Auto-Solve Animation</button>
        </div>
        <div class="maze-board grid-4x4" id="board-${uid}"></div>
        <p id="status-${uid}" class="maze-status">Click an adjacent square to enter the maze!</p>
    `;

    const board = document.getElementById(`board-${uid}`);
    const statusText = document.getElementById(`status-${uid}`);

    // Direction vectors: UP, RIGHT, DOWN, LEFT
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, 1, 0, -1];
    const arrowRotations = [0, 90, 180, 270];

    function renderBoard() {
        board.innerHTML = '';
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const val = gridData[r][c];
                const cell = document.createElement('div');
                cell.className = `maze-cell color-${val}`;
                cell.id = `cell-${uid}-${r}-${c}`;
                
                // Add labels for Start and End
                if (val === 'S') {
                    cell.innerHTML = `<span class="cell-label" style="top:4px;">Start</span>`;
                } else if (val === 'E') {
                    cell.innerHTML = `<span class="cell-label" style="top:auto; bottom:4px;">End</span>`;
                } else {
                    cell.innerHTML = `<span style="font-size: 1.2rem;">${val}</span>`;
                }

                cell.addEventListener('click', () => handleCellClick(r, c));
                board.appendChild(cell);
            }
        }
        updateGameState();
    }

    function getAllowedDirections(cellType, currentDir) {
        if (currentDir === null) return [1, 2]; // From start, can go Right(1) or Down(2)
        if (cellType === 'W') return [currentDir]; // Straight only
        if (cellType === 'Bu') return [currentDir, (currentDir + 3) % 4]; // Straight or Left
        if (cellType === 'R') return [currentDir, (currentDir + 1) % 4]; // Straight or Right
        return [currentDir]; // Fallback
    }

    function updateGameState() {
        board.querySelectorAll('.maze-cell').forEach(cell => {
            cell.classList.remove('active', 'valid-move', 'path');
            const arrow = cell.querySelector('.player-arrow');
            if (arrow) arrow.remove();
        });

        pathHistory.forEach(pos => {
            document.getElementById(`cell-${uid}-${pos.r}-${pos.c}`).classList.add('path');
        });

        const activeCell = document.getElementById(`cell-${uid}-${currentPos.r}-${currentPos.c}`);
        activeCell.classList.add('active');
        activeCell.classList.remove('path');

        // Draw Player Arrow
        if (currentPos.dir !== null) {
            const arrow = document.createElement('div');
            arrow.className = 'player-arrow';
            arrow.textContent = '⬆';
            arrow.style.transform = `rotate(${arrowRotations[currentPos.dir]}deg)`;
            activeCell.appendChild(arrow);
        }

        if (gridData[currentPos.r][currentPos.c] === 'E') {
            statusText.textContent = "🎉 Puzzle Solved! Great job!";
            statusText.style.color = "#4ade80";
            return;
        }

        if (!isSolving) {
            const cellType = gridData[currentPos.r][currentPos.c];
            const allowedDirs = getAllowedDirections(cellType, currentPos.dir);
            let hasMoves = false;

            allowedDirs.forEach(dir => {
                const nr = currentPos.r + dRow[dir];
                const nc = currentPos.c + dCol[dir];
                if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize) {
                    document.getElementById(`cell-${uid}-${nr}-${nc}`).classList.add('valid-move');
                    hasMoves = true;
                }
            });

            if (!hasMoves) {
                statusText.textContent = "Dead end! Click Reset to try again.";
                statusText.style.color = "#ef4444";
            } else if (currentPos.dir === null) {
                statusText.textContent = "Click a pulsing cell to enter the maze.";
                statusText.style.color = "var(--text-main)";
            } else {
                statusText.textContent = "Click a pulsing cell to move!";
                statusText.style.color = "var(--accent-gold)";
            }
        }
    }

    function handleCellClick(r, c) {
        if (isSolving) return;
        const cell = document.getElementById(`cell-${uid}-${r}-${c}`);
        if (cell.classList.contains('valid-move')) {
            // Determine direction taken to get here
            let newDir = currentPos.dir;
            if (r < currentPos.r) newDir = 0; // Up
            else if (c > currentPos.c) newDir = 1; // Right
            else if (r > currentPos.r) newDir = 2; // Down
            else if (c < currentPos.c) newDir = 3; // Left

            currentPos = { r, c, dir: newDir };
            pathHistory.push({ ...currentPos });
            updateGameState();
        }
    }

    function solveMaze() {
        const queue = [[{ r: 0, c: 0, dir: null }]];
        const visited = new Set(['0,0,null']); // Include direction in visited state

        while (queue.length > 0) {
            const path = queue.shift();
            const curr = path[path.length - 1];
            const cellType = gridData[curr.r][curr.c];

            if (cellType === 'E') return path;

            const allowedDirs = getAllowedDirections(cellType, curr.dir);

            for (let dir of allowedDirs) {
                const nr = curr.r + dRow[dir];
                const nc = curr.c + dCol[dir];
                
                if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize) {
                    const key = `${nr},${nc},${dir}`;
                    if (!visited.has(key)) {
                        visited.add(key);
                        queue.push([...path, { r: nr, c: nc, dir: dir }]);
                    }
                }
            }
        }
        return null;
    }

    document.getElementById(`solve-${uid}`).addEventListener('click', () => {
        if (isSolving) return;
        isSolving = true;
        currentPos = { r: 0, c: 0, dir: null };
        pathHistory = [{ r: 0, c: 0, dir: null }];
        updateGameState();
        
        statusText.textContent = "Calculating solution...";
        const solutionPath = solveMaze();
        
        if (solutionPath) {
            let step = 1;
            statusText.textContent = "Auto-solving...";
            const interval = setInterval(() => {
                if (step < solutionPath.length) {
                    currentPos = solutionPath[step];
                    pathHistory.push({ ...currentPos });
                    updateGameState();
                    step++;
                } else {
                    clearInterval(interval);
                    isSolving = false;
                }
            }, 800);
        } else {
            statusText.textContent = "No solution found!";
            isSolving = false;
        }
    });

    document.getElementById(`reset-${uid}`).addEventListener('click', () => {
        isSolving = false;
        currentPos = { r: 0, c: 0, dir: null };
        pathHistory = [{ r: 0, c: 0, dir: null }];
        updateGameState();
    });

    renderBoard();
}

// ================= Init All Games =================
function initAllMazes() {
    // ---- Number Mazes ----
    const numGrid1 = [
        [2, 3, 1, 1, 2],
        [4, 2, 1, 2, 2],
        [3, 3, 3, 2, 3],
        [2, 4, 1, 4, 1],
        [1, 4, 3, 3, 0]
    ];
    const numGrid2 = [
        [2, 2, 2, 1, 3],
        [1, 3, 1, 2, 1],
        [3, 1, 2, 1, 2],
        [2, 2, 1, 3, 1],
        [1, 2, 3, 2, 0]
    ];
    createNumberMaze('number-maze-1', numGrid1);
    createNumberMaze('number-maze-2', numGrid2);

    // ---- Colour Mazes ----
    const colGrid1 = [
        ['S', 'W', 'R', 'W'],
        ['R', 'Bu', 'R', 'R'],
        ['Bu', 'R', 'Bu', 'W'],
        ['R', 'W', 'R', 'E']
    ];
    const colGrid2 = [
        ['S', 'R', 'Bu', 'W'],
        ['Bu', 'W', 'R', 'R'],
        ['R', 'Bu', 'W', 'W'],
        ['W', 'R', 'Bu', 'E']
    ];
    createColourMaze('colour-maze-1', colGrid1);
    createColourMaze('colour-maze-2', colGrid2);
}

// ================= Interactive Chess Maze Logic =================
function createChessMaze(containerId, gridData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const uid = containerId; 
    let currentPos = { r: 0, c: 0 }; 
    let pathHistory = [{ r: 0, c: 0 }];
    let isSolving = false;
    const gridSize = gridData.length;

    // Unicode map for chess pieces
    const pieceMap = {
        'P': '♟',
        'B': '♝',
        'N': '♞',
        'G': '⚑'
    };

    container.innerHTML = `
        <div class="maze-controls">
            <button id="reset-${uid}" class="maze-btn-reset">Reset</button>
            <button id="solve-${uid}" class="maze-btn-solve">Auto-Solve Animation</button>
        </div>
        <div class="chess-board" id="board-${uid}"></div>
        <p id="status-${uid}" class="maze-status">Click a pulsing cell to jump!</p>
    `;

    const board = document.getElementById(`board-${uid}`);
    const statusText = document.getElementById(`status-${uid}`);

    function renderBoard() {
        board.innerHTML = '';
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const val = gridData[r][c];
                const cell = document.createElement('div');
                
                // Determine checkered pattern (light or dark)
                const isLight = (r + c) % 2 === 0;
                cell.className = `chess-cell ${isLight ? 'light-square' : 'dark-square'}`;
                cell.id = `cell-${uid}-${r}-${c}`;
                
                let label = '';
                if (r === 0 && c === 0) label = `<span class="chess-label">Start</span>`;
                if (r === gridSize - 1 && c === gridSize - 1) label = `<span class="chess-label" style="top:auto; bottom:4px;">Goal</span>`;
                
                cell.innerHTML = `${label}${pieceMap[val]}`;
                cell.addEventListener('click', () => handleCellClick(r, c));
                board.appendChild(cell);
            }
        }
        updateGameState();
    }

    // Logic to validate chess moves based on the rules
    function isValidMove(startR, startC, endR, endC, piece) {
        const rowDiff = Math.abs(endR - startR);
        const colDiff = Math.abs(endC - startC);
        
        if (rowDiff === 0 && colDiff === 0) return false; // Can't stay in place

        if (piece === 'P') {
            // Pawn: One position up, down, right, or left (no diagonals)
            return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
        } 
        else if (piece === 'B') {
            // Bishop: Diagonals only
            return rowDiff === colDiff;
        } 
        else if (piece === 'N') {
            // Knight: L-shape
            return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
        }
        return false;
    }

    function updateGameState() {
        // Clear all states
        board.querySelectorAll('.chess-cell').forEach(cell => {
            cell.classList.remove('active', 'valid-move', 'path');
        });

        // Draw Path
        pathHistory.forEach(pos => {
            document.getElementById(`cell-${uid}-${pos.r}-${pos.c}`).classList.add('path');
        });

        // Set Active Cell
        const activeCell = document.getElementById(`cell-${uid}-${currentPos.r}-${currentPos.c}`);
        activeCell.classList.add('active');
        activeCell.classList.remove('path');

        const currentPiece = gridData[currentPos.r][currentPos.c];

        if (currentPiece === 'G') {
            statusText.textContent = "🎉 Goal Reached! Excellent work!";
            statusText.style.color = "#4ade80";
            return;
        }

        if (!isSolving) {
            let hasMoves = false;

            // Iterate over entire board to find valid landing spots
            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c < gridSize; c++) {
                    if (isValidMove(currentPos.r, currentPos.c, r, c, currentPiece)) {
                        document.getElementById(`cell-${uid}-${r}-${c}`).classList.add('valid-move');
                        hasMoves = true;
                    }
                }
            }

            if (!hasMoves) {
                statusText.textContent = "Dead end! Click Reset to try again.";
                statusText.style.color = "#ef4444";
            } else {
                statusText.textContent = "Click a pulsing cell to move!";
                statusText.style.color = "var(--accent-gold)";
            }
        }
    }

    function handleCellClick(r, c) {
        if (isSolving) return;
        const cell = document.getElementById(`cell-${uid}-${r}-${c}`);
        if (cell.classList.contains('valid-move')) {
            currentPos = { r, c };
            pathHistory.push({ ...currentPos });
            updateGameState();
        }
    }

    function solveMaze() {
        const queue = [[{ r: 0, c: 0 }]];
        const visited = new Set(['0,0']);

        while (queue.length > 0) {
            const path = queue.shift();
            const curr = path[path.length - 1];
            const piece = gridData[curr.r][curr.c];

            if (piece === 'G') return path;

            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c < gridSize; c++) {
                    if (isValidMove(curr.r, curr.c, r, c, piece)) {
                        const key = `${r},${c}`;
                        if (!visited.has(key)) {
                            visited.add(key);
                            queue.push([...path, { r, c }]);
                        }
                    }
                }
            }
        }
        return null;
    }

    document.getElementById(`solve-${uid}`).addEventListener('click', () => {
        if (isSolving) return;
        isSolving = true;
        currentPos = { r: 0, c: 0 };
        pathHistory = [{ r: 0, c: 0 }];
        updateGameState();
        
        statusText.textContent = "Calculating solution tree...";
        const solutionPath = solveMaze();
        
        if (solutionPath) {
            let step = 1;
            statusText.textContent = "Auto-solving...";
            const interval = setInterval(() => {
                if (step < solutionPath.length) {
                    currentPos = solutionPath[step];
                    pathHistory.push({ ...currentPos });
                    updateGameState();
                    step++;
                } else {
                    clearInterval(interval);
                    isSolving = false;
                }
            }, 800);
        } else {
            statusText.textContent = "No solution found!";
            isSolving = false;
        }
    });

    document.getElementById(`reset-${uid}`).addEventListener('click', () => {
        isSolving = false;
        currentPos = { r: 0, c: 0 };
        pathHistory = [{ r: 0, c: 0 }];
        updateGameState();
    });

    renderBoard();
}

// ================= Init All Games =================
// Replace your existing initAllMazes function with this one
function initAllMazes() {
    // ---- Number Mazes ----
    const numGrid1 = [
        [2, 3, 1, 1, 2], [4, 2, 1, 2, 2], [3, 3, 3, 2, 3], [2, 4, 1, 4, 1], [1, 4, 3, 3, 0]
    ];
    const numGrid2 = [
        [2, 2, 2, 1, 3], [1, 3, 1, 2, 1], [3, 1, 2, 1, 2], [2, 2, 1, 3, 1], [1, 2, 3, 2, 0]
    ];
    createNumberMaze('number-maze-1', numGrid1);
    createNumberMaze('number-maze-2', numGrid2);

    // ---- Colour Mazes ----
    const colGrid1 = [
        ['S', 'W', 'R', 'W'], ['R', 'Bu', 'R', 'R'], ['Bu', 'R', 'Bu', 'W'], ['R', 'W', 'R', 'E']
    ];
    createColourMaze('colour-maze-1', colGrid1);

    // ---- Chess Mazes (NEW) ----
    // P = Pawn, B = Bishop, N = Knight, G = Goal
    const chessGrid1 = [
        ['P', 'P', 'N', 'N'],
        ['N', 'N', 'P', 'B'],
        ['B', 'N', 'N', 'B'],
        ['P', 'N', 'N', 'G']
    ];
    createChessMaze('chess-maze-1', chessGrid1);
}

// ================= Initialization on Load =================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme(); // Call this first so the theme applies instantly
    
    // Check which page we are on and run the appropriate functions
    if (document.getElementById('video-grid')) {
        initializeSlideshow();
        renderVideoGrid();
        renderGamesGrid(); 
        initializeSearch();
    } else if (document.getElementById('player-container')) {
        loadVideoDetails();
    } else if (document.getElementById('game-content')) {
        loadGameDetails();
    }
});