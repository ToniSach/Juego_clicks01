function funcionxd(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var imagen1;
    imagen1 = new Image();
    imagen1.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90600930_519182265409945_5129776417126481920_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=0CQPEjMdonsAX_EX1dY&_nc_ht=scontent.fmex10-2.fna&oh=340cf36dfb470b757f11ed1e804cde9b&oe=5E9D85D8';
    imagen1.onload = function (){
        ctx.drawImage(imagen1, 0, 0, canvas.width, canvas.height);
    }   
}
