
// Initialize Firebase
let config = {
apiKey: "AIzaSyD_-I3-LPhOnHXm9jmyn4LTuqXnX21KgWU",
authDomain: "handwriting-88844.firebaseapp.com",
projectId: "handwriting-88844",
};
firebase.initializeApp(config);
function createImages(array){
array.map((x)=>{
        if( x ==  " "){
            document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/space.png"/>`
        }else if(x ==  "'"){
            document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/apostrophe.png"/>`
        }else if(x == '"'){
            document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/quotation.png"/>`
        }else if(x == ","){
            document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/comma.png"/>`
        }else if(x == "."){
            document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/periodDot.png"/>`
        }else if(x == x.toUpperCase()){
                document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/${x}Upper.png"/>`
        }else if(x == x.toLowerCase()){
                document.getElementById("result").innerHTML += `<img class = "imgStyle" src="./images/${x}.png"/>`    
        }
    })
}
function splitWords(word){
    let arrayOfLetters = word.split("");
    createImages(arrayOfLetters);
}
function getInput(){
    document.getElementById("result").innerHTML = "";
    splitWords(document.getElementById("word").value);
}
function insertBlankRow(){
    let spaces = " ";
    document.getElementById("word").value += `${spaces.repeat(20)}`;
    getInput();
    //sets the input in focus and the curser at the end
    let inputbox = document.getElementById("word");
    inputbox.focus();
};
function printFriendly(){
    document.getElementById("word").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "hidden";
    document.getElementById("enter").style.visibility = "hidden";
    document.getElementById("insert").style.visibility = "hidden";
    document.getElementById("print").style.visibility = "hidden";
}
document.getElementById("print").addEventListener("click",printFriendly);
document.getElementById("insert").addEventListener("click",insertBlankRow);
onload = function () {
let e = document.getElementById('word');
e.oninput = getInput;
e.onpropertychange = e.oninput; 
};