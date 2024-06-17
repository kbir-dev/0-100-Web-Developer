let start_btn = document.getElementById("start")
let stop_btn = document.getElementById("stop")
let changer;

let changecolor = () => {
    return Math.floor(Math.random() * 255);
}

function bgchangekrdo() {
    let a = changecolor();
    let b = changecolor();
    let c = changecolor();
    document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
    console.log(a, b, c)
}

start_btn.addEventListener("click", () => {
    if (!changer) {
        changer = setInterval(bgchangekrdo, 1000);
    }
})

stop_btn.addEventListener("click", () => {
    clearInterval(changer)
    changer = null;
})