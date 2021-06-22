
$(function(){
     
      
        
    $('#form-calc').submit(function(){
        var idade_client = $('#idade_client').val();
        var peso_client = $('#peso_client').val();
        var consumo_client;

        if(idade_client == '' || peso_client == ''){
            alert('ERROR! preencha todos os dados corretamente.')
            location.reload()
        }

    if(idade_client <= 17){
        consumo_client = peso_client * 40;
    }else if(idade_client >=18){
        consumo_client = peso_client * 35;
    }else if(idade_client >= 55){
        consumo_client = peso_client * 30;
    }else if(idade_client >= 66){
        consumo_client = peso_client * 25;
    }


     $('#consumo_client').html('<p class="resul_client-p">'+ consumo_client + '</p>');

    return false;

  
    
    
    })
})




// Jovem ativo até os 17 anos	40 ml por cada kg
// 18 a 55 anos	35 ml por cada kg
// 55 a 65 anos	30 ml por cada kg
// Mais de 66 anos	25 ml  por cada kg


