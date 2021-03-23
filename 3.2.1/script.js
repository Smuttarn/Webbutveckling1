var array = ["1", "2", "3", "4", "5"];
var arrayBool = false;
var value = Math.PI;
var newWindow;
var windowHasClicked = false;
var counterHasClicked = false;
var timerTemp;
var counterTemp;

var square = document.querySelector("#mouseEventImg");
var switchWordsBox = document.getElementById("switchWords");


//Button functions
document.getElementById("arrayButton").onclick = function() {showArray()};
document.getElementById("boolButton").onclick = function() {changeBool()};
document.getElementById("dateButton").onclick = function() {displayDate()};
document.getElementById("dateNumberButton").onclick = function() {displayDateNumbers()};

document.getElementById("showGlobal").onclick = function() {showGlobal()};

document.getElementById("mathStuff").onchange = function() {multiplyPi()};
document.getElementById("switchWords").onkeyup = function() {updateWords()};
document.getElementById("switchWords").onchange = function() {switchWords()};

document.getElementById("windowStuff").onclick = function() {windowInfo()};

document.getElementById("newWindow").onclick = function() {openWindow()};
document.getElementById("timer").onclick = function() {setTimer(3000)};
document.getElementById("counter").onclick = function() {counter()};

//Mouse functions
document.getElementById("mouseEventImg").onmouseover = function(){mouseOver()};
document.getElementById("mouseEventImg").onmouseout = function(){mouseOut()};

square.addEventListener("mousemove", updateCoordinates, false);
square.addEventListener("mouseenter", updateCoordinates, false);
square.addEventListener("mouseleave", clearCoordinates, false);

switchWordsBox.addEventListener("keypress", switchWords, false);

window.onload = function() {

};

//this now works, finally!
function showArray(){
    var array = ["1", "2", "3", "4", "5"];
    document.getElementById("testarray").innerHTML = array.toString();
}

function changeBool(){
    var text;

    if(arrayBool){
        arrayBool = false;
        text = "false";
    }
    else if(!arrayBool){
        arrayBool = true;
        text = "true";
    }
    document.getElementById("thetruth").innerHTML = text;
}

function displayDate(){
    var date = new Date();
    document.getElementById("thedate").innerHTML = date;
}

function displayDateNumbers(){
    var date = new Date();
    document.getElementById("thedate").innerHTML = Number(date);
}

function multiplyPi(){
    var output;

    value *= document.getElementById("mathStuff").value;
    output = value;

    document.getElementById("mathOutput").innerHTML = output;
    document.getElementById("mathStuff").value = "";
}

function showGlobal(){
    document.getElementById("globalOutput").innerHTML = globalThis.location.toString();
}

function updateWords(){
    var text = document.getElementById("switchWords").value;
    document.getElementById("typingOutput").innerHTML = "Input: \"" + text + "\"";
}

function switchWords(event){
    var txt = document.getElementById("switchWords").value;

    if(event.charCode == 32){
        if(txt.split(" ").length - 1 == 1){
            document.getElementById("switchOutput").innerHTML = "You may only type two words!";
            document.getElementById("switchWords").value = "";
            event.preventDefault();
        }
    }
    else if(event.charCode == 13){
        var replace = /(\w+)\s(\w+)/;
    
        var newText = txt.replace(replace, '$2 $1');
        document.getElementById("switchOutput").innerHTML = "Output: \"" + newText +"\"";   
    }
}


function windowInfo(){
    alert("This is meant to test the window functions!");
    var answer = confirm("Would you like to continue?");
    if(!answer){
        return;
    }
    document.getElementById("windowOutput").innerHTML = "Hello, " + prompt("Type in your name: ", "Your Name");
}

function openWindow(){
    if(!windowHasClicked){
        newWindow = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        windowHasClicked = true;
    }
    else{
        newWindow.close();
        windowHasClicked = false;
    }

}

function displayBoom(){
    document.getElementById("timerOutput").innerHTML = "BOOM!"
}

function setTimer(milliseconds){
    var sec = milliseconds / 1000;

    timerTemp = setInterval(function(){
            document.getElementById("timerOutput").innerHTML = sec;
            if(sec == 0){
                displayBoom();
                clearInterval(timerTemp);
            }
            sec--;
        },1000);
}

function counter(){
    if(!counterHasClicked){
        counterHasClicked = true;
        document.getElementById("counterOutput").innerHTML = "Alert in three seconds!";
        counterTemp = setTimeout(function(){
            alert("RUN!");
            document.getElementById("counterOutput").innerHTML = "";
            counterHasClicked = false;
        }, 3000);
    }
    else{
        counterHasClicked = false;
        clearTimeout(counterTemp);
        document.getElementById("counterOutput").innerHTML = "Alert aborted!";
    }
}


function mouseOver(){
    document.getElementById("mouseEventImg").style.background = "red";
}

function mouseOut(){
    document.getElementById("mouseEventImg").style.background = "";
}

function updateCoordinates(event){
    var bounds = document.getElementById("mouseEventImg").getBoundingClientRect();
    document.getElementById("mousePosition").innerHTML = "x = " + (event.pageX - bounds.left) + ", y = " + (event.pageY - bounds.top);
}

function clearCoordinates(){
    document.getElementById("mousePosition").innerHTML = "";
}
