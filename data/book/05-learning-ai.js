// Book section: Learning AI Through Experience
const bookLearningAI = [
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
                    <div id="p1-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--text-main); font-weight: 500;">
                        Discuss honesty, the purpose of education, and the meaning of personal effort.
                    </div>
                </div>

                <!-- Interactive Prompt 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. If AI can create art, should it be considered as valuable as human-made art?</h4>
                    <button onclick="document.getElementById('p2-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p2-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--text-main); font-weight: 500;">
                        Explore the essence of creativity, the role of human experience in art, and the meaning of art itself.
                    </div>
                </div>

                <!-- Interactive Prompt 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. Should AI be allowed to make decisions about who gets a job?</h4>
                    <button onclick="document.getElementById('p3-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p3-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--text-main); font-weight: 500;">
                        Consider bias in AI, the importance of human judgment, and the impact on employment.
                    </div>
                </div>

                <!-- Interactive Prompt 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Can an AI be a true friend?</h4>
                    <button onclick="document.getElementById('p4-fb').style.display='block'; this.style.display='none';" style="padding: 10px 20px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--background); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s;">Reveal Implications to Discuss</button>
                    <div id="p4-fb" style="display: none; margin-top: 1rem; font-size: 1.05rem; color: var(--text-main); font-weight: 500;">
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
    }
];
