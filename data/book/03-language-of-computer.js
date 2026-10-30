// Book section: Language of Computer
const bookLanguageOfComputer = [
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
                    The trick is to add the values at the top left of the chosen cards. The sum of these values will be the student's birth date. For example, if the selected cards have 1, 2, and 16 at the top left, 1+2+16=19. In this case, the birth date is 19.
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
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> Recognizing that with n fingers, the maximum count is: 2^n - 1.</li>
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
                        When all fingers are up on both hands, we can represent decimal numbers up to 1023 (512+256+128+64+32+16+8+4+2+1). With this binary representation, we can count past 1,000 using only 10 fingers! This binary concept has its roots in the study of poetry in ancient India, documented in Acharya Pingala's work Chandaḥśāstra (~2 BCE).
                    </p>
                </div>
            </div>
        `
    },
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
                    For example, 23 = 16 + 4 + 2 + 1.<br>
                    <strong>23 in binary:</strong> (10111)_2
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
    {
        id: "b3_5",
        section: "Language of Computer",
        title: "Logical Puzzle Punch Cards",
        thumbnail: "book/chapter_thumbnails/Punch Cards.png",
        pdfLink: "book/Logical Puzzle Punch Cards.pdf",
        content: `
            <!-- Hero Image Section -->
            <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/chapter_thumbnails/Punch Cards.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
            </div>

            <!-- Main Content Container -->
            <div class="page-content" style="max-width: 800px; margin: 0 auto; padding: 0 1rem;">
                
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-main); letter-spacing: -0.02em;">Introduction</h2>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Solving puzzles always seems complex. But have you wondered how computers solve puzzles? We will see a simplified way to solve some puzzles by following simple instructions and using binary. This will give us insight into how to break complex problems into smaller, easily solvable pieces. By combining smaller problems, computers can solve a larger one.
                </p>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity Overview</h3>
                <div style="overflow-x: auto; margin-bottom: 2rem;">
                    <table style="width: 100%; border-collapse: collapse; text-align: left; border: 1px solid var(--border-color);">
                        <thead>
                            <tr style="background: var(--primary-light);">
                                <th style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Activity</th>
                                <th style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Time</th>
                                <th style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600;">Description</th>
                            </tr>
                        </thead>
                        <tbody style="font-size: 1.05rem; line-height: 1.6; color: var(--text-muted);">
                            <tr>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">Launch</td>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">5 min</td>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">
                                    The teacher will demonstrate by solving a puzzle quickly using the cards, then ask students how it worked.<br>
                                    <a href="https://tinyurl.com/logiccardstemplate" target="_blank" style="color: var(--primary); font-weight: 500;">Template: https://tinyurl.com/logiccardstemplate</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">Exploring Logic punch card by Students</td>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">25 min</td>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">
                                    Students spend time understanding the cards. Then they start solving basic logical statements using the cards. They will then solve some puzzles with multiple statements using the cards. Students can make their own punch cards using the template after class hours.<br>
                                    <a href="https://tinyurl.com/logiccardsworksheet" target="_blank" style="color: var(--primary); font-weight: 500;">Student Worksheet: https://tinyurl.com/logiccardsworksheet</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">Discussions & Conclusion</td>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">10 min</td>
                                <td style="padding: 1rem; border: 1px solid var(--border-color);">
                                    Discussing the worksheets. The students will continue their discussion of binary numbers from the previous activity. They discuss their understanding of the logical statements and how to deduce from given informations. They can also discuss how a complex problem is broken down into individual logical steps and combined to solve a larger problem.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">CT Components</h3>
                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.75rem;"><strong>Algorithmic Thinking:</strong> We follow a step-by-step process to find the required card using the statements provided in the puzzle.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Decomposition:</strong> We break the task of solving a logic puzzle into solving individual steps using the binary logic of true or false.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Pattern Recognition:</strong> They observe that the number of cards possible is related to the number of holes at the top. They see how true and false, on and off, and U-shaped and O-shaped holes are identical.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Generalisation:</strong> From solving a puzzle in 3-holed cards, they see the extension to 5-holed cards.</li>
                    <li style="margin-bottom: 0.75rem;"><strong>Logic:</strong> These puzzles require solving each step logically.</li>
                </ul>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Activity: Logical puzzle punch cards</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    In this activity, you will use punched cards to solve logical puzzles. By stacking, aligning, and filtering the cards, we will see how complex reasoning can be built from simple decisions - True or False, mirroring how binary logic works inside a computer.
                </p>
                <div style="background: var(--primary-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <p style="margin: 0 0 0.5rem 0; color: #000; font-weight: 600;">The Scenario:</p>
                    <p style="margin: 0; color: #000; line-height: 1.6;">
                        The scenario is that you have the following lights in the room: <strong>Yellow Y</strong>, <strong>Pink P</strong>, <strong>Red R</strong>, <strong>Green G</strong>, and <strong>Blue B</strong>. By following the clues given in the Case Cards, you have to figure out which lights are ON in the given Puzzle. To solve these puzzles, we have a deck of cards representing all possible combinations of these lights being ON or OFF.
                    </p>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Understanding the cards</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To solve these puzzles, we have a deck of cards representing all possible combinations of these lights being ON or OFF. Each card has five positions for holes on the top, and each position corresponds to a coloured light mentioned above in the given order.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Each position has two possible hole types: <strong>U-shaped</strong> or <strong>O-shaped</strong>. Each card represents one possible combination. If a light is ON in a card, then the corresponding hole is U-shaped. If a light is OFF on a card, then the corresponding hole is O-shaped.
                </p>

                <div style="background: #f8fafc; border-left: 4px solid var(--accent-orange); padding: 1.5rem; margin-bottom: 2rem;">
                    <p style="margin: 0; font-size: 1.15rem; color: #334155; line-height: 1.6;">
                        <strong>Eg:</strong> Yellow Y is OFF, Pink P is ON, Red R is ON, Green G is OFF, Blue B is OFF is the card where the holes are <strong>OUUOO</strong>
                    </p>
                </div>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                    <img src="book/logical/1.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    Each hole, thus, has 2 possible states If we have two holes, then we have 2\times2=4 possible states Likewise, if we have 3 holes, we have 2\times2\times2=8 states Therefore, if we have 5 holes, we will have 2\times2\times2\times2\times2=32 states That is the number of distinct cards we have
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                    <img src="book/logical/2.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Procedure</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    If the puzzle says a light is ON, we need to remove all cards where that light is OFF. For that, we put the stick into the deck of cards through the hole corresponding to that light and pull out all the cards that get stuck to it. We remove these cards because they got stuck due to O-shaped holes that indicate the light is OFF.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    If we know some light is OFF in the puzzle, we remove all the cards that do not come out with the stick; these are the cards with U-shaped holes in positions corresponding to the given colour, which indicate that the light is ON. Ensuring the above helps us solve the logical puzzles through punch cards.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                    <img src="book/logical/3.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block; margin: 0 auto;">
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Understanding using a case</h3>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The operation of the cards is explained by showing how they can be used for solving a problem in two-valued logic. We can start by taking Case 1, which contains the first 8 cards from 0 to 7, and focus only on the Red R, Green G, and Blue B lights. Three statements are given containing simple assertions and negation statements. The aim is to determine which bulbs are on or off among these.
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    To solve this problem, let's establish some notation. Only three terms are involved, so we shall be concerned with only the Red R, Green G, and Blue B holes.
                </p>

                <table style="width: 100%; max-width: 800px; margin: 0 auto 2rem auto; border-collapse: collapse; text-align: left; border: 1px solid var(--border-color);">
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600; font-size: 1.1rem;"><span style="color: #ef4444;">Red</span> bulb <span style="color: #22c55e;">'ON'</span>, 1st position will be <span style="color: #22c55e;">U</span></td>
                            <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600; font-size: 1.1rem;"><span style="color: #ef4444;">Red</span> bulb <span style="color: #ef4444;">'OFF'</span>, 1st position will be <span style="color: #ef4444;">O</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600; font-size: 1.1rem;"><span style="color: #22c55e;">Green</span> bulb <span style="color: #22c55e;">'ON'</span>, 2nd position will be <span style="color: #22c55e;">U</span></td>
                            <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600; font-size: 1.1rem;"><span style="color: #22c55e;">Green</span> bulb <span style="color: #ef4444;">'OFF'</span>, 2nd position will be <span style="color: #ef4444;">O</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600; font-size: 1.1rem;"><span style="color: #2563eb;">Blue</span> bulb <span style="color: #22c55e;">'ON'</span>, 3rd position will be <span style="color: #22c55e;">U</span></td>
                            <td style="padding: 1rem; border: 1px solid var(--border-color); font-weight: 600; font-size: 1.1rem;"><span style="color: #2563eb;">Blue</span> bulb <span style="color: #ef4444;">'OFF'</span>, 3rd position will be <span style="color: #ef4444;">O</span></td>
                        </tr>
                    </tbody>
                </table>

                <ul style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted); list-style: none; padding: 0;">
                    <li>If all lights are <span style="color: #22c55e; font-weight: 600;">ON</span>, then <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <span style="color: #22c55e; font-weight: 600;">U U U</span></li>
                    <li>If all lights are <span style="color: #ef4444; font-weight: 600;">OFF</span>, then <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <span style="color: #ef4444; font-weight: 600;">O O O</span></li>
                    <li>If <span style="color: #ef4444; font-weight: 600;">Red</span> is <span style="color: #ef4444; font-weight: 600;">OFF</span>, <span style="color: #22c55e; font-weight: 600;">Green</span> is <span style="color: #22c55e; font-weight: 600;">ON</span>, <span style="color: #2563eb; font-weight: 600;">Blue</span> is <span style="color: #ef4444; font-weight: 600;">OFF</span>, then <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <span style="color: #ef4444; font-weight: 600;">O</span> <span style="color: #22c55e; font-weight: 600;">U</span> <span style="color: #ef4444; font-weight: 600;">O</span></li>
                    <li>If <span style="color: #ef4444; font-weight: 600;">Red</span> and <span style="color: #22c55e; font-weight: 600;">Green</span> are <span style="color: #22c55e; font-weight: 600;">ON</span>, but <span style="color: #2563eb; font-weight: 600;">Blue</span> can be anything, then <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <span style="color: #22c55e; font-weight: 600;">U U</span> <strong>X</strong></li>
                </ul>

                <!-- Quiz Block 2 -->
                <div style="background: var(--surface); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 3rem;">
                    <p style="font-size: 1.15rem; font-weight: 600; color: var(--text-main); margin-top: 0;">
                        2. Can you identify which bulb is <span style="color: #ef4444;">OFF</span> based on this pattern: <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U U</span> <span style="color: #ef4444;">O</span>?
                    </p>
                    <ul style="list-style: none; padding: 0; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem;">
                        <li>a. <span style="color: #ef4444; font-weight: 600;">Red</span> bulb</li>
                        <li>b. <span style="color: #2563eb; font-weight: 600;">Blue</span> Bulb</li>
                        <li>c. <span style="color: #22c55e; font-weight: 600;">Green</span> bulb</li>
                        <li>d. All bulbs are OFF</li>
                    </ul>
                    <div style="background: var(--primary-light); padding: 1rem; border-radius: 6px; color: black">
                        <p style="margin: 0 0 0.5rem 0;"><strong>Correct answer:</strong> b. <span style="color: #2563eb;">Blue</span> Bulb</p>
                        <p style="margin: 0 0 0.5rem 0;"><strong>Explanation:</strong> The <span style="color: #ef4444;">O-shaped</span> hole is in the <span style="color: #2563eb;">Blue</span> bulbs' position</p>
                        <p style="margin: 0;"><strong>Competencies:</strong> Logic, Pattern recognition, Abstraction</p>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Case 1: Focusing on <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> cards only (with 8 cards only)</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 0.5rem; line-height: 1.8; color: var(--text-muted);">Statements:</p>
                <ol style="font-size: 1.15rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1.5rem; font-weight: 600;">
                    <li>The <span style="color: #ef4444;">Red</span> light is <span style="color: #22c55e;">ON</span></li>
                    <li>The <span style="color: #2563eb;">Blue</span> light is <span style="color: #ef4444;">OFF</span></li>
                    <li><span style="color: #22c55e;">ON</span> light only has <span style="color: #ef4444;">OFF</span> Neighbour</li>
                </ol>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    The problem has three statements.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    <em>The statement I: "The <span style="color: #ef4444; font-weight: 600;">Red</span> light is <span style="color: #22c55e; font-weight: 600;">ON</span>"</em><br>
                    Insert the stick in the <strong>R</strong> position and lift. The stick will raise all <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>O X X</strong> cards: All cards where <span style="color: #ef4444; font-weight: 600;">Red</span> is <span style="color: #ef4444; font-weight: 600;">OFF</span>.<br>
                    <span style="text-decoration: underline;"><strong>RGB = O X X cards are discarded.</strong></span>
                </p>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    All remaining cards are assembled into a pack once more (in any order), and we are ready for the second statement.
                </p>

                <!-- Quiz Block 3 -->
                <div style="background: var(--surface); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 3rem;">
                    <p style="font-size: 1.15rem; font-weight: 600; color: var(--text-main); margin-top: 0;">
                        3. After performing an action using Statement I, how many cards are left in the pack?
                    </p>
                    <ul style="list-style: none; padding: 0; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem;">
                        <li>a. 8</li>
                        <li>b. 4</li>
                        <li>c. 2</li>
                        <li>d. 1</li>
                    </ul>
                    <div style="background: var(--primary-light); padding: 1rem; border-radius: 6px; color: black">
                        <p style="margin: 0 0 0.5rem 0;"><strong>Correct answer:</strong> b. 4</p>
                        <p style="margin: 0 0 0.5rem 0;"><strong>Explanation:</strong> There are 4 cards with the Red light on and 4 cards with the Red light off. We are keeping the cards which have the light on. The 4 cards with the red light off are removed.</p>
                        <p style="margin: 0;"><strong>Competencies:</strong> Decomposition, Logic, pattern recognition</p>
                    </div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    <em>The second statement, II, "The <span style="color: #2563eb; font-weight: 600;">Blue</span> light is <span style="color: #ef4444; font-weight: 600;">OFF</span>"</em><br>
                    Put the stick in the hole corresponding to <span style="color: #2563eb; font-weight: 600;">Blue</span> and lift. Cards with <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>X X <span style="color: #ef4444;">O</span></strong> will come out. Remaining cards will be <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>X X <span style="color: #22c55e;">U</span></strong>.
                </p>

                <!-- Quiz Block 4 -->
                <div style="background: var(--surface); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 3rem;">
                    <p style="font-size: 1.15rem; font-weight: 600; color: var(--text-main); margin-top: 0;">
                        4. After performing the action using Statement II, among these, which card will not be discarded?
                    </p>
                    <ul style="list-style: none; padding: 0; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem; font-weight: 600;">
                        <li>a. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = X X <span style="color: #ef4444;">O</span></li>
                        <li>b. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U</span> <span style="color: #ef4444;">O</span> <span style="color: #22c55e;">U</span></li>
                        <li>c. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = X X <span style="color: #22c55e;">U</span></li>
                        <li style="font-weight: 400;">d. All will be eliminated</li>
                    </ul>
                    <div style="background: var(--primary-light); padding: 1rem; border-radius: 6px; color: black">
                        <p style="margin: 0 0 0.5rem 0;"><strong>Correct answer:</strong> a. <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>X X <span style="color: #ef4444;">O</span></strong></p>
                        <p style="margin: 0 0 0.5rem 0;"><strong>Explanation:</strong> We discard all the cards where <span style="color: #2563eb; font-weight: 600;">Blue</span> light is <span style="color: #22c55e; font-weight: 600;">ON</span>, <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>X X <span style="color: #22c55e;">U</span></strong>, and keep those cards where <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>X X <span style="color: #ef4444;">O</span></strong>.</p>
                        <p style="margin: 0;"><strong>Competencies:</strong> Algorithmic thinking, decomposition, pattern recognition</p>
                    </div>
                </div>

                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    All remaining cards are assembled into a pack once more (in any order), and we are ready for the third statement.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--text-muted);">
                    <em>The third statement, III, "<span style="color: #22c55e; font-weight: 600;">ON</span> light only has <span style="color: #ef4444; font-weight: 600;">OFF</span> Neighbour"</em><br><br>
                    Recall the first statement, "The <span style="color: #ef4444; font-weight: 600;">Red</span> light is <span style="color: #22c55e; font-weight: 600;">ON</span>".<br>
                    The <span style="color: #22c55e; font-weight: 600;">Green</span> bulb neighbours the <span style="color: #ef4444; font-weight: 600;">Red</span> bulb. It should be <span style="color: #ef4444; font-weight: 600;">OFF</span>.<br>
                    Insert the stick in the <span style="color: #22c55e; font-weight: 600;">Green</span> position and lift. The stick will raise <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong>X <span style="color: #ef4444;">O</span> X</strong> cards.
                </p>
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    After this action, only one card will be left, and that will be the solution to the logical puzzle.
                </p>

                <!-- Quiz Block 5 -->
                <div style="background: var(--surface); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 3rem;">
                    <p style="font-size: 1.15rem; font-weight: 600; color: var(--text-main); margin-top: 0;">
                        5. What is the pattern of the last card (solution)?
                    </p>
                    <ul style="list-style: none; padding: 0; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem; font-weight: 600;">
                        <li>a. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U U</span> <span style="color: #ef4444;">O</span></li>
                        <li>b. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U</span> <span style="color: #ef4444;">O</span> <span style="color: #22c55e;">U</span></li>
                        <li>c. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #ef4444;">O</span> <span style="color: #22c55e;">U U</span></li>
                        <li>d. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U</span> <span style="color: #ef4444;">O O</span></li>
                    </ul>
                    <div style="background: var(--primary-light); padding: 1rem; border-radius: 6px; color: black">
                        <p style="margin: 0 0 0.5rem 0;"><strong>Correct answer:</strong> d. <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong><span style="color: #22c55e;">U</span> <span style="color: #ef4444;">O O</span></strong></p>
                        <p style="margin: 0 0 0.5rem 0;"><strong>Explanation:</strong> After the first statement, cards with <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <span style="color: #22c55e; font-weight: 600;">U</span> X X holes remained. From these, those cards with <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = X X <span style="color: #ef4444; font-weight: 600;">O</span> holes remained after the second statement. Finally, we need the cards with <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = X <span style="color: #ef4444; font-weight: 600;">O</span> X holes. If we put together all this information, we get <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <span style="color: #22c55e; font-weight: 600;">U</span> <span style="color: #ef4444; font-weight: 600;">O O</span>.</p>
                        <p style="margin: 0;"><strong>Competencies:</strong> Algorithmic thinking, decomposition,</p>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Case 2: Focusing on <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> cards only (with 8 cards only)</h3>
                
                <p style="font-size: 1.15rem; margin-bottom: 0.5rem; line-height: 1.8; color: var(--text-muted);">Statements</p>
                <ol style="font-size: 1.15rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1.5rem; font-weight: 600;">
                    <li>The <span style="color: #ef4444;">Red</span> light is <span style="color: #22c55e;">ON</span></li>
                    <li>The Lights are either all <span style="color: #22c55e;">ON</span> or all <span style="color: #ef4444;">OFF</span></li>
                </ol>

                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    The first statement is identical to <strong>Case 1</strong>.<br>
                    The second statement, II, "The Lights are either all <span style="color: #22c55e; font-weight: 600;">ON</span> or all <span style="color: #ef4444; font-weight: 600;">OFF</span>".
                </p>

                <!-- Quiz Block 6 -->
                <div style="background: var(--surface); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 3rem;">
                    <p style="font-size: 1.15rem; font-weight: 600; color: var(--text-main); margin-top: 0;">
                        6. Among these, what would be the pattern of the solution?
                    </p>
                    <ul style="list-style: none; padding: 0; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem; font-weight: 600;">
                        <li>a. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U</span> <span style="color: #ef4444;">O O</span></li>
                        <li>b. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #ef4444;">O O O</span></li>
                        <li>c. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U</span> <span style="color: #ef4444;">O</span> <span style="color: #22c55e;">U</span></li>
                        <li>d. <span style="color: #ef4444;">R</span><span style="color: #22c55e;">G</span><span style="color: #2563eb;">B</span> = <span style="color: #22c55e;">U U U</span></li>
                    </ul>
                    <div style="background: var(--primary-light); padding: 1rem; border-radius: 6px; color: black">
                        <p style="margin: 0 0 0.5rem 0;"><strong>Correct answer:</strong> d. <span style="color: #ef4444; font-weight: 600;">R</span><span style="color: #22c55e; font-weight: 600;">G</span><span style="color: #2563eb; font-weight: 600;">B</span> = <strong><span style="color: #22c55e;">U U U</span></strong></p>
                        <p style="margin: 0 0 0.5rem 0;"><strong>Explanation:</strong> The second statement says either all are <span style="color: #22c55e; font-weight: 600;">ON</span> or all are <span style="color: #ef4444; font-weight: 600;">OFF</span>, but we know from the first statement that <span style="color: #ef4444; font-weight: 600;">Red</span> is <span style="color: #22c55e; font-weight: 600;">ON</span>. So, all the lights must be <span style="color: #22c55e; font-weight: 600;">ON</span>.</p>
                        <p style="margin: 0;"><strong>Competencies:</strong> Logical reasoning, Algorithmic thinking, decomposition</p>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-main); margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">More Puzzles</h3>
                <p style="font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.8; color: var(--text-muted);">
                    Below are three progressively harder cases. They introduce additional logic and multi-step filtering to mimic advanced truth-table-based reasoning. Each ends with one solution card.
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                    <!-- Case 3 -->
                    <div style="background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 1.5rem;">
                        <h4 style="color: #4f46e5; margin-top: 0; font-size: 1.25rem;">CASE 3</h4>
                        <p style="font-size: 0.9rem; color: #6366f1; margin-bottom: 1rem;">(Take cards from 0 to 15)</p>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.05rem; line-height: 1.5; color: #312e81; font-weight: 500;">
                            <li style="margin-bottom: 0.75rem;">The Red light is 'ON'</li>
                            <li style="margin-bottom: 0.75rem;">'ON' light only has 'OFF' Neighbours</li>
                            <li>Exactly Even Lights are 'ON'</li>
                        </ul>
                    </div>

                    <!-- Case 4 -->
                    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 1.5rem;">
                        <h4 style="color: #2563eb; margin-top: 0; font-size: 1.25rem;">CASE 4</h4>
                        <p style="font-size: 0.9rem; color: #3b82f6; margin-bottom: 1rem;">(Take cards from 0 to 31)</p>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.05rem; line-height: 1.5; color: #1e3a8a; font-weight: 500;">
                            <li style="margin-bottom: 0.75rem;">The Yellow light is 'ON'</li>
                            <li style="margin-bottom: 0.75rem;">The Pink light is 'OFF'</li>
                            <li style="margin-bottom: 0.75rem;">If Yellow light is 'ON', then Blue light is 'ON'</li>
                            <li style="margin-bottom: 0.75rem;">Red and Green are either both are 'ON' or 'OFF'</li>
                            <li>If Blue light is 'ON', then Red light is 'OFF'</li>
                        </ul>
                    </div>

                    <!-- Case 5 -->
                    <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 8px; padding: 1.5rem;">
                        <h4 style="color: #c026d3; margin-top: 0; font-size: 1.25rem;">CASE 5</h4>
                        <p style="font-size: 0.9rem; color: #d946ef; margin-bottom: 1rem;">(Take cards from 0 to 31)</p>
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.05rem; line-height: 1.5; color: #701a75; font-weight: 500;">
                            <li style="margin-bottom: 0.75rem;">If Yellow light is 'ON', so is Pink light</li>
                            <li style="margin-bottom: 0.75rem;">Either Green light or Blue light, or both of them, is 'ON'</li>
                            <li style="margin-bottom: 0.75rem;">If Yellow light is 'ON', then Blue light is 'ON'</li>
                            <li style="margin-bottom: 0.75rem;">Red and Green are either both are 'ON' or 'OFF'</li>
                            <li>If Blue light is 'ON', then Red light is 'OFF'</li>
                        </ul>
                    </div>
                </div>

            </div>
        `
    },
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
                    We generally measure our height in the decimal number system, i.e., using base-10 numbers. We use powers of ten (10^0, 10^1, 10^2, 10^3 &rarr; 1, 10, 100, 1000...) and digits from 0 to 9 to represent any number that exists.
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
                    Let's measure 55 inches in binary: 55 = 32 + 16 + 4 + 2 + 1. The binary representation of 55 is (110111)_2.
                </p>

                <div style="width: 100%; border-radius: 12px; margin-bottom: 2rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); background: #ffffff; overflow: hidden; text-align: center;">
                <img src="book/height/2.png" alt="Chapter Cover" style="width: 100%; max-height: 450px; object-fit: contain; display: block;">
            </div>

                <div style="overflow-x: auto; margin-bottom: 3rem; border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; background: var(--surface); font-size: 1.05rem; text-align: center;">
                        <thead style="background: var(--background); border-bottom: 2px solid var(--border-color);">
                            <tr>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700; text-align: left;">Number</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2^5 = 32</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2^4 = 16</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2^3 = 8</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2^2 = 4</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2^1 = 2</th>
                                <th style="padding: 1rem; color: var(--text-main); font-weight: 700;">2^0 = 1</th>
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
                    To measure 55 inches in ternary: 55 = 54 + 1 = 2 \\times 27 + 1 \\times 1. The representation is (2001)_3.
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
    }
];
