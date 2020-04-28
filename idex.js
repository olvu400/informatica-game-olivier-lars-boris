window.onload = funcion() {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

    var cvsW = cvs.width;
    var cvsH = cvs.heigth;

    var snakeW = 10;
    var snakeH = 10;

    function tekenSlang(x, y) {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(x*snakeW, y*snakeH, snakeW, snakeH);

        ctx.fillStyle = "#000";
        ctx.strokeRect(x*snakeW, y*snakeH, snakeW, snakeH);
    }



}
