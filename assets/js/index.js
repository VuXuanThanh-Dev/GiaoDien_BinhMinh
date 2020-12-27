let itemFirst = document.querySelector(".list__link-icon");
let lstTop = document.querySelector(".list-top");

itemFirst.onclick = function(){
    
    let hei = lstTop.clientHeight;
    if(hei === 24){
        this.setAttribute("style", "transform:rotateX(180deg)");
        lstTop.style.height = "auto";
    }else{
        this.setAttribute("style", "transform:rotateX(180deg)");
        lstTop.setAttribute("style", "height:24px");
    }

}