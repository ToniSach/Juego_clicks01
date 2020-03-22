function insertar_ralph(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var imagen;
    imagen = new Image();
    imagen.src = 'img/img1.jpg';
    ctx.drawImage(imagen, 32.5, 100, 450, 200);
}
