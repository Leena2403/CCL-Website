// ================= Learn Layer =================
// Adds "the maths", a quick quiz and related videos to game pages, progress badges
// to game cards, and links back to games from video pages. Content lives in learnData.js.
// Loaded after app.js so the pages it decorates are already rendered.
(() => {
    "use strict";

    if (typeof learnData === "undefined") return;

    const STORAGE_KEY = "ccl-progress";

    // Progress is a per-browser convenience, so storage failures are ignored.
    function readProgress() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch (error) {
            return {};
        }
    }

    function saveQuizScore(gameId, score, total) {
        const progress = readProgress();
        const previous = progress[gameId] || {};
        progress[gameId] = { best: Math.max(previous.best || 0, score), total };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) { /* private browsing */ }
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function findVideo(id) {
        return typeof videosData === "undefined" ? null : videosData.find(v => v.id === id);
    }

    // ---------- Game page ----------
    function renderGameLearn() {
        const content = document.getElementById("game-content");
        const gameId = new URLSearchParams(window.location.search).get("id");
        const data = learnData[gameId];
        if (!content || !data) return;

        const section = el("section", "learn");
        section.setAttribute("aria-label", "Learn more");
        section.appendChild(el("p", "learn-kicker", "Learn more"));

        const tabs = el("div", "learn-tabs");
        tabs.setAttribute("role", "tablist");
        section.appendChild(tabs);

        const panels = [
            { id: "maths", label: "🧮 The maths", build: () => buildMaths(data) },
            { id: "quiz", label: "✅ Quick check", build: () => buildQuiz(gameId, data.quiz) },
            { id: "videos", label: "🎬 Watch next", build: () => buildVideos(data.videos) }
        ];

        const buttons = panels.map((panel, index) => {
            const button = el("button", "learn-tab", panel.label);
            button.type = "button";
            button.id = `learn-tab-${panel.id}`;
            button.setAttribute("role", "tab");
            button.setAttribute("aria-controls", `learn-panel-${panel.id}`);

            const body = panel.build();
            body.id = `learn-panel-${panel.id}`;
            body.classList.add("learn-panel");
            body.setAttribute("role", "tabpanel");
            body.setAttribute("aria-labelledby", button.id);
            section.appendChild(body);

            button.addEventListener("click", () => activate(index));
            button.addEventListener("keydown", event => {
                const offset = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
                if (!offset) return;
                event.preventDefault();
                const next = (index + offset + panels.length) % panels.length;
                activate(next);
                buttons[next].focus();
            });
            tabs.appendChild(button);
            return { button, body };
        });

        function activate(active) {
            buttons.forEach(({ button, body }, index) => {
                const selected = index === active;
                button.setAttribute("aria-selected", String(selected));
                button.tabIndex = selected ? 0 : -1;
                body.hidden = !selected;
            });
        }

        activate(0);
        content.after(section);
    }

    function buildMaths(data) {
        const panel = el("div");
        const body = el("div", "learn-maths");
        body.innerHTML = data.maths; // trusted, authored content from learnData.js
        panel.appendChild(body);

        // "Think about it" prompts: answer hidden until the reader has had a go.
        (data.think || []).forEach(({ q, a }) => {
            const details = el("details", "learn-think");
            details.appendChild(el("summary", "", `🤔 ${q}`));
            details.appendChild(el("p", "", a));
            panel.appendChild(details);
        });
        return panel;
    }

    function buildQuiz(gameId, questions) {
        const panel = el("div", "learn-quiz");
        let index = 0, score = 0;

        function showQuestion() {
            const { q, options, answer, explain } = questions[index];
            panel.replaceChildren();

            const progress = el("div", "quiz-progress");
            questions.forEach((_, i) => {
                const dot = el("span", i < index ? "is-done" : i === index ? "is-current" : "");
                progress.appendChild(dot);
            });
            progress.appendChild(el("small", "", `Question ${index + 1} of ${questions.length}`));
            panel.appendChild(progress);
            panel.appendChild(el("h3", "quiz-question", q));

            const list = el("div", "quiz-options");
            const feedback = el("div", "quiz-feedback");
            feedback.setAttribute("aria-live", "polite");

            const optionButtons = options.map((option, i) => {
                const button = el("button", "quiz-option", option);
                button.type = "button";
                button.addEventListener("click", () => {
                    const correct = i === answer;
                    if (correct) score++;
                    optionButtons.forEach((b, j) => {
                        b.disabled = true;
                        if (j === answer) b.classList.add("is-correct");
                    });
                    if (!correct) button.classList.add("is-wrong");

                    feedback.replaceChildren(
                        el("strong", "", correct ? "Correct! 🎉" : "Not quite."),
                        el("p", "", explain)
                    );
                    const next = el("button", "btn-primary quiz-next",
                        index + 1 < questions.length ? "Next question →" : "See my score");
                    next.type = "button";
                    next.addEventListener("click", () => {
                        index++;
                        if (index < questions.length) showQuestion();
                        else showResult();
                    });
                    feedback.appendChild(next);
                    next.focus();
                });
                list.appendChild(button);
                return button;
            });

            panel.append(list, feedback);
        }

        function showResult() {
            saveQuizScore(gameId, score, questions.length);
            const perfect = score === questions.length;
            panel.replaceChildren(
                el("div", "quiz-score", `${score} / ${questions.length}`),
                el("p", "quiz-message", perfect
                    ? "Perfect score! You've really understood this one. 🌟"
                    : "Nice try! Play the game again or read “The maths”, then have another go.")
            );
            const retry = el("button", "btn-primary", "Try again");
            retry.type = "button";
            retry.addEventListener("click", () => {
                index = 0;
                score = 0;
                showQuestion();
            });
            panel.appendChild(retry);
        }

        showQuestion();
        return panel;
    }

    function buildVideos(videos) {
        const panel = el("div", "learn-videos");
        videos.forEach(({ id, why }) => {
            const video = findVideo(id);
            if (!video) return;
            const card = el("a", "learn-video");
            card.href = `video.html?id=${video.id}`;
            const img = el("img");
            img.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
            img.alt = "";
            img.loading = "lazy";
            const text = el("span", "learn-video-text");
            text.append(el("strong", "", video.title.split("|")[0].trim()), el("small", "", why));
            card.append(img, text);
            panel.appendChild(card);
        });
        return panel;
    }

    // ---------- Home page: progress badges on game cards ----------
    function decorateGameCards() {
        const grid = document.getElementById("games-grid");
        if (!grid) return;

        const apply = () => {
            const progress = readProgress();
            grid.querySelectorAll('a[href^="game.html?id="]').forEach(card => {
                const id = new URL(card.href).searchParams.get("id");
                const entry = progress[id];
                const holder = card.querySelector(".thumbnail-container");
                if (!entry || !holder || holder.querySelector(".learn-badge")) return;
                const done = entry.best === entry.total;
                holder.appendChild(el("span", `learn-badge${done ? " is-perfect" : ""}`,
                    `${done ? "★" : "✓"} Quiz ${entry.best}/${entry.total}`));
            });
        };

        apply();
        // The games grid is re-rendered by search and filters.
        new MutationObserver(apply).observe(grid, { childList: true });
    }

    // ---------- Video page: games that practise this video's ideas ----------
    function renderVideoGames() {
        const resources = document.querySelector(".resources-section");
        const videoId = new URLSearchParams(window.location.search).get("id");
        if (!resources || !videoId || typeof gamesData === "undefined") return;

        const games = gamesData.filter(game =>
            (learnData[game.id]?.videos || []).some(v => v.id === videoId));
        if (games.length === 0) return;

        const section = el("div", "resources-section learn-try");
        section.appendChild(el("h2", "", "Try it hands-on"));
        section.appendChild(el("p", "learn-try-sub", "Play a game that uses the ideas from this video."));
        const list = el("div", "learn-try-list");
        games.forEach(game => {
            const card = el("a", "learn-try-card");
            card.href = `game.html?id=${game.id}`;
            const img = el("img");
            img.src = game.thumbnail;
            img.alt = "";
            const text = el("span", "");
            text.append(el("strong", "", game.title), el("small", "", game.shortDescription));
            card.append(img, text);
            list.appendChild(card);
        });
        section.appendChild(list);
        resources.before(section);
    }

    function init() {
        renderGameLearn();
        decorateGameCards();
        renderVideoGames();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
