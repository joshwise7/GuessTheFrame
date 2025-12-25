/*---------------------------------------------------------------------- THEME_SWITCH_START ----------------------------------------------------------------------*/

const toggleSwitch = document.querySelector('.theme-switch-second input[type="checkbox"]');

function switchTheme() {
    if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);
switchTheme();



/* ----------------------------- INFO-POPUP ----------------------------- */

window.addEventListener('load', () => {
    document.getElementById('infoMain').style.opacity = 1
    document.getElementById('infoMain').style.zIndex = 9999
})
function startTest(){
    document.getElementById('infoMain').style.opacity = 0
    document.getElementById('infoMain').style.zIndex = -2
    document.getElementById('bar').style.animationPlayState = 'running'
    document.addEventListener('contextmenu', event => event.preventDefault());
}



/* ----------------------------- DONT-LEAVE-THE-TAB-MAN ----------------------------- */

document.addEventListener('visibilitychange', function(){
    if(document.visibilityState == 'hidden'){
        if(window.getComputedStyle(document.getElementById('infoMain')).opacity == 0){
            final()
        }
    }
})



/* ----------------------------- ALSO-DONT-RELOAD ----------------------------- */

document.addEventListener('keydown', function(event){
    if(window.getComputedStyle(document.getElementById('infoMain')).opacity == 0){
        if(event.key == 'F5' ||
            (event.ctrlKey && event.key === 'r') ||
            (event.metaKey && event.key === 'r')){
                event.preventDefault()
        }
    }
})



/* ----------------------------- JSON-DATA ----------------------------- */

questions = [
      {
        "id": 1,
        "question": "QUES/1.jpg",
        "options": ["Ex Machina", "Snowpiercer", "Edge of Tomorrow", "Mickey 17"],
        "answer": "Mickey 17",
        "ansID": "4"
      },
      {
        "id": 2,
        "question": "QUES/2.jpg",
        "options": ["Captain America: Brave New World", "Superman", "Black Widow", "The Batman"],
        "answer": "Captain America: Brave New World",
        "ansID": "1"
      },
      {
        "id": 3,
        "question": "QUES/3.jpg",
        "options": ["Death of a Unicorn", "Romeo + Juliet", "Friendship", "Clueless"],
        "answer": "Friendship",
        "ansID": "3"
      },
      {
        "id": 4,
        "question": "QUES/4.jpg",
        "options": ["Ghost in the Shell", "Akira", "Paprika", "The Tale of the Princess Kaguya"],
        "answer": "Akira",
        "ansID": "2"
      },
      {
        "id": 5,
        "question": "QUES/5.jpg",
        "options": ["Thunderbolts", "Eternals", "The Fantastic Four: First Steps", "Madame Web"],
        "answer": "Thunderbolts",
        "ansID": "1"
      },
      {
        "id": 6,
        "question": "QUES/6.jpg",
        "options": ["Eyes Wide Shut", "Magnolia", "Lions for Lambs", "A Few Good Men"],
        "answer": "Magnolia",
        "ansID": "2"
      }
    ]



// /* ------------------------------------ SOON ------------------------------------ */

// let Today = new Date().getDate()
// let start = 0
// let end = 15

// function onDayChange(){
//     let startIndex = start+15
//     let endIndex = end+15

//     if(endIndex == questions.length + 15){
//         placeIDs = []
//         let startIndex = 0
//         let endIndex = 15
//         questions.slice(startIndex, endIndex).map((item) => {
//             placeIDs.push({
//                 "id": item.id,
//                 "question": item.question,
//                 "options": item.options,
//                 "answer": item.answer,
//                 "ansID": item.ansID
//             });
//         });
//         console.log(placeIDs)
//     }
//     else{
//         placeIDs = []
//         questions.slice(startIndex, endIndex).map((item) => {
//             placeIDs.push({
//                 "id": item.id,
//                 "question": item.question,
//                 "options": item.options,
//                 "answer": item.answer,
//                 "ansID": item.ansID
//             });
//         });
//         console.log(placeIDs)
//     }
// }

// placeIDs = []
// questions.slice(0, 15).map((item) => {
//     placeIDs.push({
//         "id": item.id,
//         "question": item.question,
//         "options": item.options,
//         "answer": item.answer,
//         "ansID": item.ansID
//     });
// });
// console.log(placeIDs)

// setInterval(() => {
//     const newDay = new Date().getDate();
//     if(newDay!==Today){
//         Today = newDay
//         onDayChange()
//     }
// }, 60000);



/* ----------------------------- QUESTION-PROGRESS-DATA ----------------------------- */

