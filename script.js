const nav=document.querySelector("nav")

window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        nav.style.backgroundColor="rgba(0,0,0,0.8)"
        nav.style.transition = "all 1s ease";
        nav.style.position="fixed"
        nav.style.zIndex="1000"
    }
    else{
        nav.style.backgroundColor="";
        nav.style.transition = "all 1s ease";
    }
})

const icon=document.querySelector(".icon")
const was=document.querySelector(".was")
const x=document.querySelector("#icon-1")

icon.addEventListener("click",()=>{
    was.style.display="flex"
    icon.style.display="none"
})

x.addEventListener("click",()=>{
    was.style.display="none";
    icon.style.display="flex"
    
})
was.addEventListener("click",(e)=>{
  if(e.target==was){
    was.style.display="none";
    icon.style.display="flex"
  }
})