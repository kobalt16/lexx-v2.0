const lexx = document.getElementById("lexx");

document.addEventListener("keydown", function(event) {
    
    switch(event.key) {
        case "ArrowUp":
            lexx.style.top = lexx.offsetTop - 90 + "px";
            break;

        case "ArrowDown":
            lexx.style.top = lexx.offsetTop + 70 + "px";
            break;
        case "ArrowRight":
            lexx.style.left = lexx.offsetLeft + 70 + "px";
            break;
        case "ArrowLeft":
            lexx.style.left = lexx.offsetLeft - 90 + "px";
            break;
        case " ":
            createFireshot();
            break;
    }
});

function createFireshot() {
    let fireshot = document.createElement("div");
    fireshot.className = "fireshot";
    fireshot.style.top = lexx.offsetTop + 20 + "px";
    fireshot.style.left = lexx.offsetLeft + 300 + "px";
    document.body.appendChild(fireshot);

    let timerId = setInterval (function() {
        fireshot.style.left = fireshot.offsetLeft + 10 + "px"

        if(fireshot.offsetLeft > document.body.clientWidth) {
            fireshot.remove();
            clearInterval(timerId);
        }
    }, 10);
}



















// function jumpUp() {
//     if (lexx.classList != "jumpUp") {
//         lexx.classList.add("jumpUp")
//     }
//     setTimeout(function() {
//         lexx.classList.remove("jumpUp")
//     }, 300)
// }

