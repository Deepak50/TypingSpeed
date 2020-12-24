
"use strict"

//global scope
let textArr = ["I am an element in the text array", "This is the ultimate speed test", "Hey there im using whatsapp"]
let date = new Date();
var startTime, endTime;
const speed = () => {
    let text = document.getElementById('text').value;
    let quest = document.getElementById('quest').innerText;
    let questWords = quest.split(" ");
    console.log(questWords);  //un
    let wordArr = text.split(" ");
    let length = wordArr.length;
    //var timeTaken = new Date();
    var timeTaken = endTime - startTime;
    document.getElementById("tt").innerText = "Time Taken :" + timeTaken;

    //typing speed
    let typingSpeed = Math.round((length / timeTaken) * 1000 * 60);
    document.getElementById("speed").innerText = "Speed :" + typingSpeed;

    //correctness
    let cnt=0;
    wordArr.forEach(function (item, index){
        if(item == questWords[index]){
            cnt++;
        }
    })
    document.getElementById('correct').innerText = "Correct: "+cnt;
    //console.log(cnt);
}



//get the strting time
const startT = () => {
    let date = new Date();
    startTime = date.getTime();
}

//get the ending time
const endT = () => {
    let date = new Date();
    endTime = date.getTime();
}
function display(){
    let random = Math.floor(Math.random() * textArr.length); //display the questions
    let quest = document.getElementById('quest');
    quest.innerText = textArr[random];
}

function submit() {
    let a = document.getElementById('submit');
    if (a.innerText == "START") {
        a.innerText = "DONE";      // ENABLE THE TEXT BOX
        display();
        startT();   //get the time once the question is shown
    }

    else if (a.innerText == "DONE") {
        endT();    //get the end time once the done button is clicked
        a.innerText = "START";
        //DISABLE THE TEXT BOX
        speed();
    }


}