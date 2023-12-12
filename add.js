const name = document.querySelector("#name")
const description = document.querySelector("#description")
const image = document.querySelector("#image")
const form = document.querySelector(".add-form")
form.addEventListener("submit",(event)=>{
event.preventDefault();
let obj={};
let src=image.files[0];
const reader=new FileReader();
reader.onload=(e)=>{
obj={
    image:e.target.result,
    name:name.value,
    description:description.value
}
axios.post(`http://localhost:3000/post`,obj)
.then(res=>{
    window.location="./index.html";

})
}
reader.readAsDataURL(src);
})
