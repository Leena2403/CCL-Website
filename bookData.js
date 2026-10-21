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
                        <li style="margin-bottom: 0.5rem;">Abstraction is a central pillar of computational thinking and helps learners manage complexity by focusing on the information that matters for solving a problem[cite: 34]. In this activity, the full grid drawing is not the only thing one need[cite: 34]. What matters more is the set of possible positions and the allowed movements between them[cite: 34].</li>
                        <li style="margin-bottom: 0.5rem;">A tree diagram is a structure of a hierarchical arrangement of with a squares and lines, where square represent objects or positions and lines represent connections between them[cite: 34].</li>
                        <li>One do not need formal graph theory vocabulary at all[cite: 34]. The lesson should start with the puzzle experience, then move to naming the simplified representation as a tree diagram[cite: 34].</li>
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
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Extending to nXn grids. Generalisation pattern: $1+2+...+n=n(n+1)/2$.</li>
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
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. What decimal number is represented by binary fingers where the little (16), ring (8), and index (2) fingers are raised? (Thumb is down)</h4>
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
    // to do 
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
    {
        id: "b4_1",
        section: "Algorithms and Computational Thinking",
        title: "Searching for the Fake Weight",
        thumbnail: "book/chapter_thumbnails/weight.png",
        pdfLink: "book/Fake Weight.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/weight.png" alt="Searching for the Fake Weight Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Weight and Capacity</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In this activity, we can use the understanding of a weighing scale to search for a particular weight. This can be done in many ways, and some of these methods will be faster than others. This is similar to how a computer also searches.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We will explore search algorithms using a weighing balance and see how we can speed up the process using different approaches. We will separate a lighter fake weight from 8 proper weights among 9 identical-looking weights. We convey to students that the same reasoning can be applied to the analysis of computer algorithms.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/searchingactivityworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                        <a href="https://tinyurl.com/searchingactivityvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">Students try out the activity with each other. As the teacher progresses, the students progress along with the worksheet.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discussion on the various algorithms, how a slight change in approach leads to a faster solution, and how computers apply such algorithms.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    This activity develops in a way that helps students discover important ideas, such as breaking a problem into smaller problems (<strong>decomposition</strong>), identifying <strong>patterns</strong>, developing <strong>algorithms</strong>, and finding faster ways to complete a task, thus analyzing algorithms.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Searching with a Weighing Scale</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Imagine we have 9 identical-looking weights out of which one is lighter, a fake weight. We have to figure out which one is lighter using only a weighing scale. Our goal is to find the fake in the least number of weighings. Always assume that you have the worst luck and will get the fake weight in the last possible step.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/fake weight/1.png" alt="9 Weights and Scale" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 700; margin-bottom: 0.5rem;">Key Observations:</p>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">A 2-pan weighing balance can be in 3 positions: left is heavier, right is heavier, or both are balanced.</li>
                        <li style="margin-bottom: 0.5rem;">If we weigh two weights and they are equal, we can conclude the fake weight is in the remaining weights.</li>
                        <li>By observing how many weights can be discarded after each weighing, we can determine which method is faster.</li>
                    </ul>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">1. Initial Attempt (Linear Search)</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let's take two weights at a time and compare. This can be done in two ways:<br>
                    1. Keep the weight on one side constant and choose a new weight for the other side each time.<br>
                    2. Choose two new weights for every weighing.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/fake weight/2.png" alt="9 Weights and Scale" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Is one of the methods above faster (fewer weighings) than the other?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Yes, method one is faster</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. In both methods, if they balance, you only remove the weights that were on the scale.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Yes, method two is faster</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! Method two is faster because you can remove two weights per weighing if they balance, whereas method one only removes one new weight.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) No, both take the same number of weighings</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. How many minimum weighings will it take to guarantee figuring out the fake weight when you compare TWO weights at a time? (Assuming worst-case scenario)</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 5 weighings</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 8 weighings</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! If we compare pairs, we remove 2 each time. After 3 weighings, we have 3 weights left. The 4th weighing guarantees we find the fake one.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 4 weighings</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 7 weighings</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">2. A Faster Way (Binary Search)</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To do it faster, we need to remove as many weights as possible in each round. We can divide the 9 weights into 2 equal parts of 4 each, leaving 1 weight aside. In the first weighing, we keep 4 on the left and 4 on the right.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/fake weight/3.png" alt="9 Weights and Scale" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. After this first weighing (4 vs 4), how many weights remain in consideration in the worst-case scenario?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! In the worst case, the scale is unbalanced. We discard the 4 heavy ones AND the 1 we set aside. The 4 on the lighter side remain.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 5</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 8</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. If the fake is among those 4 remaining weights, how many more weighings are needed (minimum) to find it?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! We split the 4 into 2 vs 2 (1st weighing), which leaves 2 weights. We split those 1 vs 1 (2nd weighing) to find the fake.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 3</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 4</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">3. The Fastest Way (Ternary Search)</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We saw that the weighing balance is a three-state system. Let's divide the 9 weights into 3 equal parts (3 groups of 3). We will weigh two groups of 3 against each other.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/fake weight/4.png" alt="Ternary Search Scale" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. How many weights get removed after this first weighing (3 vs 3)?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 2</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 4</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 3</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='✅ Correct! If they balance, you remove the 6 on the scale. If they don\\'t, you remove the heavy 3 and the unweighed 3. Either way, 6 are removed!'; document.getElementById('q5-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 6</button>
                    </div>
                    <div id="q5-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 6 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">6. How many total steps does this ternary method require to determine the fake weight?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='✅ Correct! First weighing leaves 3 weights. Second weighing (1 vs 1) leaves 1 fake weight. Total: 2 weighings.'; document.getElementById('q6-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 3</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 4</button>
                    </div>
                    <div id="q6-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        We see that dividing the search space into three parts is faster for finding the fake weight using a balance. This happens because in a three-state system, "ternary search" is a faster searching algorithm. We broke the problem into 3-weight chunks, understood the pattern, and used the same algorithm to solve the bigger 9-weight problem.
                    </p>
                </div>

            </div>
        `
    },
    // ALGORITHMS AND COMPUTATIONAL THINKING
    {
        id: "b4_2",
        section: "Algorithms and Computational Thinking",
        title: "Sorting with a Weighing balance",
        thumbnail: "book/chapter_thumbnails/sort_balance.png",
        pdfLink: "book/Sorting with a Weighing balance.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/sort_balance.png" alt="Sorting with a Weighing Balance Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Finding the Unknown</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We have used computers or smartphones. We mostly need to modify our data by Alphabetic order, Numerical order, or date modified order in ascending or descending order. Have you ever thought about how computers do this process very quickly?
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In this activity, we can use our understanding of a weighing scale to sort containers by weight. This can be done in many ways, and some of these methods will require less number of weighings than others. This is similar to how a computer also sorts.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/sortingactivityworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">5 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher poses the question to the students and invites a couple of students to try their ideas.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Problem-solving and algorithm</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students try out and discuss different ways with each other. As the teacher progresses, the students progress along with the worksheet.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">5 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discussion on the various algorithms, how a slight change in approach leads to a different solution, and how computers apply such algorithms.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    This activity develops in a way that helps students discover important ideas, such as breaking a problem into smaller problems (<strong>decomposition</strong>), identifying <strong>patterns</strong>, developing <strong>algorithms</strong>, and finding faster ways to complete a task, thus analysing algorithms.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity Setup</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Imagine we have 7 containers of different weights (labeled A through G). We have to sort the containers by increasing weight using only a weighing scale. Our goal is to sort them using the fewest weighings.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/project1/6.png" alt="Sorting with a Weighing Balance Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p style="font-size: 1.1rem; color: var(--text-main); font-weight: 600; margin-bottom: 0.5rem;">Materials Required:</p>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li>Weighting Balance</li>
                        <li>7 Identical Containers</li>
                        <li>28 Coins</li>
                    </ul>
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0;">
                        <strong>Setup:</strong> Fill each container with a different number of coins (1 coin, 2 coins, etc.). Mix them up so that you no longer know the order of the weights.
                    </p>
                </div>


                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Method 1: Sequential Sorting</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    We compare 2 weights at a time to determine which is lighter. We compare it to the next container, then the next, and so on, until we find the lightest of the 7 containers. Then, from the remaining 6, find the lightest again, and so on.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/sorting/2.png" alt="Sorting Containers" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. By Method 1, how many minimum weighings will it take to guarantee figuring out the lightest container of the 7? (Assuming worst-case scenario)</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 4 weighings</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! You must compare it with the other 6 weights.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 6 weighings</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 7 weighings</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 8 weighings</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. After finding the lightest of the 7 containers, how many minimum weighings will it take to guarantee finding the lightest container of the remaining 6?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 3 weighings</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 6 weighings</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Need to compare a total of five times.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 5 weighings</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 7 weighings</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. If we continue this process for all 7 containers, how many total weighings will it take to guarantee sorting them?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 42 weighings</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 24 weighings</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 28 weighings</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! 6 + 5 + 4 + 3 + 2 + 1 = 21 weighings.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 21 weighings</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Method 2: A way of random picking (Quick Sort logic)</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Another way could be to pick one container at random and compare all the others to it. Make 2 separate groups for the lighter and heavier containers. And further do the same process for the groups formed.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    For example, randomly choose E, and compare it to all the others. A, D, G came lighter to E, whereas B, C, F came heavier to E.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/sorting/3.png" alt="Sorting Containers" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. If we align all 7 containers from lightest to heaviest, what will be the position of E?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! Three weights are lighter than E (A, D, G). Therefore, the position of E is 4th from the beginning.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 4th</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 3rd</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 5th</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Information is insufficient</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Comparing all containers with E fixes the position for E. Now, we take all the light ones (A, D, G). Choose A and compare it with D and G. We find A is heavier than G, and A is lighter than D. <br>
                    <strong>Sorted Order:</strong> G &rarr; A &rarr; D
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/sorting/4.png" alt="Sorting Containers" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Similarly, for the heavy group (B, C, F), we choose C and compare it to B and F. We find C is lighter than B, and heavier than F.<br>
                    <strong>Sorted Order:</strong> F &rarr; C &rarr; B
                </p>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. Total, how many weighings did it take to sort using method 2?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 4</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 5</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 8</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='✅ Correct! To determine the position of E took 6 weighings. Then determining positions of A and C took 2 weighings each. Total = 10.'; document.getElementById('q5-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 10</button>
                    </div>
                    <div id="q5-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 6 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">6. If we do the same sorting of 5 weights using method 2, will the number of weighings be more than method 1?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Yes, it involves more steps</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='✅ Correct! Method 2 breaks the problem into half-sized subproblems and keeps breaking it into smaller bits. In method one, each step decreases the number of steps by only one, so it takes much longer.'; document.getElementById('q6-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) No, it will be less than method 1</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Doesn\\'t make a difference</button>
                    </div>
                    <div id="q6-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Sorting objects can be done using different methods, each with its own efficiency. We learned that choosing the right approach depends on the task's goal. Breaking the problem into smaller parts helps in solving it more effectively. This activity shows that efficient thinking is important in both mathematics and computing.
                    </p>
                </div>

            </div>
        `
    },
    // ALGORITHMS AND COMPUTATIONAL THINKING
    {
        id: "b4_3",
        section: "Algorithms and Computational Thinking",
        title: "Sorting Networks",
        thumbnail: "book/chapter_thumbnails/networks.png",
        pdfLink: "book/Sorting Networks.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/networks.png" alt="Sorting Networks Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction: Thousands around us</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Ever wondered how computers sort random things into order so quickly? Books in a library, dictionaries, and lists of students in the classroom are arranged in an order for convenience. Without sorting, finding information would be much more difficult.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    This activity uses the network template to be drawn on a floor using chalk (or a flex print) and demonstrates how numbers can be arranged in an order.

                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/sorting networks/1.png" alt="Sorting Networks Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/SortingNetworkCT" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Network Template
                        </a>
                        <a href="https://tinyurl.com/SortingNetworkVideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video
                        </a>
                        <a href="https://tinyurl.com/sortingreference" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📚 Reference Material
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
                                <td style="padding: 1rem; color: var(--text-muted);">15-20 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Teacher will take the students outdoors and conduct the activity.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Trials by Students</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students try out the activity within a batch of 6. Others can observe the activity and take turns to try out.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Attempting the worksheets and discussion based on the activity.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Sorting Algorithm:</strong> The network sorts any given set of numbers in an ordered list. The design of the network and related tasks provides an opportunity to consider the logic and algorithms underlying the activity.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> The design of the network is an abstract representation of how data is actually organised in a computer.</li>
                    <li><strong>Decomposition:</strong> The network can start with comparing two numbers and repeating that basic comparison unit; we can sort any set of input numbers.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity Rules</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    6 students in the class will take an A4 sheet with numbers 1 to 6 on it. Stand on the input circles in any order of the numbers.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;">The rectangle box is a comparison box.</li>
                    <li style="margin-bottom: 0.75rem;">The one with the <strong>smaller</strong> number will follow the <strong>blue line</strong>.</li>
                    <li style="margin-bottom: 0.75rem;">The one with the <strong>bigger</strong> number will follow the <strong>orange line</strong>.</li>
                    <li>At the end of the network, you will see that the numbers are in sorted order.</li>
                </ul>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0;">
                        <strong>Explorations:</strong> Try this activity with different starting orders. Are numbers getting sorted at the end for every input sequence? Try using 2-digit and 3-digit numbers, or sort students alphabetically by their names, or by their height!
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Worksheet</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Consider the network to sort any 4 input numbers. The input numbers are {78, 56, 23, 113}. Remember: the smaller number follows the blue line and the bigger number follows the orange line.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/sorting networks/2.png" alt="Sorting Networks Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. What will be the correct positions of input numbers after the FIRST level of comparison?</h4>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/sorting networks/3.png" alt="Sorting Networks Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! The smaller number follows the blue line, and the larger follows the orange line.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Top pair compares 78 and 56. 56 goes blue (up), 78 goes orange (down). Bottom pair compares 23 and 113. 23 goes blue (up), 113 goes orange (down).</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect. Follow the rule carefully: smaller follows blue, bigger follows orange.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Top pair compares 78 and 56. 78 goes blue (up), 56 goes orange (down). Bottom pair compares 23 and 113. 113 goes blue (up), 23 goes orange (down).</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. What will be the correct positions of numbers after the SECOND level of comparison?</h4>

                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/sorting networks/4.png" alt="Sorting Networks Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) The numbers 78 and 113 meet in the middle box. 113 follows blue, 78 follows orange.</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! By following the orange line from the upper box, 56 will reach the middle comparison box. By following the blue line from the lower box, 78 will reach the comparison box.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) The numbers 56 and 78 meet in the middle box. 56 follows blue, 78 follows orange.</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now consider a reversal in the rule. Instead of the smaller number, the <strong>bigger number</strong> from the comparison box will follow the blue arrow, and the <strong>smaller number</strong> will follow the orange arrow.
                </p>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. What will be the output order of the numbers at the end, if the comparison box rule is reversed?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) No difference, output will be the same</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! At every comparison, the bigger number will follow the blue line and move upwards, while the smaller number will move downwards. The final order will be descending.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Output numbers will be in reverse order (descending)</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) The output depends on the input number order</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Can\\'t say anything about the order</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

            </div>
        `
    },

    // to do 
    { id: "b4_4", section: "Algorithms and Computational Thinking", title: "Domino Computer", thumbnail: "book/chapter_thumbnails/domino.png", pdfLink: "book/Domino Computer.pdf" },

    // LEARNING AI THROUGH EXPERIENCE
    // LEARNING AI THROUGH EXPERIENCE
    {
        id: "b5_1",
        section: "Learning AI Through Experience",
        title: "Project 1: Matchboxes that can Learn a Game!!!",
        thumbnail: "book/chapter_thumbnails/p1.png",
        pdfLink: "book/P1 Matchboxes that can Learn.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/p1.png" alt="Matchboxes that can Learn Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Overview</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    How does one learn to play a board game? We watch others playing the games, their moves, get familiar with the rules, and also play ourselves. The more we play the game, the better we get at the game. In a similar way, a computer also learns to play the games. Such learning methods are used very commonly in most AI applications. The project lets you create and train a model made out of matchboxes!!
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/nimtemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Nim Game Template
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Project Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch the Game</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10-15 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher introduces the game and rules. Draws the 10 boxes for the game template and demonstrates by playing a couple of rounds.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Play & Explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20-25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students form groups of 3 or 4 and play the game among themselves while the teacher suggests explorations.</td>
                            </tr>
                            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/project1/1.png" alt="Matchboxes that can Learn Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            
                            <tr style="border-bottom: 1px solid var(--border-color);">
                            
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Designing an AI Model</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students will design a training model to play the game using matchboxes.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Visualisation and Extension</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Visualise the learning curve by plotting the graph: number of games played vs wins. Extend the model to another game.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Introduction to AI methods:</strong> The game learning requires applying AI methods to train the model.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Game Strategy:</strong> Simplicity in the game, yet non-trivial to figure out the winning strategy, provides a platform for an experiential approach to teaching/learning.</li>
                    <li><strong>Visualising Learning Graph:</strong> The graph of the number of plays and winning by the learning AI model provides insight into the training process.</li>
                </ul>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/project1/6.png" alt="Matchboxes that can Learn Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Material Required</h3>
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;">Print of the A4 sheet template</li>
                    <li style="margin-bottom: 0.75rem;">Matchboxes and Glue</li>
                    <li>Coloured beads (3 colours, 10 each) or dal grains with different colours</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">The Game: Reach the 10 first!!</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    It's a 2-player simple game. The board has positions numbered 1 to 10. The player who reaches the token to the final position (10) wins the game. Players take turns to move forward. On each turn, the token can move <strong>1, 2, or 3 steps forward</strong>.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/project1/2.png" alt="Matchboxes that can Learn Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. When the opponent places the token at 5, where should you place the token to ensure a win?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 6 (move 1)</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 7 (move 2)</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! If you move to 8 (move 3), the opponent is forced to move to 9, and then you can win by moving to 10.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 8 (move 3)</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Designing an AI Model</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now one player of the game will be a matchbox. Each numbered position on the board will have one matchbox associated with it. Inside every matchbox are three coloured beads, each representing a possible action:
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <ul style="font-size: 1.15rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem; list-style-type: none;">
                        <li style="margin-bottom: 0.5rem;"><span style="display:inline-block; width: 12px; height: 12px; background: #3b82f6; border-radius: 50%; margin-right: 8px;"></span><strong>Blue bead:</strong> +1 (Move forward 1 step)</li>
                        <li style="margin-bottom: 0.5rem;"><span style="display:inline-block; width: 12px; height: 12px; background: #22c55e; border-radius: 50%; margin-right: 8px;"></span><strong>Green bead:</strong> +2 (Move forward 2 steps)</li>
                        <li><span style="display:inline-block; width: 12px; height: 12px; background: #eab308; border-radius: 50%; margin-right: 8px;"></span><strong>Yellow bead:</strong> +3 (Move forward 3 steps)</li>
                    </ul>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project1/3.png" alt="Matchbox Layout" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Playing Against the Matchboxes</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Whenever it is the matchbox machine's turn:
                </p>
                <ol style="font-size: 1.15rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem; margin-bottom: 2.5rem;">
                    <li style="margin-bottom: 0.5rem;">Take the matchbox corresponding to the current position.</li>
                    <li style="margin-bottom: 0.5rem;">Shake the matchbox, open the drawer, pick a random bead without looking, and note its colour.</li>
                    <li style="margin-bottom: 0.5rem;">The colour of the bead tells the machine how many steps to move.</li>
                    <li>The bead is <strong>kept aside</strong> until the game ends.</li>
                </ol>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    At the beginning, the AI model has no knowledge of good or bad moves, so its actions are mostly random.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);" > 1. The AI model plays first. It draws a bead from the matchbox at the starting position. A green bead is drawn, which means the machine advances 2 steps. The token moves to position 2.  </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project1/4.png" alt="Matchbox Layout" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);" > 2. The student takes the next turn and decides to advance the token 3 steps, placing the token at position 5  </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);" > 3. Now it is the AI machines turn again. It draws a bead from the matchbox for position 5. This time, a blue bead is drawn, indicating that the machine should advance 1 step to position 6</p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project1/5.png" alt="Matchbox Layout" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

               
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);" >  4. The student then advances 1 step, placing the token at position 7.</p>

                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);" >  5. The AI machine draws a bead from the matchbox for position 7. A yellow bead representing 3 steps. The machine moves the token from 7 to 10. </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project1/6.png" alt="Matchbox Layout" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);" >  Since the AI machine reaches the final position (10), it wins the game. </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Training the AI Model</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    After each game finishes, we update the matchboxes depending on whether the AI model won or lost.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: #16a34a; font-weight: 700; margin-top: 0; margin-bottom: 1rem;">If the AI model wins:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">This means the moves it chose were good.</li>
                        <li style="margin-bottom: 0.5rem;">All beads used in that game are returned to their matchboxes.</li>
                        <li>This acts as a <strong>reward</strong>, keeping those actions available for future games.</li>
                    </ul>

                    <h4 style="font-size: 1.15rem; color: #dc2626; font-weight: 700; margin-top: 0; margin-bottom: 1rem;">If the AI model loses:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">The final move made by the matchboxes was a bad decision.</li>
                        <li style="margin-bottom: 0.5rem;">The bead corresponding to the matchbox's last move is <strong>removed</strong>.</li>
                        <li>This acts as a <strong>punishment</strong>, preventing that poor choice from happening again.</li>
                    </ul>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    As more games are played, bad moves gradually disappear, and good moves remain. The machine becomes better at winning.
                </p>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Visualisation and Extension</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        While training the matchboxes-based AI model, plot a graph of games played vs wins. Also, examine whether this graph changes when you change the reward rule: now reward winning moves by adding <em>extra</em> beads to those moves. You can extend this algorithm to games like "Don't Say 13" or "Don't Place at 20"!
                    </p>
                </div>

            </div>
        `
    },
    // LEARNING AI THROUGH EXPERIENCE
    {
        id: "b5_2",
        section: "Learning AI Through Experience",
        title: "Project 2: Data is Beautiful",
        thumbnail: "book/chapter_thumbnails/p2.png",
        pdfLink: "book/P2 Data is Beautiful.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/p2.png" alt="Data is Beautiful Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Overview</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Data visualisation and representation have creative elements into it and provide a powerful way of communication from raw data and numbers. The project provides an opportunity to innovate in representing data after collecting and processing the data.
                </p>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Project Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10-15 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher will show examples of creative ways of representing diagrams. The students will also share what they understand from the diagram shown.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Explore the Data Cycle</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20-25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Classroom activity to record data and process it. The Teacher will demonstrate ways to creatively represent it.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Data is Beautiful</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The students will create innovative ways of representing data. The class will derive conclusions from the graphs/charts.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Introduction to Data Cycle:</strong> The project leads to implementing and experiencing the entire data cycle - collection, processing, and representation.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Data Processing:</strong> The collected raw data needs to be processed to get it in some tabular form.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Creative Thinking:</strong> Data representation provides openness in designing the graphs and charts.</li>
                    <li><strong>Data Analysis:</strong> Interpreting the charts and graphs to make conclusions.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Material Required</h3>
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;">Sticky notes or Paper pieces</li>
                    <li style="margin-bottom: 0.75rem;">Small board to pin the paper pieces (notice board)</li>
                    <li style="margin-bottom: 0.75rem;">Coloured pencils/pens/crayons</li>
                    <li>Projector to showcase images (or take colour printouts of data representations given at the end)</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Launch: Visualising Information</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The teacher will show the following images to the class and discuss what they could interpret. The teacher also discussed the impact of creative and effective data representation in communication.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">1. 1978 Study of Hand Washing</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
                        The image representation becomes highly relevant during the pandemic and in the post-pandemic years. It uses the subject of the data, hands, as the location of the data. The study shows the areas most often missed while washing hands.
                    </p>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/project2/1.png" alt="Hand Washing Data" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 3rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">2. Earth Temperature over Time</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
                        Play the video (link: <a href="https://svsgsfc.nasa.gov/5191/" target="_blank" style="color: #3b82f6;">https://svsgsfc.nasa.gov/5191/</a>) in the classroom about changes in Earth's temperature over time. NASA represented the data of Earth's temperature over the years with an animation, highlighting concerning changes. Such state-of-the-art visualisation demonstrates how creative visuals can be and how even small changes in pattern, shape, colour, or shading can clearly and crisply communicate the findings.
                    </p>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/project2/2.png" alt="Earth Temperature Data" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Explore the Data Cycle</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The teacher shall pose the following questions to the students in the classroom. Most question sets focus on one's interests and hobbies.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Data Collection & Processing:</strong> The students shall answer each in an individual paper with a question label, i.e. 1, 2, etc. The teachers shall collect the answers and stick/pin them on the common board, grouping them in order. After everyone has responded, the students will create data tables for each question.</li>
                    <li><strong>Data Representation:</strong> The Teacher will show the following diagrams as an example to students. Let the students come up with different creative ways to represent the data collected in the classrooms.</li>
                </ul>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/project2/3.png" alt="Hand Washing Data" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 3rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Possible set of questions:</h4>
                    <ol style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">What makes you happy at home?</li>
                        <li style="margin-bottom: 0.5rem;">What emotion are you feeling today before coming to school?</li>
                        <li style="margin-bottom: 0.5rem;">What type of books do you read the most?</li>
                        <li style="margin-bottom: 0.5rem;">What is the strongest emotion you feel when doing art in the classroom?</li>
                        <li style="margin-bottom: 0.5rem;">How many sit-ups can you do in 1 minute?</li>
                        <li style="margin-bottom: 0.5rem;">How much cycling can you do in a stretch?</li>
                        <li style="margin-bottom: 0.5rem;">Who is someone you admire?</li>
                        <li>Which sports do you enjoy watching?</li>
                    </ol>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Examples of Data Visualisations</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    (Show it on the projector, or the teacher may take a print to display in the classroom)
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project2/4.png" alt="First Day Feelings Chart" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/project2/5.png" alt="Sports and Cycling Charts" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>


            </div>
        `
    },
    // LEARNING AI THROUGH EXPERIENCE
    {
        id: "b5_3", // Changed to b5_3 as per convention, since b5_2 is "Data is Beautiful"
        section: "Learning AI Through Experience",
        title: "Project 3: Classification and AI Methods",
        thumbnail: "book/chapter_thumbnails/p3.png",
        pdfLink: "book/P3 Classification and AI Methods.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/p3.png" alt="Classification and AI Methods Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Overview</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In most AI applications, AI models must make decisions or identify the category of a given input. The project lets students create a tree to make decisions. The classroom activity involves classification (identifying categories) of various types of dal, followed by a project activity based on fruit cards.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 3/1.png" alt="Types of Dal" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Classification Algorithm:</strong> Students will create tree diagrams to identify the object based on input diagrams.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Efficiency of Algorithms:</strong> There are multiple ways of creating the tree. The classroom activity will let students compare the efficiency of various approaches.</li>
                    <li><strong>Testing of the AI Model:</strong> Students will test their model with fresh inputs.</li>
                </ul>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 3rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Material Required</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Various types of dal grains (approx 50 gm each for the whole class)</li>
                        <li>Print of fruits cards among a group of 3 or 4</li>
                    </ul>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Project Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10-15 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher asks students to create a tree diagram identifying types of dal, demonstrating a tree for 4 types first.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20-25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students represent their trees. Teachers ask exploring questions based on analysis.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Implement</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students create a classification model for fruit cards. (<a href="https://tinyurl.com/fruitscards" target="_blank" style="color: #3b82f6;">Template Link</a>)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Launch: Building a Decision Tree</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The activity focuses on the identification of various types of dal by looking at their features, i.e. Whole (W)/split (S) dal, colour of the dal, and presence/absence of skin.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;">Teachers and students will bring various types of dal from their homes. Put the grains into groups on the chart paper, and write their names and features below each group.</li>
                    <li style="margin-bottom: 0.75rem;">The students have to create a set of questions to identify the dal based on this feature. Create your own set of questions and their order.</li>
                    <li>By asking a sequence of yes/no questions based on various features, the tree identifies the category. Start at the bottom. Take one piece of dal, ask the question at the node and place the dal under either the YES or NO branch.</li>
                </ul>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/project 3/2.png" alt="Decision Tree Example" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Explore & Analyze Efficiency</h3>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. If the first question splits 10 types of dal into two parts (8 types and 2 types), what would be a better split if we wanted a decision tree with fewer questions overall?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 8:2</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 7:3</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! A 5:5 split divides the total into two equal halves, which helps find the category more quickly (similar to Binary Search).'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 5:5</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 10:0</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Based on the 10 types of Dal, which feature would you ask to split the dals perfectly in half (5:5)?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/project 3/3.png" alt="Decision Tree Example" style="width: 100%; max-height: 500px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Skin</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Asking Whole/Split divides the group into exactly 5 Whole and 5 Split dals.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Whole/Split</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Dal</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Colour</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. If each question successfully halves the group (a balanced tree), how many questions would it take (maximum) to identify 12 items?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 2</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect. 2^3 = 8 (not enough for 12).'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 3</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! 2^4 = 16. So 4 questions can identify up to 16 unique items.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 11</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Implement: Classifying Fruits</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Draw a tree that classifies fruits based on features like colour, seed count, growth habit, and peel edibility. There are template data cards for various fruits and their properties.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Training fruit data properties:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;"><strong>Colour:</strong> Yellow / Orange / Red / Green</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Growth Habitat:</strong> Tree / Vine / Herb</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Edible peel:</strong> Yes / No</li>
                        <li><strong>Seed Count:</strong> Number from 0-10</li>
                    </ul>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 3/4.png" alt="Fruit Cards Example" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Along with the training cards, testing data cards are given in the template that contains only feature properties, not the images, and students need to identify the fruit based on those properties.
                </p>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: center;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Test Card Number</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Fruit Category (Answers)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted);">24</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600;">Mango</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted);">46</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600;">Orange</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted);">38</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600;">Strawberry</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted);">29</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600;">Watermelon</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; color: var(--text-muted);">62</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600;">Banana</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);"> Reference: Lehner, Lukas, and Martina Landman. Learning Activity for Machine Learning Education in K-12. "Unplugged Decision Tree Learning A Learning Activity for Machine Learning Education in K-12" </p>
            </div>
        `
    },
    // LEARNING AI THROUGH EXPERIENCE
    // LEARNING AI THROUGH EXPERIENCE
    {
        id: "b5_4",
        section: "Learning AI Through Experience",
        title: "Project 4: Play Chess against AI",
        thumbnail: "book/chapter_thumbnails/chess-ai.png",
        pdfLink: "book/P4 Play Chess against AI.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/chess-ai.png" alt="Play Chess against AI Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Overview</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The crucial moment in the history of Artificial Intelligence was when the AI model beat the chess world champion, Garry Kasparov, in 1997. The project will let students create an AI model to play the (simpler and smaller version of) chess. Such learning methods are used very commonly in most AI applications.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/chesstemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Print Template
                        </a>
                        <a href="https://tinyurl.com/matchboxchessonline" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Matchbox Chess Online Version
                        </a>
                    </div>
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Project Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch the Game</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10-15 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher will introduce the simpler version of chess with only pawns. Demonstrate the game by playing it for a couple of rounds.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Play & Explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20-25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students form groups of 3 or 4 and play the game among themselves. The teacher suggests explorations.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Designing an AI Model</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students design a training model to play the game using matchboxes.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Visualisation and Extension</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Visualise the learning curve by plotting a graph. Extend the AI model to Mini Checkers.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Introduction to AI methods:</strong> The game learning requires applying AI methods to train the model.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Symmetry and Abstraction:</strong> The number of possibilities of the board is reduced with the help of symmetry.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Game Strategy:</strong> Simplicity in the game, yet non-trivial to figure out the winning strategy.</li>
                    <li><strong>Visualising Learning Graph:</strong> The graph of the number of plays and winning by the learning AI model provides insight into the training process.</li>
                </ul>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                    <img src="book/project 4/1.png" alt="Play Chess against AI Setup" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">The Game: Hexapawn</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A simplified version of chess played on a 3x3 grid with six pawns (3 white and 3 black). White always starts the game.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Rules:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Pawn can move one square forward into an empty square, OR</li>
                        <li>A pawn can move diagonally left or right to capture an opponent's pawn, which is removed from the board.</li>
                    </ul>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                        <img src="book/project 4/2.png" alt="Play Chess Rules" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Winning Conditions:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">One of their pawns makes it to the opposite side of the board.</li>
                        <li style="margin-bottom: 0.5rem;">All the opponent's pawns have been captured.</li>
                        <li>The opponent has no legal moves to make.</li>
                    </ul>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Designing an AI Model</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    <strong>Training the Matchboxes:</strong>
                </p>
                <ol style="font-size: 1.15rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem; margin-bottom: 2.5rem;">
                    <li style="margin-bottom: 0.5rem;">The student (Player 1 - White) starts the game.</li>
                    <li style="margin-bottom: 0.5rem;">On the matchbox's turn, find the matchbox that resembles the current board position.</li>
                    <li style="margin-bottom: 0.5rem;">Shake the matchbox, pick a random bead without looking. The colour of the bead matches a colored arrow on the matchbox, determining the move.</li>
                    <li style="margin-bottom: 0.5rem;">At the end of the game:<br>
                    - If the matchbox wins, <strong>"Reward"</strong> it by putting all the color beads back inside.<br>
                    - If the matchbox loses, <strong>"Punish"</strong> it by taking out the bead from its last move.
                    </li>
                </ol>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                    <img src="book/project 4/3.png" alt="Training the matchboxes" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Possible States in the Game</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Although many moves seem possible, after removing all illegal moves and symmetrical duplicates (mirror reflections), the total number of possible board states of the game reduces to 19. These 19 states are further divided into 2nd Chance, 4th Chance, and 6th Chance (which are the machine's moves).
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>2nd Chance (Black's First Move):</strong> In this case, the total number of states is 3, but after removing symmetrical duplicates, it reduces to 2. For each state, we have some possible moves, shown at the top of the match box as a coloured arrow, and for each move, we include a bead of the same colour.</li>
                </ul>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 4/4.png" alt="Possible board states and Machine moves in 2nd Chance" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.src='book/project 4/1.png';">
                </div>

                <ul style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>4th Chance (Black's Second Move):</strong> Similarly, for this, the total number of possible states is 10.</li>
                </ul>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 4/5.png" alt="Possible board states and Machine moves in the 4th Chance" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.src='book/project 4/1.png';">
                </div>

                <ul style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>6th Chance (Black's Third Move):</strong> Similarly, for this, the total number of possible states is 7.</li>
                </ul>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/project 4/6.png" alt="Possible board states and Machine moves in the 6th Chance" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.src='book/project 4/1.png';">
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Reinforcement-based Machine Learning</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        The model takes actions, receives rewards for good choices, or punishments for bad ones, and gradually improves its strategy to maximise rewards over time. After about 30 games or so, poor moves are eliminated, leaving only winning moves.
                    </p>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/project 4/table.png" alt="Possible board states and Machine moves in the 6th Chance" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.src='book/project 4/1.png';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. How could you modify the game to speed up learning?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! By adding extra beads for winning moves, the machine is mathematically more likely to pick them faster in the future.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Reward winning moves by adding extra beads for those moves</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Punish every move in every game, regardless of outcome</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Remove the random draw and always pick the most frequent bead</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Reset all boxes after each game to encourage fresh exploration</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Try to play and make a graph of Winning/Losing against the Number of games played. One such example graph is shown below.</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 4/7.png" alt="Mini Checkers Setup" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.src='book/project 4/1.png';">
                </div>

                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>



                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Extension: AI Model for Mini-Checkers Game</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Mini-Checkers is a simplified version of checkers on a 4x4 board. White (student - player 1) goes first, and the AI model plays as Black.
                </p>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pieces Movement:</strong> Pieces move diagonally forward to an adjacent, unoccupied dark square. <em>Capturing:</em> A jump involves moving over an opponent's piece to an empty square immediately beyond it.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Multiple Jumps:</strong> If a piece captures an opponent's piece and can jump another (or more) in the same turn, it must do so.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Kinging:</strong> A piece reaching the farthest row (the last row) becomes a king, allowing it to move forward and backward.</li>
                    <li><strong>Winning:</strong> The game is won by capturing all the opponent's pieces or if the opponent has no valid moves remaining.</li>
                </ul>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 4/8.png" alt="Mini Checkers Setup" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.src='book/project 4/1.png';">
                </div>

                <p style="font-size: 1.05rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    <strong>Reference:</strong> A matchbox game learning-machine by Martin Gardner. Scientific American, March 1962
                </p>

            </div>
        `
    },
    // LEARNING AI THROUGH EXPERIENCE
    {
        id: "b5_5",
        section: "Learning AI Through Experience",
        title: "Project 5: Image Identification with Teachable Machine",
        thumbnail: "book/chapter_thumbnails/p5.png",
        pdfLink: "book/P5 Image Identification.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/p5.png" alt="Image Identification Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Overview</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The training data for the AI model is very crucial. The project lets students feed the training data to the AI model and test it with a fresh data set. The digital tool will demonstrate the working principle of the AI models with a simpler interface.
                </p>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Project Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10-15 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher will demonstrate the Teachable Machine tool to students. The simple tool will help students visualize the training process for AI models.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Experience</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20-25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">After training, the students will show the test images to let trained AI model identifies the input images.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students work with various training data-set of their own and compare their results.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>AI Model Training:</strong> The simple interface tool will let the students experience the training of AI model.</li>
                    <li><strong>Input Training Data and Testing:</strong> The input images of two categories will be feeded to the AI model. The quality of input images (similarity and non-similarity of the data) will be reflected during testing the AI model.</li>
                </ul>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 3rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Material Required</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Computer (preferable connected with projector) or smart board.</li>
                        <li>Printed input and test images.</li>
                    </ul>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">The Project: Teachable Machine</h3>
                
                <ol style="font-size: 1.15rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem; margin-bottom: 2rem;">
                    <li style="margin-bottom: 0.75rem;">Go to the website: <a href="https://teachablemachine.withgoogle.com" target="_blank" style="color: #3b82f6; font-weight: 600;">teachablemachine.withgoogle.com</a>.</li>
                    <li style="margin-bottom: 0.75rem;">Click "Get Started," then click "Image Project", and then select the "Standard Image Model" option.</li>
                    <li style="margin-bottom: 0.75rem;">A set of images is given at the end to build the cat-dog classifiers.</li>
                    <li>Group the examples of images of dogs and cats into classes that we want the computer to learn.</li>
                </ol>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 5/1.png" alt="Teachable Machine Interface" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem;">
                    <p style="font-size: 1.1rem; color: var(--text-main); font-weight: 700; margin-bottom: 0.75rem;">Two sets of datasets will be used:</p>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.75rem;"><strong>Initial Training Dataset:</strong> Images to "teach" the AI model which image is a cat and which image is a dog. A diverse set of images will help the AI to identify the images more accurately.</li>
                        <li><strong>Test Dataset:</strong> Images to test the AI model after training. These images will not be used while teaching AI model.</li>
                    </ul>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    You may take the prints of these images and show them to the camera for training. Compare the test results for various input images.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Explore: Analysing the Training Data</h3>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 5/2.png" alt="Training Dataset - Dogs" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">1. For the dog training dataset, record the following:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 0; padding-left: 1.2rem; list-style-type: square;">
                        <li style="margin-bottom: 0.5rem;">How many images are included?</li>
                        <li style="margin-bottom: 0.5rem;">How are the images similar?</li>
                        <li>How are the images different?</li>
                    </ul>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 5/dogs.png" alt="Training Dataset - Cats" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">2. For the cat training dataset, record the following:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 0; padding-left: 1.2rem; list-style-type: square;">
                        <li style="margin-bottom: 0.5rem;">How many images are included?</li>
                        <li style="margin-bottom: 0.5rem;">How are the images similar?</li>
                        <li>How are the images different?</li>
                    </ul>
                    
                </div>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 5/cats.png" alt="Test Dataset" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Testing the Classifier</h3>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Once your classifier is finished, test your dataset with the images below. Fill in the table about your testing dataset:
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/project 5/testing.png" alt="Test Dataset" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Image No.</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Classification</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Confidence Score</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Correct?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600; border-right: 1px solid var(--border-color);">1 (Cat)</td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted);"></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600; border-right: 1px solid var(--border-color);">2 (Dog)</td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted);"></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600; border-right: 1px solid var(--border-color);">3 (Cat)</td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted);"></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600; border-right: 1px solid var(--border-color);">4 (Dog)</td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted);"></td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600; border-right: 1px solid var(--border-color);">5 (Dog)</td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted);"></td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600; border-right: 1px solid var(--border-color);">6 (Cat)</td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color);"></td>
                                <td style="padding: 1rem; color: var(--text-muted);"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        <strong>Reference:</strong> AI + Ethics Curriculum for Middle School, Massachusetts Institute of Technology.
                    </p>
                </div>

            </div>
        `
    },
    // LEARNING AI THROUGH EXPERIENCE
    { 
        id: "b5_6", 
        section: "Learning AI Through Experience", 
        title: "Project 6: Art, AI and Ethical Implications", 
        thumbnail: "book/chapter_thumbnails/p6.png", 
        pdfLink: "book/P6 Art, AI and Ethical Implications.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/p6.png" alt="Art, AI and Ethical Implications Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Overview</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    An artist can spend almost their entire lifetime working on their craft. What happens when AI creates art that almost looks similar to a particular artist or style? This open-ended project explores the ethical challenges and responsibilities associated with AI-generated output. Students will analyse dilemmas involving copyright, bias, and transparency while considering the impact of AI on artists and cultures.
                </p>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Project Activity</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Time</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Launch</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10-15 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher will prompt some thought-provoking questions to the class. Demonstrating art generation with one of the commonly used AI tools.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Think & Explore</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20-25 mins</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Assign various prompts to a group of students and discuss. Let them explore both sides of using AI technology.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discuss</td>
                                <td style="padding: 1rem; color: var(--text-muted);">1 week</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Let each group create charts highlighting their thoughts and present them to the class.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Outcomes</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Ethics in AI</strong></li>
                    <li><strong>Digital Responsibilities</strong></li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Launch: Discussion Prompts</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Prompt the following ethical questions among a group of children. Let them take turns reading the different prompts aloud and discuss their responses.
                </p>

                <!-- Interactive Prompt 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. If you had an AI that could do your homework, would you use it?</h4>
                    <button onclick="document.getElementById('p1-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p1-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--accent-orange); font-weight: 500;">
                        Discuss honesty, the purpose of education, and the meaning of personal effort.
                    </div>
                </div>

                <!-- Interactive Prompt 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. If AI can create art, should it be considered as valuable as human-made art?</h4>
                    <button onclick="document.getElementById('p2-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p2-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--accent-orange); font-weight: 500;">
                        Explore the essence of creativity, the role of human experience in art, and the meaning of art itself.
                    </div>
                </div>

                <!-- Interactive Prompt 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. Should AI be allowed to make decisions about who gets a job?</h4>
                    <button onclick="document.getElementById('p3-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p3-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--accent-orange); font-weight: 500;">
                        Consider bias in AI, the importance of human judgment, and the impact on employment.
                    </div>
                </div>

                <!-- Interactive Prompt 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Can an AI be a true friend?</h4>
                    <button onclick="document.getElementById('p4-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p4-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--accent-orange); font-weight: 500;">
                        Discuss the nature of friendship, emotional intelligence in AI, and human-AI relationships.
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Think & Explore: AI in Art</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The teacher demonstrates the ethical implications of AI-generated artwork. Showcase the recreation/modification of some of the artwork/photographs using AI technology.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/chapter_thumbnails/p6-ai.png" alt="AI Modified Art Examples" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.5rem; margin-bottom: 0;">Figure: Image & Art modification with AI. (a) Balloon dog with a necklace. (b) Sunflowers with roses.</p>
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Art creation using AI technology has become common. It raises questions like:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">How will the technology impact creativity & artistic identity?</li>
                        <li style="margin-bottom: 0.5rem;">When AI can make art, what does creativity mean now?</li>
                        <li style="margin-bottom: 0.5rem;">Who gets credit for AI-generated work?</li>
                        <li>Is it ethical for technology to use artists' work without their permission?</li>
                    </ul>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let the class share their reactions about these questions and also their thoughts on the bigger question: <em>"Is AI disrupting art?", "Is AI-created art a good idea, bad, or mixed? Why?"</em>
                </p>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        <strong>Reference:</strong> Classroom-Ready Resources About AI For Teaching (CRAFT), Stanford University.
                    </p>
                </div>

            </div>
        `
    },

    // COMPUTATIONAL THINKING OVER ENCRYPTION
    // COMPUTATIONAL THINKING OVER ENCRYPTION
    { 
        id: "b6_1", 
        section: "Computational Thinking Over Encryption", 
        title: "Coin Flip Magic", 
        thumbnail: "book/chapter_thumbnails/magic flip.png", 
        pdfLink: "book/Coin Flip Magic.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/magic flip.png" alt="Coin Flip Magic Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Using the concept of parity, which refers to the evenness or oddness of a number, we can identify the change in certain patterns. These methods are used to analyse errors in our communication systems. 
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here, we will explore an activity in which we play with two coloured coins (Black and White) arranged in a grid to mimic data. We will flip a coin to simulate an error in the data. The activity describes a procedure for precisely detecting errors in the grid pattern.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/coin flip/4.png" alt="Coin Flip Magic Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/flipmagicvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video Link
                        </a>
                        <a href="https://tinyurl.com/flipmagicworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📝 Student Worksheet
                        </a>
                        <a href="https://tinyurl.com/fliptrickreference" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📚 Reference Material
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
                                <td style="padding: 1rem; color: var(--text-muted);">Student's Tryout the activity with each other.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Attempting the worksheets and the discussion based on the activity.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> When we count the number of black coins in each row, one by one, and check whether the number is even or odd, we do the same thing for every column. Repeating these steps for every row and column follows a clear algorithm to pinpoint the flipped coin.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> To identify the flipped coin, we break it down into steps: focus on one row, ask whether it has an even or odd number of black cards, and do the same for every column.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Once students understand the algorithm for identifying flipped coins, they will be able to find a flipped coin on any size grid.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Logic:</strong> By flipping any coloured coin, an even number of black coins in a row/column changes to an odd number.</li>
                    <li><strong>Abstraction:</strong> Grid patterns represent data, and errors in the data are represented by flipping a coin.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Coin Flip Magic</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    You have a grid and double-coloured coins with black and white sides. Ask someone to randomly arrange the coins, white side up or black side up, in a 4x4 grid pattern. This will ensure that you are not familiar with the pattern. 
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    You will add one more row and one more column, creating a 5x5 grid pattern with the following details in mind. While adding the extra row and column, <strong>ensure each row and column has an even number of black sides up</strong> (zero is also even). Close your eyes and have someone flip any one coin on the grid pattern. When you open your eyes, you can figure out which coin was flipped. Let us see how?
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/coin flip/1.png" alt="Coin Flip Activity Setup" style="width: 100%; max-height: 300px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. When we flipped the black coin in the 5th row and 2nd column, what changes in the given row and column?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) The number of white coins increases, and it becomes odd</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) The number of black coins decreases, and it becomes odd</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) The number of black coins increases, and it becomes odd</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! When you flip a coin with a black side up, the number of black sides up in a given row and column decreases, and it becomes odd.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) The number of black coins decreases, and it becomes odd</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    By observing rows and columns that have an odd number of black coins, we can figure out which coin was flipped in the activity.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Explorations</h3>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Based on what you saw above, can you identify which coin was flipped in the given grid pattern?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/coin flip/2.png" alt="Grid Challenge" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Grid a)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Observe that in the highlighted 2nd row and 4th column, the number of black coins is odd in number. By observing rows and columns that have an odd number of black coins, we can figure out which coin was flipped.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Grid b)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Grid c)</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Grid d)</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. For the given 3x3 grid pattern, which would be the corresponding 4x4 grid pattern that will help to detect which coin was flipped?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/coin flip/3.png" alt="Grid Challenge" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Grid a)</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Grid b)</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! In the grid pattern, observe that in all rows and columns, the number of black coins is even in number.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Grid c)</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Grid d)</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Instead of a 4x4 grid pattern, if we started with a 6x6 grid pattern, how many coins would be needed for the extra row and column?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! You need 13 coins.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 13</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 14</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 15</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 16</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1rem;">
                        The Flip "trick" is really not a magic trick at all. It is a precise algorithm based on the concept of parity. Parity refers to the evenness or oddness of a number.
                    </p>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Remember, while adding the extra row and column, we ensured that each row and column has an even number of black coins. These extra coins are called <strong>parity coins</strong>. These parity coins help us track the "evenness" of the black coins before the flip and the change in "evenness" after the flip. This tracking is done by identifying the row and column which has an odd number of black coins.
                    </p>
                </div>

            <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 4rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Interactive Challenge: The Parity Bit Game</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 2rem; line-height: 1.8; color: var(--text-muted);">
                    Try it yourself! Set the grid size, and fill in the dashed parity cells (the last row and column) so that every row and column has an EVEN number of black pixels. Once perfect, the computer will secretly flip one bit. See if you can use the parity rules to find the error!
                </p>

                <div id="parity-game-container" style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05);"></div>

                <script>
                    if (typeof createParityGame === 'function') {
                        createParityGame('parity-game-container');
                    }
                </script>
            </div>
        `
    },
    // COMPUTATIONAL THINKING OVER ENCRYPTION
    { 
        id: "b6_2", 
        section: "Computational Thinking Over Encryption", 
        title: "Caesar Cipher", 
        thumbnail: "book/chapter_thumbnails/caesar_cipher.png", 
        pdfLink: "book/Caesar Cipher.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/caeser3.png" alt="Caesar Cipher Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The need for secrecy when sending messages over the Internet is important for everyone. With this activity, students are introduced to the concept of basic cryptography/encryption, and to simple techniques for writing encrypted messages.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here, we will understand the Caesar cipher, use it to encrypt and decrypt a message. This activity is a very simple form of encryption used by Julius Caesar in the 1st century BCE.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/ceaserciphertemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Caesar Cipher Template
                        </a>
                        <a href="https://tinyurl.com/cearsercipherworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Start by asking students if they have ever shared a secret message. Introduce the idea that computers hide information using special codes.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Making & exploration</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Making of Caesar Cipher Model and Student's Tryout the activity with each other following worksheet questions.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discussing the worksheets. Discover that this method is not very strong because there are only a few possible shifts.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We follow a step-by-step process to encrypt and decrypt messages—choose a shift, match letters on the cipher wheel, and write the encoded letters.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> We break the task of sending a secret message into smaller steps: choosing a message, deciding the shift, encoding each letter, and decoding it later.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> We can observe how letters consistently move forward in the alphabet by the same number of positions. By noticing this repeating pattern, they can quickly understand how the cipher works and even guess the shift used.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> By trying different shift values (1, 2, 3, etc.), we can notice that the same rule works for any message or shift.</li>
                    <li><strong>Evaluation:</strong> We can think about how secure the Caesar Cipher really is by exploring that there are only 25 possible shifts. This helps us to understand that some methods work but may not always be strong enough for real security.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Caesar Cipher</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    People have used secret messages for centuries to protect important information. Even today, much of our communication online needs to be encrypted to keep our private data safe. For example, when your parents withdraw money from an ATM or make a UPI payment, they enter a PIN. This number needs to be hidden so that no one else can take their money.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A secret is information shared only with someone you completely trust through a message. <strong>Encryption</strong> is the process of changing a message so that its original meaning is hidden from anyone except the intended receiver.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0;">
                        One simple way to do this is through ciphers. Cipher scrambles up the message using a key. To unscramble and access the message, you must have the key. This way, the cipher protects your message from those who do not have the key.
                    </p>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/chapter_thumbnails/caesar_cipher.png" alt="Caesar Cipher Wheel" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A well-known example of a cipher is the Caesar Cipher, named after the Roman leader Julius Caesar. In the Caesar Cipher, the letters of the alphabet are shifted by a certain number of places to be replaced by a new alphabet. For example, if the alphabet is shifted one place, A becomes B, B becomes C, and so on, while Z comes around to become A.
                </p>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. Complete the table below by shifting the alphabet 2 places.</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/chapter_thumbnails/caeser_puzzle.png" alt="Caesar Cipher Wheel" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                    

                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) B C D E F G H I J K L M N O P Q R S T U V W X Y Z A</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! A shifts to C, B shifts to D, and so on.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) C D E F G H I J K L M N O P Q R S T U V W X Y Z A B</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) U V W X Y Z A B C D E F G H I J K L M N O P Q R S T</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Making of Caesar Cipher</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Print out the template file on A4 Paper. Cut out both the two circles, and carefully cut out the arrow on the smaller circle; it will help as an indicator. Put a toothpick or a thin stick through the centre of the two circles, with the smaller one on top of the larger one. Make sure that the small circle is free to rotate over the bigger circle.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/chapter_thumbnails/caesar2.png" alt="Caesar Cipher Wheel" style="width: 100%; max-height: 400px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. If the message "CAESAR CIPHER" is encoded with a shift of 3 places, which of the following is the correct encoded message?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) ECGUCT EKRJGT</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Each letter is shifted 3 positions: C → F, A → D, E → H, S → V, A → D, R → U. So CAESAR → FDHVDU.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) FDHVDU FLSKHU</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) GEIWEV GMTLIV</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) DBFTBS DJQIFS</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Encrypting Messages</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Choose a short message, like your name, your school name or the food item in your lunchbox that you would like to give to your friend, and decide on a number that will represent the shift.
                </p>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); padding: 1.5rem; border-radius: 8px; margin-bottom: 2.5rem;">
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.75rem;"><strong>To Encode:</strong> Align the 'A' on the smaller circle with 'A' on the bigger circle. Turn the smaller circle such that the arrow lies on the chosen shift number. Look for each letter of your message on the smaller circle, and write down the matching letter from the bigger circle.</li>
                        <li><strong>To Decode:</strong> Your friend should rotate the smaller circles so that the arrow matches the given key. Then they find each letter of the encrypted message from the bigger circle and write the corresponding letter on the smaller circle to reveal the original message.</li>
                    </ul>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. If the message "THIS MESSAGE IS HIDDEN" is encoded as "ESTD XPDDLRP TD STOOPY", by how many positions has the alphabet been shifted?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 5</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! Compare T in the original to E in the encoded message. Moving 11 places from T comes around to E. Confirm with H → S. The shift is 11.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 11</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 17</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 7</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. How many possible meaningful ways are there to shift the alphabet in a Caesar cipher?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect. A shift of 26 leaves the message unchanged.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 26</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 52</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! Only shifts from 1 to 25 produce encoded messages. A shift of 26 would bring A to itself.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 25</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 50</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Think About It</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Think about how secure the Caesar Cipher really is by exploring that there are only a few possible shifts. This helps to understand that some methods work, but may not always be strong enough for real security. This may work for your secret messages to your friends, but not for your parents' bank transactions.
                    </p>
                </div>

            </div>
        `
    },
    // COMPUTATIONAL THINKING OVER ENCRYPTION
    { 
        id: "b6_3", 
        section: "Computational Thinking Over Encryption", 
        title: "Disc Enigma", 
        thumbnail: "book/chapter_thumbnails/disc.png", 
        pdfLink: "book/Disc Enigma.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/disc.png" alt="Disc Enigma Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The need for secrecy when sending messages over the Internet is important for everyone. With this activity, students are introduced to the concept of basic cryptography/encryption, and to simple techniques for writing encrypted messages.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here, we will understand the workings of the Enigma machine by building a simpler Disc Enigma and using it to encrypt and decrypt a message.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/discenigmatemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Disc Enigma Template
                        </a>
                        <a href="https://tinyurl.com/discenigmavideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Video Demonstration of Actual Enigma
                        </a>
                        <a href="https://tinyurl.com/discenigmaworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Start by asking students if they have ever shared a secret message. Introduce the idea that computers use special codes to hide information. Introduce the Enigma machine used in WWII.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Making & Exploration</td>
                                <td style="padding: 1rem; color: var(--text-muted);">20 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Show the Video Demonstration of Actual Enigma. Discuss the complexity of the Enigma Machine.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Making the Disc Enigma Model and having students try out the activity together, following the worksheet questions.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We follow a step-by-step process for encrypting and decrypting messages.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> We break the task of sending a secret message into smaller steps: choosing a message, deciding the key pattern, encoding each letter, and decoding it later.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition and Generalisation:</strong> Recognise that the mapping of letters follows a systematic pattern. By exploring the trivial case for 2 and 3 letters, this idea extends to the full alphabet.</li>
                    <li><strong>Evaluation:</strong> Evaluate how secure the Disc Enigma really is by exploring that there are 26! possible key patterns to encrypt the message.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Disc Enigma</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    People have used secret messages for centuries to protect important information. Even today, much of our communication online needs to be encrypted to keep our private data safe. For example, when your parents withdraw money from an ATM or make a UPI payment, they enter a PIN. This number needs to be hidden so that no one else can take their money.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    <strong>Encryption</strong> is the process of changing a message so that its original meaning is hidden from anyone except the intended receiver. Cipher scrambles up the message using a key.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0;">
                        A well-known example of a cipher is the Enigma machine. Used during World War 2, it allowed for billions and billions of ways to encode a message, making it incredibly difficult to crack the code. For a time, the code seemed unbreakable. Breaking the code shortened the war and saved an estimated 15 million lives.
                    </p>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/disc enigma/2.png" alt="Enigma Machine and Disc" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The Disc Enigma is a simple representation of the Enigma Machine. In the Disc Enigma, the letters of the alphabet are shifted by a certain pattern to be replaced by a new alphabet. If we want to connect or map the alphabet A and B to another set of alphabet A and B, there are two ways to do so. Either we can connect A to A and B to B, or connect A to B and B to A.
                </p>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. How many ways will there be to map a set of alphabet A, B and C to another set of alphabet A, B and C?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 2</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 4</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! You choose a mapping for A (3 choices), then for B (2 choices), then C (1 choice). Total: 3 x 2 x 1 = 6 ways.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 6</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 8</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Making and Usage of Disc Enigma</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Direct the Student's attention to the Video Demo of the Enigma Machine, noting that pressing a key/button to encrypt a message causes the rotor to rotate one position. After each button press, the rotors rotate, and pressing the same button routes the letter to a different connection, revealing a different letter. 
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    This greatly increases the number of possible configurations. This means that the message "AA" could be encoded as something like "TU" even though the same key was pressed twice.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Instructions for Making:</h4>
                    <ul style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Cut out both the two circles.</li>
                        <li style="margin-bottom: 0.5rem;">Put a toothpick or a thin stick through the centre of the two circles, with the smaller one on top of the larger one.</li>
                        <li>Make sure the smaller circle/wheel is free to rotate over the larger one.</li>
                    </ul>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/disc enigma/3.png" alt="Enigma Machine and Disc" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main);">Instructions for Usage: To Encrypt</h4>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Choose a short message and decide on an alphabet that will represent the key alphabet. For example, to send the message "APPLE", you decide that 'P' will be the key alphabet.
                </p>
                
                <ol style="font-size: 1.15rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem; margin-bottom: 2.5rem;">
                    <li style="margin-bottom: 0.75rem;">First, align the arrow on the smaller wheel to the key alphabet 'P' on the bigger circle.</li>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/disc enigma/4.png" alt="Enigma Machine and Disc" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                    <li style="margin-bottom: 0.75rem;">When you encrypt a letter, you need to <strong>physically rotate the disc by one position</strong>, mimicking the rotation after each button press in the actual machine.</li>
                    <li style="margin-bottom: 0.75rem;">To encode the first letter 'A', rotate the arrow one position forward (from 'P' to 'Q'). Find 'A' and write the mapped alphabet. Here, 'A' maps to 'Z'.</li>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/disc enigma/5.png" alt="Enigma Machine and Disc" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                    <li style="margin-bottom: 0.75rem;">For the second letter 'P', rotate the arrow one position forward again (from 'Q' to 'R'). Find 'P' and write the mapped alphabet, which is 'K'.</li>
                    <li>Continue this process. "APPLE" will be encoded as "ZKSND" with 'P' as the starting key.</li>
                </ol>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/disc enigma/6.png" alt="Enigma Machine and Disc" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main);">To Decrypt</h4>
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    To decode the message, align the arrow with the starting key letter 'P'. Follow the <strong>exact same steps</strong> of encryption (rotate forward by one position for each letter, map the encoded letter back to the original). So 'Z' maps back to 'A', 'K' maps back to 'P', revealing "APPLE".
                </p>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. If the message "HELLO" is encoded using the key alphabet as 'B', which of the following is the correct encoded message?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) NCMHN</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) DBJJL</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! The disc rotates after each letter. H → E, E → G, L → R, L → E, O → K. The result is EGREK.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) EGREK</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) IMROZ</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. How many ways will there be to connect all 26 letters to another set of 26 letters?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 26</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 52!</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! The total number of ways is 26 x 25 x 24 x ... x 1 = 26!. This is an extremely large number (about 4 x 10^26 possibilities).'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 26!</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 50</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Think about how secure the Disc Enigma really is by exploring that there are many possible configurations. Each time a key is pressed on an Enigma machine, the rotors turn, and the code changes. This means that the message "AA" could be encoded as something like "TU" even though the same key was pressed twice. This connects directly to how modern cryptography relies on large numbers of possibilities for security.
                    </p>
                </div>

            </div>
        `
    },
    // COMPUTATIONAL THINKING OVER ENCRYPTION
