// Learning content for each game page, rendered by learn.js.
// maths: authored HTML for "The maths" tab; think: reveal-the-answer prompts;
// quiz: answer is the index of the correct option; videos: ids from data.js.
const learnData = {
    game1: {
        maths: `
            <h3>A maze is really a graph</h3>
            <p>Mathematicians draw puzzles like this as a <strong>graph</strong>: every square is a <em>node</em> (a dot), and every legal jump is an <em>edge</em> (an arrow) from one dot to another. Solving the maze means finding a <strong>path</strong> of arrows from Start to Goal.</p>
            <p>The arrows are <strong>one-way</strong>. A square marked 2 lets you jump 2 squares, but the square you land on may say 3, so you usually can't jump straight back. A graph with one-way arrows is called a <em>directed graph</em>.</p>
            <h3>How the computer finds the shortest path</h3>
            <p>The Auto-Solve button uses <strong>Breadth-First Search (BFS)</strong>. It works in rings, like ripples in a pond:</p>
            <div class="formula">Ring 0: Start<br>Ring 1: every square 1 jump away<br>Ring 2: every new square 2 jumps away<br>… keep going until Goal appears</div>
            <p>Because BFS checks all 1-jump squares before any 2-jump square, the first time it reaches the Goal is guaranteed to be by the <strong>fewest jumps</strong>. Challenge 1 needs 9 jumps, and Challenge 2 needs just 4.</p>
        `,
        think: [
            { q: "Why does a square marked 4 in the middle of a 5×5 grid have no legal moves?", a: "From the middle square (row 3, column 3), jumping 4 in any direction lands 2 squares outside the grid. A square with no outgoing arrows is a dead end: if you land there, you're stuck." },
            { q: "If you wrote the moves down as a list of instructions, what would that list be?", a: "A program! A computer program is just a precise list of steps. Writing down 'down 2, right 3, down 2…' is exactly what programmers do, and testing it on the maze is debugging." }
        ],
        quiz: [
            { q: "You are on the top-left square, which shows 2. Which moves are allowed?", options: ["2 squares down or 2 squares right", "2 squares in any direction, including diagonals", "Any number of squares up to 2", "Only 2 squares right"], answer: 0, explain: "You jump exactly the number shown, in a straight line up, down, left or right. From the top-left corner, up and left would leave the grid." },
            { q: "Can you always jump back to the square you just came from?", options: ["Yes, moves always work both ways", "No, the new square may show a different number", "Only on even numbers", "Only in Challenge 2"], answer: 1, explain: "Each square has its own number, so the move back depends on where you land. That's why the maze is a one-way (directed) graph." },
            { q: "What is the fewest number of jumps needed to solve Challenge 1?", options: ["5", "7", "9", "12"], answer: 2, explain: "Breadth-First Search shows the shortest route takes 9 jumps. There is no way to do it in fewer." }
        ],
        videos: [
            { id: "video2", why: "Computers follow instructions exactly, just like a list of maze moves." },
            { id: "video15", why: "See step-by-step algorithms in action with a weighing scale." }
        ]
    },

    game2: {
        maths: `
            <h3>Position is not enough: you also need direction</h3>
            <p>In the Number Maze, knowing <em>where</em> you are is enough to know your options. Here, a red square lets you go straight or turn right, and which way is "right" depends on the way you are facing.</p>
            <p>So the true <strong>state</strong> of the game is a pair:</p>
            <div class="formula">state = (square, direction)<br>4 × 4 squares × 4 directions = 64 possible states</div>
            <p>Arriving at the same square from a different direction is a different state, with different moves. Spotting this is a big step in computational thinking: you must decide <em>what information really describes the situation</em>.</p>
            <h3>Searching the states</h3>
            <p>The solver explores states using Breadth-First Search. It remembers the states it has visited, so it never goes round in circles. It finds Level 1 in 8 moves and Level 2 in 6 moves.</p>
            <p>Turning is modular arithmetic. Number the directions Up=0, Right=1, Down=2, Left=3:</p>
            <div class="formula">turn right: (d + 1) mod 4<br>turn left:  (d + 3) mod 4</div>
        `,
        think: [
            { q: "Why does the computer turn left by adding 3 instead of subtracting 1?", a: "Adding 3 and subtracting 1 give the same answer on a 4-direction clock. Adding 3 avoids negative numbers: from Up (0), 0 − 1 = −1 isn't a direction, but (0 + 3) mod 4 = 3 = Left." },
            { q: "Could you visit the same square twice in a good solution?", a: "Yes! You might pass through a square once going down and again going right. Those are different states, and the second visit may open up new moves." }
        ],
        quiz: [
            { q: "You are moving Down and land on a Red square. Which moves are allowed?", options: ["Keep going Down, or turn right (Left on the screen)", "Keep going Down, or turn right (Right on the screen)", "Only Down", "Any direction"], answer: 0, explain: "Red means straight or turn right, relative to the way you face. If you face Down, your right-hand side points Left on the screen." },
            { q: "Why isn't the square alone enough to describe where you are in this puzzle?", options: ["Because colours change over time", "Because the allowed moves depend on the direction you are facing", "Because the grid is 4×4", "It is enough"], answer: 1, explain: "The same square allows different moves depending on the direction you entered it from, so the state is (square, direction)." },
            { q: "How many different (square, direction) states does a 4×4 Colour Maze have?", options: ["16", "32", "64", "256"], answer: 2, explain: "16 squares × 4 directions = 64 states. The solver searches through these instead of just the 16 squares." }
        ],
        videos: [
            { id: "video9", why: "Searching smartly, one of the big ideas behind solving mazes." },
            { id: "video2", why: "A computer follows rules like 'red = straight or right' exactly, with no guessing." }
        ]
    },

    game3: {
        maths: `
            <h3>Abstraction: from a chessboard to a tree</h3>
            <p>A computer can't "see" the board. It turns it into something simpler: a list of squares and the connections between them. Throwing away the details that don't matter (wood, colour, piece shapes) and keeping what does (who connects to whom) is called <strong>abstraction</strong>.</p>
            <h3>Counting a piece's moves</h3>
            <p>Each piece has its own move pattern:</p>
            <ul>
                <li><strong>Pawn:</strong> 1 step in 4 directions, so at most 4 moves.</li>
                <li><strong>Knight:</strong> the L-shape (±1, ±2) or (±2, ±1), so at most 8 moves. On a 4×4 board a corner knight has only 2!</li>
                <li><strong>Bishop:</strong> any distance diagonally. On a 4×4 board it can reach at most 5 squares, from one of the four middle squares, but never a square of the other colour.</li>
            </ul>
            <div class="formula">Bishop rule: (row + column) stays even or stays odd<br>→ a bishop can never change square colour</div>
            <p>The shortest solution is 4 moves: <strong>A1 → A2 → A3 → C2 → D4</strong>.</p>
        `,
        think: [
            { q: "Why can a bishop never reach a square of the other colour?", a: "Each diagonal step changes the row by 1 and the column by 1, so row + column changes by 0 or 2. Its 'evenness' (parity) never changes, and the board's colours are exactly the even and odd squares." },
            { q: "Why does every knight move change the colour of the square it stands on?", a: "A knight moves 1 + 2 = 3 squares in total (row + column), an odd number, so row + column flips between even and odd. That means it always lands on the opposite colour." }
        ],
        quiz: [
            { q: "A knight stands in a corner of the 4×4 board. How many squares can it jump to?", options: ["1", "2", "4", "8"], answer: 1, explain: "Of its 8 possible L-shapes, only 2 stay inside the board from a corner." },
            { q: "What does 'abstraction' mean in this activity?", options: ["Drawing the board more beautifully", "Keeping only the squares and their connections, and ignoring other details", "Removing all the knights", "Guessing randomly"], answer: 1, explain: "Turning the board into a tree of connected squares keeps exactly the information needed to find a path, and nothing else." },
            { q: "Can a bishop on a light square ever reach a dark square?", options: ["Yes, in two moves", "Yes, from the edge", "No, never", "Only on a 4×4 board"], answer: 2, explain: "Diagonal steps keep the parity of (row + column), so a bishop is stuck on its own colour forever." }
        ],
        videos: [
            { id: "video1", why: "The famous chessboard and wheat-grain story of doubling." },
            { id: "video22", why: "Watch matchboxes learn to play chess, a first look at AI." }
        ]
    },
    game4: {
        maths: `
            <h3>Pictures are just numbers</h3>
            <p>A screen is a grid of tiny squares called <strong>pixels</strong>. In a black-and-white picture each pixel is one of two values, so a single binary digit (a <strong>bit</strong>) is enough to store it.</p>
            <div class="formula">bits needed = rows × columns<br>9 × 15 grid = 135 bits</div>
            <h3>Run-Length Encoding (RLE)</h3>
            <p>Most pictures have long stretches of the same colour. Instead of storing every pixel, RLE stores <em>how many in a row</em>. Each row starts with a count of white pixels, then black, then white, and so on.</p>
            <div class="formula">□□□□■■■■■■□□ → 4, 6, 2<br>■■■□□□□□□□□□ → 0, 3, 9  (starts black, so 0 whites first)</div>
            <p>That leading 0 matters: without it, the computer would think the row began with 3 whites!</p>
        `,
        think: [
            { q: "When would RLE make a picture take MORE numbers instead of fewer?", a: "When colours change at every pixel, like a checkerboard. A 15-pixel row that alternates □■□■… becomes fifteen 1s, which is no shorter than the raw pixels. RLE only helps when there are long runs." },
            { q: "How many bits would a 9 × 15 image need if each pixel could be one of 4 colours?", a: "4 colours need 2 bits per pixel (00, 01, 10, 11), so 9 × 15 × 2 = 270 bits. Every doubling of colours adds one more bit per pixel." }
        ],
        quiz: [
            { q: "A row is: white, white, white, black, black. What is its RLE?", options: ["3, 2", "2, 3", "0, 3, 2", "5"], answer: 0, explain: "Count the whites first (3), then the blacks (2)." },
            { q: "A row starts with a black pixel. What is the first number in its RLE?", options: ["1", "0", "The number of blacks", "It is skipped"], answer: 1, explain: "Each row always starts by counting whites, so a row that begins black starts with 0 whites." },
            { q: "How many bits does a 9 × 15 black-and-white image need without compression?", options: ["24", "60", "135", "270"], answer: 2, explain: "One bit per pixel: 9 × 15 = 135." }
        ],
        videos: [
            { id: "video4", why: "Punched cards store information as holes or no holes: binary, just like pixels." },
            { id: "video20", why: "A puzzle that turns into a portrait: pictures built from small pieces." }
        ]
    },

    game5: {
        maths: `
            <h3>Parity: even or odd</h3>
            <p>The <strong>parity</strong> of a number is whether it is even or odd. The trick adds an extra square to every row and column so that each one has an <em>even</em> number of black squares.</p>
            <h3>Why one flip is easy to catch</h3>
            <p>Flipping one square changes the count in exactly <strong>one row and one column</strong> by 1, turning even into odd. The secret square is where the odd row and the odd column cross.</p>
            <div class="formula">odd row ∩ odd column = the flipped square</div>
            <p>This is the same idea computers use to catch errors when data is sent over noisy wires or stored on disks. More advanced versions, like Hamming codes, can even fix errors by themselves.</p>
        `,
        think: [
            { q: "Why does the bottom-right corner square always work out, whichever way you choose it?", a: "Both the parity row and the parity column must make the total number of black squares even. They are counting the same total, so they always agree about the corner." },
            { q: "What happens if the flipped square is one of the extra parity squares?", a: "It still works! Flipping a parity square makes its row (or column) odd and also the parity row (or column) odd, and they cross exactly at that square." }
        ],
        quiz: [
            { q: "After adding the parity squares, how many black squares does every row and column have?", options: ["An odd number", "An even number", "Exactly 2", "It depends on the grid size"], answer: 1, explain: "The parity squares are chosen to make every row and column even." },
            { q: "One square is flipped. How do you find it?", options: ["Count all the black squares", "Find the row and column that are now odd: it's where they cross", "Look for the darkest square", "You can't"], answer: 1, explain: "One flip changes exactly one row and one column from even to odd." },
            { q: "If TWO squares in different rows and columns are flipped, what happens?", options: ["You can still find both easily", "You can tell something is wrong, but not exactly which squares", "Nothing looks wrong", "The grid resets"], answer: 1, explain: "You see 2 odd rows and 2 odd columns, which cross in 4 places, so you can't be sure which 2 flipped. Simple parity reliably fixes only one error." }
        ],
        videos: [
            { id: "video10", why: "Uljan – Ullat Palat: the magic trick behind error detection." },
            { id: "video11", why: "Suljan – Ullat Palat: how errors are found and fixed." }
        ]
    },

    game6: {
        maths: `
            <h3>Counting safe placements</h3>
            <p>How many ways can 2 kings sit on a 3×3 board without attacking each other? Count all the pairs, then subtract the bad ones:</p>
            <div class="formula">all pairs of squares: 9 × 8 ÷ 2 = 36<br>touching pairs: 6 across + 6 down + 8 diagonal = 20<br>safe placements: 36 − 20 = 16</div>
            <p>This "count everything, then remove what's not allowed" idea is a powerful counting trick in <strong>combinatorics</strong>.</p>
            <h3>Attacks go both ways</h3>
            <p>If a knight can jump to another knight, the other knight can jump straight back. Kings work the same way. Rooks, bishops and queens slide along lines, so a piece in between <strong>blocks</strong> the attack. That's why the order of placing pieces matters less than which lines are open.</p>
        `,
        think: [
            { q: "On a 3×3 board, where should you put the first king to leave the most room for the second?", a: "In a corner. A corner king covers 3 squares, an edge king 5 and the centre king all 8, so the corner leaves the most free squares." },
            { q: "Why can two bishops on squares of different colours never attack each other?", a: "A bishop only moves along diagonals and never changes colour, so it can only ever reach squares of its own colour." }
        ],
        quiz: [
            { q: "How many ways can you place 2 kings on a 3×3 board so they don't attack each other?", options: ["9", "16", "20", "36"], answer: 1, explain: "There are 36 pairs of squares and 20 of them touch, so 36 − 20 = 16 are safe." },
            { q: "Which piece can be blocked by another piece standing in its path?", options: ["Knight", "King", "Rook", "None of them"], answer: 2, explain: "A rook slides along a row or column, so a piece in the way stops it. Knights jump over pieces, and kings only move one square." },
            { q: "If knight A attacks knight B, does B also attack A?", options: ["Always", "Never", "Only on white squares", "Only in Level 3"], answer: 0, explain: "The L-shaped jump works in both directions, so the attack is mutual." }
        ],
        videos: [
            { id: "video1", why: "The legend of the chessboard and the grains of wheat." },
            { id: "video22", why: "Matchboxes that learn to play chess: AI from simple rules." }
        ]
    },

    game7: {
        maths: `
            <h3>Latin squares</h3>
            <p>Every row and column must contain each height exactly once. A grid like that is called a <strong>Latin square</strong>, the same rule as in Sudoku. There are only 12 different 3×3 Latin squares but 576 different 4×4 ones, so the clues are what narrow it down to one answer.</p>
            <h3>Reading the clues</h3>
            <p>Walking along a line, you see a building only if it's taller than every building before it.</p>
            <ul>
                <li>The tallest building is always seen, so a clue is never 0.</li>
                <li>Clue <strong>1</strong>: the tallest building is first.</li>
                <li>Clue <strong>n</strong> (the size of the grid): the buildings stand in order 1, 2, 3, …</li>
            </ul>
            <div class="formula">left clue + right clue ≤ n + 1</div>
            <p>That's because the tallest building is counted from both sides. Every level here has been checked to have exactly one solution.</p>
        `,
        think: [
            { q: "Can a row have a 1 on BOTH its left and right?", a: "No. A 1 means the tallest building is at that end, and there is only one tallest building per row. With n ≥ 2, the left and right ends are different squares." },
            { q: "In a 3×3 grid, a clue says 2. Where can the tallest building (3) be?", a: "In the middle or at the far end. If 3 were first you'd see only 1 building, so it must have exactly one shorter building visible before it." }
        ],
        quiz: [
            { q: "A clue of 1 on the side of a row means…", options: ["The shortest building is first", "The tallest building is first", "There is only one building", "The row is empty"], answer: 1, explain: "If the tallest building is first, it hides everything behind it." },
            { q: "In a 3×3 puzzle, which clue means the buildings go 1, 2, 3 in order?", options: ["1", "2", "3", "0"], answer: 2, explain: "Each building is taller than the one before, so you see all 3." },
            { q: "Which rule does this puzzle share with Sudoku?", options: ["Numbers add up to 10", "No repeated number in any row or column", "Only even numbers allowed", "Diagonals must match"], answer: 1, explain: "Both are Latin squares: each number appears exactly once in every row and column." }
        ],
        videos: [
            { id: "video19", why: "Ascending and descending order: the key to reading the skyline." },
            { id: "video2", why: "Follow each rule precisely, just like a computer would." }
        ]
    },

    game8: {
        maths: `
            <h3>States and moves</h3>
            <p>At any moment the puzzle is described by three numbers, the litres in each jug, written (8L, 5L, 3L). The water total is always 8, so really only two numbers matter.</p>
            <div class="formula">start (8, 0, 0)  →  goal: a 4 in the 8L or 5L jug</div>
            <p>Each pour continues until the source is empty or the destination is full. That's why you can measure exact amounts without any markings!</p>
            <h3>The shortest solution: 6 pours</h3>
            <p>A Breadth-First Search over all the states proves the minimum is 6:</p>
            <div class="formula">(8,0,0) → (3,5,0) → (3,2,3) → (6,2,0)<br>→ (6,0,2) → (1,5,2) → (1,4,3)</div>
            <p>The secret is that 5 and 3 share no common factor. Adding and taking away 5s and 3s can make any whole number of litres, for example 4 = 3 + 3 + 3 − 5.</p>
        `,
        think: [
            { q: "Could you measure 4 litres with only a 6L and a 3L jug?", a: "No. Every amount you can make is built from 6s and 3s, so it is always a multiple of 3 (0, 3 or 6). 4 isn't a multiple of 3. That's why the 5L and 3L pair works: they share no common factor." },
            { q: "Why does the BFS solver never go round in circles?", a: "It remembers every state it has already seen and never visits one twice. There are only a handful of possible states, so the search always finishes." }
        ],
        quiz: [
            { q: "What is the fewest number of pours needed to get 4 litres?", options: ["4", "6", "7", "9"], answer: 1, explain: "Breadth-First Search over all states shows 6 is the minimum: (8,0,0) → (3,5,0) → (3,2,3) → (6,2,0) → (6,0,2) → (1,5,2) → (1,4,3)." },
            { q: "How much water is there in total, in all three jugs, after any number of pours?", options: ["It goes down", "It goes up", "Always 8 litres", "It depends on the pours"], answer: 2, explain: "Pouring only moves water between jugs. None is added or spilled." },
            { q: "When does a pour stop?", options: ["After 1 litre", "When the source jug is empty or the other jug is full", "Whenever you choose", "When both jugs are half full"], answer: 1, explain: "With no markings, 'empty' and 'full' are the only amounts you can be sure of." }
        ],
        videos: [
            { id: "video15", why: "Algorithms with weighing scales: step-by-step problem solving." },
            { id: "video2", why: "Precise instructions, exactly like a sequence of pours." }
        ]
    }
};
