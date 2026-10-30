// Book section: Computational Thinking Over Maze Puzzle(s)
const bookMazePuzzles = [
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
                <img src="book/chapter_thumbnails/number maze.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Explore computer programming by writing steps for solving a maze. A program is basically the set of instructions to tell the computer what to do. To be sure that the program is working and solving the problem, it also needs to be tested. The activity provides a group of students an opportunity to play different roles in the activity and understand the basics of computer programming.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/number maze.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

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

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/number maze/1.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/number maze/2.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Writing a Program</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Computers follow instructions. To get our work done from computers, we need to tell them what to do. The list of instructions for computers is called <strong>Program</strong>. We will be using a simple language that can be used without a computer. Instructions: Move forward (1 Step), Take right turn.  </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/number maze/3.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

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

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/3.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <ul style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pawn:</strong> Moves one position in any direction (up, down, right, or left) within the grid. <em>Not allowed:</em> The pawn cannot move diagonally.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Bishop:</strong> Moves diagonally in any position within the grid. <em>Not allowed:</em> The bishop cannot move straight, and it cannot change the direction of steps in the middle.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Knight:</strong> Moves in an L-shape (two spaces in one direction, then one space perpendicular) within the grid. <em>Not allowed:</em> The knight can move in an L-shape only, but not diagonally or straight.</li>
                </ul>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/4.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

<p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);"> Consider the example shown below. The 4x4 grid has one chess piece in each square.
The starting position (top-left square) has the pawn as a chess piece; it can move one
position in any direction (up, down, right, or left). Here, since the only option is
downwards or towards the right, one can move there. </p>
          <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/5.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/6.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>


                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Intro to Abstraction: Tree Diagrams</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A computer does not “see” the number maze the way humans do. Instead, it represents the
maze as a tree diagram with squares and lines. Each square remains a square, and each
possible jump or number of steps becomes a connection (line) between the squares. A tree
diagram is a useful way to represent connections between the squares. This process of
simplifying a problem into an easier representation is called Abstraction
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);"> Let us take the initial chess maze as an example to understand the tree diagram. </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/7.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

             <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);"> Label the squares in a maze with names such as A1, A2, A3, ... for the first row, B1, B2, B3,...
for the second row, and so on. Now we should draw one line for each square and connect
each square when a legal move is possible between them. </p>

<div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/8.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">  Now we need to connect the squares. First, we will take our starting square, A1. Since A1 is
represented as a pawn, it should be connected to A2 and B1, since both are one step away
vertically/horizontally from A1. 
<br> We will start to draw the tree diagram from the start square A1 and model the first few
branches.
</p>

