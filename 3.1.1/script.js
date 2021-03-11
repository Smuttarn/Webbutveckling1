var array = ["1", "2", "3", "4", "5"];
var temp = false;
var value = Math.PI;
//Button functions
document.getElementById("arrayButton").onclick = function() {showArray()};
document.getElementById("boolButton").onclick = function() {changeBool()};
document.getElementById("dateButton").onclick = function() {displayDate()};

document.getElementById("mathStuff").onchange = function() {multiplyPi()};

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

    if(temp){
        temp = false;
        text = "false";
    }
    else if(!temp){
        temp = true;
        text = "true";
    }
    document.getElementById("thetruth").innerHTML = text;
}

function displayDate(){
    var date = new Date();
    document.getElementById("thedate").innerHTML = date;
}

function multiplyPi(){
    var output;

    value *= document.getElementById("mathStuff").value;
    output = value;

    document.getElementById("mathOutput").innerHTML = output;
    document.getElementById("mathStuff").value = "";

}