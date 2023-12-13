let id=new URLSearchParams(window.location.search).get("id");
const sections=document.querySelector("#sections")
fetch(`http://localhost:3000/post/`)
.then(res=>res.json())
.then(data=>{
   data.forEach(element => {
      
   }) sections.innerHTML+=`
   <div class="each">
           <i class="bi bi-heart"></i>
           <div class="c">
        <div class="f-1">
           <img src="${data.image}" alt="">
        </div>
        <div class="f-2">
           <h1>${data.name}</h1>
           <p>${data.description}</p>
        </div>
       </div>
   </div>
   `
       
    });

