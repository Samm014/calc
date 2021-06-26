$(()=>{
    var novo_numero = true;
    var total;
    var resul = $(".resul-calculadora");
    calc = (e)=>{
        
        if(novo_numero){
            total = e.getAttribute('name');
            novo_numero = false;
        }else{
            total += e.getAttribute('name');
        }

        if(e.getAttribute('name') == 'clear'){
            total = 0;
            resul.html('<h3>'+ '' +'</h3>')
        }

        return total;
    }
    
    
    $('.btn').click(()=>{
        resul.html('<h3>'+ total +'</h3>')
        if(total == 0){
            total = '';
        }
    })


   

    $('.btn-igual').click(()=>{
        var resultado = $(".resul-calculadora h3").html();
        $('.resul-calculadora h3').html(eval(resultado))
    })
        
        

})