$(document).ready(function () {
    var board = [
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 2],// \/
        [13, 0, 3, 0, 0, 0, 0, 12],
        [1, 0, 0, 3, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 3, 3, 3, 3, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [13, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [13, 0, 0, 0, 3, 3, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 3, 0, 0, 0, 0, 12],
        [1, 3, 0, 0, 0, 0, 0, 12],
        [1, 3, 0, 0, 0, 3, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 3, 0, 0, 0, 0, 12],
        [13, 0, 0, 3, 0, 0, 0, 12],
        [1, 0, 0, 0, 3, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [13, 0, 0, 3, 0, 3, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 3, 0, 3, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 3, 0, 12],
        [13, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 3, 0, 0, 0, 0, 12],
        [1, 4, 0, 3, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 3, 0, 0, 12],
        [1, 0, 0, 0, 0, 3, 0, 12],
        [13, 0, 0, 0, 0, 3, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 3, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],// /\ tu idzie poziom
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12],
        [1, 0, 0, 0, 0, 0, 0, 12]
    ].map(function (row) {
        return row.map(function (cell) {
            return cell === 3 ? [31, 32, 33][Math.floor(Math.random() * 3)] : cell;
        });
    });

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
        speed = 250;
        clients = 0;
        $('.hud__clients').text(clients);
        clearInterval(animate);
        clearInterval(seconds);
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
                            return 'board__field board__field_grass-l';
                        }

                        if (board[i][j] === 12) {
                            return 'board__field board__field_grass-p';
                        }

                        if (board[i][j] === 13) {
                            return 'board__field board__field_tree-l-1';
                        }

                        if (board[i][j] === 2) {
                            return 'board__field board__field_client';
                        }

                        if (board[i][j] === 31) {
                            return 'board__field board__field_block-1';
                        }

                        if (board[i][j] === 32) {
                            return 'board__field board__field_block-2';
                        }

                        if (board[i][j] === 33) {
                            return 'board__field board__field_block-3';
                        }

                        if (board[i][j] === 4) {
                            return 'board__field board__field_red-dzik';
                        }
                    })
                    // .css('background-image', function () {
                    // if(board[i][j] === 3){
                    //     return 'url("images/game-images/dziura_'+Math.floor((Math.random() * 3) + 1)+'.png"';
                    // }
                    // })
                );
            }
        }
    }

    function drawPlayer() {
        $('#7' + x).toggleClass('player').removeClass("road-stripe");
        $('.hud__speed').text(-(speed - 800) / 5);

    }

    function checkColision() {
        var pos = $('#7' + x);
        var hole1 = pos.hasClass("board__field_block-1");
        var hole2 = pos.hasClass("board__field_block-2");
        var hole3 = pos.hasClass("board__field_block-3");

        if (hole1 || hole2 || hole3) {
            gameOver();
        }

        if (pos.hasClass("board__field_red-dzik")) {
            elementReddzik();
        }
    }

    function elementReddzik(){
        var turboValue=speed*0.4;
        speed-=turboValue;
        speedChange=true;
        var turbo = setInterval(function () {
            speed+=turboValue;
            speedChange=true;
            clearInterval(turbo);
        },1500);
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

        if (e.keyCode == 39 && x < 6) {
            x += 1;
        }
    });

    menu(0);
});