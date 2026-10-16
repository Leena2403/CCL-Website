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

// ================= Interactive Pixel Art Game Logic =================
function createPixelArtGame(containerId, rows, cols) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const uid = containerId;
    
    // Initialize a 2D array with 1s (White pixels)
    let gridData = Array.from({ length: rows }, () => Array(cols).fill(1));

    container.innerHTML = `
        <div class="maze-controls">
            <button id="reset-${uid}" class="maze-btn-reset">Reset Canvas</button>
        </div>
        <div class="pixel-board-container">
            <div class="pixel-board" id="board-${uid}" style="grid-template-columns: repeat(${cols}, 1fr);"></div>
            <div class="pixel-data-output" id="output-${uid}"></div>
        </div>
    `;

    const board = document.getElementById(`board-${uid}`);
    const output = document.getElementById(`output-${uid}`);

    function calculateRLE(rowArray) {
        let rle = [];
        let currentCount = 0;
        let countingWhite = true; // RLE always starts by counting white

        for (let i = 0; i < rowArray.length; i++) {
            const isWhite = rowArray[i] === 1;
            
            if (isWhite === countingWhite) {
                currentCount++;
            } else {
                rle.push(currentCount);
                currentCount = 1;
                countingWhite = !countingWhite;
            }
        }
        rle.push(currentCount);
        return rle.join(', ');
    }

    function renderBoard() {
        board.innerHTML = '';
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = document.createElement('div');
                cell.className = 'pixel-cell';
                if (gridData[r][c] === 0) cell.classList.add('black');
                
                // Toggle pixel on click
                cell.addEventListener('click', () => {
                    gridData[r][c] = gridData[r][c] === 1 ? 0 : 1;
                    cell.classList.toggle('black');
                    updateOutput();
                });
                
                // Allow dragging to draw
                cell.addEventListener('mouseenter', (e) => {
                    if (e.buttons === 1) { // Left mouse button is held down
                        gridData[r][c] = gridData[r][c] === 1 ? 0 : 1;
                        cell.classList.toggle('black');
                        updateOutput();
                    }
                });

                board.appendChild(cell);
            }
        }
        updateOutput();
    }

    function updateOutput() {
        let html = '';
        for (let r = 0; r < rows; r++) {
            const binaryStr = gridData[r].join('');
            const rleStr = calculateRLE(gridData[r]);
            
            html += `
                <div class="pixel-data-row">
                    <div class="data-label">Row ${r + 1}</div>
                    <div class="data-binary">${binaryStr}</div>
                    <div class="data-rle">RLE: ${rleStr}</div>
                </div>
            `;
        }
        output.innerHTML = html;
    }

    document.getElementById(`reset-${uid}`).addEventListener('click', () => {
        gridData = Array.from({ length: rows }, () => Array(cols).fill(1));
        renderBoard();
    });

    // Prevent default drag behavior to allow smooth drawing
    board.addEventListener('dragstart', (e) => e.preventDefault());

    renderBoard();
}


