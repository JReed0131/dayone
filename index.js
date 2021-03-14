console.log("hello world");
var age;//variable declaration
console.log(age);
age=31;//assignment statement
console.log(age);
var height=6;
console.log(height);
var pressure=205;
var temp = 60;
if(pressure>200) {
    console.log("big trouble");
}
else if(pressure>150) {
    // '' === ""
    console.log('attention needed lets be proactive');
}
else {
    console.log("normal operation")
}
// AND operator &&
if (pressure > 200 && temp > 100) {

}
// OR operator ||
if (pressure > 200 || temp < 20) {
    // do this when the pressure is greator than 200 or the temp less than 20
}

// <, >, <=, >=, ===
if (pressure === 100) {
    //do this if the pressure is exactly 100 
}

function convertToCelcius(tempInFarenheit) {
    return (tempInFarenheit - 32) * (5/9);
}

var degreesInCelcius = convertToCelcius(212);
console.log(degreesInCelcius);