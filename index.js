import { tweetsData } from "./data.js";
console.log(tweetsData)
const tweetInput=document.getElementById("tweet-input")
const twitButton=document.getElementById("tweet-btn")

twitButton.addEventListener("click",function(){
     
    console.log(tweetInput.value)
    tweetInput.value=""
})


for(let tweet of tweetsData){

     console.log(tweet)
   
}