// ================= Interactive Parity Game Logic =================
function createParityGame(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentSize = 5; // Default 5x5 grid
    let grid = [];
    let gameState = 'setup'; // 'setup', 'readyToFlip', or 'findError'
    let flippedRow = -1;
    let flippedCol = -1;

    function initGrid(size = currentSize) {
        currentSize = size;
        grid = [];
        for (let r = 0; r < currentSize; r++) {
            let row = [];
            for (let c = 0; c < currentSize; c++) {
                if (r === currentSize - 1 || c === currentSize - 1) {
                    row.push(0); // Parity cells start white (0)
                } else {
                    row.push(Math.random() > 0.5 ? 1 : 0); 
                }
            }
            grid.push(row);
        }
        gameState = 'setup';
        flippedRow = -1;
        flippedCol = -1;
        render();
    }

    function checkParity() {
        // Verify every row and column has an even sum
        for (let i = 0; i < currentSize; i++) {
            let rowSum = 0;
            let colSum = 0;
            for (let j = 0; j < currentSize; j++) {
                rowSum += grid[i][j];
                colSum += grid[j][i];
            }
            if (rowSum % 2 !== 0 || colSum % 2 !== 0) return false;
        }
        return true;
    }

    function render() {
        container.innerHTML = ''; 

        // 1. Build the Size Selector
        const headerControls = document.createElement('div');
        headerControls.className = 'parity-controls';
        headerControls.style.marginBottom = '1.5rem';
        
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Select Grid Size: ';
        sizeLabel.style.fontWeight = '600';
        sizeLabel.style.color = 'var(--text-main)';
        
        const sizeSelect = document.createElement('select');
        sizeSelect.style.padding = '0.5rem';
        sizeSelect.style.marginLeft = '0.5rem';
        sizeSelect.style.borderRadius = '4px';
        sizeSelect.style.border = '1px solid var(--border-color)';
        sizeSelect.style.background = 'var(--surface)';
        sizeSelect.style.color = 'var(--text-main)';
        
        // Allow 4x4, 5x5, 6x6, and 8x8 options
        [4, 5, 6, 8].forEach(s => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = `${s}x${s}`;
            if (s === currentSize) opt.selected = true;
            sizeSelect.appendChild(opt);
        });
        
        sizeSelect.addEventListener('change', (e) => {
            initGrid(parseInt(e.target.value));
        });
        
        sizeLabel.appendChild(sizeSelect);
        if (gameState === 'setup' || gameState === 'findError') {
             headerControls.appendChild(sizeLabel);
             container.appendChild(headerControls);
        }

        // 2. Build the Board
        const board = document.createElement('div');
        board.className = 'parity-board';
        // Dynamically override CSS columns based on user selection
        board.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
        
        for (let r = 0; r < currentSize; r++) {
            for (let c = 0; c < currentSize; c++) {
                const cell = document.createElement('div');
                const isParity = (r === currentSize - 1 || c === currentSize - 1);
                
                cell.className = 'parity-cell';
                if (isParity) cell.classList.add('is-parity');
                if (grid[r][c] === 1) cell.classList.add('black');

                // Determine click behavior based on game phase
                if (gameState === 'setup' && isParity) {
                    cell.style.cursor = 'pointer';
                    cell.addEventListener('click', () => {
                        grid[r][c] = grid[r][c] === 1 ? 0 : 1;
                        if (checkParity()) gameState = 'readyToFlip';
                        render();
                    });
                } else if (gameState === 'findError') {
                    cell.style.cursor = 'pointer';
                    cell.addEventListener('click', () => {
                        if (r === flippedRow && c === flippedCol) {
                            alert("Correct! You used pattern recognition to find the corrupted bit.");
                            initGrid(currentSize); // Restart game
                        } else {
                            cell.style.backgroundColor = 'red'; // Flash red for wrong guess
                            setTimeout(() => render(), 300);
                        }
                    });
                } else {
                    cell.style.cursor = 'not-allowed';
                }
                board.appendChild(cell);
            }
        }

        // 3. Build the Status Bar
        const statusDiv = document.createElement('div');
        statusDiv.className = 'parity-status';
        
        if (gameState === 'setup') {
            statusDiv.textContent = "Fill the dashed parity cells so every row and column has an EVEN number of black pixels.";
        } else if (gameState === 'readyToFlip') {
            statusDiv.textContent = "✅ Parity is perfect! Now, click the button to let the computer corrupt a bit.";
            statusDiv.style.color = '#16a34a'; // Green
        } else if (gameState === 'findError') {
            statusDiv.textContent = "🚨 A bit was flipped! Find the row and column with odd parity and click the incorrect bit.";
            statusDiv.style.color = '#dc2626'; // Red
        }

        // 4. Build the Controls
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'parity-controls';
        
        const resetBtn = document.createElement('button');
        resetBtn.className = 'maze-btn-reset';
        resetBtn.textContent = 'Generate New Grid';
        resetBtn.addEventListener('click', () => initGrid(currentSize));
        controlsDiv.appendChild(resetBtn);

        if (gameState === 'readyToFlip') {
            const flipBtn = document.createElement('button');
            flipBtn.className = 'maze-btn-solve';
            flipBtn.style.background = 'var(--accent-orange)';
            flipBtn.style.color = 'white';
            flipBtn.textContent = 'Flip Random Bit';
            
            flipBtn.addEventListener('click', () => {
                // Hide all cells temporarily so the user cannot see the change happen
                const cells = board.querySelectorAll('.parity-cell');
                cells.forEach(cell => cell.style.opacity = '0');
                
                statusDiv.textContent = "🪄 Magically flipping a bit behind your back...";
                statusDiv.style.color = 'var(--accent-orange)';
                flipBtn.disabled = true;
                resetBtn.disabled = true;

                setTimeout(() => {
                    flippedRow = Math.floor(Math.random() * currentSize);
                    flippedCol = Math.floor(Math.random() * currentSize);
                    
                    // Flip the targeted bit
                    grid[flippedRow][flippedCol] = grid[flippedRow][flippedCol] === 1 ? 0 : 1;
                    gameState = 'findError';
                    render(); // Re-renders the board, making the cells visible again
                }, 1200); // 1.2 second delay
            });
            controlsDiv.appendChild(flipBtn);
        }

        container.appendChild(board);
        container.appendChild(statusDiv);
        container.appendChild(controlsDiv);
    }

    // Start the game for the first time
    initGrid();
}

