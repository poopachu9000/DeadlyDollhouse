class Form{
    constructor(){
       this.input = createInput("ShortName");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
      background("black")
        this.title.html("Deadly Dollhouse 8-7");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'darkRed');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        textSize(30)
        text("Hide your screens",100,100)
        text("Remember your log-in order",400,100)

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name+ ", " + `
            WASD and SPACE`)
            
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
            text(`Get ready to investagate the camp killings of 1985`,10,300)
            if(player.index === 1){
                text(`You are the killer, nobody knows this
and they dont know that a player is the killer.
Try to build cases around other suspects.`,200,400)
            }
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}