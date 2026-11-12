console.log("hello")


const input=document.querySelector("input")

const typed=document.querySelector("#typed_Times")
const run=document.getElementById("#funcRun_Times")


input.addEventListener("input",()=>{
    console.log(input.value)
})