// ================= Chota Shatranj Logic (Updated with Feasibility Solver) =================
function createChotaShatranjGame(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Piece definitions
    const PIECES = {
        'K': { icon: '♔', name: 'King' },
        'Q': { icon: '♕', name: 'Queen' },
        'R': { icon: '♖', name: 'Rook' },
        'B': { icon: '♗', name: 'Bishop' },
        'N': { icon: '♘', name: 'Knight' }
    };

    // Pre-defined Levels
    const LEVELS = [
        { title: "Level 1", rows: 3, cols: 3, removed: [], inventory: { 'K': 2 } },
        { title: "Level 2", rows: 2, cols: 3, removed: ['1,0'], inventory: { 'K': 1, 'R': 1 } },
        { title: "Level 3", rows: 4, cols: 4, removed: ['0,0', '3,3'], inventory: { 'N': 2, 'B': 2 } }
    ];

    let state = {
        mode: 'play', // 'play' or 'build'
        levelIdx: 0,
        rows: 3,
        cols: 3,
        removedCells: new Set(), // Set of "r,c" strings
        inventory: {}, // Format: { 'K': 2, 'R': 1 }
        placed: {}, // Format: "r,c" -> 'K'
        selectedPiece: null,
        conflicts: new Set(),
        isSolvable: true,
        solverAnalysis: null
    };

    function loadLevel(idx) {
        const lvl = LEVELS[idx];
        state.mode = 'play';
        state.levelIdx = idx;
        state.rows = lvl.rows;
        state.cols = lvl.cols;
        state.removedCells = new Set(lvl.removed);
        state.inventory = { ...lvl.inventory };
        state.placed = {};
        state.selectedPiece = null;
        checkWinCondition();
        render();
    }

    // --- Chess Logic ---
    function checkConflicts() {
        state.conflicts.clear();
        const positions = Object.keys(state.placed);
        
        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const [r1, c1] = positions[i].split(',').map(Number);
                const [r2, c2] = positions[j].split(',').map(Number);
                const p1 = state.placed[positions[i]];
                const p2 = state.placed[positions[j]];

                if (isAttacking(r1, c1, p1, r2, c2, state.removedCells, state.placed) || 
                    isAttacking(r2, c2, p2, r1, c1, state.removedCells, state.placed)) {
                    state.conflicts.add(positions[i]);
                    state.conflicts.add(positions[j]);
                }
            }
        }
    }

    function isAttacking(r1, c1, piece, r2, c2, removedSet, currentPlaced) {
        const dr = Math.abs(r2 - r1);
        const dc = Math.abs(c2 - c1);
        
        if (piece === 'K') return dr <= 1 && dc <= 1;
        if (piece === 'N') return (dr === 2 && dc === 1) || (dr === 1 && dc === 2);
        
        const isStraight = r1 === r2 || c1 === c2;
        const isDiag = dr === dc;

        if (piece === 'R' && !isStraight) return false;
        if (piece === 'B' && !isDiag) return false;
        if (piece === 'Q' && !(isStraight || isDiag)) return false;

        // Check line of sight (no pieces blocking) for R, B, Q
        const stepR = r2 > r1 ? 1 : (r2 < r1 ? -1 : 0);
        const stepC = c2 > c1 ? 1 : (c2 < c1 ? -1 : 0);
        
        let currR = r1 + stepR;
        let currC = c1 + stepC;
        
        while (currR !== r2 || currC !== c2) {
            if (currentPlaced[`${currR},${currC}`] || removedSet.has(`${currR},${currC}`)) {
                return false; // Blocked by another piece or a missing cell
            }
            currR += stepR;
            currC += stepC;
        }
        return true;
    }

    // --- Feasibility Backtracking Solver for Builder Mode ---
    function analyzeGridFeasibility() {
        // Build list of piece tokens to place
        let piecesList = [];
        Object.entries(state.inventory).forEach(([type, count]) => {
            for (let i = 0; i < count; i++) piecesList.push(type);
        });

        if (piecesList.length === 0) {
            state.isSolvable = true;
            return;
        }

        // Collect available valid cells
        let availableCells = [];
        for (let r = 0; r < state.rows; r++) {
            for (let c = 0; c < state.cols; c++) {
                if (!state.removedCells.has(`${r},${c}`)) {
                    availableCells.push({ r, c });
                }
            }
        }

        // Quick heuristic check: if pieces exceed available cells, impossible
        if (piecesList.length > availableCells.length) {
            state.isSolvable = false;
            state.solverAnalysis = {
                reason: "You have assigned more pieces than there are active squares on the grid!",
                suggestion: "Try expanding the grid size, adding back missing cells, or reducing piece counts."
            };
            return;
        }

        // Backtracking solver to find if at least one valid arrangement exists
        function backtrack(pieceIndex, placedMap) {
            if (pieceIndex === piecesList.length) return true; // All pieces placed safely!

            const currentPiece = piecesList[pieceIndex];
            for (let i = 0; i < availableCells.length; i++) {
                const cell = availableCells[i];
                const key = `${cell.r},${cell.c}`;

                if (placedMap[key]) continue; // Cell occupied

                // Check if this cell is attacked by any already placed piece
                let safe = true;
                for (let posKey in placedMap) {
                    const [pr, pc] = posKey.split(',').map(Number);
                    const pType = placedMap[posKey];
                    if (isAttacking(pr, pc, pType, cell.r, cell.c, state.removedCells, placedMap) ||
                        isAttacking(cell.r, cell.c, currentPiece, pr, pc, state.removedCells, placedMap)) {
                        safe = false;
                        break;
                    }
                }

                if (safe) {
                    placedMap[key] = currentPiece;
                    if (backtrack(pieceIndex + 1, placedMap)) return true;
                    delete placedMap[key];
                }
            }
            return false;
        }

        state.isSolvable = backtrack(0, {});
        if (!state.isSolvable) {
            state.solverAnalysis = {
                reason: "These pieces restrict each other too much within this specific grid layout.",
                suggestion: "Try removing a conflicting piece type, opening up more blocked cells, or enlarging the grid."
            };
        }
    }

    function checkWinCondition() {
        checkConflicts();
        const totalInventory = Object.values(state.inventory).reduce((a, b) => a + b, 0);
        if (totalInventory === 0 && state.conflicts.size === 0 && Object.keys(state.placed).length > 0) {
            setTimeout(() => alert("Puzzle Solved! No pieces are attacking each other."), 100);
        }
    }

    // --- Interaction ---
    function handleCellClick(r, c) {
        const key = `${r},${c}`;
        
        if (state.mode === 'build') {
            if (state.removedCells.has(key)) state.removedCells.delete(key);
            else state.removedCells.add(key);
            analyzeGridFeasibility();
            render();
            return;
        }

        if (state.removedCells.has(key)) return;

        // Remove piece
        if (state.placed[key]) {
            const type = state.placed[key];
            state.inventory[type] = (state.inventory[type] || 0) + 1;
            delete state.placed[key];
            state.selectedPiece = type;
        } 
        // Place piece
        else if (state.selectedPiece && state.inventory[state.selectedPiece] > 0) {
            state.placed[key] = state.selectedPiece;
            state.inventory[state.selectedPiece]--;
            if (state.inventory[state.selectedPiece] === 0) state.selectedPiece = null;
        }
        
        checkWinCondition();
        render();
    }

    // --- UI Rendering ---
    function render() {
        let html = `<div class="cs-container">`;

        // Header (Title + Buttons)
        html += `
            <div class="cs-header">
                <button class="maze-btn-solve" id="btn-mode" style="background: var(--accent-orange); color: #ffffff; border: none; padding: 0.5rem 1rem;">
                    ${state.mode === 'play' ? 'Create Own Grid' : 'Back to Levels'}
                </button>
                <h3 style="margin: 0; color: var(--text-main); font-size: 1.5rem; font-weight: 600;">
                    ${state.mode === 'build' ? 'Custom Grid Builder' : LEVELS[state.levelIdx].title}
                </h3>
                <button class="maze-btn-reset" id="btn-refresh">Refresh</button>
            </div>
        `;

        // Builder Controls & Feasibility Warning Box
        if (state.mode === 'build') {
            html += `
                <div class="cs-builder-controls">
                    <label>Grid Size:</label>
                    <input type="number" id="inp-rows" class="cs-counter-input" value="${state.rows}" min="2" max="6"> x 
                    <input type="number" id="inp-cols" class="cs-counter-input" value="${state.cols}" min="2" max="6">
                    <p style="margin-left: 1rem; font-size: 0.9rem;">Click grid to remove/add cells. Set pieces below.</p>
                </div>
            `;

            if (!state.isSolvable && state.solverAnalysis) {
                html += `
                    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem; text-align: left;">
                        <p style="margin: 0 0 0.5rem 0; color: #991b1b; font-weight: 700; font-size: 0.95rem;">
                            ⚠️ Warning: This combination looks impossible to solve!
                        </p>
                        <p style="margin: 0 0 0.5rem 0; color: #b91c1c; font-size: 0.9rem;">
                            ${state.solverAnalysis.reason}
                        </p>
                        <p style="margin: 0 0 0.75rem 0; color: #374151; font-size: 0.9rem; font-style: italic;">
                            💡 <strong>Can you think why</strong> this grid pattern with these pieces might not have a working solution? 
                            <em>Hint: Consider how long-range or short-range movement lines overlap within confined constraints, or whether pieces completely dominate all available squares!</em>
                        </p>
                        <div style="background: #fee2e2; padding: 0.5rem 0.75rem; border-radius: 4px; display: inline-block;">
                            <strong style="color: #7f1d1d; font-size: 0.85rem;">Suggested Options:</strong> 
                            <span style="color: #7f1d1d; font-size: 0.85rem;">${state.solverAnalysis.suggestion}</span>
                        </div>
                    </div>
                `;
            }
        }

        // Inventory
        html += `<div class="cs-inventory">`;
        Object.keys(PIECES).forEach(key => {
            const p = PIECES[key];
            const count = state.inventory[key] || 0;
            
            if (state.mode === 'build') {
                html += `
                    <div class="cs-piece-btn">
                        <span class="cs-piece-icon" style="color: ${key === 'Q' || key === 'K' ? '#d97706' : '#2563eb'}">${p.icon}</span>
                        <div style="display:flex; align-items:center; gap:5px; margin-top:5px;">
                            <button class="btn-inc" data-key="${key}" data-val="-1" style="padding:0 5px;">-</button>
                            <span>${count}</span>
                            <button class="btn-inc" data-key="${key}" data-val="1" style="padding:0 5px;">+</button>
                        </div>
                    </div>
                `;
            } else {
                if (count > 0 || state.selectedPiece === key) {
                    const isActive = state.selectedPiece === key ? 'active' : '';
                    const disabled = count === 0 ? 'disabled' : '';
                    html += `
                        <button class="cs-piece-btn ${isActive}" data-key="${key}" ${disabled}>
                            <span class="cs-piece-icon" style="color: ${key === 'Q' || key === 'K' ? '#d97706' : '#2563eb'}">${p.icon}</span>
                            <span class="cs-piece-count">${p.name} (${count})</span>
                        </button>
                    `;
                }
            }
        });
        html += `</div>`;

        // Grid
        html += `<div class="cs-board-wrapper"><div class="cs-board" style="grid-template-columns: repeat(${state.cols}, 1fr);">`;
        for (let r = 0; r < state.rows; r++) {
            for (let c = 0; c < state.cols; c++) {
                const key = `${r},${c}`;
                const isRemoved = state.removedCells.has(key);
                const isConflict = state.conflicts.has(key);
                const piece = state.placed[key];
                
                let classes = 'cs-cell';
                if (isRemoved) classes += ' removed';
                if (isConflict) classes += ' conflict';

                const pieceHtml = piece ? `<span style="color: ${piece === 'Q' || piece === 'K' ? '#d97706' : '#2563eb'}">${PIECES[piece].icon}</span>` : '';
                
                html += `<div class="${classes}" data-r="${r}" data-c="${c}">${pieceHtml}</div>`;
            }
        }
        html += `</div></div>`;

        // Footer Controls
        if (state.mode === 'play') {
            html += `
                <div style="display:flex; justify-content:center; gap: 1rem;">
                    <button class="maze-btn-reset" id="btn-prev" ${state.levelIdx === 0 ? 'disabled' : ''}>Previous Level</button>
                    <button class="maze-btn-reset" id="btn-next" ${state.levelIdx === LEVELS.length - 1 ? 'disabled' : ''}>Next Level</button>
                </div>
            `;
        } else {
            html += `<button class="btn-primary" id="btn-play-custom" style="padding: 10px 24px; font-size:1.1rem;">Play Custom Grid</button>`;
        }

        html += `</div>`;
        container.innerHTML = html;

        // --- Attach Event Listeners ---
        container.querySelectorAll('.cs-cell').forEach(cell => {
            cell.addEventListener('click', (e) => {
                const r = parseInt(e.currentTarget.dataset.r);
                const c = parseInt(e.currentTarget.dataset.c);
                handleCellClick(r, c);
            });
        });

        if (state.mode === 'play') {
            container.querySelectorAll('.cs-piece-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const key = e.currentTarget.dataset.key;
                    if (state.inventory[key] > 0) {
                        state.selectedPiece = key;
                        render();
                    }
                });
            });
        }

        if (state.mode === 'build') {
            container.querySelectorAll('.btn-inc').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const key = e.currentTarget.dataset.key;
                    const val = parseInt(e.currentTarget.dataset.val);
                    const current = state.inventory[key] || 0;
                    if (current + val >= 0) {
                        state.inventory[key] = current + val;
                        analyzeGridFeasibility();
                        render();
                    }
                });
            });

            document.getElementById('inp-rows').addEventListener('change', (e) => {
                state.rows = Math.min(6, Math.max(2, parseInt(e.target.value)));
                analyzeGridFeasibility();
                render();
            });
            document.getElementById('inp-cols').addEventListener('change', (e) => {
                state.cols = Math.min(6, Math.max(2, parseInt(e.target.value)));
                analyzeGridFeasibility();
                render();
            });

            document.getElementById('btn-play-custom').addEventListener('click', () => {
                state.mode = 'play';
                state.placed = {};
                state.selectedPiece = null;
                render();
            });
        }

        document.getElementById('btn-mode').addEventListener('click', () => {
            if (state.mode === 'play') {
                state.mode = 'build';
                state.placed = {};
                state.selectedPiece = null;
                analyzeGridFeasibility();
                render();
            } else {
                loadLevel(state.levelIdx);
            }
        });

        document.getElementById('btn-refresh').addEventListener('click', () => {
            if (state.mode === 'play') {
                Object.values(state.placed).forEach(p => {
                    state.inventory[p] = (state.inventory[p] || 0) + 1;
                });
                state.placed = {};
                state.selectedPiece = null;
                checkConflicts();
                render();
            } else {
                state.removedCells.clear();
                state.inventory = {};
                analyzeGridFeasibility();
                render();
            }
        });

        if (state.mode === 'play') {
            const btnPrev = document.getElementById('btn-prev');
            if (btnPrev) btnPrev.addEventListener('click', () => loadLevel(state.levelIdx - 1));
            
            const btnNext = document.getElementById('btn-next');
            if (btnNext) btnNext.addEventListener('click', () => loadLevel(state.levelIdx + 1));
        }
    }

    // Initialize
    loadLevel(0);
}

