var board = [
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],// \/
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],// /\ tu idzie poziom
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1]
];

var speedChange = false;
var yPosition = board.length - 8;
var x = 4;
var time = [0, 0];
var speed = 300;
var clients = 0;
var animate;
var seconds;

function menu(target) {

    switch (target) {
        case 0: {//menu
            $('.main-menu').show();
            $('.gameplay').hide();
            $('.game-over').hide();
        }
            break;
        case 1: {//nowa gra
            $('.main-menu').hide();
            $('.game-over').hide();
            $('.gameplay').show();
            newGame();
        }
            break;
        case 2: {//game over
            $('.main-menu').hide();
            $('.gameplay').hide();
            $('.game-over').show();
        }
            break;
    }
}

function newGame() {
    yPosition = board.length - 8;
    x = 4;
    time = [0, 0];
    speed = 300;
    clients = 0;
    $('.hud__clients').text(clients);
    clearInterval(animate);
    clearInterval(seconds);
    timer();
    gameplay();
}

function gameOver() {
    clearInterval(animate);
    clearInterval(seconds);
    menu(2);
}

function drawBoard() {
    $('.board').empty();

    for (var i = yPosition; i < (yPosition + 8); i++) {
        for (var j = 0; j < 8; j++) {
            if (board[i][j] === 0) {
                if (i % 2 === 0 && j === 3)
                    $('.board').append('<div id=' + (i - yPosition) + j + ' class="board__field board__field_road road-stripe"></div>');
                else
                    $('.board').append('<div id=' + (i - yPosition) + j + ' class="board__field board__field_road"></div>');
            }
            else
                $('.board').append('<div id=' + (i - yPosition) + j + ' class="board__field board__field_grass"></div>');
        }
    }
}

function drawPlayer() {
    $('#7' + x).toggleClass('player').removeClass("road-stripe");
    $('.hud__speed').text(-(speed - 800) / 5);

}

function checkColision() {
    if ($('#7' + x).hasClass("board__field_grass")) {
        gameOver();
    }
}

function timer() {
    seconds = setInterval(function () {
        $('.hud__time').text(time[0] + ':' + time[1]);
        if (time[1] < 59)
            time[1] += 1;
        else {
            time[0] += 1;
            time[1] = 0;
        }
    }, 1000);
}

function gameplay() {
    animate = setInterval(function () {

        drawBoard();
        drawPlayer();
        checkColision();

        yPosition--;

        if (yPosition < 0) {
            yPosition = board.length - 8;
            clearInterval(animate);
            clients+=1;
            $('.hud__clients').text(clients);
            if(speed>=80){
                speed -= (20-clients);
            }
            gameplay();
        }

        if (speedChange) {
            clearInterval(animate);
            speedChange = false;
            gameplay();
        }
    }, speed);


}

$('.btn-goto-mainmenu').click(function () {
    menu(0);
})

$('.btn-goto-newgame').click(function () {
    menu(1);
})

$(document).keydown(function (e) {
    if (e.keyCode == 37 && x > 1) {
        x -= 1;
    }
    // if (e.keyCode == 38 && speed > 80) {
    //     speed -= 10;
    //     speedChange = true;
    // }
    if (e.keyCode == 39 && x < 6) {
        x += 1;
    }
    // if (e.keyCode == 40 && speed < 600) {
    //     speed += 10;
    //     speedChange = true;
    // }
});

menu(0);

//154