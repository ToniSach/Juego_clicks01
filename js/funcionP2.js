var i = 0;           
function contadorclics() {
    i++;
    if (i == 1) {
        document.getElementById("clicks").innerHTML = i; 
    } else {
        document.getElementById("clicks").innerHTML = i;
    }
    function mover_ralph_awake(){
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var img2 = new Image();
        img2.src = "img/img2.JPG";
        img2.onload = function(){
        ctx.drawImage(img2, 32.5, 100, 450, 200);
        }
    }
    function mover_ralph_sleep(){
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var img = new Image();
        img.src = "img/img1.JPG";  
        img.onload = function(){
            ctx.drawImage(img, 32.5, 100, 450, 200);
        }
    }

    function mover_ralph_cawake(){
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var img3 = new Image();
        img3.src = "img/img3.JPG";  
        img3.onload = function(){
            ctx.drawImage(img3, 32.5, 100, 450, 200);
        }
    }
    if (i!=numfin-1) {
        
        var divisionpamul = i%2;
        var division2 = (i%2);
        if (divisionpamul==0) {
            mover_ralph_sleep();
        } else if (division2!=0){
            mover_ralph_awake();
        }
    } else if (i==numfin-1){
        mover_ralph_cawake();
    }

    if (i == numfin) {
        alert("Felicidades, has ganado");
        alert(segundostotales1)          
    }
    else if (numfin!=i && segundostotales1==0){
        alert("Has perdido unu");
    }
}

window.onload = function(){
    numfin = Math.round(Math.random()*(90-65)+65);
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