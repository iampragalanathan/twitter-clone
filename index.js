import { tweetsData } from "./data.js";
console.log(tweetsData)
const tweetInput=document.getElementById("tweet-input")
const twitButton=document.getElementById("tweet-btn")
const feed=document.getElementById("feed")

twitButton.addEventListener("click",function(){
     
    // console.log(tweetInput.value)
    tweetInput.value=""
})

function getfeedHtml(){

    let feedHtml=""
    tweetsData.forEach(function(tweet){
     feedHtml +=`<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet"></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`   
})

return feedHtml
}

function render(){

    feed.innerHTML = getfeedHtml()
}

render()