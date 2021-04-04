const introImage = document.querySelector(".intro_image")
introImage.style.cssText = "transition-duration: 3s;height:100%;top:0;opacity:100%";


const introLabel = document.querySelector(".intro_label")
introLabel.style.cssText = "transition-duration: 3s;bottom:40%;opacity:100%";

function dropdownmenu(){
    var x =document.getElementById("dropdownClick");
    // change topnav to topnav.responsive
    if (x.className ==="topnav"){x.className+=" responsive";}
    // change topnav.responsive to topnav
    else{x.className = "topnav";} 
    }