//Make a project in which there is a heading and the heading change after 3 seconds . If we use the button stop, the heading will not change


let change = setTimeout(() => {
    document.querySelector("h1").innerHTML = "NO SITE FOUND"
}, 3000);

let button = document.getElementById("stop")

button.addEventListener("click", () => {
    clearTimeout(change)
    console.log("Not Changed Lmao")
})