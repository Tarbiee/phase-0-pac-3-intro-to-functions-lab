function shout(string){
    return string.toUpperCase();
}
console.log(shout("Luvuno"));

function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("Luvuno"));

function logShout(string){
    const text = string.toUpperCase();
    console.log (text);
}
logShout("Luvuno");

function logWhisper(string){
    console.log(string.toLowerCase());
}
logWhisper("Luvuno");

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
    return  "I can't hear you!";
    }
    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
    else(string === string.toUpperCase());{
        return "YES INDEED!";
        }

}    
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));