function showdiv(){
    var side=document.getElementById('side-bar');
    if(side.style.display = 'none' || side.style.display=='') { 
    side.style.display ='block';
    }
    else{
        side.style.display ='none'; 
    }



    let arrow = document.querySelectorAll("side-hidee");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
     let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
     arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector("side-bar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
    });

}


