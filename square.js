var int;//特别重要！！！是不是因为int在timer 和end里都有，所以要事先声明全局变量？
function timer() {
    clearInterval(int); //想用来防止多次按键重复执行。
    changeColor();
    int = setInterval("changeColor()", 1000); 
}

function end(){
    clearInterval(int);
    var square = document.getElementsByClassName("square");
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "yellow";
    }
}

function changeColor() {
    //首先先把所有的背景变成黄色
    var square = document.getElementsByClassName("square");
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = "yellow";
    }
    //获取九宫格
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    var forth = document.getElementById("forth");
    var fifth = document.getElementById("fifth");
    var sixth = document.getElementById("sixth");
    var senventh = document.getElementById("seventh");
    var eigth = document.getElementById("eigth");
    var ninth = document.getElementById("ninth");
    //随机获得三个九宫格
    var num1 = Math.round((Math.random() * 10 / (10 / 8)));
    var num2 = Math.round((Math.random() * 10 / (10 / 8)));
    var num3 = Math.round((Math.random() * 10 / (10 / 8)));
    //随机获得三个颜色
    var r1 = Math.round((Math.random() * 10 / (10 / 255)));
    var g1 = Math.round((Math.random() * 10 / (10 / 255)));
    var b1 = Math.round((Math.random() * 10 / (10 / 255)));
    var r2 = Math.round((Math.random() * 10 / (10 / 255)));
    var g2 = Math.round((Math.random() * 10 / (10 / 255)));
    var b2 = Math.round((Math.random() * 10 / (10 / 255)));
    var r3 = Math.round((Math.random() * 10 / (10 / 255)));
    var g3 = Math.round((Math.random() * 10 / (10 / 255)));
    var b3 = Math.round((Math.random() * 10 / (10 / 255)));

    //随机格子获得随机颜色
    if (num1 != num2 && num1 != num3 && num2 != num3) {
        var box = new Array(first, second, third, forth, fifth, sixth, seventh, eigth, ninth);
        box[num1].style.background = "rgb(" + r1 + "," + g1 + "," + b1 + ")"; //,是字符串，r1,g1,b1是变量，变量和字符串之间要使用“+”连接
        box[num2].style.background = "rgb(" + r2 + "," + g2 + "," + b3 + ")";
        box[num3].style.background = "rgb(" + r3 + "," + g3 + "," + b3 + ")";
    } else {
        changeColor();
    }
}
