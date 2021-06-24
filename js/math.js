$(()=>{

    resul = $(".resul-calculadora");
    calc = (e)=>{
        operador = e.getAttribute('value')
        var number = e.getAttribute('name');
        var format_number = '<p style="font-size: 30px;">'+ number +'</p>'
        resul.html(format_number)

    }
    

    
    
    
    $('.btn-igual').click(()=>{
        
        





        resul.html('<p>'+ calc() +'</p>')
    })



})