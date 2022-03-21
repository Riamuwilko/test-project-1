# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **William Kong**

Time spent: *9** hours spent in total

Link to project: https://glitch.com/edit/#!/indecisive-swift-windshield

## Required Functionality

The following **required** functionality is complete:

* [1] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [1] "Start" button toggles between "Start" and "Stop" when clicked. 
* [1] Game buttons each light up and play a sound when clicked. 
* [1] Computer plays back sequence of clues including sound and visual cue for each button
* [1] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [1] User wins the game after guessing a complete pattern
* [1] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [1] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [1] Buttons use a pitch (frequency) other than the ones in the tutorial
* [1] More than 4 functional game buttons
* [1] Playback speeds up on each turn
* [1] Computer picks a different pattern each time the game is played
* [1] Player only loses after 3 mistakes (instead of on the first mistake)
* [1] Game button appearance change goes beyond color (e.g. add an image)
* [0] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [0] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/f0c87ae6-c901-4101-b02b-e25c48424f55/lightgame.gif?v=1647857194289)
![](https://cdn.glitch.global/f0c87ae6-c901-4101-b02b-e25c48424f55/lightgame2.gif?v=1647857189888)
![](https://cdn.glitch.global/f0c87ae6-c901-4101-b02b-e25c48424f55/lightgame3.gif?v=1647857188238)
![](https://cdn.glitch.global/f0c87ae6-c901-4101-b02b-e25c48424f55/lightgame4.gif?v=1647857185801)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value for colors and https://codepen.io/awkay/pen/ExzGea for timer]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The basic implementation of the project is relatively easy given the detailed instructions. However, I started doing the optional part of the project and it grew more challenging. The first three optional features are pretty easy to implement with minimal changes to the original code. The most struggle I have is implementing a timer because I’ll have to use the start button as the same “activation” for both start function that starts the game itself as well as starting the timer. I searched google for an example of a timer as well as asking my friend on how to implement it. I also used stackoverflow for calling two functions using the same button. Then, when the timer runs out, I automatically call on the loose game() which ends the game. Also for “computer picks a different pattern each time the game is played”, I knew I needed to use a random number generator for between 1 and the amount of buttons. However, I didn’t know the exact way of doing it, which I also use stackover flow to figure out how to do. Adding an image also took me a little bit of time since I didn’t know how to upload an image and get a link from it, but I looked back on the template of Glitch basic website template and found out you have to upload to the assets in Glitch.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[How would you describe the role of a Web Developer? What are the most important aspects of the job and why? What programming languages are essential for web development? As a Web Developer, how do you optimize your site’s loading time? How would you integrate the backend algorithm with the Front end? Where can I learn more about web development and achieve skill so that I could have a good chance of being accepted into internships.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, I would make the website more visually appealing as well as asking more game modes to the game. One example of the game mode would be similar to an endurance mode where the game goes on and on until a person loses. I would also test a good time interval where it is challenging. To build on that, a difficulty button where the harder the chosen difficulty, the less time between the delay and faster the button is shown and also less time on the timer. Another idea I have is to implement a leaderboard that shows the time taken for the user to commit one run. Then you can compete against yourself as well as against other people. ]




## Interview Recording URL Link

[My Zoom cloud 5-minute Interview Recording](https://umich.zoom.us/rec/share/vC3KsaecYi2v5rhEiqfTqltmRpeLLncFjH2pa8xI-zqIo-cjm9T2gDbBTuBe46lW.mdQVsFjJ6PzPUChB)

[My Google Drive link for the interview just in case it doesn't work for zoom](https://drive.google.com/drive/folders/1lt3jpvBHGLddVulIMFkW_SOUn8MofXNq?usp=sharing)

[If it doesn't for both then this is a unlisted youtube link](https://youtu.be/RAbDQpCzr3I)

## License

    Copyright [William Kong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.