// ================= Building Puzzle Logic (Multi-Level & Expanded UI) =================
function createBuildingPuzzle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Define 5 distinct levels (3x3 and 4x4 grids)
    const LEVELS = [
        {
            title: "Level 1: Beginner Towers",
            size: 3,
            solution: [
                [2, 1, 3],
                [3, 2, 1],
                [1, 3, 2]
            ],
            clues: {
                top: [2, 2, 1],
                bottom: [2, 1, 3],
                left: [3, 1, 2],
                right: [1, 2, 2]
            }
        },
        {
            title: "Level 2: Skyline Shift",
            size: 3,
            solution: [
                [3, 1, 2],
                [2, 3, 1],
                [1, 2, 3]
            ],
            clues: {
                top: [1, 2, 2],
                bottom: [3, 1, 2],
                left: [1, 2, 3],
                right: [2, 1, 2]
            }
        },
        {
            title: "Level 3: Urban Density",
            size: 3,
            solution: [
                [1, 3, 2],
                [2, 1, 3],
                [3, 2, 1]
            ],
            clues: {
                top: [3, 1, 2],
                bottom: [1, 2, 2],
                left: [2, 2, 1],
                right: [2, 1, 3]
            }
        },
        {
            title: "Level 4: Metropolis (4x4)",
            size: 4,
            solution: [
                [4, 1, 2, 3],
                [1, 3, 4, 2],
                [2, 4, 3, 1],
                [3, 2, 1, 4]
            ],
            clues: {
                top: [1, 3, 2, 2],
                bottom: [4, 1, 2, 1],
                left: [1, 2, 2, 3],
                right: [4, 2, 1, 1]
            }
        },
        {
            title: "Level 5: Grand Skyscraper Challenge (4x4)",
            size: 4,
            solution: [
                [3, 2, 1, 4],
                [4, 1, 3, 2],
                [1, 4, 2, 3],
                [2, 3, 4, 1]
            ],
            clues: {
                top: [1, 2, 3, 1],
                bottom: [3, 2, 1, 2],
                left: [2, 1, 2, 2],
                right: [2, 2, 2, 1]
            }
        }
    ];

    let currentLevelIdx = 0;
    let grid = [];

    function initLevel() {
        const lvl = LEVELS[currentLevelIdx];
        grid = Array(lvl.size).fill(0).map(() => Array(lvl.size).fill(0));
    }

    function calculateVisible(line) {
        let visibleCount = 0;
        let maxHeight = 0;
        for (let i = 0; i < line.length; i++) {
            if (line[i] === 0) return -1; 
            if (line[i] > maxHeight) {
                visibleCount++;
                maxHeight = line[i];
            }
        }
        return visibleCount;
    }

    function checkWinCondition() {
        const lvl = LEVELS[currentLevelIdx];
        const size = lvl.size;

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (grid[r][c] === 0) return false;
            }
        }

        for (let i = 0; i < size; i++) {
            const row = grid[i];
            const col = grid.map(rowArr => rowArr[i]);
            if (new Set(row).size !== size || new Set(col).size !== size) return false;
        }

        for (let i = 0; i < size; i++) {
            const colTopDown = grid.map(rowArr => rowArr[i]);
            const colBottomUp = [...colTopDown].reverse();
            const rowLeftRight = grid[i];
            const rowRightLeft = [...grid[i]].reverse();

            const clues = lvl.clues;
            if (calculateVisible(colTopDown) !== clues.top[i]) return false;
            if (calculateVisible(colBottomUp) !== clues.bottom[i]) return false;
            if (calculateVisible(rowLeftRight) !== clues.left[i]) return false;
            if (calculateVisible(rowRightLeft) !== clues.right[i]) return false;
        }

        return true;
    }

    function render() {
        container.innerHTML = '';
        const lvl = LEVELS[currentLevelIdx];
        const size = lvl.size;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'bp-container';
        wrapper.style.maxWidth = size === 4 ? '1200px' : '1000px';

        const isWin = checkWinCondition();

        // ================= 1. Build Game Layout FIRST =================
        const layout = document.createElement('div');
        layout.className = 'bp-layout';
        layout.style.display = 'flex';
        layout.style.flexWrap = 'nowrap';
        layout.style.gap = '2rem';
        layout.style.alignItems = 'center';
        layout.style.justifyContent = 'center';
        layout.style.marginBottom = '2rem';

        // --- Build 2D Interactive Grid ---
        const gridEl = document.createElement('div');
        gridEl.className = 'bp-grid';
        gridEl.style.display = 'grid';
        
        const cellSize = size === 4 ? '56px' : '68px';
        gridEl.style.gridTemplateColumns = `repeat(${size + 2}, ${cellSize})`;
        gridEl.style.gridTemplateRows = `repeat(${size + 2}, ${cellSize})`;
        gridEl.style.gap = '6px';
        gridEl.style.justifyContent = 'center';

        for (let r = -1; r <= size; r++) {
            for (let c = -1; c <= size; c++) {
                const cell = document.createElement('div');
                cell.className = 'bp-cell';
                cell.style.width = '100%';
                cell.style.height = '100%';
                cell.style.fontSize = size === 4 ? '1.4rem' : '1.6rem';
                cell.style.display = 'flex';
                cell.style.alignItems = 'center';
                cell.style.justifyContent = 'center';

                if ((r === -1 && c === -1) || (r === -1 && c === size) || (r === size && c === -1) || (r === size && c === size)) {
                    gridEl.appendChild(cell);
                    continue;
                }

                if (r === -1) { cell.classList.add('bp-clue'); cell.innerHTML = `&darr; ${lvl.clues.top[c]}`; }
                else if (r === size) { cell.classList.add('bp-clue'); cell.innerHTML = `&uarr; ${lvl.clues.bottom[c]}`; }
                else if (c === -1) { cell.classList.add('bp-clue'); cell.innerHTML = `${lvl.clues.left[r]} &rarr;`; }
                else if (c === size) { cell.classList.add('bp-clue'); cell.innerHTML = `&larr; ${lvl.clues.right[r]}`; }
                else {
                    cell.classList.add('bp-interactive');
                    const val = grid[r][c];
                    if (val > 0) {
                        cell.textContent = val;
                        cell.classList.add(`bp-val-${val}`);
                    }
                    
                    cell.addEventListener('click', () => {
                        grid[r][c] = (grid[r][c] + 1) % (size + 1);
                        render();
                    });
                }
                gridEl.appendChild(cell);
            }
        }

        // --- Build Solid 3D Isometric Grid ---
        const grid3DWrapper = document.createElement('div');
        grid3DWrapper.className = 'bp-3d-container';
        grid3DWrapper.style.transformStyle = 'preserve-3d'; 
        grid3DWrapper.style.transform = size === 4 ? 'scale(1.1)' : 'scale(1.25)';
        grid3DWrapper.style.transformOrigin = 'center center';
        
        const grid3D = document.createElement('div');
        grid3D.className = 'bp-3d-grid';
        grid3D.style.display = 'grid';
        grid3D.style.transformStyle = 'preserve-3d';
        
        const cell3DSize = size === 4 ? '50px' : '60px';
        grid3D.style.gridTemplateColumns = `repeat(${size}, ${cell3DSize})`;
        grid3D.style.gridTemplateRows = `repeat(${size}, ${cell3DSize})`;
        
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const cell3D = document.createElement('div');
                cell3D.className = 'bp-3d-cell';
                cell3D.style.transformStyle = 'preserve-3d'; 
                
                const val = grid[r][c];
                if (val > 0) {
                    const bldg = document.createElement('div');
                    bldg.className = `bp-3d-building bp-3d-val-${val}`;
                    bldg.style.transformStyle = 'preserve-3d'; 
                    
                    const roof = document.createElement('div');
                    roof.className = 'bp-3d-face bp-3d-roof';
                    
                    const wallLeft = document.createElement('div');
                    wallLeft.className = 'bp-3d-face bp-3d-wall-left';
                    
                    const wallFront = document.createElement('div');
                    wallFront.className = 'bp-3d-face bp-3d-wall-front';
                    
                    bldg.appendChild(roof);
                    bldg.appendChild(wallLeft);
                    bldg.appendChild(wallFront);
                    
                    cell3D.appendChild(bldg);
                }
                grid3D.appendChild(cell3D);
            }
        }
        grid3DWrapper.appendChild(grid3D);

        layout.appendChild(gridEl); 
        layout.appendChild(grid3DWrapper); 
        wrapper.appendChild(layout); // Append game to wrapper first

        // ================= 2. Build Header & Navigation SECOND =================
        const headerEl = document.createElement('div');
        headerEl.className = 'cs-header';
        headerEl.style.marginBottom = '1.5rem';
        headerEl.innerHTML = `
            <button class="maze-btn-reset" id="bp-prev" ${currentLevelIdx === 0 ? 'disabled' : ''}>Previous Level</button>
            <h3 style="margin: 0; color: var(--text-main); font-size: 1.4rem; font-weight: 600;">${lvl.title}</h3>
            <button class="maze-btn-reset" id="bp-next" ${(currentLevelIdx === LEVELS.length - 1 || !isWin) ? 'disabled' : ''}>Next Level</button>
        `;
        wrapper.appendChild(headerEl);

        // ================= 3. Build Status & Reset THIRD =================
        const status = document.createElement('div');
        status.className = 'bp-status';
        status.style.marginTop = '1.5rem';
        status.style.textAlign = 'center';

        if (isWin) {
            status.textContent = "✅ Correct! All buildings placed perfectly.";
            status.style.color = '#16a34a';
        } else {
            status.textContent = `Click the 2D cells (cycles 1 to ${size}) to build skyscrapers and match the clues.`;
            status.style.color = 'var(--text-muted)';
        }

        const actionRow = document.createElement('div');
        actionRow.style.display = 'flex';
        actionRow.style.justifyContent = 'center';
        actionRow.style.gap = '1rem';
        actionRow.style.marginTop = '1rem';

        const resetBtn = document.createElement('button');
        resetBtn.className = 'maze-btn-reset';
        resetBtn.textContent = 'Clear City';
        resetBtn.addEventListener('click', () => {
            initLevel();
            render();
        });

        actionRow.appendChild(resetBtn);
        wrapper.appendChild(status);
        wrapper.appendChild(actionRow);
        
        container.appendChild(wrapper);

        // Event Listeners for Level Navigation
        const prevBtn = document.getElementById('bp-prev');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentLevelIdx > 0) {
                    currentLevelIdx--;
                    initLevel();
                    render();
                }
            });
        }
        
        const nextBtn = document.getElementById('bp-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentLevelIdx < LEVELS.length - 1) {
                    currentLevelIdx++;
                    initLevel();
                    render();
                }
            });
        }
    }

    initLevel();
    render();
}

