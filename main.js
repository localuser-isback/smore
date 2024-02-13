javascript: void (function () {
    /* EdPuzzle Mod Menu Hack February 13th Update by smorenitez - Installation Methods: */
    /* Method 1: Copy the code, Go to Inspect Element, Click Console, Paste the code into there, Press Enter */
    /* Method 2: Highlight all the code, drag it to the bookmarks bar, then click the bookmark on an EdPuzzle */
    /* KNOWN ISSUES: The AI may be incredibly lazy and give wrong answers on multiple choice questions */
    /* TEMPPORARY SOLUTION: Take it with a grain of salt on more difficult EdPuzzles for now.. */
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap';
    document.head.appendChild(link);
    function createToast(message) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.top = '-100px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#333';
        toast.style.color = '#fff';
        toast.style.padding = '15px';
        toast.style.borderRadius = '10px';
        toast.style.transition = 'top 0.5s ease-in-out';
        document.body.appendChild(toast);
        const leftText = document.createElement('span');
        leftText.textContent = 'Injecting EdPuzzle Mod Menu';
        leftText.style.fontFamily = "'Quicksand', sans-serif";
        leftText.style.marginRight = '10px';
        toast.appendChild(leftText);
        const rightText = document.createElement('span');
        rightText.textContent = '3.0s';
        rightText.style.float = 'right';
        rightText.style.fontFamily = "'Quicksand', sans-serif";
        toast.appendChild(rightText);
        /* We added a countdown because there are some instances of the UI being too big/small when executed too early */
        let countdown = 0.75;
        const countdownInterval = setInterval(() => {
            countdown -= 0.1;
            rightText.textContent = countdown.toFixed(1) + 's';
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                rightText.style.fontSize = '0';
                setTimeout(() => {
                    var blackContainer = document.createElement("div");
                    blackContainer.style.position = "fixed";
                    blackContainer.style.top = "50%";
                    blackContainer.style.left = "50%";
                    blackContainer.style.transform = "translate(-50%, -50%)";
                    blackContainer.style.backgroundColor = "rgb(11, 11, 11)";
                    blackContainer.style.width = "500px";
                    blackContainer.style.height = "300px";
                    blackContainer.style.zIndex = "99999";
                    blackContainer.style.opacity = "0";
                    blackContainer.style.borderRadius = "10px";
                    /* title bar */
                    var titleBar = document.createElement("div");
                    titleBar.style.backgroundColor = "rgb(16 16 16)";
                    titleBar.style.color = "white";
                    titleBar.style.padding = "10px";
                    titleBar.style.cursor = "move";
                    titleBar.textContent = "EdPuzzle Mod Menu";
                    titleBar.style.textAlign = "center";
                    titleBar.style.borderTopLeftRadius = "10px";
                    titleBar.style.borderTopRightRadius = "10px";

                    blackContainer.appendChild(titleBar);
                    titleBar.style.fontFamily = "'Quicksand', sans-serif";
                    /* skip button */
                    var skipButton = document.createElement("button");
                    skipButton.textContent = "Skip Video";
                    skipButton.style.position = "absolute";
                    skipButton.style.fontFamily = "'Quicksand', sans-serif";
                    skipButton.style.top = "50%";
                    skipButton.style.left = "32%";
                    skipButton.style.transform = "translate(-50%, -50%)";
                    skipButton.style.backgroundColor = "transparent";
                    skipButton.style.color = "white";
                    skipButton.style.border = "2px solid white";
                    skipButton.style.padding = "10px";
                    skipButton.style.cursor = "pointer";
                    skipButton.style.borderRadius = "10px";
                    skipButton.addEventListener("click", function () {
                        skipButton.textContent = "Skipping..";
                        /* code - start */
                        javascript: function httpGet(url, callback, headers = [], method = "GET", content = null) { var request = new XMLHttpRequest(); request.addEventListener("load", callback); request.open(method, url, true); if (headers.length > 0) { for (const header of headers) { request.setRequestHeader(header[0], header[1]); } } request.send(content); } function init() { getCSRF(); } function getCSRF() { var csrfURL = "https://edpuzzle.com/api/v3/csrf"; httpGet(csrfURL, function () { var data = JSON.parse(this.responseText); var csrf = data.CSRFToken; getAssignment(csrf); }); } function getAssignment(csrf) { var assignment_id = window.location.href.split("/")[4]; var url1 = "https://edpuzzle.com/api/v3/assignments/" + assignment_id + "/attempt"; httpGet(url1, function () { var data = JSON.parse(this.responseText); postAttempt(csrf, data); }); } function postAttempt(csrf, data) { var id = data._id; var teacher_assignment_id = data.teacherAssignmentId; var referrer = "https://edpuzzle.com/assignments/" + teacher_assignment_id + "/watch";; var url2 = "https://edpuzzle.com/api/v4/media_attempts/" + id + "/watch"; var content = { "timeIntervalNumber": 10 }; var headers = [['accept', 'application/json, text/plain, */*'], ['accept_language', 'en-US,en;q=0.9'], ['content-type', 'application/json'], ['x-csrf-token', csrf], ['x-edpuzzle-referrer', referrer], ['x-edpuzzle-web-version', window.__EDPUZZLE_DATA__.version]]; httpGet(url2, function () { window.location.reload(); }, headers, "POST", JSON.stringify(content)); } init();
                        /* code - end */
                    });

                    var skipButton2 = document.createElement("button");
                    skipButton2.textContent = "Chat with AI";
                    skipButton2.style.position = "absolute";
                    skipButton2.style.top = "50%";
                    skipButton2.style.left = "54%";
                    skipButton2.style.fontFamily = "'Quicksand', sans-serif";
                    skipButton2.style.transform = "translate(-50%, -50%)";
                    skipButton2.style.backgroundColor = "transparent";
                    skipButton2.style.color = "white";
                    skipButton2.style.border = "2px solid white";
                    skipButton2.style.padding = "10px";
                    skipButton2.style.cursor = "pointer";
                    skipButton2.style.borderRadius = "10px";
                    var skipButton3 = document.createElement("button");
                    skipButton3.textContent = "Exit Mod Menu";
                    skipButton3.style.position = "absolute";
                    skipButton3.style.top = "68%";
                    skipButton3.style.left = "69%";
                    skipButton3.style.transform = "translate(-50%, -50%)";
                    skipButton3.style.backgroundColor = "transparent";
                    skipButton3.style.color = "white";
                    skipButton3.style.border = "2px solid white";
                    skipButton3.style.padding = "10px";
                    skipButton3.style.fontFamily = "'Quicksand', sans-serif";
                    skipButton3.style.cursor = "pointer";
                    skipButton3.style.borderRadius = "10px";
                    var skipButton4 = document.createElement("button");
                    skipButton4.textContent = "Answer Question";
                    skipButton4.style.position = "absolute";
                    skipButton4.style.top = "68%";
                    skipButton4.style.fontFamily = "'Quicksand', sans-serif";
                    skipButton4.style.left = "38.5%";
                    skipButton4.style.transform = "translate(-50%, -50%)";
                    skipButton4.style.backgroundColor = "transparent";
                    skipButton4.style.color = "white";
                    skipButton4.style.border = "2px solid white";
                    skipButton4.style.padding = "10px";
                    skipButton4.style.cursor = "pointer";
                    skipButton4.style.borderRadius = "10px";
                    skipButton4.style.width = "33%";
                    skipButton4.addEventListener("click", function () {
                        /* start */
                        function extractQuestionAndAnswers() {
                            const multipleChoiceQuestion = document.querySelector('span.jXx6kcbQBF p');
                            const openEndedQuestion = document.querySelector('span.jXx6kcbQBF:nth-of-type(1) p');
                            let question;
                            if (multipleChoiceQuestion) {
                                question = multipleChoiceQuestion.innerText.trim();
                            } else if (openEndedQuestion) {
                                question = openEndedQuestion.innerText.trim();
                            }
                            const answerElements = document.querySelectorAll('ul.S22KF9HiqC li');
                            const answers = [];
                            answerElements.forEach((element, index) => {
                                const answerText = element.querySelector('span.kvVVRmoyRB p').innerText.trim();
                                answers.push(`${index + 1}. ${answerText}`);
                            });
                            return { question, answers };
                        }

                        async function sendAIRequest(question, answers) {
                            const payload = {
                                prompt: `Answer the Question in 1 sentence max, using very simple words and vocab: ${question}`,
                                numResults: 1,
                                epoch: 0,
                                maxTokens: 2400,
                                temperature: 1,
                                topKReturn: 8,
                                topP: 1,
                                presencePenalty: {
                                    scale: 1,
                                    applyToNumbers: true,
                                    applyToPunctuations: true,
                                    applyToStopwords: true,
                                    applyToWhitespaces: true,
                                    applyToEmojis: true
                                },
                                countPenalty: {
                                    scale: 0.1,
                                    applyToNumbers: true,
                                    applyToPunctuations: true,
                                    applyToStopwords: true,
                                    applyToWhitespaces: true,
                                    applyToEmojis: true
                                },
                                frequencyPenalty: {
                                    scale: 5,
                                    applyToNumbers: true,
                                    applyToPunctuations: true,
                                    applyToStopwords: true,
                                    applyToWhitespaces: true,
                                    applyToEmojis: true
                                },
                                stopSequences: []
                            };

                            try {
                                const response = await fetch('https://api.ai21.com/studio/v1/j2-ultra/complete', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': 'Bearer IWO4ideX3gNOcxJVt2zks1vVc3P7tIms'
                                    },
                                    body: JSON.stringify(payload)
                                });
                                const data = await response.json();
                                return data;
                            } catch (error) {
                                console.error('Error sending AI request:', error);
                                return null;
                            }
                        }
                        async function main() {
                            const { question, answers } = extractQuestionAndAnswers();
                            if (!question) {
                                alert('Please execute the mod on an active EdPuzzle Question. Right now, you are just viewing the video, but no question is currently being shown on the EdPuzzle.');
                                return;
                            }
                            let aiResponse;
                            if (question.includes('OPEN-ENDED QUESTION')) {
                                alert('Unknown Error Please Contact Support :(');
                                return;
                            } else {
                                aiResponse = await sendAIRequest(question, answers);
                            }
                            if (aiResponse) {
                                const responseText = aiResponse.completions[0].data.text;
                                if (responseText.trim()) {
                                    const message = `${responseText.trim()}`;
                                    alert(message);
                                } else {
                                    alert('No response from AI');
                                }
                            } else {
                                alert('Failed to get AI response. Contact smorenitez2 on Discord for assistance.');
                            }
                        }
                        document.addEventListener('click', function (event) {
                            if (event.target.classList.contains('Q8cNoBMJ58')) {
                                event.target.style.height = '99px';
                            }
                        });
                        main();
                        /* end */
                    });
                    var skipButton5 = document.createElement("button");
                    skipButton5.textContent = "Support";
                    skipButton5.style.position = "absolute";
                    skipButton5.style.top = "50%";
                    skipButton5.style.left = "74%";
                    skipButton5.style.fontFamily = "'Quicksand', sans-serif";
                    skipButton5.style.transform = "translate(-50%, -50%)";
                    skipButton5.style.backgroundColor = "transparent";
                    skipButton5.style.color = "white";
                    skipButton5.style.border = "2px solid white";
                    skipButton5.style.padding = "10px";
                    skipButton5.style.cursor = "pointer";
                    skipButton5.style.borderRadius = "10px";
                    skipButton5.addEventListener("click", function () {
                        alert("Contact @smorenitez2 on Discord for assistance.");
                    });
                    skipButton3.addEventListener("click", function () {
                        location.reload();
                    });

                    skipButton2.addEventListener("click", function () {
                        var userInput = prompt("Hello! How can I assist you today?");
                        if (userInput) {
                            var apiUrl = "https://api.ai21.com/studio/v1/j2-ultra/complete";
                            var authToken = "Bearer IWO4ideX3gNOcxJVt2zks1vVc3P7tIms";
                            var promptText = "Answer User Message/Question in 1 sentence max with simple words and vocab: '" + userInput + "'.";
                            var payload = {
                                "prompt": promptText,
                                "numResults": 1,
                                "epoch": 0,
                                "maxTokens": 2400,
                                "temperature": 1,
                                "topKReturn": 8,
                                "topP": 1,
                                "presencePenalty": {
                                    "scale": 1,
                                    "applyToNumbers": true,
                                    "applyToPunctuations": true,
                                    "applyToStopwords": true,
                                    "applyToWhitespaces": true,
                                    "applyToEmojis": true
                                },
                                "countPenalty": {
                                    "scale": 0.1,
                                    "applyToNumbers": true,
                                    "applyToPunctuations": true,
                                    "applyToStopwords": true,
                                    "applyToWhitespaces": true,
                                    "applyToEmojis": true
                                },
                                "frequencyPenalty": {
                                    "scale": 5,
                                    "applyToNumbers": true,
                                    "applyToPunctuations": true,
                                    "applyToStopwords": true,
                                    "applyToWhitespaces": true,
                                    "applyToEmojis": true
                                },
                                "stopSequences": []
                            };

                            fetch(apiUrl, {
                                method: "POST",
                                headers: {
                                    "Authorization": authToken,
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(payload)
                            })
                                .then(response => response.json())
                                .then(data => {
                                    var completion = data.completions[0].data.text;
                                    completion = completion.replace(/\n/g, "");
                                    alert(completion);
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    alert("An error occurred while processing your request.");
                                });
                        }
                    });

                    blackContainer.appendChild(skipButton);
                    blackContainer.appendChild(skipButton2);
                    blackContainer.appendChild(skipButton3);
                    blackContainer.appendChild(skipButton4);
                    blackContainer.appendChild(skipButton5);

                    /* footer text */
                    var footerText = document.createElement("div");
                    footerText.textContent = "Made by smorenitez - TikTok: @smorenitez";
                    footerText.style.position = "absolute";
                    footerText.style.fontFamily = "'Quicksand', sans-serif";
                    footerText.style.bottom = "10px";
                    footerText.style.left = "48%";
                    footerText.style.transform = "translateX(-50%)";
                    footerText.style.color = "#888";
                    footerText.style.fontSize = "10px";

                    blackContainer.appendChild(footerText);
                    var footerText2 = document.createElement("div");
                    footerText2.textContent = "February 13th, 2024 verison";
                    footerText2.style.position = "absolute";
                    footerText2.style.bottom = "8%";
                    footerText2.style.left = "48%";
                    footerText2.style.fontFamily = "'Quicksand', sans-serif";
                    footerText2.style.transform = "translateX(-50%)";
                    footerText2.style.color = "#888";
                    footerText2.style.fontSize = "10px";

                    blackContainer.appendChild(footerText2);
                    var footerText3 = document.createElement("div");
                    footerText3.textContent = "Welcome! Click to activate mods";
                    footerText3.style.position = "absolute";
                    footerText3.style.bottom = "62%";
                    footerText3.style.left = "49%";
                    footerText3.style.fontFamily = "'Quicksand', sans-serif";
                    footerText3.style.transform = "translateX(-50%)";
                    footerText3.style.color = "rgb(255 255 255)";
                    footerText3.style.fontSize = "16px";

                    blackContainer.appendChild(footerText3);

                    document.body.appendChild(blackContainer);

                    var isDragging = false;
                    var initialX, initialY;
                    var offsetX, offsetY;

                    titleBar.addEventListener("mousedown", function (event) {
                        isDragging = true;
                        initialX = event.clientX;
                        initialY = event.clientY;

                        offsetX = event.clientX - blackContainer.offsetLeft;
                        offsetY = event.clientY - blackContainer.offsetTop;

                        event.preventDefault();
                    });

                    document.addEventListener("mousemove", function (event) {
                        if (isDragging) {
                            var newX = event.clientX - offsetX;
                            var newY = event.clientY - offsetY;

                            blackContainer.style.left = newX + "px";
                            blackContainer.style.top = newY + "px";
                        }
                    });

                    document.addEventListener("mouseup", function (event) {
                        isDragging = false;
                    });
                    var startTime = null;
                    var duration = 150;

                    function animate(timestamp) {
                        if (!startTime) startTime = timestamp;
                        var progress = timestamp - startTime;
                        blackContainer.style.opacity = Math.min(progress / duration, 1);
                        blackContainer.style.transform = "translate(-50%, -50%) scale(" + (progress / duration) + ")";
                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        }
                    }
                    requestAnimationFrame(animate);
                }, 500);
                setTimeout(() => {
                    leftText.style.fontSize = '1';
                    rightText.style.fontSize = '0px';
                    setTimeout(() => {
                        leftText.textContent = 'EdPuzzle Mod Menu Successfully Injected';
                        leftText.style.fontSize = '';
                        rightText.style.fontSize = '0px';
                    }, 500);
                }, 1000);
            }
        }, 100);
        setTimeout(() => {
            toast.style.top = '20px';
        }, 100);
        setTimeout(() => {
            toast.style.top = '-100px';
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }
    createToast('');
}());
