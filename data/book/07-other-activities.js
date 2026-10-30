// Book section: Other Activities
const bookOtherActivities = [
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
                        We discovered that perfect squares behave differently because they have an <strong>odd number of factors</strong>. This happens because their factors pair up uniquely, with one factor repeated (like \\sqrt{n} \\times \\sqrt{n}). Thus, the activity connects algorithms with number properties, helping us understand how factors reveal deeper patterns in numbers.
                    </p>
                </div>

            </div>
        `
    },
    {
        id: "b7_2",
        section: "Other Activities",
        title: "Golomb Rulers - 1",
        thumbnail: "book/golomb/1.png",
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
    {
        id: "b7_3",
        section: "Other Activities",
        title: "Golomb Rulers - 2",
        thumbnail: "book/chapter_thumbnails/golomb 2.png",
        pdfLink: "book/Golomb Rulers - 2.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/golomb 2.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
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
                <img src="book/golomb2/1.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
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

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">CT Connection</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Students observe patterns, such as the number of distances formed from a given number of marks and the relationship between order and the number of pairwise distances.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> Students develop a step-by-step method (algorithm) to test whether a ruler is Golomb by listing all pairs of markings, computing distances, storing distances (mentally or in a list), checking if all distances are unique, etc.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> Students break down the problem of verifying a Golomb ruler into smaller, manageable steps, identify all pairs of markings, and calculate distances between each pair of markings.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Abstraction:</strong> They ignore physical ruler details and think of the problem numerically, enabling general reasoning.</li>
                    <li><strong>Generalisation:</strong> Students extend their understanding to any set of numbers forming a ruler. Find a general formula for the number of distances as the sum of natural numbers.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Let us make the following Rulers on strips of paper.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb2/2.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
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

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb2/3.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
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

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb2/4.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    If we have a ruler with the markings (0, 1, 4, 6) its length is 6 units. Its order is 4.
                </p>

                <!-- Interactive Question 3 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">3. How many distances are there in this ruler?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a. 4</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b. 5</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! There are 6 pairs possible when we have to choose a pair of objects from a group of 4 objects: (0,1), (0,4), (0,6), (1,4), (1,6),(4,6).'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c. 6</button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='❌ Incorrect.'; document.getElementById('q3-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d. 7</button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 4 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">4. Is this a Perfect Golomb ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q4-fb2').innerHTML='✅ Correct! This measures all 6 lengths up to the ruler&apos;s length in a unique manner. 1-0=1 unit, 6-4=2 units, 4-1=3 units, 4-0=4 units, 6-1=5 units, 6-0=6 units. There are only 6 possible distinct pairs of numbers, and each corresponds to a unique length.'; document.getElementById('q4-fb2').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
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

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 2.5rem;">Is the ruler (0, 1, 4, 9, 11) a Golomb ruler?</h4>
                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb2/5.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The length of the ruler is 11, and the order is 5. Since there are 5 numbers from which we have to choose 2 at a time, there are 10 distinct pairs: (0,1), (0,4), (0,9), (0,11), (1,4), (1,9), (1,11), (4,9), (4,11), (9,11).
                </p>

                <!-- Interactive Question 5 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">5. Is this a Golomb ruler?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q5-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            a. Yes, we can measure all the lengths from 1 to 11 units
                        </button>
                        <button onclick="document.getElementById('q5-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            b. No, we can't measure all the lengths from 1 to 11 units
                        </button>
                        <button onclick="document.getElementById('q5-fb2').innerHTML='✅ Correct! 1-0=1 units, 4-0=4 units, 9-0=9 units, 11-0=11 units. 4-1=3 units, 9-1=8 units, 11-1=10 units. 9-4=5 units, 11-4=7 units, and 11-9=2 units. The distances between all 10 pairs are unique.'; document.getElementById('q5-fb2').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            c. Yes, we can measure many integer lengths in a unique way
                        </button>
                        <button onclick="document.getElementById('q5-fb2').innerHTML='❌ Incorrect.'; document.getElementById('q5-fb2').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            d. No, we can't measure some of the integer lengths in unique ways
                        </button>
                    </div>
                    <div id="q5-fb2" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 6 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
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

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Concept Check</h3>

                <!-- Interactive Question 7 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">7. If a<b<c<d are markings on a Golomb ruler, then which of the following relations between them is never possible?</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q7-fb').innerHTML='✅ Correct! Rather, the sum of a pair cannot be equal to the sum of any other pair. If any such sums are equal, for example, a + d = c + b it implies d - b = c - a which implies distance between the two pairs is equal, a violation of the Golomb property.'; document.getElementById('q7-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            a. a+d=b+c
                        </button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            b. a+c<b+d or vice-versa
                        </button>
                        <button onclick="document.getElementById('q7-fb').innerHTML='❌ Incorrect.'; document.getElementById('q7-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            c. b\\times c>a\\times d
                        </button>
                    </div>
                    <div id="q7-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 8 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">8. Which of the given rulers is not a Golomb ruler: (0, 1, 4, 9, 11), (0, 2, 5, 10, 15)?</h4>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb2/6.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q8-fb').innerHTML='❌ Incorrect.'; document.getElementById('q8-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a. First</button>
                        <button onclick="document.getElementById('q8-fb').innerHTML='✅ Correct! When we list all the pairs and their distances for both rulers, we will notice that in the second ruler, the distances repeat. For example 15 - 10 = 5 = 10 - 5.'; document.getElementById('q8-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b. Second</button>
                        <button onclick="document.getElementById('q8-fb').innerHTML='❌ Incorrect.'; document.getElementById('q8-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c. Both</button>
                        <button onclick="document.getElementById('q8-fb').innerHTML='❌ Incorrect.'; document.getElementById('q8-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d. None</button>
                    </div>
                    <div id="q8-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 9 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">9. For order 6, how many distinct distances should there be?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q9-fb').innerHTML='❌ Incorrect.'; document.getElementById('q9-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a. 10</button>
                        <button onclick="document.getElementById('q9-fb').innerHTML='❌ Incorrect.'; document.getElementById('q9-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b. 12</button>
                        <button onclick="document.getElementById('q9-fb').innerHTML='❌ Incorrect.'; document.getElementById('q9-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c. 20</button>
                        <button onclick="document.getElementById('q9-fb').innerHTML='✅ Correct! By listing down all possible pairs. Let the markings be (0, a1, a2, a3, a4, a5). The pairs will be (0,a1), (0,a2), (0,a3), (0,a4), (0,a5), (a1,a2), (a1,a3) (a1,a4), (a1,a5), (a2,a3), (a2,a4), (a2,a5), (a3,a4), (a3,a5), (a4,a5).'; document.getElementById('q9-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d. 15</button>
                    </div>
                    <div id="q9-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <!-- Interactive Question 10 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">10. What is the total possible number of distinct distances for a Golomb ruler of order n?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q10-fb').innerHTML='❌ Incorrect.'; document.getElementById('q10-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1.15rem; font-family: inherit; transition: all 0.2s;">a. n</button>
                        <button onclick="document.getElementById('q10-fb').innerHTML='❌ Incorrect.'; document.getElementById('q10-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1.15rem; font-family: inherit; transition: all 0.2s;">b. \\frac{n^{2}}{2}</button>
                        <button onclick="document.getElementById('q10-fb').innerHTML='✅ Correct! The smallest mark can be paired with all the n-1 marks greater than it. The next mark can be paired with n-2 marks, and so on till 1. This is the sum of the first n-1 natural numbers or the Triangular number, equal to n(n-1)/2.'; document.getElementById('q10-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1.15rem; font-family: inherit; transition: all 0.2s;">c. \\frac{n(n-1)}{2}</button>
                        <button onclick="document.getElementById('q10-fb').innerHTML='❌ Incorrect.'; document.getElementById('q10-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1.15rem; font-family: inherit; transition: all 0.2s;">d. n-1</button>
                    </div>
                    <div id="q10-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Optimal Golomb rulers</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A Golomb ruler, which has the minimum length for a given order (number of markings), is known as the Optimal Golomb ruler.
                </p>

                <!-- Interactive Question 11 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">11. Is (0,1,3,7) an optimal Golomb ruler?</h4>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/golomb2/7.png" alt="Golomb Rulers - 2 Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q11-fb').innerHTML='❌ Incorrect.'; document.getElementById('q11-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">Yes</button>
                        <button onclick="document.getElementById('q11-fb').innerHTML='✅ Correct! The order of the given Golomb ruler is 4 (four markings on the ruler), and its length is 7 units. Remember, we have already seen a Golomb ruler of order 4, (0, 1, 4, 6), whose length is 6 units. We have a Golomb ruler of the same order but lesser length.'; document.getElementById('q11-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">No</button>
                    </div>
                    <div id="q11-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    For a given order, there may be more than one optimal ruler. Examples of these optimal rulers for order 5 are (0, 1, 4, 9, 11) and (0, 2, 7, 8, 11). This is possible for Golomb rulers of other orders.
                </p>

                <div style="background: var(--surface); border: 1px dashed var(--accent-orange); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; text-align: center;">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 0.5rem;">Conclusion</h4>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1rem;">
                        We saw that to measure integer length, one doesn't always need a ruler with all markings. We explored the ideas of counting, understanding number sequences, and analyzing whether a mathematical object satisfies the required conditions.
                    </p>
                    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0;">
                        We saw that if we cleverly design things, we can remove much of the information, making our tools more efficient in terms of memory usage. Thinking about how to optimize memory use while solving problems is an important consideration when designing our interactions with computers.
                    </p>
                </div>

            </div>
        `
    },
    {
        id: "b7_4",
        section: "Other Activities",
        title: "String Art",
        thumbnail: "book/chapter_thumbnails/string_art.png",
        pdfLink: "book/String art.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/string_art.png" alt="String Art Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.src='book/Three Jug Problem/1.png';">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Imagine using numbers and their relationships to create beautiful artworks. In this activity, we will take a circle with 12 equally spaced points. By connecting these points using a fixed rule, we will create beautiful shapes such as regular polygons and stars.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    This activity helps students understand factors and multiples of a number.
                </p>


                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                    <img src="book/string/1.png" alt="String Art Visual" style="width: 100%; max-height: 450px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Resource Links -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue, #3b82f6); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 3rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem; font-weight: 700;">Activity Resources</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://tinyurl.com/stringartactivityvideo" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ▶️ Activity Video Link
                        </a>
                        <a href="https://tinyurl.com/stringartworksheet" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
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
                                <td style="padding: 1rem; color: var(--text-muted);">Teacher demonstrate the activity</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Trail by Students</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Students Tryout the activity with each other.</td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; color: var(--text-muted); font-weight: 600;">Discussions and Explorations</td>
                                <td style="padding: 1rem; color: var(--text-muted);">15 min</td>
                                <td style="padding: 1rem; color: var(--text-muted);">Attempting the worksheets and the discussion based on the activity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Computational Thinking Components</h3>
                
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> In this activity, students will follow a rule - Starting from a number on a circle with 12 equally spaced points, add a step number (say n) to it and keep doing it until they reach back to the starting point. This becomes the algorithm for every circle.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> Once the different shapes for the circle with different step numbers have been formed, students will try to recognise the shapes formed. They will then try to see a pattern between the shape formed and the step numbers and points on the circle.</li>
                    <li><strong>Generalisation:</strong> After recognising the pattern of shapes formed on a circle with different step numbers, students will generalise the shapes formed for any circle with m equidistant points and n steps.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    You are given a circle with 12 equidistant points. You have to connect these points using a rule.
                </p>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="font-size: 1.15rem; color: var(--text-main); margin-top: 0; margin-bottom: 1rem;">Rule:</h4>
                    <ol style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Starting from 2, add 2 to it and connect it with the next number, i.e. 4.</li>
                        <li style="margin-bottom: 0.5rem;">Add 2 to 4, then connect it to the next.</li>
                        <li>Keep adding 2 until you reach the starting point.</li>
                    </ol>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/string/2.png" alt="Rule Example Visualization" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 1 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1. How many steps did it take to reach the starting point? What shape do you get?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a) 5 steps, Pentagon</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='✅ Correct! We can see that the 6 steps formed equal chords on the circle, thus giving us a regular hexagon. Also, if we add 2 to the last point again, we will just retrace the steps we took in the first sequence.'; document.getElementById('q1-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b) 6 steps, Hexagon</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c) 4 steps, Square</button>
                        <button onclick="document.getElementById('q1-fb').innerHTML='❌ Incorrect.'; document.getElementById('q1-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d) 8 steps, Octagon</button>
                    </div>
                    <div id="q1-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Now starting from 3, add 3 to it and join to the next point. Keep adding 3 until you reach the starting point.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/string/3.png" alt="Rule Example 2" style="width: 100%; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.style.display='none';">
                </div>

                <!-- Interactive Question 2 -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">1.3 How many steps would be needed to reach the starting point?</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">a) Two</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">b) Three</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='✅ Correct! Starting from 3 and adding 3 at every step: 3 &rarr; 6 &rarr; 9 &rarr; 12 &rarr; 3. After 4 steps, we return to 3. Shape: Since the 4 steps formed equal chords on the circle, we get a square.'; document.getElementById('q2-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">c) Four</button>
                        <button onclick="document.getElementById('q2-fb').innerHTML='❌ Incorrect.'; document.getElementById('q2-fb').style.color='#ef4444';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: center; font-size: 1rem; font-family: inherit; transition: all 0.2s;">d) Five</button>
                    </div>
                    <div id="q2-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

                <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 600; margin-bottom: 1rem; margin-top: 0;">Repeat the same process by</p>
                    <ol style="list-style-type: lower-alpha; font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Starting from 4 and adding 4</li>
                        <li style="margin-bottom: 0.5rem;">Starting from 5 and adding 5</li>
                        <li>Starting from 6 and adding 6</li>
                    </ol>
                    <p style="font-size: 1.05rem; color: var(--text-muted); font-style: italic; margin-top: 1rem; margin-bottom: 0;">Until you reach the starting point.</p>
                </div>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/string/4.png" alt="Shapes Grid" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main);">What shapes do you get? Record your answers in the table below.</h4>
                <div style="overflow-x: auto; margin-bottom: 2.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: left;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">Number added</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; border-right: 1px solid var(--border-color);">No. of steps till the starting point</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">Shape formed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">2</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">6</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">Hexagon</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">3</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">4</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">Square</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">4</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">3</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">Triangle</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">5</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">12</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">Star</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">6</td>
                                <td style="padding: 0.75rem; color: var(--text-muted); border-right: 1px solid var(--border-color); text-align: center;">2</td>
                                <td style="padding: 0.75rem; color: var(--text-muted);">Line</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="background: #f8fafc; border-left: 4px solid var(--accent-blue); padding: 1.5rem; margin-bottom: 2.5rem; border-radius: 0 8px 8px 0;">
                    <p style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-top: 0; margin-bottom: 1rem;">
                        <strong>Note:</strong> When the starting point is 5, adding 5 to it gives 10. Now, adding 5 to 10 gives 15, which is not on the circle. But since the numbers lie on a circle, we can keep going around it. So 15 will go to 3 (12+3=15).
                    </p>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/string/5.png" alt="Star Calculation Example" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <p style="font-size: 1.05rem; color: #334155; line-height: 1.6; margin-bottom: 0;">
                        Now add 5 to 3, and we get 8. Keep going in the same manner, and we will get this sequence of steps:<br>
                        <span style="font-family: monospace; display: block; margin-top: 0.5rem; word-break: break-all;">5->10->3->8->1->6->11->4->9->2->7->12->5</span><br>
                        So after 12 steps, we will reach 5 again.
                    </p>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/string/6.png" alt="Star Calculation Example" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Do you notice any patterns in the numbers we are adding, the number of points on the circle, and the shape being formed in the circle?
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Why did you get polygons on adding 2, 3 and 4, while a star on adding 5? Is there any relationship between these numbers and 12, the number of points on the circle?
                </p>

                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1.5rem; border-radius: 8px; margin-bottom: 3rem;">
                    <h4 style="color: #166534; font-size: 1.15rem; margin-top: 0; margin-bottom: 1rem;">Explanation</h4>
                    <p style="color: #15803d; font-size: 1.05rem; line-height: 1.6; margin: 0;">
                        The numbers 2, 3, and 4 are factors of 12, while 5 is not. To reach 12 - 2, 3, and 4 take 6,4 and 3 steps respectively and reach the starting point. But when we start from 5, we have to keep on going until we reach a number that is a common multiple of both 5 and 12, so that the starting point is the same as the ending point. So 5 takes 12 steps, adding to 60, which is a common multiple of both 5 and 12 and in the process, it covers all points, giving us a 12-pointed star.
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Explorations</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    1. What shapes will you get when you add 7, 8, 9, 10 and 11 until you reach the starting point? Try to find out the relationship between the numbers and the number of points on a circle.
                </p>

                <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 2rem; border: 1px solid var(--border-color);">
                    <img src="book/string/7.png" alt="Exploration Shapes" style="width: 100%; max-height: 350px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                </div>

                <div style="background: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--accent-blue); padding: 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2.5rem;">
                    <h4 style="color: #334155; font-size: 1.15rem; margin-top: 0; margin-bottom: 1rem;">Explanation</h4>
                    <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin-bottom: 1rem;">
                        We will observe that 7, 8, 9, 10, and 11 will have the same shape as in the cases of 5, 4, 3, 2, and 1, respectively. And if you look at these numbers on the circle, they are the reflections of each other. In case 2, if I mark my lines in order in different colours and then repeat the procedure for 10, we will be able to see that the hexagons obtained are reflections of each other.
                    </p>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                        <img src="book/string/8.png" alt="Reflection Shapes" style="width: 100%; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" onerror="this.style.display='none';">
                    </div>
                    <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin-bottom: 1rem;">
                        In the first image, we start from 2, the blue string connects to 4. Then 4 connects to 6 through a yellow string, and so on.
                    </p>
                    <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin-bottom: 1rem;">
                        In the second image, we start from 10, add 10 to get 20, which will go to 8 (12+8), so the first string is blue from 10\rightarrow8 Then 8 plus 10 is 18, which goes to 6 using a yellow string and so on.
                    </p>
                    <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin-bottom: 0;">
                        So, the numbers that are reflections will have the same shapes. We can also generalise - If there are m points on a circle, and we know the shapes formed by step number n, then m-n will also have the same shape.
                    </p>
                </div>

                <!-- Interactive Question 2 for Exploration -->
                <div style="background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-top: 0; margin-bottom: 1.2rem;">2. Two circles, one with 16 points and the other with 20 points, are given. Which of the two will give a square when added to which number?</h4>
                    <div style="width: 100%; border-radius: 8px; overflow: hidden; text-align: center; background: #ffffff; padding: 1rem; margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                        <img src="book/string/9.png" alt="16 and 20 point circles" style="width: 100%; max-height: 250px; object-fit: contain; display: block;" onerror="this.style.display='none';">
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! For a 16-point circle, to get a square, we need to take 4 steps. So, 16 divided by 4 is 4, hence adding 4 gives us a square. Also, 16 - 4 = 12 also gives a square. The same logic applies to the 20-point circle (20/4=5 and 20-5=15). All options are correct!'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            a) The 16-point circle, on adding 4
                        </button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! For a 16-point circle, to get a square, we need to take 4 steps. So, 16 divided by 4 is 4, hence adding 4 gives us a square. Also, 16 - 4 = 12 also gives a square. The same logic applies to the 20-point circle (20/4=5 and 20-5=15). All options are correct!'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            b) The 16-point circle, on adding 12
                        </button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! For a 16-point circle, to get a square, we need to take 4 steps. So, 16 divided by 4 is 4, hence adding 4 gives us a square. Also, 16 - 4 = 12 also gives a square. The same logic applies to the 20-point circle (20/4=5 and 20-5=15). All options are correct!'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            c) The 20-point circle, on adding 5
                        </button>
                        <button onclick="document.getElementById('q3-fb').innerHTML='✅ Correct! For a 16-point circle, to get a square, we need to take 4 steps. So, 16 divided by 4 is 4, hence adding 4 gives us a square. Also, 16 - 4 = 12 also gives a square. The same logic applies to the 20-point circle (20/4=5 and 20-5=15). All options are correct!'; document.getElementById('q3-fb').style.color='#22c55e'; this.style.borderColor='#16a34a'; this.style.backgroundColor='#16a34a'; this.style.color='#ffffff';" style="padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: transparent; color: var(--text-main); font-weight: 500; cursor: pointer; text-align: left; font-size: 1rem; font-family: inherit; transition: all 0.2s;">
                            d) The 20-point circle, on adding 15
                        </button>
                    </div>
                    <div id="q3-fb" style="margin-top: 1rem; font-weight: 600; min-height: 1.5rem; text-align: center;"></div>
                </div>

            </div>
        `
    }
];
