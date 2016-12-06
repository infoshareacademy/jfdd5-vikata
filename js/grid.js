$(document).ready(function () {
    var board = [
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 2],// \/
        [1, 0, 3, 0, 0, 0, 0, 1],
        [1, 0, 0, 3, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 3, 3, 3, 3, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 3, 3, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 3, 0, 0, 0, 0, 1],
        [1, 3, 0, 0, 0, 0, 0, 1],
        [1, 3, 0, 0, 0, 3, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 3, 0, 0, 0, 0, 1],
        [1, 0, 0, 3, 0, 0, 0, 1],
        [1, 0, 0, 0, 3, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 3, 0, 3, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 3, 0, 3, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 3, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 3, 0, 0, 0, 0, 1],
        [1, 0, 0, 3, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 3, 0, 0, 1],
        [1, 0, 0, 0, 0, 3, 0, 1],
        [1, 0, 0, 0, 0, 3, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 3, 0, 0, 0, 0, 1],
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
    var time;
    var speed;
    var clients = 0;
    var animate;
    var seconds;
    var topScore = 0;

    function menu(target) {

        switch (target) {
            case 0: {//menu
                $('.main-menu').show();
                $('.hud__top-score').text(topScore);
                $('.gameplay').hide();
                $('.game-over').hide();
                $('.instructions').hide();
                clearInterval(animate);
            }
                break;
            case 1: {//nowa gra
                $('.main-menu').hide();
                $('.game-over').hide();
                $('.instructions').hide();
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
            case 3: {//instructions
                $('.main-menu').hide();
                $('.gameplay').hide();
                $('.instructions').show();
            }
                break;
        }
    }

    function newGame() {
        yPosition = board.length - 8;
        x = 4;
        time = [0, 0];
        speed = 280;
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
        if (topScore < clients) {
            topScore = clients;
        }
        menu(2);
    }

    function drawBoard() {
        $('.board').empty();

        for (var i = yPosition; i < (yPosition + 8); i++) {
            for (var j = 0; j < 8; j++) {

                $('.board').append(
                    $('<div>').attr(
                        'id',
                        (i - yPosition) + '' + j
                    ).addClass(function () {

                        if (board[i][j] === 0) {
                            if (i % 2 === 0 && j === 3) {
                                return 'board__field board__field_road road-stripe';
                            } else {
                                return 'board__field board__field_road';
                            }
                        }

                        if (board[i][j] === 1) {
                            return 'board__field board__field_grass';
                        }

                        if (board[i][j] === 2) {
                            return 'board__field board__field_client';
                        }

                        if (board[i][j] === 3) {
                            return 'board__field board__field_block';
                        }
                    })
                );;
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
                clients += 1;
                $('.hud__clients').text(clients);
                if (speed >= 80) {
                    speed -= (20 - clients);
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

    $('.btn-goto-instructions').click(function () {
        menu(3);
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
});