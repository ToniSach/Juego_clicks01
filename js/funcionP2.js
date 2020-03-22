window.onload = function(){
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    ctx.fillStyle="rgb(250, 219, 216)";
    ctx.font = "bold 22px Comic-Sams MS";
    ctx.fillText("Debes completar: "+numfin+" clicks en menos de",50,50);
    ctx.fillText("10 segundos, para ganar.",50,90);
    var img = new Image();
    img.src = "img/img1.JPG";  
    img.onload = function(){
        ctx.drawImage(img, 32.5, 100, 450, 200);
    }
    //document.getElementById('boton1').disabled=true;
}
