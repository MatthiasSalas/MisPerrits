$(".galeria-imagenes").click(function(e){
    var imagen = e.target.src;
    var fotoGrande = $(this).attr("alt");
    var lightbox = '<div class="lightbox">'+'<img src="'+fotoGrande+'" alt="">'+'<div class="cerrar">X</div>'+'</div>';
    $("body").append(lightbox)
    $(".cerrar").click(function(e){
        $(".lightbox").remove();
    })
})

