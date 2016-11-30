// 1. tabela która przechowuje stan fieldow
// 2. funkcja rysujaca divy co chwile na podstawie tabeli

var board = [
    [0,0,0,0,0],
    [0,0,1,1,0],
    [0,1,0,1,0],
    [0,1,1,0,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,0,1,1,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,1,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0]
];

var t=15;

function draw_board(){
    for(var i=t;i<(t+5);i++){
        for(var j=0;j<5;j++){
            if(board[i][j]===0)
                $('.board').append('<div class="board__field board__field_grass"></div>');
            else
                $('.board').append('<div class="board__field board__field_road"></div>');
        }
    }
}

var board_move = setInterval (function(){
    $('.board').empty();
    draw_board();
    t--;
    if(t<0)
        clearInterval(board_move);
}, 500);


