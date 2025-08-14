import { tweetsData } from "./data.js";
// console.log(tweetsData)
const tweetInput=document.getElementById("tweet-input")
const twitButton=document.getElementById("tweet-btn")
const feed=document.getElementById("feed")

document.addEventListener("click",function(e){

    if(e.target.dataset.reply){
        console.log(e.target.dataset.reply)
    }
    else if(e.target.dataset.likes){
       
        handleLikeClick(e.target.dataset.likes)
        // console.log(e.target.dataset.likes)
    }
    else if(e.target.dataset.retweets){
        
        handleRetweetClick(e.target.dataset.retweets)
        // console.log(e.target.dataset.retweets)
    }
})

function handleLikeClick(tweetId){
    const targetTweetObj=tweetsData.filter(function(tweet){
        return tweet.uuid===tweetId
    })[0]
    // console.log("function" ,tweetId)

    if(targetTweetObj.isLiked){
        targetTweetObj.isLiked=false
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.isLiked=true
        targetTweetObj.likes++
    }
    render()
    // console.log(targetTweetObj)
}
function handleRetweetClick(tweetId){
    const targetTweetObj=tweetsData.filter(function(tweet){
        return tweet.uuid===tweetId
    })[0]
    // console.log("function" ,tweetId)

    if(targetTweetObj.isShared){
        targetTweetObj.isShared=false
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.isShared=true
        targetTweetObj.retweets++
    }
    render()
    // console.log(targetTweetObj)
}

twitButton.addEventListener("click",function(){
     
    // console.log(tweetInput.value)
    tweetInput.value=""
})

function getfeedHtml(){
    
    
    
    let feedHtml=""
    tweetsData.forEach(function(tweet){

    let likeIconClas=""
    let retweetIconClass=""
     feedHtml +=`<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">

                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart" data-likes="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet" data-retweets="${tweet.uuid}"></i>
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

