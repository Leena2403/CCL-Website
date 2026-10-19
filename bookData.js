const bookData = [
    // COMPUTATIONAL THINKING OVER MAZE PUZZLE(S)
    {
        id: "b1_1",
        section: "Computational Thinking Over Maze Puzzle(s)",
        title: "Number Maze",
        thumbnail: "book/chapter_thumbnails/number maze.png",
        pdfLink: "book/Number Maze Grade 5.pdf",
        content: `
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/number maze.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In these activities, students explore what a computer program is by writing a set of steps to solve a maze. A program is basically a set of instructions to tell the computer what to do. To ensure the program is working and solving the problem, it must also be tested. The activity provides students with an opportunity to play different roles and understand the basics of computer programming.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> Students are learning to sequence a set of instructions to complete the puzzle.</li>
                    <li><strong>Abstraction:</strong> The 'programming' students will be doing in these activities is an abstract version of the computer programming language.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Number-Maze solving and Programming</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The puzzle is to start from the top-left square position and reach the bottom-right square. Each square has the number written on it. You can jump in a straight line (top, down, right, or left) exactly equal to the number on your current square.
                </p>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here is the example from the instructions. The starting position (top-left) has the number 2 written on it. Your first move must be exactly 2 steps down or 2 steps to the right.
                </p>

                <!-- Centered Game Container 1 -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; display: flex; justify-content: center; align-items: center; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div id="number-maze-1" style="width: 100%; max-width: 450px;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Challenge 2: Try it yourself!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now that you understand the rules, try solving this brand new grid.
                </p>

                <!-- Centered Game Container 2 -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 2rem; display: flex; justify-content: center; align-items: center; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div id="number-maze-2" style="width: 100%; max-width: 450px;"></div>
                </div>
            </div>
        `
    },
    {
        id: "b1_2",
        section: "Computational Thinking Over Maze Puzzle(s)",
        title: "Hopping on Number Maze and Programming",
        thumbnail: "book/chapter_thumbnails/num maze 2.png",
        pdfLink: "book/Number Maze Grade 6.pdf",
        content: `
            <!-- Hero Image Section -->

            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/color maze.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Explore computer programming by writing steps for solving a maze. A program is basically the set of instructions to tell the computer what to do. To be sure that the program is working and solving the problem, it also needs to be tested. The activity provides a group of students an opportunity to play different roles in the activity and understand the basics of computer programming.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;">Actively listen to the feedback and check the program (instructions). Communicate when the program isn't correct.</li>
                    <li style="margin-bottom: 0.75rem;">Give a set of precise instructions that programs an object to move efficiently from one point to another.</li>
                    <li style="margin-bottom: 0.75rem;">Observe patterns in movement and apply them to solve navigation challenges.</li>
                    <li style="margin-bottom: 0.75rem;">Identify errors in a sequence of instructions and suggest corrections.</li>
                    <li style="margin-bottom: 0.75rem;">Predict the outcome of a set of instructions before testing it.</li>
                    <li>Collaborate with peers to test and improve a program.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Puzzle: The Rook on a Number Grid</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    You want to let rook move on the 4x4 board and help to reach the end position starting from left-top as shown in the figure. The Rook can only move the number of steps written on the cell. Not allowed - move diagonally. Also, it can not change the direction of steps intermediately.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Writing a Program</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Computers follow instructions. To get our work done from computers, we need to tell them what to do. The list of instructions for computers is called <strong>Program</strong>. We will be using a simple language that can be used without a computer. Instructions: Move forward (1 Step), Take right turn.                 </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Classroom Roles</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Make a group of 3 students - a programmer, a robot and a tester. The one who write the program using a programming language are called the programmer. The programmer will read the program loudly and communicate the instructions. The robot will follow the instructions over a puzzle grid on the foyer. To be sure that the program is working perfectly, someone needs to check it. They are called testers. The tester will check if the program is solving the puzzle or not.
                </p>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); font-style: italic;">
                    "Being a programmer isn't only about knowing the particular instructions in a programming language, but the ability to think and put together these instructions in a way that the computer will do what is intended."
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Exercise: Try it yourself!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    The Puzzle - Level 1 (4x4 Number Grid). Write Program using only these two instructions: Move Forward & Right Turn. Test your program here (follow the instructions written above).
                </p>

                <!-- Centered Game Container -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; display: flex; justify-content: center; align-items: center; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div id="number-maze-3" style="width: 100%; max-width: 450px;"></div>
                </div>
            </div>
        `
    },
    {
        id: "b1_3",
        section: "Computational Thinking Over Maze Puzzle(s)",
        title: "Chess Maze and Abstraction",
        thumbnail: "book/chapter_thumbnails/chess maze.png",
        pdfLink: "book/Chess Maze Grade 7.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/chess maze.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Using a chess-maze puzzle, one can explore the idea of abstraction in computational thinking. Abstraction means reducing a complex problem to its essential parts, making it easier to understand and solve. In this lesson, one begins with a puzzle with chess pieces drawn on a grid. The objective is to reach the Goal by navigating using the chess rules. Explore how to represent the puzzle in a simpler form using a tree diagram, which helps one to shift from a visual puzzle to a computational activity.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Goals</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Exploration:</strong> Chess maze by chess-based movement rules.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> Keeping the important details of a puzzle only.</li>
                    <li><strong>Spatial Representation:</strong> Square in the puzzle as circle and legal moves as line.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Chess Maze Rules</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Reach the Goal position by navigating using the chess rules. Start from the top-left square (Start) and reach the bottom-right square (Goal). These puzzles use the movements of the chess pieces to define how one can move from each square.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pawn:</strong> Moves one position in any direction (up, down, right, or left) within the grid. <em>Not allowed:</em> The pawn cannot move diagonally.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Bishop:</strong> Moves diagonally in any position within the grid. <em>Not allowed:</em> The bishop cannot move straight, and it cannot change the direction of steps in the middle.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Knight:</strong> Moves in an L-shape (two spaces in one direction, then one space perpendicular) within the grid. <em>Not allowed:</em> The knight can move in an L-shape only, but not diagonally or straight.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Intro to Abstraction: Tree Diagrams</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    If we wanted to explain this puzzle to a computer, what would we really need to include?[cite: 24] Notice that the exact grid drawing style is not important.[cite: 24] The important parts are the squares and the legal moves between them, which is the essence of abstraction.[cite: 24]
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A computer does not "see" the number maze the way humans do.[cite: 24] Instead, it represents the maze as a tree diagram with squares and lines.[cite: 24] Each square remains a square (labeled A1, A2, B1, etc.), and each possible jump becomes a connection (line) between the squares.[cite: 24] This process of simplifying a problem into an easier representation is called Abstraction.[cite: 24]
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now, instead of finding the path by moving as a chess piece, one can visually find a path from the start to the goal from the tree diagram (e.g., A1 (Pawn) &rarr; A2 (Pawn) &rarr; A3 (Knight) &rarr; C2 (Knight) &rarr; D4 (Goal)).[cite: 26]
                </p>

                <div style="background: #f8fafc; border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <h4 style="font-size: 1.1rem; color: #0f172a; margin-bottom: 0.5rem; font-weight: 700;">Discussion & Reflection</h4>
                    <p style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-bottom: 1rem;">
                        What information from the puzzle was important to keep? What information could be ignored?[cite: 35] This conversation helps to see that abstraction is not about removing meaning. It is about maintaining the structure needed to solve the problem.[cite: 35]
                    </p>
                    <p style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-bottom: 0;">
                        A tree diagram lets us quickly find the maze's solution path by showing all possible moves and where paths split.[cite: 35] Computers don't "look" at paths the way we do; they use specific rules and step-by-step strategies to explore options.[cite: 35]
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Which Chess piece is associated with square D2 in the reference grid?[cite: 28]</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Pawn</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Bishop</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Square D2 holds a Knight.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Knight</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Goal</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Which square <em>cannot</em> be visited from square B4(Knight)?[cite: 28]</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. A Knight can jump here (L-shape).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) A2 (Knight)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. A Knight can jump here (L-shape).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) C2 (Knight)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! B3 is adjacent, which requires a straight move (invalid for Knight).'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) B3 (Pawn)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. A Knight can jump here (L-shape).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) D5 (Bishop)</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">3. Explore More</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Download the PDF chapter above to practice drawing diagram representations, labeling maze squares, and mapping solution paths on the provided worksheets![cite: 29, 30, 31, 32, 33, 34]
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Challenge: Try it yourself!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Apply your knowledge of abstraction and chess rules to solve this interactive grid. Find the shortest path to the goal flag!
                </p>

                <!-- Centered Game Container -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; display: flex; justify-content: center; align-items: center; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div id="chess-maze-1" style="width: 100%; max-width: 450px;"></div>
                </div>
            </div>
        `
    },
    {
        id: "b1_4",
        section: "Computational Thinking Over Maze Puzzle(s)",
        title: "Colour Maze and Searching",
        thumbnail: "book/chapter_thumbnails/color maze.png",
        pdfLink: "book/Color Maze Grade 8.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/color maze.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A colour maze is a puzzle in which the allowed movement depends on the colour of the square you are currently on. Although the goal is simple—to move from Start (S) to End (E)—the rules create many possible paths. Some paths reach the goal quickly, some lead to dead ends, and others take longer than necessary.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A computer does not solve such puzzles by guessing. Instead, it follows a clear set of rules to systematically explore possible paths. This process is called searching. To search efficiently, computers first simplify the problem by keeping only the information that matters: the possible positions and the legal moves between them.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Colour Maze Rules</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The colour of a square tells what kind of move is allowed from that square. In this puzzle, "Move Straight" means continuing in the same direction as the previous move. "Turn Left" and "Turn Right" depend on the direction in which the player is currently facing.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>W (White):</strong> Move straight only, continuing in the same direction as the previous move.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Bu (Blue):</strong> Move straight OR turn left.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>R (Red):</strong> Move straight OR turn right.</li>
                </ul>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0;">
                        <strong>Direction Matters:</strong> Because moves depend on facing direction, the same square may behave differently depending on the direction from which it is entered. This makes the puzzle richer than an ordinary maze.
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Representation & Searching Strategies</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    When solving a maze, we rely on memory and visual clues. Computers, however, need a simpler representation. Instead of focusing on colours and grid lines, one needs to keep only the important information: the possible squares one can go to and the legal moves between them. We label squares (A1, A2, B1...) and draw lines connecting them when a legal move is possible. For example, entering A1 from the left allows a move to A2, while entering from the top allows a move to B1.[cite: 59]
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Searching means checking possible paths in an organised way until the goal is found.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Breadth-First Search (BFS):</strong> Branching till the same breadth at every connection. It explores level by level without backtracking, and is best suited for finding the shortest path.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Depth-First Search (DFS):</strong> Choose one path and keep drawing the connection forward, ignoring side branches. If you hit a dead end, backtrack to the last branch you ignored. It explores one path at a time. An ant searches for food using a DFS pattern.[cite: 56]</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. You enter a Red square while moving towards the right. Which moves are allowed?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. A red square allows you to move straight or turn right.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Straight (Right) or Turn Left (Up)</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Moving right into a Red square allows you to continue straight (Right) or turn right (Down).'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Straight (Right) or Turn Right (Down)</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Red squares give you two options, not one.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Only Straight (Right)</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Red squares give you two options, not one.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Only Turn Right (Down)</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Which search strategy explores level by level without backtracking, and is best suited for finding the shortest path?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Depth-First explores one path at a time and uses backtracking.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Depth-First Search</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Breadth-First Search branches out level by level, ensuring the shortest path is found.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Breadth-First Search</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Computers use systematic search methods, not random guessing.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Random Guessing</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">3. Explore More</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Download the PDF chapter above to practice drawing Breadth-First and Depth-First tree diagrams on the printable worksheets![cite: 52, 53, 54, 55]
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Challenge: Try it yourself!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Apply the movement rules to navigate this interactive Colour Maze. Remember: White = Straight, Blue = Straight or Left, Red = Straight or Right.
                </p>

                <!-- Centered Game Container -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; display: flex; justify-content: center; align-items: center; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div id="colour-maze-3" style="width: 100%; max-width: 450px;"></div>
                </div>
            </div>
        `
    },

    // COMPUTATIONAL THINKING OVER PUZZLE(S)
    // COMPUTATIONAL THINKING OVER PUZZLE(S)
    // COMPUTATIONAL THINKING OVER PUZZLE(S)
    {
        id: "b2_1",
        section: "Computational Thinking Over Puzzle(s)",
        title: "Building Puzzle",
        thumbnail: "book/chapter_thumbnails/building puzzle.png",
        pdfLink: "book/Building Puzzle grade 4.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/building puzzle.png" alt="Building Puzzle Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Hide and Seek</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The Building puzzle is a logic-based grid puzzle where the player imagines building skyscrapers of varying heights in a city grid. The numbers outside the grid tell how many buildings are visible from that direction. Taller buildings block the view of shorter ones behind them. One can also use any objects (like blocks or bottle caps) of different heights in place of buildings to play physically.
                </p>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/build.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources & Templates</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/buildingpuzzletemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Building Template
                        </a>
                        <a href="https://tinyurl.com/buildingpuzzletemplate2" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            🧩 Puzzle Grid
                        </a>
                        <a href="https://tinyurl.com/buildingpuzzleworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> Follow a process: Scan from the given side, track the tallest building seen so far, and count visible buildings.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Breaking the puzzle into smaller constraints: grid size, allowed value and given clues.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Recognising that this puzzle structure is similar to Sudoku.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Extending to n×n grids. Generalisation pattern: $1+2+...+n=n(n+1)/2$.</li>
                    <li><strong>Abstraction:</strong> Physical objects represent numerical values and how the arrangement affects visibility.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Understanding the Rules</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Help the city planner to figure out where to build skyscrapers using clues. Place a skyscraper in each square. <br>

                    Place a skyscraper in each square. Each row and each column must contain buildings of
                    different heights; i.e., no two buildings in a row or column have the same number of floors.
                    The number outside the grid (the clues) specifies how many buildings you can see if you
                    stand on that number.
                    Taller skyscrapers block the view of shorter skyscrapers located behind them.
                    <br> <br> Place the skyscrapers in the grid below so that they follow all the rules of the puzzle.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/grid.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>
                
                     <h4>Solution</h4>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/sol_grid.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <br>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Rule 1:</strong> Buildings of heights of 1, 2, 3, or 4 units. 4 of each different height. A total of 16 buildings are required.</li>
                    
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/rule1.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <br>
                    <li style="margin-bottom: 0.75rem;"><strong>Rule 2:</strong> Buildings in each row and column must all be different heights. No two buildings in a row or column have the same number of floors.</li>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/rule2.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <br>
                    <li style="margin-bottom: 0.75rem;"><strong>Rule 3:</strong> The number outside the grid (the clues) specifies how many buildings you can see if you stand on that number. Taller skyscrapers block the view of shorter skyscrapers located behind them.</li>
                </ul>


                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Making the Buildings</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Follow these steps to create your own physical skyscrapers using the provided templates:
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                    <ol style="font-size: 1.15rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem; margin-bottom: 1.5rem;">
                        <li style="margin-bottom: 0.5rem;">Take the building template and cut one strip.</li>
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/making2.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>

                        <li style="margin-bottom: 0.5rem;">Understand mountain fold (like a hill) and valley fold (like a dip).</li>
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/making3.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>
                        <li style="margin-bottom: 0.5rem;">Make a mountain fold at the dashed lines, and a valley fold at the dotted lines.</li>
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/making4.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>
                        <li style="margin-bottom: 0.5rem;">Continue making alternate folds like a fan until your building is ready.</li>
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/making5.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>
                        <li style="margin-bottom: 0.5rem;">Now place the buildings in the grid. Follow all rules carefully. Try different combinations until it fits.</li>
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/making6.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>
                        <li><em>Tip:</em> You can also use household objects (like glue sticks or pill bottles) to replicate the buildings.</li>
                    </ol>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/making7.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                     <br>
                    

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. If buildings are arranged like 1, 2, 3, 4 (increasing height), how many buildings can you see from the right?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: var(--background);">
                        <img src="book/building_puzzle/ques1.png" alt="Making the buildings steps" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Only the tallest building blocks the others. Buildings 1, 2, and 3 will be hidden behind building 4.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) One</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Think about what the tallest building blocks.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Two</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Think about what the tallest building blocks.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Three</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. That would be the view from the left side.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Four</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. How many buildings are visible in this row from the left: 2, 4, 1, 3?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Buildings 1 and 3 are hidden behind building 4.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Four</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Building 3 is blocked by building 4.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Three</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Building 2 is visible. Building 4 is taller and visible. Buildings 1 and 3 are hidden behind 4, leaving only 2 visible buildings.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Two</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Building 2 is the first building, but 4 is taller and also visible.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) One</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. What should be the sum of a row or column if building heights are 1, 2, 3, 4, and 5 for a 5x5 grid?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. That is the sum for a 3x3 grid.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 6</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. That is the sum for a 4x4 grid.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 10</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. Calculate 1 + 2 + 3 + 4 + 5.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 12</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! The sum of all numbers in each row in a 5x5 grid will be 1 + 2 + 3 + 4 + 5 = 15.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 15</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

               

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Additional Challenges: Magic Squares</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Can you write the numbers 1 to 9 in a 3 x 3 grid (using each number once) such that the sum of every row, column, and diagonal is 15? One of the solutions is shown below.
                </p>

                <!-- 3x3 Magic Square Solution Example -->
                <div style="display: grid; grid-template-columns: repeat(3, 50px); gap: 2px; background: var(--border-color); border: 2px solid var(--border-color); width: fit-content; margin: 0 auto 2rem auto;">
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">4</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">9</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">2</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">3</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">5</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">7</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">8</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">1</div>
                    <div style="background: var(--surface); height: 50px; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: var(--text-main);">6</div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    This is considered a Magic square. It is an arrangement of numbers in a square grid such that the sum of numbers in each row, column and main diagonal is equal. The Building puzzle is considered a semi-magic square, where the sum of the numbers in each row and each column is the same, but the sums of the main diagonals do not necessarily equal.
                </p>

                <!-- Interactive Magic Square Practice -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Practice: Complete the Magic Squares</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem;">
                        Complete the given magic squares. Don't use the same number twice in the square, and the numbers must add up to the same number in each row, column and diagonal line.
                    </p>

                    <div style="display: flex; flex-wrap: wrap; gap: 3rem; justify-content: center; align-items: center; margin-bottom: 1.5rem;">
                        
                        <!-- Grid 1 Question -->
                        <div style="text-align: center;">
                            <div style="display: grid; grid-template-columns: repeat(3, 40px); gap: 2px; background: var(--border-color); border: 2px solid var(--border-color); margin: 0 auto 0.5rem auto;">
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">8</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">9</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">6</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">3</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">4</div>
                            </div>
                            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">Puzzle 1</p>
                        </div>

                        <!-- Grid 2 Question -->
                        <div style="text-align: center;">
                            <div style="display: grid; grid-template-columns: repeat(3, 40px); gap: 2px; background: var(--border-color); border: 2px solid var(--border-color); margin: 0 auto 0.5rem auto;">
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">6</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">11</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">7</div>
                                <div style="background: var(--surface); height: 40px;"></div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">12</div>
                            </div>
                            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">Puzzle 2</p>
                        </div>
                    </div>

                    <div style="text-align: center;">
                        <button onclick="document.getElementById('magic-sq-sols').style.display = 'flex'; this.style.display = 'none';" class="btn-outline" style="padding: 8px 24px; cursor: pointer;">Show Solutions</button>
                    </div>

                    <!-- Hidden Solutions -->
                    <div id="magic-sq-sols" style="display: none; flex-wrap: wrap; gap: 3rem; justify-content: center; align-items: center; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-color);">
                        <!-- Grid 1 Solution -->
                        <div style="text-align: center;">
                            <div style="display: grid; grid-template-columns: repeat(3, 40px); gap: 2px; background: #22c55e; border: 2px solid #22c55e; margin: 0 auto 0.5rem auto;">
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">8</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">1</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">9</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">7</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">6</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">5</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">3</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">11</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">4</div>
                            </div>
                            <p style="font-size: 0.9rem; color: #15803d; font-weight: 600; margin-bottom: 0;">Solution 1</p>
                        </div>

                        <!-- Grid 2 Solution -->
                        <div style="text-align: center;">
                            <div style="display: grid; grid-template-columns: repeat(3, 40px); gap: 2px; background: #22c55e; border: 2px solid #22c55e; margin: 0 auto 0.5rem auto;">
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">6</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">10</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">11</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">14</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">9</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">4</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">7</div>
                                <div style="background: #f0fdf4; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #15803d;">8</div>
                                <div style="background: var(--surface); height: 40px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-main);">12</div>
                            </div>
                            <p style="font-size: 0.9rem; color: #15803d; font-weight: 600; margin-bottom: 0;">Solution 2</p>
                        </div>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Challenge: Try it yourself!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Click the grid cells to cycle through building heights. Make sure you fulfill the visibility clues on the outside of the grid, and ensure no row or column repeats a height!
                </p>

                <!-- Centered Game Container for the 3D Building Puzzle -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden;">
                    <div id="building-game-1"></div>
                </div>
            </div>
            
        `
    },
    // COMPUTATIONAL THINKING OVER PUZZLE(S)
    // COMPUTATIONAL THINKING OVER PUZZLE(S)
    {
        id: "b2_2",
        section: "Computational Thinking Over Puzzle(s)",
        title: "Three Jug Problem",
        thumbnail: "book/chapter_thumbnails/jug.png",
        pdfLink: "book/Three Jug Problem.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/jug.png" alt="Three Jug Problem Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: The Water Pouring Puzzle</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The Three Jug Problem is a classic logic puzzle that introduces the concept of <strong>state space search</strong>. Imagine you have a large water source and two empty jugs: a 5-litre jug (Jug A) and a 3-litre jug (Jug B). Your goal is to measure out exactly 4 litres of water. Explain the rules to the students and let them try to solve by trial & error.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources & Templates</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/threejugtemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Three Jug Template
                        </a>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Solving by Trial & Error</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Demonstrate this to the student. Once we follow this procedure step by step, we will get 4L of water into the 5L jug. Here, we have used 8 steps to find the solution.
                </p>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Step</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Action</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: center;">A (5L)</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: center;">B (3L)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">1</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Fill the 3L jug from a water source (from Tap or Water-filled Buckets)</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">0</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">3</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">2</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Transfer the water from 3L jug to 5L jug</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">3</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">0</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">3</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Fill the 3L jug</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">3</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">3</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">4</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Transfer the water from 3L jug to 5L jug</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">5</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">1</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">5</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Empty the 5L jug</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">0</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">1</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">6</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Transfer the water from 3L jug to 5L jug</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">1</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">0</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted);">7</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Fill the 3L jug</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">1</td>
                                <td style="padding: 1rem; color: var(--text-muted); text-align: center;">3</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-main); font-weight: 700;">8</td>
                                <td style="padding: 1rem; color: var(--text-main); font-weight: 700;">Transfer the water from 3L jug to 5L jug</td>
                                <td style="padding: 1rem; color: var(--accent-orange); font-weight: 700; text-align: center; font-size: 1.2rem;">4</td>
                                <td style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: center;">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Abstraction: Grid Representation</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We will represent each jug as a state (A, B) where A = amount of water in the 5L jug and B = amount of water in the 3L jug. <br><strong>(A, B) = (5L jug, 3L jug)</strong>
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                    <img src="book/Three Jug Problem/3.png" alt="Coordinate Grid Diagram" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
                </div>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;">The horizontal line represents only the pouring of water into the 5L Jug.</li>
                    <li style="margin-bottom: 0.75rem;">The right-slanted line represents the pouring of water into the 3L Jug only.</li>
                    <li style="margin-bottom: 0.75rem;">The left-slanted line represents the transfer of water between the 5L and 3L jugs.</li>
                </ul>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We have now translated the problem of filling, pouring, and emptying water into/from jugs into a path-finding problem on the grid.
                </p>


                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Moving from state (0, 3) to state (3, 0) represents which action?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Look closely at which number increased and which decreased.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Transfer water from the 5L jug to the 3L jug.</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. If you only emptied it, the state would be (0, 0).'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Empty the 3L jug.</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! This is a transfer (pour) from 3L to 5L. (CT Competency: Decomposition, Abstraction, Logic)'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Transfer water from the 3L jug to the 5L jug.</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. The 3L jug is losing water, not gaining it.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Fill the 3L jug from the source.</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">2. Path Finding Challenge</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem;">
                        Now, the objective is to find the path between Circle (Yellow) from any of the Stars (given) drawn in the grid, as they represent the 4L water point. Draw a path in the grid below to measure exactly 4L using 5L and 3L jugs.
                    </p>

                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                        <img src="book/Three Jug Problem/4.png" alt="Grid with Stars Challenge" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
                    </div>

                    <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 600; margin-bottom: 1.5rem; text-align: center;">
                        Did the path take the same steps as you wrote earlier in the table format?
                    </p>

                    <div style="text-align: center;">
                        <button onclick="document.getElementById('path-solution').style.display = 'block'; this.style.display = 'none';" class="btn-outline" style="padding: 8px 24px; cursor: pointer;">Show Path Solution</button>
                    </div>

                    <!-- Hidden Solution -->
                    <div id="path-solution" style="display: none; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-color);">
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                            <img src="book/Three Jug Problem/5.png" alt="Grid Path Solution" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
                        </div>
                        <p style="font-size: 1.05rem; color: #16a34a; font-weight: 600; margin-bottom: 0; text-align: center;">
                            Yes, the steps for filling, pouring, and emptying the jugs are the same as the steps on the path taken. <br>
                            <span style="color: var(--text-muted); font-size: 0.95rem; font-weight: 400;">(CT Competency: Algorithmic Thinking, Decomposition, Abstraction)</span>
                        </p>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Challenge: Try it yourself!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Click to pour water between the jugs. Can you reach exactly 4 litres in the fastest number of moves without getting stuck in a loop?
                </p>

                <!-- Centered Game Container for the Three Jug Puzzle -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden; display: flex; justify-content: center;">
                    <div id="three-jug-game-1" style="width: 100%; max-width: 600px; min-height: 300px; display: flex; align-items: center; justify-content: center; border: 2px dashed var(--border-color); border-radius: 8px;">
                        <span style="color: var(--text-muted); font-weight: 500;">Interactive Three Jug Simulation loading...</span>
                    </div>
                </div>
            </div>
        `
    },

    // LANGUAGE OF COMPUTER
    // LANGUAGE OF COMPUTER
    {
        id: "b3_1",
        section: "Language of Computer",
        title: "Image by Number",
        thumbnail: "book/chapter_thumbnails/encode.png",
        pdfLink: "book/Image by Number.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/encode.png" alt="Image by Number Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Computers store drawings, photographs and other pictures using only numbers. Computer screens are divided into a grid of small dots called pixels (picture elements). In a black-and-white picture, each pixel is either black or white. In this activity, students explore how images can be represented using only 0s and 1s. They will also learn a method called Run-Length Encoding, which helps compress image data by reducing repetition.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources & Templates</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/imagebynumberworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch and Exploration</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Introduce pixels and binary image representation. Demonstrate how a picture can be converted into 0s and 1s.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">25 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">
                                    <ul style="margin: 0; padding-left: 1.2rem;">
                                        <li>Students work alongside the worksheet while the teacher guides the discussion.</li>
                                        <li>Students solve image encoding and decoding questions.</li>
                                        <li>Introduce Run-Length Encoding and practice shortening image representations.</li>
                                        <li>Discuss how computers store and compress images.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> Step-by-step procedures to encode and decode images. The process of converting a sequence of pixels to numbers and back to images.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Identify repeated pixel patterns and sequences.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Images are broken into rows and individual pixels. Decompose an image into horizontal lines, then decompose each line into alternating encodings of white and black pixels.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Logic and Abstraction:</strong> Images are simplified to 0s and 1s. Encoding sequences of numbers is equivalent to a picture representation.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Optimisation:</strong> Run-Length Encoding reduces repeated information to save space.</li>
                    <li><strong>Spatial Reasoning:</strong> Visualising the image from the numerical pattern.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Image By Number</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Every image we see on a screen, whether it is a picture, a video, or text, is displayed using pixels. Screens are divided into a grid of small dots called pixels (picture elements). In a black-and-white image, each pixel can be either black or white, so all the computer would need to store is which dots are black and which are white.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; text-align: center;">
                    <p style="font-size: 1.15rem; color: var(--text-main); font-weight: 600; margin-bottom: 1rem;">A black-and-white image can be represented using only two values:</p>
                    <p style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 0.5rem;"><strong>1 &rarr; White pixel</strong></p>
                    <p style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 0;"><strong>0 &rarr; Black pixel</strong></p>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    If we wanted to display the letter C on a 5x6 pixel grid, the first line consists of one white pixel, three black pixels, then one white pixel. Thus, the first line is represented as <strong>10001</strong>. The second line consists of one black pixel, three white pixels, then one black pixel (<strong>01110</strong>).
                </p>
                
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/Image by Number/1.png" alt="Letter C Encoding Example" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.src='book/chapter_thumbnails/encode.png';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet: Binary Encoding</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. What will be the correct representation of image 'a' on a 5x6 pixel grid using 0s and 1s? (1 indicates white, 0 indicates black)</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 10111, 10111, 10001, 1010, 10101, 10001</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Compare the visual pixel arrangement with the binary representation row by row.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 10001, 01110, 01111, 01111, 01110, 10001</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 11110, 11110, 11000, 10110, 10110, 00111</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 10001, 11110, 10000, 01110, 01110, 10000</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. For the representation 00000, 11011, 11011, 11011, 11011, 11011, which of the following will be the alphabet in the image?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Look closely at the top row (all black).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) L</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) D</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) E</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! The first row forms a complete black line, and the middle column forms the vertical part of the letter T.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) T</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Run-Length Encoding (Compressing Data)</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Instead of representing every pixel with 0s and 1s, we can shorten the representation by alternately writing how many white and black pixels are needed in each line. We start by mentioning the number of white pixels, then the number of black pixels, then white again, and so on.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0;">
                        <strong>Important Rule:</strong> The first number always relates to the number of white pixels. If the first pixel is black, the line will begin with a zero.
                    </p>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    This concept of shortening the representation, known as <strong>Run-Length Encoding</strong>, encodes each continuous group of white and black pixels encountered in a left-to-right scan of a row by its length. For example, instead of writing <code>10001</code>, we can write <code>1, 3, 1</code> (1 white pixel, 3 black pixels, 1 white pixel).
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    This process was used for black-and-white scanned images on fax machines, which use this approach to compression to transmit documents quickly.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet: Run-Length Encoding</h3>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. Convert the following row into Run-Length Encoding: <code>11110000</code></h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. There are no black pixels at the start.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 0, 4, 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! 4 white pixels and 4 black pixels translates to 4, 4 (or 44).'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 4, 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. Count the 1s and 0s carefully.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 8</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. The first number must be the white pixels (1s).'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 4, 0, 4</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Decode the following Run-Length: <code>2, 2, 1</code></h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. The first number represents White (1).'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 00110</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. Look closely at the sequence lengths.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 11000</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! 2 white pixels, 2 black pixels, 1 white pixel equals 11001.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 11001</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. The numbers alternate between White and Black.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 11111</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Explore More</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Download the PDF chapter above to practice decoding complex run-length images (like a coffee cup) and exchange encoded messages with a friend on the provided blank grid worksheets!
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Challenge: Pixel Art Canvas</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Click and drag on the canvas below to draw your own image. Watch as the computer generates the Binary Sequence (0s and 1s) and the compressed Run-Length Encoding in real-time!
                </p>

                <!-- Centered Game Container -->
                <div style="background: var(--surface); padding: 3rem 1rem; border-radius: 12px; margin-bottom: 3rem; display: flex; justify-content: center; align-items: center; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow-x: auto;">
                    <div id="pixel-game-1" style="width: 100%; max-width: 700px;"></div>
                </div>
            </div>
        `
    },
    // LANGUAGE OF COMPUTER
    {
        id: "b3_2",
        section: "Language of Computer",
        title: "Guess the Birthdate Trick",
        thumbnail: "book/chapter_thumbnails/birthdate.png",
        pdfLink: "book/Guess the Birthdate Trick.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/birthdate.png" alt="Guess the Birthdate Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Ticking clocks and turning calendars</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    With this birthdate-guessing activity, the teacher can correctly guess a student's birthdate. As students investigate how the trick works, they discover that any number can be written as a combination of powers of two. This is the same principle that computers use to represent numbers in binary.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources & Templates</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/birthdatetemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Magic Cards Template
                        </a>
                        <a href="https://tinyurl.com/birthdateworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 min.</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Invite a student. The teacher will demonstrate this activity by guessing the student's birth date. Show them the cards one by one and ask whether their birth date appears on each card. Reveal their date of birth.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Try out the trick and explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20 min.</td>
                                <td style="padding: 1rem; color: var(--text-muted);">To do the trick, each pair of students can either cut out the magic cards from the template or make their own. They can find out each other's birth date with this trick. Attempt worksheet questions on the patterns.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussion & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min.</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discuss what patterns students noticed on the cards. Guide them to observe that the first number on each card is 1, 2, 4, 8, 16. Explain that these numbers double each time and are called powers of two.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Observe and identify a common property of numbers and how they are grouped according to a shared structural rule.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> Students focus on the important mathematical structure (powers of two) and ignore unnecessary details.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We used a step-by-step approach of adding numbers on the cards in the top-left corner to identify the birth date.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Recognising a doubling pattern of 1, 2, 4, and so on, and adding different powers of 2 to make any number, we conclude that any number can be represented in terms of powers of 2.</li>
                    <li><strong>Logic:</strong> Every card can correspond to a number.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity Demonstration</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The teacher will show them the cards with dates written on them, one by one, and ask whether their birth date appears on each card.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/birthday/cards.png" alt="Magic Number Cards" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The trick is to add the values at the top left of the chosen cards. The sum of these values will be the student's birth date. For example, if the selected cards have 1, 2, and 16 at the top left, $1+2+16=19$. In this case, the birth date is 19.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/birthday/1.png" alt="Magic Number Cards" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Another example: if the students choose cards B, C, and D, these 3 cards have a "2", "4", and "8" as their top-left numbers. If we add these numbers together, we get 14. 14 will be the student's birth date.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/birthday/2.png" alt="Magic Number Cards" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0;">
                        <strong>The Secret:</strong> Students may think the trick works by memorizing numbers. The teacher needs to explain that the trick works because numbers follow a systematic pattern. Numbers are built from combinations of powers of two.
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. What patterns could you see on Card A?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) All numbers are even</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Numbers on Card A have 1,3,5,7....and so on. Therefore, all these numbers are odd.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) All numbers are odd</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) All numbers are multiples of 3</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Numbers are not related to each other</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. What patterns could you see on Card E?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) All numbers are even</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) All numbers are odd</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) All numbers are multiples of 3</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Card E represents the 16 s place in the binary table. Numbers appear here only if they include 16 in their representation.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Numbers are 16 or greater</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. What patterns could you see on the Top-Left Numbers on all the cards?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! These numbers (1, 2, 4, 8, 16) double each time. They are called powers of two.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) All numbers are Powers of 2</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) All numbers are less than 10</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) All numbers are Powers of 3</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. Try again!'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Numbers are not related to each other</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. If the friend says their birth date appears on card B, card D, and card E. What is their birth date?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. Try adding the top-left values again.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 24</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. Try adding the top-left values again.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 25</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! Add the top-left values of the cards: 16 (Card E) + 8 (Card D) + 2 (Card B) = 26.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 26</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. Try adding the top-left values again.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 27</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

            </div>
        `
    },
    // LANGUAGE OF COMPUTER
    {
        id: "b3_3",
        section: "Language of Computer",
        title: "Count on Fingers",
        thumbnail: "book/chapter_thumbnails/count.png",
        pdfLink: "book/Count on Fingers.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/count.png" alt="Count on Fingers Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We usually use our fingers to count from 1 to 10. But is that the maximum we can count with our fingers? We know that numbers can be represented in the powers of 10. Though this is not the only way to represent the number.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In this activity, students will explore a surprising idea: using fingers to count much higher numbers. They will discover that with just 10 fingers, they can count to numbers more than 1000. With 33 fingers, we can represent the human population of the world. They will understand binary representation and the powers of 2 through finger counting.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://docs.google.com/document/d/1LGj23wKJ0dyiS1lrZ1hhyLxz3gRk11A68--dbgAEP5Y/edit?usp=sharing" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                        <a href="https://youtu.be/RT6j8Bvs1HY?si=pNOrXf89LtOkVdt" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Video Reference: Binary Hands
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">
                                    Ask students how high they can count using fingers. Demonstrate Unary counting (10), Grouping method (25), and Finger segments (30). Then say: <em>"What if I told you we can count beyond 1000 using just 10 fingers?"</em>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students work alongside the worksheet while the teacher guides discussion.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discussing the worksheets. With binary representation, we can represent any numbers efficiently.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> Step-by-step method to represent numbers using fingers and converting a decimal number to binary.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Breaking down the conversion of the number to binary into one bit at a time. Breaking the numbers into sums of powers of 2.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Recognising doubling pattern: 1, 2, 4, 8, 16...</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> Using fingers to count and to represent the binary number system.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Logic:</strong> Every finger corresponds to a power of 2.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Recognizing that with $n$ fingers, the maximum count is: $2^n - 1$.</li>
                    <li><strong>Evaluation:</strong> Checking whether a finger combination correctly represents a number.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Unary vs. Binary Counting</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Children learn to count with their fingers at an early age. The Latin word for fingers, "digitus", is the root of the English word digit. Using one finger, we can count up to 5 numbers. This is known as the <strong>unary representation</strong> of a number. To represent a number N, a symbol representing 1 is repeated N times. Here, N fingers will be required to represent N.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/counting/1.png" alt="Count on Fingers Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Using the unary method, how many fingers are required to count up to 15?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 5</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 10</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! To represent numbers up to 15 in unary, 15 fingers will be required.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 15</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 20</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To count higher, we assign values to each finger. For this, we are going to define a placement logic of finger as <strong>Down (0)</strong> and <strong>Up (1)</strong>. We will assign numbers to the fingers: 1, 2, 4, 8, 16.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/counting/2.png" alt="Finger Values" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p> Each finger on your hand represents a number, and we add them up when the finger is raised. In the shown example, all fingers are raised up except the thumb. </p>

                <p> So we need to add +16 for the little finger, +8 for the ring finger, +4 for the middle finger, +2 for the index finger, but +0 for the thumb. 16 + 8 + 4 + 2 = 30, which makes it number 30.</p>

                <p>The following table summarises the equivalent of every decimal number with the corresponding fingers. </p>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/counting/3.png" alt="Finger Values" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>


                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. What patterns could you observe with the numbers on fingers?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! These numbers double each time. They are called powers of two.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) All numbers are powers of 2</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) All numbers are less than 10</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) All numbers are powers of 3</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">The Binary Number System</h3>
                
                <div style="overflow-x: auto; margin-bottom: 2rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: center;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: left;">Decimal</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Math</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">16</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">8</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">4</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">1</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left;">1</td><td style="padding: 0.75rem;">1</td><td></td><td></td><td></td><td></td><td>up</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left;">2</td><td style="padding: 0.75rem;">2</td><td></td><td></td><td></td><td>up</td><td></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left;">3</td><td style="padding: 0.75rem;">2+1</td><td></td><td></td><td></td><td>up</td><td>up</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left;">4</td><td style="padding: 0.75rem;">4</td><td></td><td></td><td>up</td><td></td><td></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left;">10</td><td style="padding: 0.75rem;">8+2</td><td></td><td>up</td><td></td><td>up</td><td></td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; text-align: left;">15</td><td style="padding: 0.75rem;">8+4+2+1</td><td></td><td>up</td><td>up</td><td>up</td><td>up</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. What decimal number is represented by binary fingers where the little (16), ring (8), and index (2) fingers are raised? (Thumb is down)[cite: 102]</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 25</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! Add +16 for the little finger, +8 for the ring finger, and +2 for the index finger, giving a total of 26.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 26</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 24</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 23</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Which is the highest decimal number that can be represented if ALL the fingers are raised up on one hand?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 16</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 30</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 32</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! 16 + 8 + 4 + 2 + 1 = 31.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 31</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p> With one hand, when all the fingers are raised, we can count +16 for the little finger, +8 for the ring finger, +4 for the middle finger, +2 for the index finger, +1 for the thumb. 16+8+4+2+1 = 31. </p>
            <br>
                <p> That means the highest decimal number that can be represented by the fingers of one hand is 31. </p>
            <br>
                <p> This is known as the Binary number system, often known as the language of
