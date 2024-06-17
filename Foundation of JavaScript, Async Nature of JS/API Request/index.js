let url = "https://api.github.com/users/hiteshchoudhary";
let data;
const xhr = new XMLHttpRequest();
xhr.open("GET", url)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
         data = JSON.parse(this.responseText)
    }
}
xhr.send();

// document.addEventListener("onload", () => {
//     document.body.innerHTML = `
//     <div class="card">
//        <div class="card-body">
//           <img src="${data.avatar_url}" alt="">
//           <h2 class="title">${data.name}</h2>
//           <p>Followers : ${data.followers}</p>
//        </div>
//     </div>
//     <script src="index.js"></script>`
// })

let show_btn = document.getElementById("show");
show_btn.addEventListener("click", () => {
        document.body.innerHTML = `
        <div class="card">
           <div class="card-body"> 
              <img src="${data.avatar_url}" alt="">
              <h2 class="title">${data.name}</h2>
              <p>Followers : ${data.followers}</p>
           </div>
        </div>
        <script src="index.js"></script>`
})