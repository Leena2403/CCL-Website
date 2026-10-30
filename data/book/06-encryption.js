// Book section: Computational Thinking Over Encryption
const bookEncryption = [
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

                <!-- Interactive Question 4 -->
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
    }
];
