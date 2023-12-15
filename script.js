const nav = document.querySelector("nav")
const forname = document.querySelector(".for")
const search=document.querySelector(".search")
const arr=[];

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "rgba(0,0,0,0.8)"
        nav.style.transition = "all 1s ease";
        nav.style.position = "fixed"
        nav.style.zIndex = "1000"
    }
    else {
        nav.style.backgroundColor = "";
        nav.style.transition = "all 1s ease";
    }
})

const icon = document.querySelector(".icon")
const was = document.querySelector(".was")
const x = document.querySelector("#icon-1")

icon.addEventListener("click", () => {
    was.style.display = "flex"
    icon.style.display = "none"
})

x.addEventListener("click", () => {
    was.style.display = "none";
    icon.style.display = "flex"

})
was.addEventListener("click", (e) => {
    if (e.target == was) {
        was.style.display = "none";
        icon.style.display = "flex"
    }
})
function getDataJson(){
fetch(`http://localhost:3000/post?_page=${page}&_limit=3`)
    .then(res => res.json())
    .then(data => {
      arr.push(data)
        axios.get('http://localhost:3000/favorites')
            .then(fav => {
                data.forEach(element => {
                    if (fav.data.find(f => f.id === element.id)) {
                        forname.innerHTML += `
        <div class="each">
                <i class="bi bi-heart-fill" style="color:red" onClick='removeFromFav(${element.id})'></i>
                <div class="c">
             <div class="f-1">
                <img src=${element.image} alt="">
             </div>
             <div class="f-2">
                <h1>${element.name}</h1>
                <p>${element.description}</p>
             </div>
                   <button onclick="goTo(${element.id})">View Details</button>
                   <button onclick="deleteEl(${element.id})">Delete</button>
                   <button onclick="editEl(${element.id})">Edit</button>
            </div>
        </div>
        `} else {
                        forname.innerHTML += `
            <div class="each">
                    <i class="bi bi-heart" onClick='addToFav(${element.id})'></i>
                    <div class="c">
                 <div class="f-1">
                    <img src=${element.image} alt="">
                 </div>
                 <div class="f-2">
                    <h1>${element.name}</h1>
                    <p>${element.description}</p>
                 </div>
                   
                       <button onclick="goTo(${element.id})">View Details</button>
                       <button onclick="deleteEl(${element.id})">Delete</button>
                       <button onclick="editEl(${element.id})">Edit</button>
                </div>
            </div>
            `
                    }
                })
            })
            return arr.flat();
    })
    .then(data=>{
        search.addEventListener("input",()=>{
            let value=event.target.value
            if(value!==null){
              data.filter(s=>{
                forname.innerHTML=''
                return s.name.toLowerCase().includes(value.toLowerCase())
              }).forEach(element=>{

             
                forname.innerHTML += `
            <div class="each">
                    <div class="c">
                 <div class="f-1">
                    <img src=${element.image} alt="">
                 </div>
                 <div class="f-2">
                    <h1>${element.name}</h1>
                    <p>${element.description}</p>
                 </div>
                   
                       <button onclick="goTo(${element.id})">View Details</button>
                       <button onclick="deleteEl(${element.id})">Delete</button>
                       <button onclick="editEl(${element.id})">Edit</button>
                </div>
            </div>
            `
              })
            }else{
                data.forEach(element=>{
                    forname.innerHTML += `
                    <div class="each">
                            <i class="bi bi-heart" onClick='addToFav(${element.id})'></i>
                            <div class="c">
                         <div class="f-1">
                            <img src=${element.image} alt="">
                         </div>
                         <div class="f-2">
                            <h1>${element.name}</h1>
                            <p>${element.description}</p>
                         </div>
                           
                               <button onclick="goTo(${element.id})">View Details</button>
                               <button onclick="deleteEl(${element.id})">Delete</button>
                               <button onclick="editEl(${element.id})">Edit</button>
                        </div>
                    </div>
                    `
                })
            }
        })
    })
}
let page=1;
let load=document.querySelector(".mean")
load.addEventListener("click",()=>{
page++;
getDataJson();
})
getDataJson();

function addToFav(id) {
    fetch('http://localhost:3000/post/' + id)
        .then(res => res.json())
        .then(data => {
        axios.post('http://localhost:3000/favorites/', data)
        })
}

function removeFromFav(id) {    
    axios.delete('http://localhost:3000/favorites/'+id)
   
}


function goTo(id) {
    window.location = `./details.html?id=${id}`
}
function deleteEl(id) {
    axios.delete(`http://localhost:3000/post/${id}`);
    window.location.reload();
}
function editEl(id) {
    window.location = `./edit.html?id=${id}`
}
let add = document.querySelector("#add")
add.addEventListener('click', () => {
    window.location = `./add.html?id`
})

let click=document.querySelector("#click")
click.addEventListener("click",()=>{
    window.location=`./favorites.html?id`
})

