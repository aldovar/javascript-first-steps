function fibonacci(number){
    var plus=0;
    var lastNumber=0;
    var oneAndOne=true;
    for(var i=0; number>i;i++){
        
        plus=plus+i;
    
        if(oneAndOne){
            console.log(i);
            oneAndOne=false;
        }else{
            console.log(plus);
           oneAndOne=true; 
        }
    }
}