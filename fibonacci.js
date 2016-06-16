function fibonacci(number){
    var numberOne=1;
    var numberTwo=0;
    var fibonacci=0;
    
    for(var i=0; number>i;i++){
        fibonacci=numberOne+numberTwo;
        console.log(fibonacci);
        numberTwo=numberOne;
        numberOne=fibonacci;
    }
}

/**
    1 + 0 = 1 

    1 + 1 = 2 

    2 + 1 = 3 

    3 + 2 = 5 

    5 + 3 = 8 

    8 + 5 = 13 ... 
**/