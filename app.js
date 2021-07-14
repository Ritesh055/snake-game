var gameStart=null;
gameSpeed = null;
gameArea = null;
gameAreaContext = null;
gameAreaWidth = 0;
gameAreaHeight = 0;
cellWidth=0;
playScore=0;

snake=null;
snakeFood = null;
snakeDirection=null;
speedSize = 0;
timer = null;

function initialize(){
    gameStart = document.getElementById('#gameStart');
    gameSpeed = document.getElementById('#gameSpeed');
    gameArea = document.getElementById('#gameArea');
    gameAreaContext = gameArea.getContext('2d');
    gameAreaWidth=400;
    gameAreaHeight600;
    cellWidth=20;
    gameArea.width = gameAreaWidth;
    gameArea.height = gameAreaHeight;

    gameStart.onClick=function(){
        this.disabled=true;
    };
}

function startGame(){
    playScore=0;
    snakeDirection='right';
    speedSize= parseInt(gameSpeed.value);

    if(speedSize>9){
        speedSize = 9;
    }else if(speechSize <=0){
        speedSize =1;
    }
    snake = []
    snake.push({x:0,y:cellWidth})
}

createFood();
clearInterval(timer);
//timer = setInterval(creategame);

function createFood(){
    snakeFood = {
        x: Math.round((Math.random() *(gameAreaWidth - cellWidth))/cellWidth),
        y: Math.round((Math.random() *(gameAreaHeight - cellWidth))/cellWidth),
    }
}

function createGameArea(){
    var snakeX= snake[0].x;
    var snakeY= snake[0].y;
    gameAreaContext.fillStyle='#FFF';
    gameAreaContext.fillReact(0,0,gameAreaWidth,gameAreaHeight);
    gameAreaContext.strokeStyle='#ccc';
    gameAreaContext.strokeReact(0,0,gameAreaWidth,gameAreaHeight);

    if(snakeDirection =='right'){
        snakeX++;
    }else if(snakeDirection =='left'){
        snakeX--;
    }else if(snakeDirection =='up'){
        snakeY++;
    }else if(snakeDirection =='down'){
        snakeY--;
    }

    if(snakeX == -1 ||
       snakeX == gameAreaWidth/ cellWidth ||
       snakeY == -1 ||
       snakeY == gameAreaHeight/ cellWidth ||
       Control(snakeX,snakeY,snake)){
           writeScore();
           clearInterval(timer);
           gameStart.disabled=false;
           return;
       }

    if(snakeX == snakeFood.x && snakeY == snakeFood.y){

        var newHead = {x: snakeX, y:snakeY};
        playerScore +=speedSize;
        createFood()
    }else{
        var newHead = snake.pop();
        newHead.x = snakeX;
        newHead.y = snakeY;
    }
    snake.unshift(newHead);
    for(var i=0;i<snake.length;i++){
        createSquare(snake[i].x,snake[i].y)
    }
    createSquare(snakeFood.x,snakeFood.y)
}

function Control(x,y,array){
    
}

function writeScore(){

}
function createSquare(){

}

function changeDirection(){

}