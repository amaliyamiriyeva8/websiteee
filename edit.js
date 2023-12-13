let id=new URLSearchParams(window.location.search).get("id")
let section_3=document.querySelector(".section3")
let add_form=document.querySelector(".add-form");
let modalImage=document.querySelector(".modalImage");
let name=document.querySelector("#name")
let description=document.querySelector("#description");
let file=document.querySelector('input[type="file"]')

fetch(`http://localhost:3000/post/${id}`)
.then(res=>res.json())
.then(data=>{
    modalImage.src = data.image
    name.value = data.name
    description.value = data.description
})

file.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
            modalImage.src = reader.result;
        }
    }
})

add_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    axios.patch(`http://localhost:3000/post/${id}`,{
       image: modalImage.src,
       name: name.value,
       description: description.value
    })
    .then(res=>{
        window.location="./index.html"
    })
})
