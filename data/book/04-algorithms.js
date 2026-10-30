// Book section: Algorithms and Computational Thinking
const bookAlgorithms = [
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
    {
        id: "b4_4",
        section: "Algorithms and Computational Thinking",
        title: "Domino Computer",
        thumbnail: "book/chapter_thumbnails/domino.png",
        pdfLink: "book/Domino Computer.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/domino.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Computers perform calculations using binary numbers and logic gates. In this activity, the electrical circuit is replaced with domino blocks to show that the same logical operations can be demonstrated with tangible objects. A network of dominoes can add numbers in the same way a computer processor does, but much more slowly.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The aim of this activity is to demonstrate how simple reactions, such as falling dominoes, can be organised to perform mathematical calculations. It also helps learners understand the basic working of logic gates in computers.
                </p>

                <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #000; font-weight: 600;">Material Required</h4>
                    <ul style="margin: 0; color: #000;">
                        <li>Domino Blocks</li>
                        <li>Logic Gate Flex</li>
                        <li>A flat surface for construction</li>
                    </ul>
                </div>

                 <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/1.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Learning Goals</h3>
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">How computers represent information using just two states: ON and OFF</li>
                    <li style="margin-bottom: 0.5rem;">What logic gates are and how the three simplest gates (OR, AND, XOR) work</li>
                    <li style="margin-bottom: 0.5rem;">How binary numbers work and why they're perfect for computers</li>
                    <li style="margin-bottom: 0.5rem;">How logic gates combine to create circuits that perform calculations</li>
                    <li style="margin-bottom: 0.5rem;">How a network of dominoes can model the way a real computer adds numbers</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Instructions</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Computers do not work with numbers in the same way humans do. Instead, they break everything into tiny signals that are either present or absent, on or off, 1 or 0. Computers are made up of logic gates. Logic gates take in information and output different information depending on the type of gate.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/2.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A logic gate is a decision-making unit inside a computer. It takes one or more inputs and gives an output according to a fixed rule. In our domino model, the input is whether a domino block is falling, and the output is whether another domino block falls in response. In computers, information is represented as electrical signals that can be ON or OFF (high or low voltage). In our domino computer, the information is whether a chain of domino blocks is falling.
                </p>

                <div style="background: #f8fafc; border-left: 4px solid var(--accent-orange); padding: 1.5rem; margin-bottom: 2rem;">
                    <ul style="margin: 0; padding-left: 1.5rem; font-size: 1.15rem; color: #334155;">
                        <li><strong>Standing domino = 0 (OFF)</strong> - no signal</li>
                        <li><strong>Falling domino = 1 (ON)</strong> - signal is flowing</li>
                    </ul>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Combinations of different gates allow the computer to perform complicated calculations, and the output from one gate can be connected to other gates. By assembling enough domino blocks into just the right sequence, we can create a structure out of those dominoes that acts as a computer circuit: representing numbers, calculating sums, and ultimately performing any computation.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">OR Gate</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The OR gate is a logic gate that passes a signal if one or more of its inputs are on. When we use the word 'OR' in any conversation, we usually mean "one thing or the other thing, but not both". It's important to remember that the logic gate called OR means "one or the other or both".
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/3.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To make an OR gate from domino blocks, we need two input chains, either of which will set off the output chain of domino blocks. The input domino blocks are placed such that when you push either one / both of them, the output domino block will fall. If neither input is pushed, the output remains in the off (0) state.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/4.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>
                
                <table style="width: 100%; max-width: 300px; margin: 0 auto 2rem auto; border-collapse: collapse; text-align: center; border: 1px solid var(--border-color);">
                    <thead>
                        <tr style="background: var(--primary-light);">
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">A</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">B</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                    </tbody>
                </table>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/5.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">XOR Gate</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The XOR gate, EXCLUSIVE OR, is a logic gate which passes on a signal if exactly one of the two inputs is on. This is different from the OR gate, which will still pass a signal if both inputs are 1. The difference is that with exclusive OR, the two inputs are mutually exclusive. In other words, if both inputs are 1, then the two inputs need to cancel out somehow and produce a 0 instead of a 1.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/14.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To make an XOR gate from domino blocks, we need two input chains, either of which will set off the output chain of cards, but not both. This can be achieved by having the two inputs pass through the same section of blocks; if they're both running, they will stop each other. If only one input is pushed, the dominoes travel around the corresponding curve, and the output is a 1. But if both inputs are pushed, the two paths collide and stop midway.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/6.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/15.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <table style="width: 100%; max-width: 300px; margin: 0 auto 2rem auto; border-collapse: collapse; text-align: center; border: 1px solid var(--border-color);">
                    <thead>
                        <tr style="background: var(--primary-light);">
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">A</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">B</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td></tr>
                    </tbody>
                </table>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">AND Gate</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The AND gate is a logic gate that passes a signal only when both inputs are on. To make an AND gate from domino blocks, we need the output chain to fall only when both input chains fall. Representing that kind of computation with dominoes feels tricky.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/8.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Here, we can again take advantage of the falling domino's ability to halt the progress of other dominoes. One way to do this is to split an input chain so it can knockout itself, and use the second input to interrupt the first input's knockout chain. We start with one input that has a relatively long path to the output. We then add an extra path from that input that can interrupt the longer path. If the input is pushed, the shorter domino path will interrupt the longer one, and the output at the end will not fall over. 
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/9.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    To create an AND gate, we just need to add a second input that interrupts the knockout path. If only the first input is pushed, the interrupt path blocks the longer path, and nothing happens to the output either. But if both inputs are pushed, the second input interrupts the knockout path, allowing the first input's longer path to reach the output.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/10.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/11.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

             <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/16.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Binary Numbers</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Since computers store information using electrical signals, there are only two states they can represent: ON or OFF. Similarly, the domino computer uses chains of dominoes that are either falling or not falling to transmit information. This means that if we are going to use them to handle numbers, we need a way to store them using only two values. This is called BINARY.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    A number like 45 is made up of different digits, each representing a different value.<br>
                    <span style="font-family: monospace; font-size: 1.25rem; display: block; margin: 1rem 0;">45=(4^{*}10)+(5^{*}1)</span>
                    The right-hand digit is ones, the next digit is tens, the third digit from the right is hundreds, and so on. We humans count using 10 digits (0-9). This is called decimal, or base-10.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    But computers don't have fingers. They have logic gates that are either ON or OFF. So computers use binary, or base 2, which uses only two digits: 0 and 1. In binary, instead of using 1, 10, 100, 1000... as our values, which are powers of 10, we instead use powers of 2. These are 1, 2, 4, 8, 16, 32... (doubling every time).
                    <br><br>
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/domino/17.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: cover; display: block;">
            </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">From Logic Gates to Arithmetic</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Binary numbers can be added together in exactly the same way as decimal numbers. Individual logic gates can be connected to one another. The output of one gate becomes the input to another gate. When you combine enough gates in just the right way, they can add numbers together.
                </p>
                <div style="background: var(--surface); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                    <p style="font-size: 1.15rem; font-weight: 600; margin-top: 0;">What happens when we add in binary?</p>
                    <ul style="font-family: monospace; font-size: 1.15rem; list-style: none; padding: 0;">
                        <li>0+0=0</li>
                        <li>0+1=1</li>
                        <li>1+0=1</li>
                        <li>1+1=10 (which is 2 in decimal)</li>
                    </ul>
                    <p style="font-size: 1.15rem; margin-bottom: 0;">Notice that last one: 1+1=10. The result is two digits! The "1" goes into the next column (this is called a "carry").</p>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The domino-block circuitry for adding 2-bit numbers A & B is called a half adder.
                </p>

                <table style="width: 100%; max-width: 400px; margin: 0 auto 2rem auto; border-collapse: collapse; text-align: center; border: 1px solid var(--border-color); ">
                    <thead>
                        <tr style="background: var(--primary-light) color: black;">
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">A</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">B</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">2s</th>
                            <th style="padding: 0.75rem; border: 1px solid var(--border-color);">1s</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td></tr>
                        <tr><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">1</td><td style="padding: 0.75rem; border: 1px solid var(--border-color);">0</td></tr>
                    </tbody>
                </table>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
    <img src="book/domino/12.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
</div>

<div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
    <img src="book/domino/13.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
</div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    If you made the half adder, then make the full adder by connecting two half adders. Basically, a sequence of dominoes organised into logic gates: those logic gates combine to form half adders, which combine to create full adders, which, when put in sequence, can add any two binary numbers by very precisely determining which lines of domino blocks should fall and which shouldn't.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Fact</h3>
                <div style="background: #f8fafc; border-left: 4px solid var(--accent-orange); padding: 1.5rem; margin-bottom: 3rem;">
                    <p style="font-size: 1.15rem; margin-top: 0; margin-bottom: 1rem; color: #334155;">
                        In October 2012, Matt Parker and the Think Maths team built a domino computer at the Manchester Science Festival. A working binary adder made of 10,000 dominoes. It took 12 people six hours to carefully balance every domino block. When they push the dominoes, the chain reaction cascades through, calculating the sum of two 4-bit binary numbers and producing the 5-bit result.
                    </p>
                    <p style="font-size: 1.15rem; margin-bottom: 1rem; color: #334155;">
                        At IIT Gandhinagar's Centre for Creative Learning, we built a version that adds two 3-bit binary numbers to produce a 4-bit result (e.g., 5+6=11).
                    </p>
                    <div style="width: 100%; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                        <img src="book/domino/18.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
                    </div>
                    <div style="text-align: center; margin-bottom: 0.5rem;">
                        <a href="https://tinyurl.com/dominotryout" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--primary); color: black; font-size: 1.15rem; font-weight: 600; text-decoration: none; border-radius: 6px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            ▶ Watch Video: Domino Computer Tryout
                        </a>
                    </div>
                </div>

            </div>
        `
    }
];
