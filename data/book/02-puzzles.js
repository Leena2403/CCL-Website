// Book section: Computational Thinking Over Puzzle(s)
const bookPuzzles = [
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
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Extending to nXn grids. Generalisation pattern: 1+2+...+n=n(n+1)/2.</li>
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

                <div class="bp-activity-card" style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 2rem;">
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
                <div class="bp-activity-frame" style="background: var(--surface); border-radius: 12px; margin-bottom: 3rem; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div id="building-game-1"></div>
                </div>
            </div>
            
        `
    },
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
                                <td style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: center; font-size: 1.2rem;">4</td>
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
    }
];