<div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/9.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/10.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A computer does not "see" the number maze the way humans do. Instead, it represents the maze as a tree diagram with squares and lines. Each square remains a square (labeled A1, A2, B1, etc.), and each possible jump becomes a connection (line) between the squares. This process of simplifying a problem into an easier representation is called Abstraction.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now, instead of finding the path by moving as a chess piece, one can visually find a path from the start to the goal from the tree diagram (e.g., A1 (Pawn) &rarr; A2 (Pawn) &rarr; A3 (Knight) &rarr; C2 (Knight) &rarr; D4 (Goal)).
                </p>

                <div style="background: #f8fafc; border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <h4 style="font-size: 1.1rem; color: #0f172a; margin-bottom: 0.5rem; font-weight: 700;">Discussion & Reflection</h4>
                    <p style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-bottom: 1rem;">
                        What information from the puzzle was important to keep? What information could be ignored? This conversation helps to see that abstraction is not about removing meaning. It is about maintaining the structure needed to solve the problem.
                    </p>
                    <p style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-bottom: 0;">
                        A tree diagram lets us quickly find the maze's solution path by showing all possible moves and where paths split. Computers don't "look" at paths the way we do; they use specific rules and step-by-step strategies to explore options.
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Which Chess piece is associated with square D2 in the reference grid?</h4>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chess maze/1.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>
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
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Which square <em>cannot</em> be visited from square B4(Knight)?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. A Knight can jump here (L-shape).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) A2 (Knight)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. A Knight can jump here (L-shape).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) C2 (Knight)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! B3 is adjacent, which requires a straight move (invalid for Knight).'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) B3 (Pawn)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect. A Knight can jump here (L-shape).'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) D5 (Bishop)</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. The tree diagram is shown below. Fill in the blank squares</h4>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                        <img src="book/chess maze/2.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
                    </div>
                    
                    <!-- NEW: Interactive Inputs for Tree Diagram -->
                    <p style="font-size: 1.05rem; color: var(--text-muted); text-align: center; margin-bottom: 1rem;">Look at the red circles in the image and enter the correct cell coordinates (e.g. A1, B2) for the missing nodes.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 1.5rem;">
                        <input type="text" id="node1" placeholder="Root Node" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; width: 120px; text-align: center; font-size: 1rem;">
                        <input type="text" id="node2" placeholder="Right Branch" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; width: 120px; text-align: center; font-size: 1rem;">
                        <input type="text" id="node3" placeholder="Above Right Branch" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; width: 160px; text-align: center; font-size: 1rem;">
                        <input type="text" id="node4" placeholder="Middle Left Red Node" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; width: 180px; text-align: center; font-size: 1rem;">
                        <input type="text" id="node5" placeholder="Top Right Red Node" style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; width: 170px; text-align: center; font-size: 1rem;">
                    </div>
                    <div style="text-align: center;">
                        <button onclick="
                            let n1 = document.getElementById('node1').value.trim().toUpperCase();
                            let n2 = document.getElementById('node2').value.trim().toUpperCase();
                            let n3 = document.getElementById('node3').value.trim().toUpperCase();
                            let n4 = document.getElementById('node4').value.trim().toUpperCase();
                            let n5 = document.getElementById('node5').value.trim().toUpperCase();
                            let msg = '';
                            if(n1==='A1' && n2==='B1' && n3==='B2' && n4==='C4' && n5==='E5') {
                                msg = '✅ Amazing! You filled all nodes correctly (A1, B1, B2, C4, E5).';
                                document.getElementById('q3-fb').style.color = '#16a34a';
                            } else {
                                msg = '❌ Some nodes are incorrect or missing. Check the tree structure carefully!';
                                document.getElementById('q3-fb').style.color = '#ef4444';
                            }
                            document.getElementById('q3-fb').innerHTML = msg;
                        " class="btn-primary" style="padding: 0.75rem 2rem; font-size: 1rem; border: none; border-radius: 6px; cursor: pointer; background: var(--accent-orange); color: #fff; font-weight: 600;">Check Connections</button>
                        <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem;"></div>
                    </div>
                </div>

                <!-- NEW: Note for Teachers Section -->
                <div style="background: #f8fafc; border-left: 4px solid var(--primary); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2.5rem;">
                    <h4 style="font-size: 1.1rem; color: #0f172a; margin-bottom: 0.75rem; font-weight: 700;">Note for Teachers</h4>
                    <ul style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-bottom: 0; padding-left: 1.5rem;">
                        <li style="margin-bottom: 0.5rem;">Abstraction is a central pillar of computational thinking and helps learners manage complexity by focusing on the information that matters for solving a problem. In this activity, the full grid drawing is not the only thing one need. What matters more is the set of possible positions and the allowed movements between them.</li>
                        <li style="margin-bottom: 0.5rem;">A tree diagram is a structure of a hierarchical arrangement of with a squares and lines, where square represent objects or positions and lines represent connections between them.</li>
                        <li>One do not need formal graph theory vocabulary at all. The lesson should start with the puzzle experience, then move to naming the simplified representation as a tree diagram.</li>
                    </ul>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">3. Explore More</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Download the PDF chapter above to practice drawing diagram representations, labeling maze squares, and mapping solution paths on the provided worksheets!
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
                    When solving a maze, we rely on memory and visual clues. Computers, however, need a simpler representation. Instead of focusing on colours and grid lines, one needs to keep only the important information: the possible squares one can go to and the legal moves between them. We label squares (A1, A2, B1...) and draw lines connecting them when a legal move is possible. For example, entering A1 from the left allows a move to A2, while entering from the top allows a move to B1.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Searching means checking possible paths in an organised way until the goal is found.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Breadth-First Search (BFS):</strong> Branching till the same breadth at every connection. It explores level by level without backtracking, and is best suited for finding the shortest path.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Depth-First Search (DFS):</strong> Choose one path and keep drawing the connection forward, ignoring side branches. If you hit a dead end, backtrack to the last branch you ignored. It explores one path at a time. An ant searches for food using a DFS pattern.</li>
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
                        Download the PDF chapter above to practice drawing Breadth-First and Depth-First tree diagrams on the printable worksheets!
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
    }
];
