var array = ["1", "2", "3", "4", "5"];
var arrayBool = false;
var value = Math.PI;
var newWindow;
var hasClicked = false;


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


window.onload = function() {

};

//this now works, finally!
function showArray(){
    var array = ["1", "2", "3", "4", "5"];
    document.getElementById("arrayButton").style.color = "red";
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

function switchWords(){
    var replace = /(\w+)\s(\w+)/;
    var txt = document.getElementById("switchWords").value;
    var newText = txt.replace(replace, '$2 $1');
    document.getElementById("switchOutput").innerHTML = "Output: \"" + newText +"\"";   
}

function windowInfo(){
    alert("This is meant to test the window functions!");
    var answer = confirm("Would you like to continue?");
    if(!answer){
        return;
    }
    document.getElementById("windowOutput").innerHTML = prompt("Type in your name: ", "Your Name");
}

function openWindow(){
    if(!hasClicked){
        newWindow = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        hasClicked = true;
    }
    else{
        newWindow.close();
        hasClicked = false;
    }
    
}
