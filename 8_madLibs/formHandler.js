function write() {
console.log("Inside the function");
let username = document.getElementById("username").value;
console.log(username);
let faveplace = document.getElementById("faveplace").value;
console.log(faveplace)
let blehanimal = document.getElementById("blehanimal").value;
console.log(blehanimal)
let thing = document.getElementById("thing").value;
console.log(thing)



let activity;
if (document.querySelector("input[name='activities']:checked") !=null) { activity = document.querySelector("input[name='activities']:checked").value;
}
console.log(activity);
    

let activityMessage;
if (activity == "Running") {
    activityMessage = " Running,";

} else if (activity == "Eating") {
    activityMessage = " Eating,";
} else if (activity == "Sneezing") {
    activityMessage = " Sneezing,";
} else if (activity == "Backflipping") {
    activityMessage = " Backflipping,";
    document.getElementById("shrimp").style.backgroundImage = "url('images/jonathan.png')";
}
console.log(activityMessage);


let emotion = document.getElementById("emotion").value;
console.log(emotion)
let adj = document.getElementById("adj").value;
console.log(adj)
let skycolor = document.getElementById("skycolor").value;
console.log(skycolor)
let currency = document.getElementById("currency").value;
console.log(currency)
let randoname = document.getElementById("randoname").value;
console.log(randoname)
let shellfish = document.getElementById("shellfish").value;
console.log(shellfish)



document.getElementById("output").innerHTML = 
"Yesterday " + username + " and his friends went to " + faveplace + " for the afternoon.";

document.getElementById("output").innerHTML +=
" During their visit they saw a massive " + blehanimal + " dancing on top of a very disturbing looking " + thing + ". Everyone around them began " + 
activityMessage + " and they could not stop " + 
emotion + ". That day was the most " +
adj + " day they had ever experienced. From that day on the sky randomly turned " +
skycolor + " and it started raining " +
currency + ". " + 
randoname + " was elected President, and " + 
shellfish + " became largely abundant. Nothing about this world ever made sense again.";  



}