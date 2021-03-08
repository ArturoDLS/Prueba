$(document).ready(function () {
    $('#btnCambio').click(function () {
        $('#titulo').text('Hola Mundo'); // Selector por id
        $('.caja').css('background', 'blue'); // selector por clase
        $('p').text('cursos gratis'); // selector por etiqueta
    });
    // getters y setters
    var x = $('#titulo').text();
    var y = $('div').attr('class');
    $('#btnget').click(function(){ 
        alert(x + ' '+ y);
        // $('h2').attr('class', 'saludar'); asignar clase o id a elemento
    });
    // metodo css
    $('#btn2').click(function(){ 
        $('#titulo2').css({'background':'skyblue','text-align':'center','color':'white'});
    });
    // clases metodo css hasClass, addClass, removeClass
    // metodo show y hide

});

