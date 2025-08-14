let isLiked=false
let isShared=false



document.addEventListener('click', function(e){

     if(e.target.dataset.share){

      //   console.log(e.target.dataset.share)
      isShared=!isShared
      render()
     }
     else if(e.target.dataset.heart){

      // console.log(e.target.dataset.heart)
      isLiked=!isLiked
      render()
     }

    
})


function render(){

   let heartClass=""
   let sharedClas=""
   if(isLiked){
      heartClass="liked"
   }
   else{
      heartClass=""
   }
  let imageHtml=`  <div class="img-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu0gDjAwREMHcPyRaI6ivZ91fn6ynm-_6OQ&s"
          alt="Man in front of dinosaur"
          id="image-1"
        />
        <div class="social-icons-container">
          <i class="fa-solid fa-heart ${heartClass}" data-heart="image-1"></i>
          <i class="fa-solid fa-share" data-share="image-1"></i>
        </div>
      </div>`
}

