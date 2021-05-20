class Player{
    constructor(){
       this.name = null;
       this.distance = 0;
       this.index = null;
    }
    getCount(){
    var playerCountREF = database.ref('playerCount');
    playerCountREF.on("value",(data)=>{
        playerCount = data.val();
    });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    Update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
           name:this.name,
           distance:this.distance
        }) 
    }
    static GetPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}