// COMPUTATIONAL THINKING OVER ENCRYPTION
    { 
        id: "b6_4", 
        section: "Computational Thinking Over Encryption", 
        title: "Rotating Grid Cipher", 
        thumbnail: "book/chapter_thumbnails/grid_cipher.png", 
        pdfLink: "book/Rotating Grid Cipher.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/grid_cipher.png" alt="Rotating Grid Cipher Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The need for secrecy when sending messages over the Internet is important for everyone. With this activity, students are introduced to the concept of basic cryptography/encryption and simple techniques to write the encrypted messages.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here, we will understand the Rotating Grid Cipher, use it to encrypt and decrypt a message. This activity is a very simple kind of encryption which was used during both the World Wars.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/rotatinggridtemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Rotating Grid Template
                        </a>
                        <a href="https://tinyurl.com/rotatinggridvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video Link
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
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Introduce the idea that computers use special codes to hide information. Demonstrate an example with the Rotating Grid Cipher.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Making and exploring</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Making and exploring the Rotating Grid Cipher Model and the Student's Tryout activity together, following the worksheet questions.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discussing the worksheets. Discover that encryption works by following a clear set of rules.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We follow a step-by-step process to encrypt and decrypt messages: place the key pattern, write letters through the holes, rotate the key pattern over a grid, and repeat.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> We can break down the encryption process into smaller steps, such as preparing the message, placing the key pattern, rotating it, and reading the final encrypted text. Also can break the larger problem (covering all 16 squares) into smaller parts by understanding how many squares one hole can cover.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Observe how the holes move when the key patterns rotate, and how letters fill the grid systematically after each rotation. Also, observe the repeating pattern where every 90 degree rotation moves each hole to a new position, and after four rotations, the pattern repeats.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> The same encryption rule can apply to different messages and grids of various sizes as long as the rotation pattern is followed.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> Focus on the rotation rule rather than the full grid details, and on how positions change systematically.</li>
                    <li><strong>Evaluation:</strong> Whether their encrypted message can be correctly decoded by a friend, helping them verify if the key pattern and process were applied correctly. Test different key patterns and verify which one correctly reconstructs the original message.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Turning Grid Cipher</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    People have used secret messages for centuries to protect important information. Even today, much of our communication online needs to be encrypted to keep our private data safe.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0;">
                        A well-known example of a cipher is the <strong>Rotating Grid Cipher</strong>, which was used during both World Wars. The Rotating Grid Cipher uses a square sheet with holes cut in it.
                    </p>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/chapter_thumbnails/grid_cipher.png" alt="Rotating Grid Cipher Example" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To encrypt a message, the sender must place the key pattern on an empty grid on paper and write letters of the message into the holes left to right, top to bottom. After filling all the holes, the key pattern is rotated clockwise by 90 degrees (the holes move to the empty spaces), and the process continues. After the key pattern is rotated 2 more times, there should be no empty spaces on the grid.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    An example of the message “WE ARE SURROUNDED. SEND MORE SUPPLIES” is shown below.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/grid_cipher/1.png" alt="Rotating Grid Cipher Example" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. A key pattern with a single hole for a 4x4 grid is shown. How many different positions will a single hole visit as you rotate the key pattern 90-degree steps through a full turn?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/grid_cipher/3.png" alt="Single Hole Grid" style="width: 100%; max-height: 200px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 3</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! When the key pattern is rotated by 90 degrees, the hole moves to a new position. After four 90 degree rotations, the hole returns to its original position.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 4</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. From a key pattern, the numbers 3 and 6 are visible. The key pattern is placed on a 4x4 grid numbered from 1 to 16. After rotating the key pattern 90 degrees clockwise once, which number will be visible through the hole of the key pattern?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/grid_cipher/2.png" alt="Numbered Grid Layout" style="width: 100%; max-height: 200px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 3 and 6</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! When the key pattern is rotated 90 degrees, each hole moves to a new location. Number 3 moves to number 12, and number 6 moves to number 7 after rotation.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 7 and 12</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 11 and 14</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 5 and 10</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. A 4x4 grid has 16 squares. When the key pattern is rotated four times (each time by 90 degrees), one hole shows 4 different squares. What is the minimum number of holes needed on the key pattern so that every square of the grid is visible once?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! Each hole covers 4 different positions after the key pattern is rotated through all four orientations. 16 / 4 = 4. So four holes are required.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 6</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    When designing a key pattern, a basic rule for choosing hole positions is that the holes should cover every square on the grid using all rotations. Also, the initial orientation of the key pattern is important, as it gives the receiver a hint about which orientation to start the decryption process.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Making of Rotating Grid Cipher</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Print out the template file on A4 Paper. We would cut out both squares from the template. One square is the 4x4 grid, which will be used to write the message. The other square is in black colour, and it will be used to create the key pattern.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Instructions for the activity:</h4>
                    <ol style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 1rem;">Take the black square that has four smaller white squares, carefully cut out the white squares. This will be our key pattern.</li>
                        <li style="margin-bottom: 1rem;">Write a short message with no spaces and up to 16 letters. Example: MEET ME AT TWELVE PM &rarr; MEETMEATTWELVEPM.</li>
                        <li style="margin-bottom: 1rem;">Place the key pattern over the blank 4x4 grid. Remember the key pattern's initial orientation.</li>
                        
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                            <img src="book/grid_cipher/4.png" alt="Rotating Grid Cipher Step 1" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Through the holes, write the first 4 letters of your message from left to right and top to bottom. Example: MEET.</li>
                        
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                            <img src="book/grid_cipher/5.png" alt="Rotating Grid Cipher Step 2" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Rotate the key pattern 90 degree clockwise and write the next 4 letters. Example: MEAT.</li>
                        
                        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; justify-content: center;">
                            <div style="border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color); flex: 1; min-width: 250px;">
                                <img src="book/grid_cipher/6.png" alt="Rotating Grid Cipher Step 3" style="width: 100%; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.style.display='none';">
                            </div>
                            <div style="border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color); flex: 1; min-width: 250px;">
                                <img src="book/grid_cipher/7.png" alt="Rotating Grid Cipher Step 4" style="width: 100%; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.style.display='none';">
                            </div>
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Rotate the grid two more times, writing the next letters each time until all 16 letters are filled.</li>
                        
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                            <img src="book/grid_cipher/8.png" alt="Rotating Grid Cipher Step 5" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Convert the encrypted message on the 4x4 grid to a single-line message by writing all the letters from the 1st row (left-to-right), followed by the second row, and so on.</li>
                    </ol>
                </div>
                
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/grid_cipher/9.png" alt="Encrypted Message Output" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. If the message "APPLE IN LUNCH BOX" is encoded over a 4x4 grid using the given key pattern. Which of the following is the correct encoded message?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! First, remove spaces and add an X to make 16 letters: APPLEINLUNCHBOXX. After four rotations, copying the completed grid row-by-row produces UEABOPINPXCNLHXL.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (a)<br><span style="display:inline-block; margin-top:0.25rem; font-weight:600; word-break:break-word;">UEABOPINPXCNLHXL</span>
                        </button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (b)<br><span style="display:inline-block; margin-top:0.25rem; font-weight:600; word-break:break-word;">ABUEINOPCNPXXLLH</span>
                        </button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (c)<br><span style="display:inline-block; margin-top:0.25rem; font-weight:600; word-break:break-word;">UEIBAPNNPOCHLXXL</span>
                        </button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (d)<br><span style="display:inline-block; margin-top:0.25rem; font-weight:600; word-break:break-word;">UEBONAICPXHPNLXL</span>
                        </button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. If the message "APPLE IN LUNCH BOX" is encoded over a 4x4 grid as "UEIBAPNNPOCHLXXL", which of the following grid patterns is used to encode the message?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Grid a)</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='✅ Correct! To determine the correct key pattern, we must reverse the encryption process by writing the encrypted message into the grid row by row and checking which pattern reveals the original message.'; document.getElementById('q5-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Grid b)</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Grid c)</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Grid d)</button>
                    </div>
                    <div id="q5-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Through this activity, we have learned how messages can be hidden using a Rotating Grid Cipher. We have discovered that encryption works by following a clear set of rules and that only someone who has the correct key (the key pattern and starting orientation) can decode the message. This simple activity introduces the idea of cryptography and shows how computers protect sensitive information, such as passwords, ATM PINs, and online transactions, using more advanced encryption techniques.
                    </p>
                </div>

            </div>
        `
    },

    // OTHER ACTIVITIES
    // OTHER ACTIVITIES
    { 
        id: "b7_1", 
        section: "Other Activities", 
        title: "Perfect Squares", 
        thumbnail: "book/chapter_thumbnails/perfect_squares.png", 
        pdfLink: "book/Perfect Squares.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/perfect_squares.png" alt="Perfect Squares Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A regular function of computers is to search for various objects. For this to happen, one needs to devise algorithms cleverly. In this activity, we will explore a method by which we will figure out square numbers from a deck of cards on which consecutive numbers (1-20) are written. 
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    By following the simple instructions to flip these cards, we will create an algorithm to find the perfect squares. This activity helps students understand how to find Perfect Squares (Square Numbers) using their factors.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/perfectsquarevideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video Link
                        </a>
                        <a href="https://tinyurl.com/perfectsquaresworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher demonstrates the activity.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Trial by students</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students try out the activity using the worksheet.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Attempting the worksheets & the discussion based on the activity.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> In this activity, students will follow a rule: starting with the first card on which "1" is written, they will flip all cards that are multiples of 1. This becomes the algorithm for every number.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Once students complete flipping cards (1-20), they will try to recognise that some cards' positions are the same as their starting positions, and some are opposite their starting positions.</li>
                    <li><strong>Generalisation:</strong> After recognising the pattern of card positions relative to their starting positions, students will generalise the positions of cards with n positions.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: The Flipping Rule</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    You are given 20 cards on which consecutive numbers (1-20) are written. You have to flip the cards using a rule.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">The Rule:</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
                        Start with "1" and flip all cards that are multiples of 1. Repeat the activity for the number 2, flip all the cards that are multiples of 2. Similarly, repeat the activity for all the numbers from 3 to 20.
                    </p>
                    <ol style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Starting from "1", flip all the cards that are multiples of 1.</li>
                        <li style="margin-bottom: 0.5rem;">Now, it's the turn for "2", flip all the cards that are multiples of 2. Continue doing the same till "10".</li>
                        <li>From 11 onward, you don't have multiple selected cards (since we have cards up to 20). So you just flip the selected card.</li>
                    </ol>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Explorations & Discoveries</h3>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main);">1. Analyzing the Final State</h4>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    After completing all the flips, observe which cards end up in their original state and which ones end up flipped over.
                </p>

                <div style="overflow-x: auto; margin-bottom: 2.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Cards whose face position is the same as the starting</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Cards whose face position is opposite (w.r.t. starting)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); border-right: 1px solid var(--border-color); line-height: 1.6;">2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20</td>
                                <td style="padding: 1rem; color: #16a34a; font-weight: 600; font-size: 1.2rem;">1, 4, 9, 16</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. What is special about the numbers in the right column (1, 4, 9, 16)?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">A. Prime Numbers</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">B. Composite Numbers</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! They are Square Numbers.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">C. Square Numbers</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">D. Non-square Numbers</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main);">How did this happen?</h4>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let's count how many times we flipped each card. Every time we processed a number that was a factor of the card's number, we flipped it.
                </p>

                <div style="overflow-x: auto; margin-bottom: 2.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1rem; text-align: center;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Position same as starting</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 2px solid var(--border-color);">No. of times flipped</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Position opposite (w.r.t. starting)</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">No. of times flipped</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">2</td>
                                <td style="padding: 0.75rem; color: #3b82f6; font-weight: 600; border-right: 2px solid var(--border-color);">2</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">1</td>
                                <td style="padding: 0.75rem; color: #f97316; font-weight: 600;">1</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">3</td>
                                <td style="padding: 0.75rem; color: #3b82f6; font-weight: 600; border-right: 2px solid var(--border-color);">2</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">4</td>
                                <td style="padding: 0.75rem; color: #f97316; font-weight: 600;">3</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">5</td>
                                <td style="padding: 0.75rem; color: #3b82f6; font-weight: 600; border-right: 2px solid var(--border-color);">2</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">9</td>
                                <td style="padding: 0.75rem; color: #f97316; font-weight: 600;">3</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">6</td>
                                <td style="padding: 0.75rem; color: #3b82f6; font-weight: 600; border-right: 2px solid var(--border-color);">4</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">16</td>
                                <td style="padding: 0.75rem; color: #f97316; font-weight: 600;">5</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">12</td>
                                <td style="padding: 0.75rem; color: #3b82f6; font-weight: 600; border-right: 2px solid var(--border-color);">6</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color);">-</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. In the right column (the square numbers), how many times do you flip the cards?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">A. Multiple of 3 times</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">B. Even times</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! Square numbers are flipped an ODD number of times.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">C. Odd times</button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">D. Multiple of 4 times</button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main);">Why does this happen? Let's check the factors!</h4>
                
                <div style="overflow-x: auto; margin-bottom: 2.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Non-Square Numbers</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 2px solid var(--border-color);">Factors (Increasing order)</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Square Numbers</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Factors (Increasing order)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">3</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 2px solid var(--border-color);">1, 3</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600; border-right: 1px solid var(--border-color); text-align: center;">1</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">1</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">10</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 2px solid var(--border-color);">1, 2, 5, 10</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600; border-right: 1px solid var(--border-color); text-align: center;">4</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">1, 2, 4</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">14</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 2px solid var(--border-color);">1, 2, 7, 14</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600; border-right: 1px solid var(--border-color); text-align: center;">9</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">1, 3, 9</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">18</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 2px solid var(--border-color);">1, 2, 3, 6, 9, 18</td>
                                <td style="padding: 0.75rem; color: #16a34a; font-weight: 600; border-right: 1px solid var(--border-color); text-align: center;">16</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">1, 2, 4, 8, 16</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">20</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 2px solid var(--border-color);">1, 2, 4, 5, 10, 20</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">-</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Interactive Question 6 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">6. For the non-square numbers, what do we notice about the 2nd and 2nd-to-last factors, the 3rd and 3rd-to-last factors, etc.?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">A. The numbers are not related to each other</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='✅ Correct! Because factors pair up, their multiplication gives that particular non-square number.'; document.getElementById('q6-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">B. Their multiplication gives that particular non-square number</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">C. Their addition gives that particular square number</button>
                        <button onclick="document.getElementById('q6-fb').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">D. None of the above</button>
                    </div>
                    <div id="q6-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1rem;">
                        This activity shows how a simple rule-based process can act like a searching algorithm to identify special numbers. By repeatedly flipping cards, we systematically check positions, much as computers search through data.
                    </p>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        We discovered that perfect squares behave differently because they have an <strong>odd number of factors</strong>. This happens because their factors pair up uniquely, with one factor repeated (like $\\sqrt{n} \\times \\sqrt{n}$). Thus, the activity connects algorithms with number properties, helping us understand how factors reveal deeper patterns in numbers.
                    </p>
                </div>

            </div>
        `
    },
    // OTHER ACTIVITIES
    // COMPUTATIONAL THINKING OVER ENCRYPTION
    { 
        id: "b6_4", 
        section: "Computational Thinking Over Encryption", 
        title: "Rotating Grid Cipher", 
        thumbnail: "book/chapter_thumbnails/grid_cipher.png", 
        pdfLink: "book/Rotating Grid Cipher.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/grid_cipher.png" alt="Rotating Grid Cipher Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The need for secrecy when sending messages over the Internet is important for everyone. With this activity, students are introduced to the concept of basic cryptography/encryption and simple techniques to write the encrypted messages.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here, we will understand the Rotating Grid Cipher, use it to encrypt and decrypt a message. This activity is a very simple kind of encryption which was used during both the World Wars.
                </p>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/rotatinggridtemplate" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            📄 Rotating Grid Template
                        </a>
                        <a href="https://tinyurl.com/rotatinggridvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video Link
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
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Introduce the idea that computers use special codes to hide information. Demonstrate an example with the Rotating Grid Cipher.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Making and exploring</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Making and exploring the Rotating Grid Cipher Model and the Student's Tryout activity together, following the worksheet questions.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions & Conclusion</td>
                                <td style="padding: 1rem; color: var(--text-muted);">10 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Discussing the worksheets. Discover that encryption works by following a clear set of rules.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We follow a step-by-step process to encrypt and decrypt messages: place the key pattern, write letters through the holes, rotate the key pattern over a grid, and repeat.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> We can break down the encryption process into smaller steps, such as preparing the message, placing the key pattern, rotating it, and reading the final encrypted text. Also can break the larger problem (covering all 16 squares) into smaller parts by understanding how many squares one hole can cover.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Observe how the holes move when the key patterns rotate, and how letters fill the grid systematically after each rotation. Also, observe the repeating pattern where every 90 degree rotation moves each hole to a new position, and after four rotations, the pattern repeats.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> The same encryption rule can apply to different messages and grids of various sizes as long as the rotation pattern is followed.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> Focus on the rotation rule rather than the full grid details, and on how positions change systematically.</li>
                    <li><strong>Evaluation:</strong> Whether their encrypted message can be correctly decoded by a friend, helping them verify if the key pattern and process were applied correctly. Test different key patterns and verify which one correctly reconstructs the original message.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Turning Grid Cipher</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    People have used secret messages for centuries to protect important information. Even today, much of our communication online needs to be encrypted to keep our private data safe.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0;">
                        A well-known example of a cipher is the <strong>Rotating Grid Cipher</strong>, which was used during both World Wars. The Rotating Grid Cipher uses a square sheet with holes cut in it.
                    </p>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/chapter_thumbnails/grid_cipher.png" alt="Rotating Grid Cipher Example" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To encrypt a message, the sender must place the key pattern on an empty grid on paper and write letters of the message into the holes left to right, top to bottom. After filling all the holes, the key pattern is rotated clockwise by 90 degrees (the holes move to the empty spaces), and the process continues. After the key pattern is rotated 2 more times, there should be no empty spaces on the grid.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    An example of the message “WE ARE SURROUNDED. SEND MORE SUPPLIES” is shown below.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/grid_cipher/1.png" alt="Rotating Grid Cipher Example" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. A key pattern with a single hole for a 4x4 grid is shown. How many different positions will a single hole visit as you rotate the key pattern 90-degree steps through a full turn?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/grid_cipher/3.png" alt="Single Hole Grid" style="width: 100%; max-height: 200px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 3</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! When the key pattern is rotated by 90 degrees, the hole moves to a new position. After four 90 degree rotations, the hole returns to its original position.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 4</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. From a key pattern, the numbers 3 and 6 are visible. The key pattern is placed on a 4x4 grid numbered from 1 to 16. After rotating the key pattern 90 degrees clockwise once, which number will be visible through the hole of the key pattern?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/grid_cipher/2.png" alt="Numbered Grid Layout" style="width: 100%; max-height: 200px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 3 and 6</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! When the key pattern is rotated 90 degrees, each hole moves to a new location. Number 3 moves to number 12, and number 6 moves to number 7 after rotation.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 7 and 12</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 11 and 14</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 5 and 10</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. A 4x4 grid has 16 squares. When the key pattern is rotated four times (each time by 90 degrees), one hole shows 4 different squares. What is the minimum number of holes needed on the key pattern so that every square of the grid is visible once?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) 1</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) 2</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! Each hole covers 4 different positions after the key pattern is rotated through all four orientations. 16 / 4 = 4. So four holes are required.'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) 6</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    When designing a key pattern, a basic rule for choosing hole positions is that the holes should cover every square on the grid using all rotations. Also, the initial orientation of the key pattern is important, as it gives the receiver a hint about which orientation to start the decryption process.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Making of Rotating Grid Cipher</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Print out the template file on A4 Paper. We would cut out both squares from the template. One square is the 4x4 grid, which will be used to write the message. The other square is in black colour, and it will be used to create the key pattern.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Instructions for the activity:</h4>
                    <ol style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 1rem;">Take the black square that has four smaller white squares, carefully cut out the white squares. This will be our key pattern.</li>
                        <li style="margin-bottom: 1rem;">Write a short message with no spaces and up to 16 letters. Example: MEET ME AT TWELVE PM &rarr; MEETMEATTWELVEPM.</li>
                        <li style="margin-bottom: 1rem;">Place the key pattern over the blank 4x4 grid. Remember the key pattern's initial orientation.</li>
                        
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                            <img src="book/grid_cipher/4.png" alt="Rotating Grid Cipher Step 1" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Through the holes, write the first 4 letters of your message from left to right and top to bottom. Example: MEET.</li>
                        
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                            <img src="book/grid_cipher/5.png" alt="Rotating Grid Cipher Step 2" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Rotate the key pattern 90 degree clockwise and write the next 4 letters. Example: MEAT.</li>
                        
                        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; justify-content: center;">
                            <div style="border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color); flex: 1; min-width: 250px;">
                                <img src="book/grid_cipher/6.png" alt="Rotating Grid Cipher Step 3" style="width: 100%; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.style.display='none';">
                            </div>
                            <div style="border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; border: 1px solid var(--border-color); flex: 1; min-width: 250px;">
                                <img src="book/grid_cipher/7.png" alt="Rotating Grid Cipher Step 4" style="width: 100%; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.style.display='none';">
                            </div>
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Rotate the grid two more times, writing the next letters each time until all 16 letters are filled.</li>
                        
                        <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                            <img src="book/grid_cipher/8.png" alt="Rotating Grid Cipher Step 5" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                        </div>
                        
                        <li style="margin-bottom: 1rem;">Convert the encrypted message on the 4x4 grid to a single-line message by writing all the letters from the 1st row (left-to-right), followed by the second row, and so on.</li>
                    </ol>
                </div>
                
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/grid_cipher/9.png" alt="Encrypted Message Output" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 4 - FIXED LAYOUT (Vertical) -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. If the message "APPLE IN LUNCH BOX" is encoded over a 4x4 grid using the given key pattern. Which of the following is the correct encoded message?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb').innerHTML='✅ Correct! First, remove spaces and add an X to make 16 letters: APPLEINLUNCHBOXX. After four rotations, copying the completed grid row-by-row produces UEABOPINPXCNLHXL.'; document.getElementById('q4-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (a) UEABOPINPXCNLHXL
                        </button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (b) ABUEINOPCNPXXLLH
                        </button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (c) UEIBAPNNPOCHLXXL
                        </button>
                        <button onclick="document.getElementById('q4-fb').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            (d) UEBONAICPXHPNLXL
                        </button>
                    </div>
                    <div id="q4-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. If the message "APPLE IN LUNCH BOX" is encoded over a 4x4 grid as "UEIBAPNNPOCHLXXL", which of the following grid patterns is used to encode the message?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(a) Grid a)</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='✅ Correct! To determine the correct key pattern, we must reverse the encryption process by writing the encrypted message into the grid row by row and checking which pattern reveals the original message.'; document.getElementById('q5-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(b) Grid b)</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(c) Grid c)</button>
                        <button onclick="document.getElementById('q5-fb').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">(d) Grid d)</button>
                    </div>
                    <div id="q5-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        Through this activity, we have learned how messages can be hidden using a Rotating Grid Cipher. We have discovered that encryption works by following a clear set of rules and that only someone who has the correct key (the key pattern and starting orientation) can decode the message. This simple activity introduces the idea of cryptography and shows how computers protect sensitive information, such as passwords, ATM PINs, and online transactions, using more advanced encryption techniques.
                    </p>
                </div>

            </div>
        `
    },

    // OTHER ACTIVITIES
    { 
        id: "b7_2", 
        section: "Other Activities", 
        title: "Golomb Rulers - 1", 
        thumbnail: "book/chapter_thumbnails/golomb 1.png", 
        pdfLink: "book/Golomb Rulers - 1.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/golomb 1.png" alt="Golomb Rulers - 1 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    An interesting function of computers is to make them faster by figuring out ways to perform a task with the minimum amount of information. We need to develop efficient, fast methods to solve problems, but we also need to optimise the amount of information required to complete a task. The less information needed, the less computer memory required, the more efficient the overall process is.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In this activity, we will explore the idea of minimising the amount of information needed to perform a task by looking at an interesting type of ruler known as a Golomb ruler. The speciality of these rulers is that even though they do not have all the markings in a typical ruler, they can still measure all the integer lengths uniquely. The task the rulers perform is measuring integer lengths; a smaller number of markings corresponds to less information needed to do the task.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb/1.png" alt="Golomb Rulers - 1 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/goulombruler1worksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">5 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">The teacher shows students the rulers and introduces the idea of Golomb rulers.</td>
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

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Students observe patterns, such as the number of distances formed from a given number of marks and the relationship between order and the number of pairwise distances.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> Students develop a step-by-step method (algorithm) to test whether a ruler is Golomb by listing all pairs of markings, computing distances, storing distances (mentally or in a list), checking if all distances are unique, etc.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Students break down the problem of verifying a Golomb ruler into smaller, manageable steps, identify all pairs of markings, and calculate distances between each pair of markings.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> They ignore physical ruler details and think of the problem numerically, enabling general reasoning.</li>
                    <li><strong>Generalisation:</strong> Students extend their understanding to any set of numbers forming a ruler. Find a general formula for the number of distances as the sum of natural numbers.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Understanding Golomb Rulers</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let us make the following Rulers on strips of paper.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border-color);">
                    <img src="book/golomb/2.png" alt="Golomb Rulers Examples" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-orange); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
                        Let us understand the ruler first. Let's say the largest mark on the ruler is 6, and the number of marked lengths on it is 4 (assuming the first mark is at 0). We say the ruler has a <strong>length of 6 units</strong> and an <strong>order of 4</strong>.
                    </p>
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
                        We call this a <strong>Golomb ruler</strong> if the distances between all pairs of marks are <strong>unique</strong>.
                    </p>
                    <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0;">
                        We call a Golomb Ruler a <strong>Perfect Golomb Ruler</strong> if it measures all the integer lengths up to the length of the ruler.
                    </p>
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 2.5rem;">Is (0, 1, 3) a Golomb Ruler?</h4>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color); max-width: 300px; margin-left: auto; margin-right: auto;">
                    <img src="book/golomb/3.png" alt="Ruler (0, 1, 3)" style="width: 100%; max-height: 100px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let's say we have a ruler that has a length of 3 and an order of 3. The marked positions are 0, 1, and 3. Can we call the ruler (0, 1, 3) a Golomb ruler?
                </p>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. What are all the lengths we can measure using this ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a. 1 unit</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b. 1 unit and 3 units</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! The distance between the markings 0 to 1 is 1 unit, 1 to 3 is 2 units, and 0 to 3 is 3 units.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c. 1 unit, 2 units, and 3 units</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Is the ruler (0, 1, 3) a Perfect Golomb ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! The ruler satisfies all the conditions of being a Perfect Golomb ruler; the distances between all the pairs of marks are distinct, and all the possible distances up to the length of the ruler can be measured.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">Yes</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">No</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 2.5rem;">Is the ruler (0, 1, 4, 6) a Golomb ruler?</h4>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color); max-width: 400px; margin-left: auto; margin-right: auto;">
                    <img src="book/golomb/4.png" alt="Ruler (0, 1, 4, 6)" style="width: 100%; max-height: 100px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    If we have a ruler with the markings (0, 1, 4, 6), its length is 6 units. Its order is 4.
                </p>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. How many distances are there in this ruler?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a. 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b. 5</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! There are 6 pairs possible when we have to choose a pair of objects from a group of 4 objects: (0,1), (0,4), (0,6), (1,4), (1,6), (4,6).'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c. 6</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d. 7</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 - FIXED LAYOUT (Vertical) -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Is this a Perfect Golomb ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb2').innerHTML='✅ Correct! This measures all 6 lengths up to the rulers length in a unique manner. (1, 2, 3, 4, 5, 6)'; document.getElementById('q4-fb2').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            a. Yes, we can measure all the lengths from 1 to 6 units
                        </button>
                        <button onclick="document.getElementById('q4-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            b. No, we can't measure all the lengths from 1 to 6 units
                        </button>
                        <button onclick="document.getElementById('q4-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            c. Yes, we can measure many integer lengths in a unique way
                        </button>
                        <button onclick="document.getElementById('q4-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q4-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            d. No, we can't measure some of the integer lengths in unique ways
                        </button>
                    </div>
                    <div id="q4-fb2" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 2.5rem;">Is the ruler (0, 2, 7, 8, 11) a Golomb ruler?</h4>
                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color); max-width: 600px; margin-left: auto; margin-right: auto;">
                    <img src="book/golomb/6.png" alt="Ruler (0, 2, 7, 8, 11)" style="width: 100%; max-height: 100px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The length of the ruler is 11, and the order is 5. Since there are 5 numbers from which we have to choose 2 at a time, there are 10 distinct pairs: (0,2), (0,7), (0,8), (0,11), (2,7), (2,8), (2,11), (7,8), (7,11), (8,11).
                </p>

                <!-- Interactive Question 5 - FIXED LAYOUT (Vertical) -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. Is this a Golomb ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            a. Yes, we can measure all the lengths from 1 to 11 units
                        </button>
                        <button onclick="document.getElementById('q5-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            b. No, we can't measure all the lengths from 1 to 11 units
                        </button>
                        <button onclick="document.getElementById('q5-fb2').innerHTML='✅ Correct! The distances between all 10 pairs are unique. We can measure 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 (missing 10).'; document.getElementById('q5-fb2').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            c. Yes, we can measure many integer lengths in a unique way
                        </button>
                        <button onclick="document.getElementById('q5-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            d. No, we can't measure some of the integer lengths in unique ways
                        </button>
                    </div>
                    <div id="q5-fb2" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 6 - FIXED LAYOUT (Vertical) -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">6. If this is a Golomb ruler, can this be a Perfect Golomb ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q6-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            a. Yes, we can measure all the lengths from 1 to 11 units
                        </button>
                        <button onclick="document.getElementById('q6-fb2').innerHTML='✅ Correct! The length of the ruler is 11. For this to be a Perfect Golomb ruler, it needs to measure 11 distinct lengths, but the maximum possible distinct distances between points are 10, which is less than the length of the ruler.'; document.getElementById('q6-fb2').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            b. No, we can't measure all the lengths from 1 to 11 units
                        </button>
                        <button onclick="document.getElementById('q6-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            c. Yes, we can measure many integer lengths in a unique way
                        </button>
                        <button onclick="document.getElementById('q6-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q6-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            d. No, we can't measure some of the integer lengths in unique ways
                        </button>
                    </div>
                    <div id="q6-fb2" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 7 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">7. Which of the given rulers is not a Golomb ruler: (0, 1, 4, 9, 11), (0, 2, 5, 10, 15)?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/golomb/5.png" alt="Rulers to compare" style="width: 100%; max-height: 200px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a. First</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='✅ Correct! When we list all the pairs and their distances for both rulers, we will notice that in the second ruler, the distances repeat. For example 15 - 10 = 5 = 10 - 5.'; document.getElementById('q7-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b. Second</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c. Both</button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d. None</button>
                    </div>
                    <div id="q7-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1rem;">
                        We saw that to measure the length of an integer, one doesn't always need a ruler with all markings. We explored the ideas of counting, understanding number sequences, and analysing whether a mathematical object satisfies the required conditions.
                    </p>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        We saw that if we design things cleverly, we can remove much of the information, making our tools more efficient in terms of memory usage. Thinking about how to optimise memory use while solving problems is an important consideration when designing our interactions with computers.
                    </p>
                </div>

            </div>
        `
    },
    // to do 
    { id: "b7_3", section: "Other Activities", title: "Golomb Rulers - 2", thumbnail: "book/chapter_thumbnails/golomb 2.png", pdfLink: "book/Golomb Rulers - 2.pdf" },

    { id: "b7_4", section: "Other Activities", title: "String Art", thumbnail: "book/chapter_thumbnails/string_art.png", pdfLink: "book/String art.pdf" }
];