let id = 1
let total = 0
const displayQuestionProgress = questions.map((value) => {
    total += 1
    return `<div class="box box-selected-bg" onclick="jump(${value.id})" id="box${value.id}">${value.id}</div>`
})

document.getElementById("questionProgress").innerHTML = displayQuestionProgress.join("")



/* ----------------------------- ANSWER-DATA ----------------------------- */

let ansData = []
function boxCheck(boxID, btnID){
    document.getElementById(`box${boxID}`).innerHTML = "&#10003;"


    const existingIndex = ansData.findIndex(value => value.questionID === boxID);
    if (existingIndex !== -1) {
        ansData.splice(existingIndex, 1);
    }
    ansData.push(
        {
            questionID : boxID,
            answerID : btnID
        }
    )
    console.log(ansData)
}



/* ----------------------------- DISPLAYING-ALL-QUESTIONS ----------------------------- */

displayQuestion()

function displayQuestion(){
    const displayQuestions = questions.map((value) => {
        if(id == value.id){
            return `
            <div class="questionWrapper"></div>
            <img src="${value.question}" class="question" id="question${value.id}"></span>
            <div class="answers">
                <button id="1" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans"><span class="btnOptionText">${value.options[0]}</span></button>
                <button id="2" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans"><span class="btnOptionText">${value.options[1]}</span></button>
                <button id="3" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans"><span class="btnOptionText">${value.options[2]}</span></button>
                <button id="4" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans"><span class="btnOptionText">${value.options[3]}</span></button>
            </div>
            <div class="nextPrevBtns">
                <button class="prev" onclick="prev(); showSelected();">Prev</button>
                <button class="next" onclick="next(); showSelected();">Next</button>
            </div>
            <button class="finish" onclick="final();">Finish</button>
            <!-- <div class="progress"></div> -->
            `
        }
    })
    document.getElementById("questionCard").innerHTML = displayQuestions.join(" ")
    setTimeout(() => showSelected(id), 0);
}



/* ----------------------------- KEEPING-ANSWERS ----------------------------- */

function showSelected(currentQuestionId) {
    
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });

    ansData.forEach(value => {
        if (value.questionID == currentQuestionId) {
            const selectedButton = document.getElementById(value.answerID);
            if (selectedButton) {
                selectedButton.style.backgroundColor = 'limegreen';
                selectedButton.style.color = 'white';
            }
        }
    });
}



/* ----------------------------- JUMP-TO-QUESTION ----------------------------- */

function jump(ID){
    id = parseInt(ID)-1
    next()
}



/* ----------------------------- NEXT-QUESTION ----------------------------- */

document.querySelector('.question').addEventListener('load', function() {
    document.querySelector('.questionWrapper').classList.add('loaded');
});

document.querySelectorAll('.box').forEach(box => {
    box.classList.remove('box-selected-bg')
});
document.getElementById(`box1`).classList.add('box-selected-bg')

function next(){
    if(id == total){
        id=1
        displayQuestion()

        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('box-selected-bg')
        });
        document.getElementById(`box${id}`).classList.add('box-selected-bg')
        
        document.getElementById(`box${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        showSelected(id);
    }
    else{
        id += 1
        displayQuestion()

        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('box-selected-bg')
        });
        document.getElementById(`box${id}`).classList.add('box-selected-bg')
        
        document.getElementById(`box${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        showSelected(id);
    }
    
    displayQuestion()
    showSelected(id)

    document.querySelector('.question').addEventListener('load', function() {
        document.querySelector('.questionWrapper').classList.add('loaded');
    });

    document.querySelectorAll('.btnOptionText').forEach((btn) => {
        btn.style.opacity = 0;
    });

    requestAnimationFrame(() => {
        setTimeout(() => {
            document.querySelectorAll('.btnOptionText').forEach((btn) => {
                btn.style.opacity = 1;
            });
        }, 80);
    });

}



/* ----------------------------- PREVIOUS-QUESTION ----------------------------- */

function prev(){
    if(id>=2){
        id -= 1
        displayQuestion()
        
        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('box-selected-bg')
        });
        document.getElementById(`box${id}`).classList.add('box-selected-bg')

        document.getElementById(`box${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        showSelected(id);
    }
    else{
        id = 15
        displayQuestion()
        
        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('box-selected-bg')
        });
        document.getElementById(`box${id}`).classList.add('box-selected-bg')

        document.getElementById(`box${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        showSelected(id);
    }

    document.querySelector('.question').addEventListener('load', function() {
        document.querySelector('.questionWrapper').classList.add('loaded');
    });

    document.querySelectorAll('.btnOptionText').forEach((btn) => {
        btn.style.opacity = 0;
    });

    requestAnimationFrame(() => {
        setTimeout(() => {
            document.querySelectorAll('.btnOptionText').forEach((btn) => {
                btn.style.opacity = 1;
            });
        }, 80);
    });
    
}



