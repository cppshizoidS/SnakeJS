
class Snake{
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1

    }

    move(){

    }
}


var canvas = document.getElementsById("canvas")

var snake = new Snake();

var apple = new Apple();

var canvasContext = canvas.getContext('2d');

window.onload = ()=>{
    gameLoop();
}

function gameLoop(){
    setInterval(show, 1000/15)
}

function show(){
    update();
    draw();
}