// ================ Book SPA Logic =================

// Map each section to a specific image in your thumbnails folder
const sectionImages = {
    "Introduction": "book/thumbnails/ct1.png",
    "Computational Thinking Over Maze Puzzle(s)": "book/thumbnails/ct1.png",
    "Computational Thinking Over Puzzle(s)": "book/thumbnails/ct2.png",
    "Language of Computer": "book/thumbnails/lang of computer.png",
    "Algorithms and Computational Thinking": "book/thumbnails/algo and ct.png",
    "Learning AI Through Experience": "book/thumbnails/Algo & CT.png",
    "Computational Thinking Over Encryption": "book/thumbnails/ct3.png",
    "Other Activities": "book/thumbnails/other.png"
};

// ================= Init All Games =================
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
    const colGrid2 = [
        ['S', 'R', 'Bu', 'W'], ['Bu', 'W', 'R', 'R'], ['R', 'Bu', 'W', 'W'], ['W', 'R', 'Bu', 'E']
    ];
    createColourMaze('colour-maze-1', colGrid1);
    createColourMaze('colour-maze-2', colGrid2);

    // ---- Chess Mazes ----
    // P = Pawn, B = Bishop, N = Knight, G = Goal
    const chessGrid1 = [
        ['P', 'P', 'N', 'N'],
        ['N', 'N', 'P', 'B'],
        ['B', 'N', 'N', 'B'],
        ['P', 'N', 'N', 'G']
    ];
    createChessMaze('chess-maze-1', chessGrid1);

    // ---- Pixel Art Games ----
    createPixelArtGame('pixel-game-1', 9, 15);
    createPixelArtGame('pixel-game-2', 9, 15);

    // ---- Parity Game ----
    createParityGame('parity-game-1');
    createChotaShatranjGame('chota-shatranj-1');
    createBuildingPuzzle('building-game-1');
}