/* ----------------------------- SHOWING-RESULT-ON-TIMEOUT ----------------------------- */

function animationEndCall(){
    final()
}
document.getElementById("bar").addEventListener('animationend',animationEndCall)



/* ----------------------------- FINAL-RESULT ----------------------------- */

let result = ""
countAns = 0
function final(){

    document.querySelector('.questionCard').style.opacity = 0;
    document.getElementById('questionProgress').style.opacity = 0

    setTimeout(() => {
        document.body.style.height = "100dvh"
        document.body.style.display = 'flex'
        document.body.style.alignItems = 'center'
        document.body.style.justifyContent = 'center'
        document.getElementById("questionCard").style.height = "auto"
        document.getElementById("questionCard").style.marginTop = "0em"
        document.getElementById('questionProgress').style.display = "none"
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.getElementById('bar').style.display = 'none'
        document.getElementById('seeAllAnswers').style.display = 'block'
        document.getElementById('questionProgress').style.borderRadius = '20px'

        document.querySelectorAll('.box').forEach(function(box){
            box.style.backgroundColor = '#e0e0e0'
        })

        questions.map((value) => {
            ansData.map((valueAns) => {
                if(value.id == valueAns.questionID){
                    if(value.ansID == valueAns.answerID){
                        countAns += 1
                    }
                }
            })
        })

        if((parseInt(countAns)*100)/parseInt(total) > 50){
            result = "CINEPHILE"
            document.getElementById("questionCard").innerHTML = `
            You scored <span style="color: limegreen; font-weight: bold;">${countAns}</span> out of ${total} Questions!
            <span class="result" style="background-color: limegreen;" id="result">${result}</span>
            <div class="cinephileLoad" id="cinephileLoad"></div>
            `

            document.getElementById('cinephile').addEventListener('load', function() {
                document.getElementById('cinephileLoad').style.opacity = 0
                document.getElementById('cinephileLoad').style.zIndex = -5
            })
        }
        else{
            result = "CINEPHOBE"
            document.getElementById("questionCard").innerHTML = `
            You scored <span style="color: red; font-weight: bold;">${countAns}</span> out of ${total} Questions!
            <span class="result" style="background-color: red;" id="result">${result}</span>
            <div class="cinephobeLoad" id="cinephobeLoad"></div>
            `

            document.getElementById('cinephobe').addEventListener('load', function() {
                document.getElementById('cinephobeLoad').style.opacity = 0
                document.getElementById('cinephobeLoad').style.zIndex = -5
            })
        }
    }, 200);

    setTimeout(() => {
        document.querySelector('.questionCard').style.opacity = 1;
    }, 200);
}


function seeAllAnswers(){

    if(window.innerWidth < 400){
        document.getElementById("questionCard").style.height = "80%"
    }
    document.querySelector('.questionCard').style.opacity = 0;

    setTimeout(() => {
        document.getElementById('seeAllAnswers').style.display = 'none'

        const allAnswers = questions.map((value) => {
            return `
                <div class="allAnswers">
                    <div class="allAnsIMGLoad" id="allAnsIMGLoad"></div>
                    <img id="allAnsIMG" src="${value.question}">
                    <span title="${value.answer}">${value.answer}</span>
                </div>
            `
        })

        document.getElementById('ansAll').innerHTML = allAnswers.join(" ")
        document.getElementById("questionCard").innerHTML = `<div class="ansAll" id="ansAll">`+document.getElementById('ansAll').innerHTML+`</div>`
        document.getElementById('ansAll').style.display = 'grid'
        document.getElementById('ansAll').style.opacity = 1
    }, 200);

    setTimeout(() => {
        document.querySelector('.questionCard').style.opacity = 1;
    }, 200);

    function imgLoad() {
        document.querySelectorAll('.allAnswers img').forEach(img => {
            const hideLoader = () => {
                const loader = img.parentElement.querySelector('.allAnsIMGLoad');
                if (loader) {
                    loader.style.opacity = '0';
                    loader.style.zIndex = '-5';
                }
            };
    
            if (img.complete) hideLoader();
            else img.addEventListener('load', hideLoader);
            img.addEventListener('error', hideLoader);
        });
    }

    setTimeout(imgLoad, 200);
}


function updateProgressWidth() {
    document.getElementById('progress').style.width = document.getElementById('questionProgress').offsetWidth + 'px';
    document.getElementById('progress').style.height = document.getElementById('questionProgress').offsetHeight + 'px';
}

window.addEventListener('resize', updateProgressWidth);
updateProgressWidth();
