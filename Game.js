class Game{
    constructor(){
    
    }
    getState(){
        var gameStateREF=database.ref('gameState');
        gameStateREF.on("value",function(data){
            gameState=data.val();
        })
    }
   update(state){
       database.ref('/').set({
           gameState:state
       })
    }
    async start(){
        if(gameState===0){
            player = new Player();
             var playerCountREF = await database.ref('playerCount').once("value")
            if(playerCountREF.exists()){
                playerCount = playerCountREF.val();
                player.getCount();
            }
            form=new Form()
            form.display();
        }
    }
    play(){
         form.hide();
         fill ("blue");
         textSize(45);
         text ("GAME-STARTS",120,100); 
         Player.GetPlayerInfo();
         if(allPlayers!==undefined){
             var display_position = 130;
         for(var plr in allPlayers){
             if(plr==="player"+player.index){
                 fill("red");
             }
             else{
                 fill("black");
             }
             display_position+=20
             textSize(15);
             text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
         }
        }
         if(keyIsDown(UP_ARROW)&&player.index!==null){
              player.distance+=50;
              player.Update();
         }               
    }  
}
