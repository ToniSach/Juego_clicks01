function funcionxd(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var imagen1;
    imagen1 = new Image();
    imagen1.src = 'img/img01.jpg';
    imagen1.onload = function (){
        ctx.drawImage(imagen1, 0, 0, canvas.width, canvas.height);
    }   
}
