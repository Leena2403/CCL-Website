const gamesData = [
    {
        id: "game1",
        title: "Number Maze",
        grade: "Grade 5",
        concepts: ["algorithmic-thinking", "abstraction"],
        thumbnail: "img/number_maze.png",
        shortDescription: "Activity: Number-Maze solving and Programming.",
        content: `
            <p><strong>Activity: Number-Maze solving and Programming</strong></p>
            <p>The puzzle is to start from the top-left square position and reach the bottom-right square. Each square has the number written on it. You can jump in a straight line (top, down, right, or left) exactly equal to the number on your current square.</p>
            
            <p>Here is the example from the instructions. The starting position (top-left) has the number 2 written on it. Your first move must be exactly 2 steps down or 2 steps to the right.</p>

            <div id="number-maze-1" class="interactive-game-wrapper"></div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Challenge 2: Try it yourself!</h3>
            <p>Now that you understand the rules, try solving this brand new grid.</p>

            <div id="number-maze-2" class="interactive-game-wrapper"></div>
        `
    },
    {
        id: "game2",
        title: "Colour Maze",
        grade: "Grade 8",
        concepts: ["algorithmic-thinking"],
        thumbnail: "img/color_maze.png",
        shortDescription: "Direction-based maze solving using colour rules.",
        content: `
            <p><strong>Activity: Colour Maze</strong></p>
            <p>Reach from Start (S) to End (E). The colour of a square tells what kind of move is allowed from that square.</p>
            
            <ul style="margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.8;">
                <li><strong>W: White</strong> — move straight only - continuing in the same direction as the previous move[cite: 10].</li>
                <li><strong style="color: #3b82f6;">Bu: Blue</strong> — move straight OR turn left - depending on the direction in which the player is currently facing[cite: 10].</li>
                <li><strong style="color: #ef4444;">R: Red</strong> — move straight OR turn right - depending on the direction in which the player is currently facing[cite: 10].</li>
            </ul>

            <p>In this puzzle, "Move Straight" means continuing in the same direction. Because of this, solving the maze is not only about position; <strong>direction matters as well</strong>[cite: 10]. The same square may behave differently depending on the direction from which it is entered[cite: 10].</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Level 1: The Official Grid</h3>
            <p>The starting square allows you to enter the board moving Right or Down[cite: 11]. Keep an eye on the arrow showing which way you are facing!</p>

            <div id="colour-maze-1" class="interactive-game-wrapper"></div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Level 2: The Logic Challenge</h3>
            <p>Test your orientation skills on this custom 4x4 layout.</p>

            <div id="colour-maze-2" class="interactive-game-wrapper"></div>
        `
    },
    {
        id: "game3",
        title: "Chess Maze",
        grade: "Grade 7",
        concepts: ["abstraction"],
        thumbnail: "img/chess_maze.png",
        shortDescription: "Navigate the grid using the movement rules of chess pieces.",
        content: `
            <p><strong>Activity: Chess Maze</strong></p>
            <p>Reach the Goal position by navigating using the chess rules. Start from the top-left square (Start) and reach the bottom-right square (Goal).</p>
            
            <p>These puzzles use the movements of the chess pieces to define how one can move from each square:</p>
            <ul style="margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.8;">
                <li><strong>♟ Pawn:</strong> moves one position in any direction (up, down, right, or left) within the grid. It cannot move diagonally.</li>
                <li><strong>♝ Bishop:</strong> moves diagonally in any position within the grid. It cannot move straight, and it cannot change the direction of steps in the middle.</li>
                <li><strong>♞ Knight:</strong> moves in an L-shape (two spaces in one direction, then one space perpendicular) within the grid. The knight can move in an L-shape only but not diagonally or straight.</li>
            </ul>

            <p>The 4x4 grid has one chess piece in each square. The starting position (top-left square) has the pawn as a chess piece; it can move one position in any direction (up, down, right, or left). Here, since the only option is downwards or towards the right, one can move there.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Level 1: The Official Chess Maze</h3>
            <div id="chess-maze-1" class="interactive-game-wrapper"></div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Chess Maze: Abstraction</h3>
            <p>A computer does not "see" the number maze the way humans do. Instead, it represents the maze as a tree diagram with squares and lines. Each square remains a square, and each possible jump or number of steps becomes a connection (line) between the squares. A tree diagram is a useful way to represent connections between the squares. This process of simplifying a problem into an easier representation is called Abstraction.</p>

            <p>Let us take the initial chess maze as an example to understand the tree diagram. Label the squares in a maze with names such as A1, A2, A3, ... for the first row, B1, B2, B3,... for the second row, and so on. Now we should draw one line for each square and connect each square when a legal move is possible between them.</p>

            <img src="img/grid.png" alt="Abstraction and Initial Branching" class="game-content-img">

            <p>First, we will take our starting square, A1. Since A1 is represented as a pawn, it should be connected to A2 and B1, since both are one step away vertically/horizontally from A1. We will start to draw the tree diagram from the start square 'A1' and model the first few branches.</p>
            
            <p>We can do this exercise for every square. Now, for Square A2 and B1, we will branch out onwards with their connections A2 &rarr; A1, A3, B2 and B1 &rarr; A3, C3, D2.</p>

            <img src="img/tree_diagram.png" alt="Full Tree Diagram Solution" class="game-content-img">

            <p>Continue drawing the tree diagram onwards here. All branching will stop once we reach the end square 'D4'. Now, instead of finding the path by moving as a chess piece, one can visually find a path from A1 to D4 from the tree diagram.</p>
            
            <p>The solution path of the chess maze is shown below:<br>
            <strong>A1 (Pawn) &rarr; A2 (Pawn) &rarr; A3 (Knight) &rarr; C2 (Knight) &rarr; D4 (Goal)</strong>.</p>
        `
    }
];