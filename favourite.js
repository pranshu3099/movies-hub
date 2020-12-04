document.addEventListener("DOMContentLoaded",checkls);
function checkls(){
    if(localStorage.getItem("userdata")){
        console.log("welcome");
        const showuserData = JSON.parse(localStorage.getItem("userdata"));
        newData(showuserData);
    }
    else{
        console.log("No favourites added");
    }
}



function newData(userdata){
    const movie = document.querySelector("#picture");
    userdata.forEach(data=>{
        const li = document.createElement("li");
        li.addEventListener("click",back);
        li.className = "movie-list-item";
        const image = document.createElement("img");
        image.setAttribute("src",data.Poster);
        li.textContent = data.Title;
        li.appendChild(image);
        movie.appendChild(li)

    })
}

function back(e){
    let x = e.target.textContent;
    let y = x.split(" ");
    if(y.length>1){
       y = y.join("$")
       window.location.href = `/index.html?n=${y}`
    }

    else{
        window.location.href = `/index.html?n=${x}`
    }
}