// ================= Game Details Page Logic =================
function loadGameDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    const game = gamesData.find(g => g.id === gameId);

    if (game) {
        document.getElementById('game-title').textContent = game.title;
        document.getElementById('game-content').innerHTML = game.content;
    
        if (typeof initAllMazes === 'function') {
            initAllMazes();
        }
    } else {
        document.getElementById('game-content').innerHTML = '<p>Game not found. Please return to the games list.</p>';
    }
}

// 1. Renders the top-level categories
function renderBookSections() {
    const container = document.getElementById('book-dynamic-container');
    if (!container) return;

    // Extract unique sections from bookData
    const uniqueSections = [...new Set(bookData.map(item => item.section))];

    let html = `<div class="video-grid" id="book-sections-grid">`;
    
    uniqueSections.forEach((section, index) => {
        // Count how many chapters are inside this section
        const chapterCount = bookData.filter(item => item.section === section).length;
        
        // Pass the exact section string to the chapter renderer on click
        const safeSectionName = section.replace(/'/g, "\\'"); 
        
        // Lookup the image for this section, fallback to ct1.png if not found
        const imgSrc = sectionImages[section] || "book/thumbnails/ct1.png";
        
        html += `
            <div class="video-card" style="cursor: pointer; animation-delay: ${index * 0.05}s" onclick="renderBookChapters('${safeSectionName}')">
                <div class="thumbnail-container">
                    <img src="${imgSrc}" alt="${section} cover" onerror="this.src='book/thumbnails/ct1.png'">
                    <span class="module-badge" style="background: var(--accent-orange); color: #fff;">${chapterCount} Chapters</span>
                </div>
                <div class="video-info" style="padding: 1.5rem;">
                    <h3 style="font-size: 1.2rem; color: var(--text-main); font-weight: 600; margin-bottom: 0.5rem;">${section}</h3>
                    <p style="color: var(--accent-orange); font-size: 0.95rem; font-weight: 500;">View Chapters &rarr;</p>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// 2. Renders the specific chapters when a category is clicked
function renderBookChapters(sectionName) {
    const container = document.getElementById('book-dynamic-container');
    if (!container) return;

    // Filter bookData to only show chapters matching the clicked section
    const chapters = bookData.filter(item => item.section === sectionName);

    let html = `
        <button class="back-btn" onclick="renderBookSections()" style="background: none; border: none; cursor: pointer; padding: 0; margin-bottom: 1.5rem; font-family: inherit;">
            &larr; Back to All Topics
        </button>
        <h3 style="color: var(--text-main); font-size: 1.5rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
            ${sectionName}
        </h3>
        <div class="video-grid">
    `;

    chapters.forEach((chapter, index) => {
        // Fallback for missing descriptions
        const descText = chapter.description ? chapter.description : "Click to download and read this chapter.";
        
        // Render the image if it exists, otherwise fall back to the emoji
        const imageContent = chapter.thumbnail 
            ? `<img src="${chapter.thumbnail}" alt="${chapter.title} thumbnail">`
            : `<div style="background: var(--primary-light); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"><span style="font-size: 3rem; opacity: 0.8;">📄</span></div>`;

        html += `
            <a href="${chapter.pdfLink}" target="_blank" class="video-card" style="animation-delay: ${index * 0.05}s">
                <div class="thumbnail-container">
                    ${imageContent}
                    <span class="module-badge" style="background: var(--accent-gold); color: #fff;">PDF</span>
                </div>
                <div class="video-info" style="padding: 1.5rem;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); font-weight: 600; margin-bottom: 0.5rem;">${chapter.title}</h4>
                    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">${descText}</p>
                </div>
            </a>
        `;
    });

    html += `</div>`;
    
    container.innerHTML = html;
    document.getElementById('book').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ================= Initialization =================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme(); 
    
    if (document.getElementById('video-grid')) {
        initializeSlideshow();
        renderVideoGrid();
        renderGamesGrid(); 
        renderBookSections();
        initializeSearch();
    } else if (document.getElementById('player-container')) {
        loadVideoDetails();
    } else if (document.getElementById('game-content')) {
        loadGameDetails();
    }
});