// Html elements 
var spaceShip = document.querySelector(".spaceShip")
var chickenContainer = document.querySelector("#chickenContainer")
var dot = document.querySelector(".dot")
// app varibales
var myleft = 0;
var mytop = 0;
chickenNum();
// functions 
function chickenNum() {
    for (var i = 0; i <= 45; i++) {
        chickenContainer.innerHTML += `<img src="assets/imgs/chicken.webp">`;
    }

}
// events 
document.addEventListener("mousemove", function (e) {
    myleft = e.clientX;
    mytop = e.clientY;
    spaceShip.style.left = `${e.clientX}px`
    spaceShip.style.top = `${e.clientY}px`
})
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        myleft += 100;
        spaceShip.style.left = `${myleft}px`
    }
    if (e.key === "ArrowLeft") {
        myleft -= 100;
        spaceShip.style.left = `${myleft}px`;
    }
    if (e.key === "ArrowUp") {
        mytop -=100;
        spaceShip.style.top = `${mytop}px`
    }
    if (e.key === "ArrowDown") {
        mytop +=100;
        spaceShip.style.top = `${mytop}px`
    }
})
document.addEventListener("mousemove", function(e)
{
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
})
document.addEventListener("click", function()
{
    dot.style.animation = `dotMove 450ms  forwards alternate`
})
document.addEventListener("dblclick", function()
{
    dot.style.animation = ``;
})


