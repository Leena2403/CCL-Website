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
                <li><strong>W: White</strong> — move straight only - continuing in the same direction as the previous move.</li>
                <li><strong style="color: #3b82f6;">Bu: Blue</strong> — move straight OR turn left - depending on the direction in which the player is currently facing.</li>
                <li><strong style="color: #ef4444;">R: Red</strong> — move straight OR turn right - depending on the direction in which the player is currently facing.</li>
            </ul>

            <p>In this puzzle, "Move Straight" means continuing in the same direction. Because of this, solving the maze is not only about position; <strong>direction matters as well</strong>. The same square may behave differently depending on the direction from which it is entered.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Level 1: The Official Grid</h3>
            <p>The starting square allows you to enter the board moving Right or Down. Keep an eye on the arrow showing which way you are facing!</p>

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
    },
    {
        id: "game4",
        title: "Image by Number",
        grade: "Grade 6",
        concepts: ["pattern-recognition", "abstraction", "algorithmic-thinking"], 
        thumbnail: "img/computer_language.png",
        shortDescription: "Learn how computers store and compress images using binary and Run-Length Encoding.",
        content: `
            <p><strong>Activity: Image By Number</strong></p>
            <p>Every image we see on a screen, whether it is a picture, a video, or text, is displayed using pixels. Screens are divided into a grid of small dots called pixels (picture elements).</p>
            
            <p>In a black-and-white image, each pixel can be either black or white, so all the computer would need to store is which dots are black and which are white. We can represent this image using the numbers 0 and 1:</p>
            <ul style="margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.8;">
                <li><strong>1 &rarr; White pixel</strong></li>
                <li><strong>0 &rarr; Black pixel</strong></li>
            </ul>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Data Compression: Run-Length Encoding</h3>
            <p>This concept of shortening the representation, known as Run Length Encoding, encodes each continuous group of white and black pixels (or 1’s or 0’s) encountered in a left-to-right scan of a row by its length.</p>
            <p>Instead of writing <strong>10001</strong>, we can write <strong>131</strong>: 1 white pixel, 3 black pixels, and 1 white pixel. If a row starts with a black pixel, we start the code with a '0' to indicate '0 white pixels' before the black ones begin.</p>

            <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                <p style="margin: 0; color: #000; font-weight: 600;">CT Competencies Developed:</p>
                <ul style="margin-top: 0.5rem; margin-bottom: 0; color: #000;">
                    <li><strong style="color: #000;">Pattern Recognition:</strong> Detecting repeated sequences.</li>
                    <li><strong style="color: #000;">Abstraction:</strong> Understanding that numbers can represent pictures.</li>
                    <li><strong style="color: #000;">Optimisation:</strong> Compressing repeated data.</li>
                    <li><strong style="color: #000;">Algorithmic Thinking:</strong> Following encoding rules step by step.</li>
                </ul>
            </div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Level 1: Sandbox Encoder</h3>
            <p>Draw your own image in the grid below! As you click to turn pixels black (0) or white (1), watch how the computer translates your art into binary patterns and compresses them using Run-Length Encoding.</p>

            <div id="pixel-game-1" class="interactive-game-wrapper"></div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Level 2: Decode the Image</h3>
            <p>Computers represent images using numbers. Decode the following Run-Length Encoding by clicking the grid to draw the image.</p>
            <p style="font-family: monospace; font-size: 1.1rem; background: var(--surface); padding: 1rem; border-radius: 4px;">
                Row 1: 4, 11<br>
                Row 2: 4, 9, 2, 1<br>
                Row 3: 4, 9, 2, 1<br>
                Row 4: 4, 11<br>
                Row 5: 4, 9<br>
                Row 6: 4, 9<br>
                Row 7: 5, 7<br>
                Row 8: 0, 17<br>
                Row 9: 1, 15
            </p>

            <div id="pixel-game-2" class="interactive-game-wrapper"></div>
        `
    },
    {
        id: "game5",
        title: "Parity Magic Trick",
        grade: "Grade 7",
        concepts: ["algorithmic-thinking", "pattern-recognition"], 
        thumbnail: "book/chapter_thumbnails/grid_cipher.png",
        shortDescription: "Learn how computers magically detect errors in data using parity bits.",
        content: `
            <p><strong>Activity: Error Detection with Parity Bits</strong></p>
            <p>When computers transmit data, sometimes errors happen (a 0 flips to a 1, or vice versa). To detect this, computers add extra information called <strong>parity bits</strong>.</p>
            
            <p><strong>The Rule of Even Parity:</strong> Every row and every column must have an <strong>EVEN</strong> number of black pixels. If a row has an odd number of black pixels, you must turn the parity bit black to make the total even. If it already has an even number, leave the parity bit white.</p>

            <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                <p style="margin: 0; color: #000; font-weight: 600;">CT Competencies Developed:</p>
                <ul style="margin-top: 0.5rem; margin-bottom: 0; color: #000;">
                    <li><strong style="color: #000;">Algorithmic Thinking:</strong> Calculating sums and following strict conditions.</li>
                    <li><strong style="color: #000;">Pattern Recognition:</strong> Identifying intersecting row/column anomalies.</li>
                </ul>
            </div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Interactive Parity Board</h3>
            <p><strong>Step 1:</strong> Click the dashed parity cells on the right and bottom edges to make sure every row and column has an EVEN number of black pixels.</p>
            <p><strong>Step 2:</strong> Once the computer verifies your parity is correct, click the "Flip Random Bit" button to simulate a data transmission error. See if you can use the rows and columns to find the exact bit that flipped!</p>

            <!-- Game Container injected by app.js -->
            <div id="parity-game-1" class="interactive-game-wrapper" style="margin-top: 2rem;"></div>
        `
    },
    {
        id: "game6",
        title: "Chota Shatranj",
        grade: "Grade 6-8",
        concepts: ["algorithmic-thinking", "spatial-reasoning"], 
        thumbnail: "book/chapter_thumbnails/chess maze.png", 
        shortDescription: "Place chess pieces on custom grids without them attacking each other.",
        content: `

            <div id="chota-shatranj-1" class="interactive-game-wrapper" style="margin-top: 2rem;"></div>
            <p><strong>Activity: Chota Shatranj (Mini Chess)</strong></p>
            <p>Can you arrange a specific set of chess pieces on a grid so that no piece is attacking any other piece? This game tests your spatial reasoning and understanding of movement rules.</p>
            
            <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                <p style="margin: 0; color: #000; font-weight: 600;">How to Play:</p>
                <ul style="margin-top: 0.5rem; margin-bottom: 0; color: #000;">
                    <li>Select a piece from your inventory, then click an empty cell to place it.</li>
                    <li>Click a placed piece to remove it back to your inventory.</li>
                    <li>If pieces attack each other, the board will highlight the conflict!</li>
                </ul>
            </div>

            
        `
    },
    {
        id: "game7",
        title: "Building Puzzle",
        grade: "Grade 6-8",
        concepts: ["algorithmic-thinking", "decomposition", "pattern-recognition", "abstraction", "generalisation"], 
        thumbnail: "book/chapter_thumbnails/building puzzle.png",
        shortDescription: "Help the city planner figure out where to build skyscrapers using visibility clues.",
        content: `
        <div id="building-game-1" class="interactive-game-wrapper" style="margin-top: 2rem;"></div>
            <p><strong>Activity: Building Puzzle</strong></p>
            <p>Help the city planner to figure out where to build skyscrapers using clues. The Building puzzle is a logic-based grid puzzle where the player imagines building skyscrapers of varying heights in a city grid.</p>
            
            <ul style="margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.8;">
                <li>Place a skyscraper in each square.</li>
                <li>Each row and each column must contain buildings of different heights; i.e., no two buildings in a row or column have the same number of floors.</li>
                <li>The number outside the grid (the clues) specifies how many buildings you can see if you stand on that number.</li>
                <li>Taller skyscrapers block the view of shorter skyscrapers located behind them.</li>
            </ul>

            <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; color: #000000;">
                <p style="margin: 0; color: #000000; font-weight: 600;">CT Competencies Developed:</p>
                <ul style="margin-top: 0.5rem; margin-bottom: 0; color: #000000;">
                    <li><strong style="color: #000000;">Algorithmic Thinking:</strong> Follow a process: Scan from the given side, track the tallest building seen so far, and count visible buildings.</li>
                    <li><strong style="color: #000000;">Decomposition:</strong> Breaking the puzzle into smaller constraints: grid size, allowed value and given clues.</li>
                    <li><strong style="color: #000000;">Pattern Recognition:</strong> Recognising that this puzzle structure is similar to Sudoku.</li>
                    <li><strong style="color: #000000;">Generalisation:</strong> Extending to n x n grids, Generalisation pattern: 1 + 2 + ... + n = n(n + 1)/2. Compare two systems and identify similarities.</li>
                    <li><strong style="color: #000000;">Abstraction:</strong> Physical objects represent numerical values and how the arrangement affects visibility.</li>
                </ul>
            </div>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--primary);">Interactive 3x3 Grid</h3>
            <p>Click the empty squares to cycle through building heights (1 = Red, 2 = Yellow, 3 = Green). Make sure no row or column has duplicate heights, and check that the visible buildings match the clues on the outside edges!</p>

            
        `
    }
];