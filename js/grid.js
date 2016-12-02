var board = [
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1]
];

function menu() {

    $('.gameplay').hide();

    $('.btn-goto-newgame').click(function () {
        $('.main-menu').hide();
        $('.gameplay').show();
        new_game();
    });

    $('.btn-goto-mainmenu').click(function () {
        $('.main-menu').show();
        $('.gameplay').hide();
        reset_game();
    });
}

function new_game() {
    y_position = board.length - 8;
    x = 4;
    time = [0, 0];
    speed = 300;
    var speed_change = false;
    var animate;
    clearInterval(animate);

    timer();
    gameplay();
}

function draw_board() {
    $('.board').empty();

    for (var i = y_position; i < (y_position + 8); i++) {
        for (var j = 0; j < 8; j++) {
            if (board[i][j] === 0) {
                if (i % 2 === 0 && j === 3)
                    $('.board').append('<div id=' + (i - y_position) + j + ' class="board__field board__field_road road-stripe"></div>');
                else
                    $('.board').append('<div id=' + (i - y_position) + j + ' class="board__field board__field_road"></div>');
            }
            else
                $('.board').append('<div id=' + (i - y_position) + j + ' class="board__field board__field_grass"></div>');
        }
    }
}

function draw_player() {
    $('#7' + x).toggleClass('player').removeClass("road-stripe");
    $('.hud__speed').text(-(speed - 800) / 5);

}

function check_colision() {
    if ($('#7' + x).hasClass("board__field_grass")) {
        alert('Hahahahah przegrałeś!');
    }
}

function timer() {
    var seconds = setInterval(function () {
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

        draw_board();
        draw_player();
        check_colision();

        y_position--;

        if (y_position < 0) {
            y_position = board.length - 8;
        }

        if (speed_change) {
            clearInterval(animate);
            speed_change = false;
            gameplay();
        }
    }, speed);


}

$(document).keydown(function (e) {
    if (e.keyCode == 37 && x > 1) {
        x -= 1;
    }
    if (e.keyCode == 38 && speed > 80) {
        speed -= 10;
        speed_change = true;
    }
    if (e.keyCode == 39 && x < 6) {
        x += 1;
    }
    if (e.keyCode == 40 && speed < 600) {
        speed += 10;
        speed_change = true;
    }
});

menu();

//154