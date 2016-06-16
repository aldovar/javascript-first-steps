function fibonacci(number){
    var numberOne=1;
    var numberTwo=0;
    var fibonacci=0;
    
    for(var i=0; number>i;i++){
        
        fibonacci=numberOne+numberTwo;
        
        console.log(fibonacci);
        
        //El segundo numero de la suma siempre es igual primer numero antes de que cambie el valor de numero 1.
        numberTwo=numberOne;
        
        //El numero uno siempre es igual al resultado antes de que el valor cambie.
        numberOne=fibonacci;
    }
}

/**
  num1  num2  Resultado
    1 +  0 =  1 
      \
        \
    1 +  1 =  2 
            /
          /
        /
      /
    2 +  1 =  3 

    3 +  2 =  5 

    5 +  3 =  8 

    8 +  5 =  13 ... 
**/