computers. In our day-to-day life, we use the decimal number system, which uses
the numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. The decimal number system is based on
bundles of ten (Powers of 10, which is 1,10,100,1000, 1000,...). Similarly, the binary
number system is based on bundles of two (Power of 2, which is 1,2,4,8,...). So if we
compare the two numbering systems for place values, this is what it looks like…. </p>
<br>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/counting/4.png" alt="Count on Fingers Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Converting Decimal to Binary</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We can convert any decimal number into a binary representation by writing it with the power of 2. We can also do this by an algorithm:
                    <br><br>
                    i. Divide the decimal number by the base (2).<br>
                    ii. Note the remainder from the first step till the end of the division process.<br>
                    iii. The remainders obtained as 0 or 1 are written in order from the last step to the first step of division.
                </p>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. What will be the binary representation for the decimal number 14?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1010</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 1100</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='✅ Correct! Decimal 14 can be written in powers of 2 as 8 + 4 + 2 = 1110.'; document.getElementById('q5-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 1110</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 1111</button>
                    </div>
                    <div id="q5-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Counting with Both Hands</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The same is also valid for both hands, where you count the fingers from left to right in the following way: 512, 256, 128, 64, 32, 16, 8, 4, 2, 1.
                </p>

                <!-- Interactive Question 6 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">6. What decimal number is represented if ONLY the little finger (32) of the second hand is raised?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q6-fb').innerHTML='✅ Correct! Only the little finger of the second hand is raised, representing 32.'; document.getElementById('q6-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 32</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 33</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 64</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 65</button>
                    </div>
                    <div id="q6-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 7 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">7. What decimal number is represented if fingers 256, 128, 16, 8, and 2 are raised?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 346</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 406</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='✅ Correct! Adding the assigned value of the raised fingers: 256 + 128 + 16 + 8 + 2 = 410.'; document.getElementById('q7-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 410</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 411</button>
                    </div>
                    <div id="q7-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Did you know?</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        When all fingers are up on both hands, we can represent decimal numbers up to 1023 ($512+256+128+64+32+16+8+4+2+1$). With this binary representation, we can count past 1,000 using only 10 fingers! This binary concept has its roots in the study of poetry in ancient India, documented in Acharya Pingala's work Chandaḥśāstra (~2 BCE).
                    </p>
                </div>
            </div>
        `
    },
    // LANGUAGE OF COMPUTER
    {
        id: "b3_4",
        section: "Language of Computer",
        title: "Binary Punch Cards",
        thumbnail: "book/chapter_thumbnails/binary.png",
        pdfLink: "book/Binary Punch Cards.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/binary.png" alt="Binary Punch Cards Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Peak Beyond A Point</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We know that numbers can be represented in powers of 10. Though this is not the only way to represent the number. In this activity, we will understand binary representation and powers of 2 using punched cards. 
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Consider a set of cards with the alphabet written on them, and we shuffle them. Using a stick and holes on the top of the cards, we can magically arrange the cards alphabetically in a few seconds. With this activity, we will discover the patterns in punching & the principle behind the trick.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/punching/1.png" alt="Punched Cards Examples" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources & Templates</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/punchedcardstemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Print File Template
                        </a>
                        <a href="https://tinyurl.com/punchedcardsworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                        <a href="https://tinyurl.com/punchedcardsvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video
                        </a>
                        <a href="https://tinyurl.com/punchedcardsmodule" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📚 Reference Module
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Teacher demonstrate the activity.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Trial by Students</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students try out the activity. As the teacher progresses through the activities, the students progress along with the worksheet. Students can make their own punch cards using the template after class hours.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Attempting the worksheets and the discussion based on the activity.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We used a step-by-step approach to convert a decimal number to binary.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Breaking the conversion of the number to binary into one bit at a time.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> Using different types of holes to represent the binary number system.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Logic:</strong> Every alphabet can correspond to a number, and every number can be represented in the binary system with a punching pattern.</li>
                    <li><strong>Generalisation:</strong> Recognising a doubling pattern of 1, 2, 4, and so on, and adding different powers thus generated gives us the binary representation, and we conclude that any number can be represented in terms of powers of 2.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity Description: Punched Cards</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Consider a set of cards with the alphabet written on them, and we shuffle them. The objective now is to arrange them in alphabetical order. One method is to find the card A first, then B, and so on. This might take some time.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now, notice that the cards have been punched on the top. There are an O-shaped and a U-shaped punch, and using these holes, we can sort the cards in an interesting way. Insert a stick in the set of cards starting from the rightmost hole. Once you lift the stick, some will come along with it. Now, bring them in front & repeat this for all sets of holes. Magically, the cards are sorted.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">The Binary Number System</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In our day-to-day life, we use the decimal number system, which uses the numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. The decimal number system is based on bundles of ten. Similarly, the binary number system is based on bundles of two. 
                </p>

                <div style="overflow-x: auto; margin-bottom: 2rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: center;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: left;">Place</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Decimal (Bundles of Ten)</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Binary (Bundles of Two)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left; font-weight: 600;">Units Place</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">1</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">1</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left; font-weight: 600;">First Bundle</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">10 = 10</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">2 = 2</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; text-align: left; font-weight: 600;">Second Bundle</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">10 x 10 = 100</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">2 x 2 = 4</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; text-align: left; font-weight: 600;">Third Bundle</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">10 x 10 x 10 = 1000</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">2 x 2 x 2 = 8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The binary number system deals with only two numbers: 0 and 1. We can convert any decimal number into a binary representation by writing it with the power of 2.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    For example, $23 = 16 + 4 + 2 + 1$.<br>
                    <strong>23 in binary:</strong> $(10111)_2$
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/punching/2.png" alt="Punched Cards Examples" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p> You can also do this by an algorithm, which is presented below (which you may present to the student): </p>
                <li> Divide the decimal number by the base (2) of the binary number. </li>
                <li> Note the remainder from the first step till the end of the division process. </li>
                <li> The remainders obtained as 0 or 1 are written in order from the last step to the first step of division. </li>
                <br>
                <p> Lets find out the binary equivalent of the decimal number 11. </p>


                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/punching/3.png" alt="Punched Cards Examples" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. What will be the binary representation for the decimal number 14?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1010</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 1100</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Decimal 14 can be written in powers of 2s as 8 + 4 + 2 = 1110.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 1110</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 1111</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Bits & Punching Patterns</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The number of digits or bits (binary digits) in a binary number depends on the number. For example, numbers up to 7 can be represented in a 3-bit binary number, numbers from 8 to 15 in a 4-bit binary number, numbers from 16 to 31 similarly need an additional bit, hence a 5-bit binary number. There are 26 letters in English; hence, 5 sets of holes on each card for sorting.
                </p>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. You want to perform a similar punched card activity with Hindi alphabets. How many holes are needed on each card?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 5</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! There are 52 Hindi alphabets. Using 6 bits/holes, we can represent numbers from 0 up to 63.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 6</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 8</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 10</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Every alphabet can correspond to a number, and every number can be represented in the binary system. 
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0;">
                        <strong>The Punching Rule:</strong> Where there is a 0, punch an O-shaped hole, and where there is a 1, punch a U-shaped hole. For example: <code>01010</code> is the binary equivalent of J, so the holes on card J from left to right will be <code>OUOUO</code>.
                    </p>
                </div>


                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/punching/4.png" alt="Punched Cards Examples" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. Can you identify which card the binary pattern 10101 belongs to?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) P</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) S</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) T</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! 10101 is the decimal number 21. The alphabet U comes 21st in the order starting from A as 1.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) U</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. The alphabet R comes 18th in the order starting from A as 1. What will the punching pattern be on Card R?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) UOUOU</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) UUOUO</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! Decimal 18 is 10010 in binary. Replacing 1 with U and 0 with O gives UOOUO.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) UOOUO</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) OUUOO</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Did you know?</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Punched cards, utilising binary choices, is analogous to their role in powering early computing machines such as IBM sorters and Turing's Bombe. This binary concept has its roots in the study of poetry in ancient India, documented in Acharya Pingala's work Chandaḥśāstra (~2 BCE).
                    </p>
                </div>
            </div>
        `
    },
    { id: "b3_5", section: "Language of Computer", title: "Logical Puzzle Punch Cards", thumbnail: "book/chapter_thumbnails/Punch Cards.png", pdfLink: "book/Logical Puzzle Punch Cards.pdf" },
    // LANGUAGE OF COMPUTER
    // LANGUAGE OF COMPUTER
    {
        id: "b3_6", // Note: Updated ID to b3_6 to match your original index for "Measure your Height"
        section: "Language of Computer",
        title: "Measure your Height",
        thumbnail: "book/chapter_thumbnails/binary_height.png",
        pdfLink: "book/Measure your Height.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/binary_height.png" alt="Measure your Height Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Story of Numbers</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We will explore the concept of the positional number system through hands-on activities. We will develop an intuition for various base representations of numbers by measuring students' heights, recognising that decimal numbers that we learn in school are just one way to represent numbers.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/heightworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                        <a href="https://tinyurl.com/heightactivityvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher poses the question to the students and invites a couple of students to try their ideas.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Problem-solving and algorithm</td>
                                <td style="padding: 1rem; color: var(--text-muted);">25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Student's Tryout the activity with each other. As the teacher progresses through the activities, the students progress along with the worksheet.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The discussion on the various algorithms, how a slight change in approach leads to a faster solution, and how computers apply such algorithms.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Connection</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern recognition:</strong> To see that the same patterns of representation appear in each of the base systems and the symbols used in them.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We use a step-by-step approach to measure the height using the decimal, binary, and ternary pipes.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Breaking the conversion of the number to binary and ternary into one pipe at a time.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> To use the pattern seen in decimal and apply it to powers of two and powers of three.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Recognising a doubling pattern of 1, 2, 4, and so on... we conclude that any number can be represented in terms of powers of 2. This method can thus be generalised for any natural number n.</li>
                    <li><strong>Logic:</strong> To understand why the digits start from zero and end before the base number n (0 to n-1).</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity 1: Measuring with Decimal Pipes</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We generally measure our height in the decimal number system, i.e., using base-10 numbers. We use powers of ten ($10^0$, $10^1$, $10^2$, $10^3$ &rarr; 1, 10, 100, 1000...) and digits from 0 to 9 to represent any number that exists.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Imagine now that you are measuring heights using PVC pipes of fixed lengths: 1 inch, 10 inches, 100 inches, and so on. Each pipe size is a power of 10. You also have 9 pipes of each length.
                </p>



                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. How many of the decimal pipes will it take to measure the height of a 66-inch-tall person?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. You only need base-10 pipes.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 21 pipes: 5 pipes of 10 inches and 16 of 1 inch</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. That would measure 70 inches.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 7 pipes: 7 pipes of 10 inches</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. We don\\'t have 2-inch pipes in decimal.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 9 pipes: 6 pipes of 10 inches and 3 of 2 inches</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! 66 in decimal is represented as 6 x 10 + 6 x 1. That is 6 of 10s and 6 of 1s, for a total of 12 pipes.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 12 pipes: 6 pipes of 1 inch and 6 pipes of 10 inches</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity 2: Measuring with Binary Pipes</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Instead of using decimal pipes, which are powers of 10, what happens if we use pipes of length 1, 2, 4, 8, 16, 32, 64, and so on? They are powers of 2. We have exactly <strong>one</strong> copy of each pipe length.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/height/1.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0;">
                        <strong>Why only one copy?</strong> Two 2-inch pipes make a 4-inch pipe, but we already have a 4-inch pipe. Two pipes of 4 inches make an 8-inch pipe, but we already have an 8-inch pipe.
                    </p>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let's measure 55 inches in binary: $55 = 32 + 16 + 4 + 2 + 1$. The binary representation of 55 is $(110111)_2$.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/height/2.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: center;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: left;">Number</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">$2^5 = 32$</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">$2^4 = 16$</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">$2^3 = 8$</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">$2^2 = 4$</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">$2^1 = 2$</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">$2^0 = 1$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 1rem; text-align: left; font-weight: 600;">55 in binary</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1</td>
                                <td style="padding: 1rem; color: var(--text-muted);">0</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1\</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Which all binary pipes will we use to measure the height of a 66-inch-tall person?\</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. There is no 63-inch pipe in binary.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 63, 3</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. This does not equal 66, and repeats pipes.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 32, 16, 8, 4, 2, 1, 2, 1</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! We pick the highest power first (64), leaving 2 inches remaining. So we use the 64 and 2 pipes.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 64, 2</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. We only have ONE copy of the 32 pipe.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 32, 32, 2</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. Binary representation of 10 is:</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! 10 = 8 + 2, which gives us the binary 1010.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1010</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 1111</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 1000</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 1100</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Why can't we use the digit "2" in the representation of a number in binary?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. While true, there is a deeper logical reason based on the physical pipes.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) It is illegal, as only 0 and 1 are given to us in the rules.</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! Using 2 in the ones place is equivalent to using a 2-inch block, which is already present as its own unit. This means redundancy.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Redundancy: Using two 1-inch pipes is the same as using the 2-inch pipe we already have.</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Computers dislike it.</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) It is too big.</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity 3: Measuring with Ternary Pipes</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Instead of base 10 (decimal) and base 2 (binary), what if we set the base to 3? Then we will have pipes of lengths 1, 3, 9, 27, 81..., all powers of 3, and <strong>2 pipes of each length</strong>.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/height/3.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To measure 55 inches in ternary: $55 = 54 + 1 = 2 \\times 27 + 1 \\times 1$. The representation is $(2001)_3$.
                </p>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. When we measure 66 inches with ternary pipes, how will its representation be?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 2011</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2101</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='✅ Correct! 66 = 2 x 27 + 1 x 9 + 1 x 3 + 0 x 1 = 2110.'; document.getElementById('q5-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 2110</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 2210</button>
                    </div>
                    <div id="q5-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 6 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">6. What is the largest digit allowed in Base 3?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect. The digits allowed must be strictly less than the base.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 3</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='✅ Correct! The allowed digits are strictly less than the base (0, 1, 2).'; document.getElementById('q6-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect. We can use a higher digit than 1.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 1</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 9</button>
                    </div>
                    <div id="q6-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 7 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">7. How will we write 100 in base 3 (ternary) notation?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) (3201)₃</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect. 3 is not a valid digit in base 3.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) (2333)₃</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) (11000)₃</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='✅ Correct! 100 = 1 x 81 + 0 x 27 + 2 x 9 + 0 x 3 + 1 x 1 = (10201)₃.'; document.getElementById('q7-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) (10201)₃</button>
                    </div>
                    <div id="q7-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        We see that a number can be represented in many forms and symbols. Decimal notation is just one of many possible base number systems (Positional value system). The fundamental idea is that we arrange the powers of the base number n in increasing order from right to left. The base n system requires n distinct digits, which are 0 to n-1.
                    </p>
                </div>
            </div>
        `
    },

    // ALGORITHMS AND COMPUTATIONAL THINKING
    { id: "b4_1", section: "Algorithms and Computational Thinking", title: "Searching for the Fake Weight", thumbnail: "book/chapter_thumbnails/weight.png", pdfLink: "book/Fake Weight.pdf" },
    { id: "b4_2", section: "Algorithms and Computational Thinking", title: "Sorting with a Weighing balance", thumbnail: "book/chapter_thumbnails/sort_balance.png", pdfLink: "book/Sorting with a Weighing balance.pdf" },
    { id: "b4_3", section: "Algorithms and Computational Thinking", title: "Sorting Networks", thumbnail: "book/chapter_thumbnails/networks.png", pdfLink: "book/Sorting Networks.pdf" },
    { id: "b4_4", section: "Algorithms and Computational Thinking", title: "Domino Computer", thumbnail: "book/chapter_thumbnails/domino.png", pdfLink: "book/Domino Computer.pdf" },

    // LEARNING AI THROUGH EXPERIENCE
    { id: "b5_1", section: "Learning AI Through Experience", title: "Project 1: Matchboxes that can Learn a Game!!!", thumbnail: "book/chapter_thumbnails/p1.png", pdfLink: "book/P1 Matchboxes that can Learn.pdf" },
    { id: "b5_2", section: "Learning AI Through Experience", title: "Project 2: Data is Beautiful", thumbnail: "book/chapter_thumbnails/p2.png", pdfLink: "book/P2 Data is Beautiful.pdf" },
    { id: "b5_3", section: "Learning AI Through Experience", title: "Project 3: Classification and AI Methods", thumbnail: "book/chapter_thumbnails/p3.png", pdfLink: "book/P3 Classification and AI Methods.pdf" },
    { id: "b5_4", section: "Learning AI Through Experience", title: "Project 4: Play Chess against AI", thumbnail: "book/chapter_thumbnails/p4.png", pdfLink: "book/P4 Play Chess against AI.pdf" },
    { id: "b5_5", section: "Learning AI Through Experience", title: "Project 5: Image Identification with Teachable Machine Tool", thumbnail: "book/chapter_thumbnails/p5.png", pdfLink: "book/P5 Image Identification.pdf" },
    { id: "b5_6", section: "Learning AI Through Experience", title: "Project 6: Art, AI and Ethical Implications", thumbnail: "book/chapter_thumbnails/p6.png", pdfLink: "book/P6 Art, AI and Ethical Implications.pdf" },

    // COMPUTATIONAL THINKING OVER ENCRYPTION
    { id: "b6_1", section: "Computational Thinking Over Encryption", title: "Coin Flip Magic", thumbnail: "book/chapter_thumbnails/magic flip.png", pdfLink: "book/Coin Flip Magic.pdf" },
    { id: "b6_2", section: "Computational Thinking Over Encryption", title: "Caesar Cipher", thumbnail: "book/chapter_thumbnails/caesar_cipher.png", pdfLink: "book/Caesar Cipher.pdf" },
    { id: "b6_3", section: "Computational Thinking Over Encryption", title: "Disc Enigma", thumbnail: "book/chapter_thumbnails/disc.png", pdfLink: "book/Disc Enigma.pdf" },
    { id: "b6_4", section: "Computational Thinking Over Encryption", title: "Rotating Grid Cipher", thumbnail: "book/chapter_thumbnails/grid_cipher.png", pdfLink: "book/Rotating Grid Cipher.pdf" },

    // OTHER ACTIVITIES
    { id: "b7_1", section: "Other Activities", title: "Perfect Squares", thumbnail: "book/chapter_thumbnails/perfect_squares.png", pdfLink: "book/Perfect Squares.pdf" },
    { id: "b7_2", section: "Other Activities", title: "Golomb Rulers - 1", thumbnail: "book/chapter_thumbnails/golomb 1.png", pdfLink: "book/Golomb Rulers - 1.pdf" },
    { id: "b7_3", section: "Other Activities", title: "Golomb Rulers - 2", thumbnail: "book/chapter_thumbnails/golomb 2.png", pdfLink: "book/Golomb Rulers - 2.pdf" },
    { id: "b7_4", section: "Other Activities", title: "String Art", thumbnail: "book/chapter_thumbnails/string_art.png", pdfLink: "book/String art.pdf" }
];