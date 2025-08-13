document.addEventListener('click', function(e){

     if(e.target.dataset.share){

        console.log(e.target.dataset.share)
     }
     else if(e.target.dataset.heart){

      console.log(e.target.dataset.heart)
     }
    
})


