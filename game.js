var score = 0;
var jet = 0;
var oneMint;
var demo = document.getElementById('demo');
var win = document.getElementById('win');
var end = document.getElementById('end');
var result = document.getElementById('result');
var result2 = document.getElementById('result2');

var width = document.body.scrollWidth;
var hei = document.body.scrollHeight;
demo.style.height = hei+"px";

var div = document.getElementById("div");
div.style.height = Math.round(width/2)+"px";
var gun = document.getElementById("gunkkk");

function xy(eve,ele){
    var x = eve.clientX;
    var y = eve.clientY;
    x -= 8;
    y -= 8;
    y += 150;

    var cX = (x/width)*100;
    var cy = (y/width)*100;

    cX -= 50;
    cy = 50-cy;
    //     ele.innerHTML = "x = "+ cX+" %"+"<br>" +"y = "+cy+" %<br>x = "+y;
    cX -= 46;
    gun.style.transform = "rotate("+cX+"deg)"
}

function play(){

    var sec = 60;
    var min = 0;
    var time = document.getElementById('time');
    demo.style.display = "block";

    var interval = setInterval(timer,1000);

    function timer(){
        if(sec > 0){
            sec--;
        }else{
            if(min == 0){
                clearInterval(interval);
            }else{
                sec = 60;
                --min;
            }
        }
        time.innerHTML ="Time "+ min +" : "+sec;
    }
    oneMint = setTimeout(function(){
        demo.style.display = "none";
        result.innerHTML = "20 / "+jet+"<br> Score "+score;
        end.style.display = "inline-block";
    },60000)
}

{ var c1 = document.getElementsByClassName('c1');
    var c2 = document.getElementsByClassName('c2');
    var c3 = document.getElementsByClassName('c3');
    var c4 = document.getElementsByClassName('c4');
    var c5 = document.getElementsByClassName('c5');
    var c6 = document.getElementsByClassName('c6');

    for(var i = 0; i < c1.length; i++){
        c1[i].src = "image/jet.png";
        c1[i].setAttribute("onclick","shoot(this)");
        c2[i].src = "image/jet.png";
        c2[i].setAttribute("onclick","shoot(this)");
        c3[i].src = "image/jet.png";
        c3[i].setAttribute("onclick","shoot(this)");
        c4[i].src = "image/jet.png";
        c4[i].setAttribute("onclick","shoot(this)");
        c5[i].src = "image/jet.png";
        c5[i].setAttribute("onclick","shoot(this)");
        c6[i].src = "image/jet.png";
        c6[i].setAttribute("onclick","shoot(this)");
    }}


function shoot(ele){
    ele.src = "image/fire.png";
    setTimeout(function(){ele.style.display = "none"},50);

    score += 100;
    jet++;
    document.getElementById('score').innerHTML ="Score "+ score;
    document.getElementById('jet').innerHTML ="20 / "+ jet;

    if(jet == 20){
        clearTimeout(oneMint);
        demo.style.display = "none";
        result2.innerHTML = "20 / 20<br>Score "+score;
        win.style.display = "inline-block"
    }
}