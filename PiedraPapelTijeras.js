

function game(){
    var jugar=true;
    while(true){
        ppt();
        var answer=prompt("¿Desea jugar de nuevo? S,N ");
        if(answer=="N"){
            jugar=false;
        }
    }
    
    
}

function ppt(){
    var hand1=prompt("¿Piedra 1, papel 2 o tijera 3?");
    var hand2=Math.floor(Math.random() * (4 - 1))+1; //prompt("¿Piedra 1, papel 2 o tijera 3?");

    if(hand1===hand2){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Empate!");

    }else if(hand1==1 && hand2==2){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Gano mano 2!");

    }else if(hand1 == 1 && hand2==3 ){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Gano mano 1!");

    }else if(hand1 == 2 && hand2 ==1){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Gano mano 1!");

    }else if(hand1 == 2 && hand2 ==3){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Gano mano 2!");

    }else if(hand1 == 3 && hand2==1 ){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Gano mano 2!");

    }else if(hand1 == 3 && hand2==2 ){
        console.log("Mano 1:"+getNombre(hand1));
        console.log("Mano 2:"+getNombre(hand2));
        console.log("Gano mano 1!");

    }
}

function getNombre(number){
    if(number==1){
        return "Piedra";
    }else if(number==2){
        return "Papel";
    }else if(number==3){
        return "Tijeras";
    }
}