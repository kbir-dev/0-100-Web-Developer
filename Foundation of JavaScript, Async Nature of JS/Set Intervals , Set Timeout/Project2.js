let start_btn = document.getElementById("start")
let stop_btn = document.getElementById("stop")
let time;

function printkrdo(str){
    console.log(Date.now() , str);
}

start_btn.addEventListener("click",()=>{
         time = setInterval(printkrdo, 1000,"hi");
})

stop_btn.addEventListener("click",()=>{
    clearInterval(time)
})