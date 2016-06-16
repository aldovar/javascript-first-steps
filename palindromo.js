
function validate(frase){   
    //var frase = 'SUGUS';
        var palindromo='';
        for (var i = frase.length; i>0; i--) {  
            palindromo=palindromo+frase.charAt(i-1);
        }

        if(frase===palindromo){

            console.log('Es palindromo :)');
        }else{
            console.log('No es palindromo :(');
    }
}
