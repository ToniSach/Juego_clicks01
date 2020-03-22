function principal(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var imagen1;
    imagen1 = new Image();
    imagen1.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90600930_519182265409945_5129776417126481920_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=0CQPEjMdonsAX_EX1dY&_nc_ht=scontent.fmex10-2.fna&oh=340cf36dfb470b757f11ed1e804cde9b&oe=5E9D85D8';
    imagen1.onload = function (){
        ctx.drawImage(imagen1, 32.5, 100, 450, 200);
    }   
}

var i = 0;           
function contadorclics() {
    i++;
    if (i == 1) {
        document.getElementById("clicks").innerHTML = i; 
    } else {
        document.getElementById("clicks").innerHTML = i;
    }
    //alert(parseInt(numfin+"hey"));
    function mover_ralph_sleep(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        var img1;
        img1 = new Image();
        img1.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90600930_519182265409945_5129776417126481920_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=0CQPEjMdonsAX_EX1dY&_nc_ht=scontent.fmex10-2.fna&oh=340cf36dfb470b757f11ed1e804cde9b&oe=5E9D85D8';  
        img1.onload = function(){
            ctx.drawImage(img1, 32.5, 100, 450, 200);
        }
    }
    function mover_ralph_cawake(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        var img2;
        img2 = new Image();
        img2.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/89905743_527157574663956_5731082069178580992_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=3455w0uwGhsAX8OE11w&_nc_ht=scontent.fmex10-2.fna&oh=3b467e5748925053799dcf8c6ddabea6&oe=5E9CD10F';  
        img2.onload = function(){
            ctx.drawImage(img2, 32.5, 100, 450, 200);
        }
    }
    function mover_ralph_awake(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        var img3;
        img3 = new Image();
        img3.src = 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/90556495_301074267525467_6176475228655321088_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=MCyAygWRfwAAX_4rm_3&_nc_ht=scontent.fmex10-2.fna&oh=61cf258286e5072229a35e6978e2d6d1&oe=5E9EA1EC';
        img3.onload = function (){
            ctx.drawImage(img3, 32.5, 100, 450, 200);
        }
    }
    var divisionpamul = i%2;
    var division2 = i%2;
    if (divisionpamul==0) {
        mover_ralph_sleep();
    } else if (division2!=0){
        mover_ralph_awake();
    }
}
