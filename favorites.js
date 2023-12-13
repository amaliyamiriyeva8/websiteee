let id=new URLSearchParams(window.location.search).get("id");
const sections=document.querySelector(".for")
fetch(`http://localhost:3000/post/${id}`)
.then(res=>res.json())
.then(data=>{
   data.forEach(element => {
       sections.innerHTML+=`
   <div class="each">
           <div class="c">
        <div class="f-1">
           <img src="${element.image}" alt="">
        </div>
        <div class="f-2">
           <h1>${element.name}</h1>
           <p>${element.description}</p>
        </div>
       </div>
   </div>
   `
})  
});

