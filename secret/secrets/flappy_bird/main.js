var gameStart = 0;

class Bird{
    constructor() {
        this.y = 1;
        this.g = 0;
    }
    min(x, y){
        if(x < y) return x;
        return y;
    }
    max(x, y){
        if(x > y) return x;
        return y;
    }
    intdiv(x, y){
        return (x - x % y) / y;
    }
    update() {
        for(var i = 0; i < num; i++){
            if(Pillars[i].x >= 0 && Pillars[i].x < 10 
                && (this.y + 5 < Pillars[i].top || this.y + 5 > Pillars[i].bottom))
                gameEnd();
        }
        document.getElementById('bird').style.rotate = this.min(this.g * 8, 45) - 25 + 'deg'
        this.g += 1;
        this.y += this.intdiv(this.g, 3) + 1;
        document.getElementById('bird').style.gridArea = this.y + ' / 6 / span 1 / span 1'
    }
    up(){
        if(gameStart == 0) {
            window.setInterval(mainUpdate, 100);
            gameStart = 1;
            document.getElementById('scorenotice').innerHTML = 'Score: '
            return;
        }
        this.g = this.max(this.g - 5, -2);
        this.y -= 5;
    }
}
class Pillar{
    constructor(id, top, bottom){
        this.x = 100;
        this.id = id;
        this.top = top;
        this.bottom = bottom;
        var pil = document.createElement('div')
        pil.className = 'pillar'
        pil.id = id + 'up'
        document.getElementById('grid-container').appendChild(pil)
        var pil = document.createElement('div')
        pil.className = 'pillar'
        pil.id = id + 'down'
        document.getElementById('grid-container').appendChild(pil)
    }
    min(x, y){
        if(x < y) return x;
        return y;
    }
    max(x, y){
        if(x > y) return x;
        return y;
    }
    update(){
        if(this.x == 30){
            document.getElementById(this.id + 'up').style.animation = 'tored 1s'
            document.getElementById(this.id + 'down').style.animation = 'tored 1s'
            document.getElementById(this.id + 'up').style.backgroundColor = 'darkred'
            document.getElementById(this.id + 'down').style.backgroundColor = 'darkred'
        }
        if(this.x <= 0){
            if(this.x < 0) return;
            document.getElementById('grid-container').removeChild(document.getElementById(this.id + 'up'))
            document.getElementById('grid-container').removeChild(document.getElementById(this.id + 'down'))
            this.x = -114;
        }else{
            this.x -= 1;
            document.getElementById(this.id + 'up').style.gridArea = '1 / ' + this.x + ' / span ' + this.min(Math.floor(this.top / 10 * (100 - this.x)), this.top) + ' / span 8'
            document.getElementById(this.id + 'down').style.gridArea = this.bottom + this.max(Math.ceil((100 - this.bottom) / 10 * (this.x - 90)), 0) + ' / ' + this.x + ' / ' + 80 + ' / span 8'
        }
    }
}
Player = new Bird()

num = 0
tick = 0
Pillars = new Array()

function gameEnd(){
    localStorage.instantScore = tick;
    localStorage.maxScore = Math.max(localStorage.maxScore, tick);
    window.open('gameEnd.html', '_self')
}

generateNo = -1;

function createNewPillar(top, bottom){
    console.log(top)
    console.log(bottom)
    Pillars[num] = new Pillar(num, top, bottom);
    num += 1;
}

function Random(l, h){
    return Math.floor(Math.random() * (h - l)) + l;
}

function mainUpdate(){
    Player.update()
    if(Player.y < 0 || Player.y > 80){
        gameEnd();    
    }
    if(tick % 300 == 0){
        colors = new Array('lightblue', 'blue', 'lightcoral')
        borders = new Array('darkcyan', 'darkslateblue', 'darkred')
        document.getElementById('grid-container').style.backgroundColor = colors[tick / 300 % 3]
        document.getElementById('grid-container').style.borderColor = borders[tick / 300 % 3]
        generateNo += 1;
    }
    if(generateNo == 0){
        if(tick % 10 == 1 && tick % 100 < 80){
            createNewPillar(30, 50);
        }
    }else if(generateNo == 1){
        if(tick % 100 == 1) createNewPillar(10, 30);
        else if(tick % 100 == 51) createNewPillar(50, 70);
    }else if(generateNo == 2){
        if(tick % 10 == 0)
            createNewPillar(Math.abs(tick % 100 / 10 - 5) * 5 + 10, Math.abs(tick % 100 / 10 - 5) * 5 + 40)
    }else if(generateNo <= 4){
        if(Math.floor(tick / 100) % 2 == 0){
            if(tick % 10 == 0 && tick % 100 <= 50)
                createNewPillar(5 + tick % 100 / 2, 40);
        }else{
            if(tick % 10 == 0 && tick % 100 <= 50)
                createNewPillar(30, tick % 100 / 2 + 40);
        }
    }else {
        localStorage.instantScore = 3000;
        gameEnd();
    }
    for(var i = 0; i < num; i++){
        Pillars[i].update();
    }
    document.getElementById('score').innerHTML = tick;
    tick += 1
}

if(localStorage.instantScore == undefined)
    localStorage.instantScore = 0
if(localStorage.maxScore == undefined)
    localStorage.maxScore = 0;


