class Form{
    constructor(){
        this.title=createElement('h2')
        this.input = createInput("name")
        this.button = createButton('play')
        this.greeting = createElement('h3')
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("CAR RACING GAME")
        this.title.position(130,0)
        this.input.position(130,150)
        this.button.position(250,200)
        //greeting.position()
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1;
            player.updateCount(playerCount);
           this.greeting.html("HELLO"+player.name);
            this.greeting.position(130,150);
        })
    }
}