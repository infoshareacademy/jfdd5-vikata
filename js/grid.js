var board = [
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1]
];

// var elements_on_board = [
//     []
// ]

var t=board.length-8;

function draw_board(){
    for(var i=t;i<(t+8);i++){
        for(var j=0;j<8;j++){
            if(board[i][j]===0){
                if(i%2===0&&j===3)
                    $('.board').append('<div id='+(i-t)+j+' class="board__field board__field_road road-stripe"></div>');
                else
                    $('.board').append('<div id='+(i-t)+j+' class="board__field board__field_road"></div>');
            }
            else
                $('.board').append('<div id='+(i-t)+j+' class="board__field board__field_grass"></div>');
        }
    }
}
var x=4;
function draw_player(){

    $('#7'+x).toggleClass('player');


}

var board_move = setInterval (function(){
    $('.board').empty();
    draw_board();
    draw_player();

    t--;
    if(t<0){
        // clearInterval(board_move);
        t=board.length-8;
    }

}, 300);
$(document).keydown(function(e){
    if (e.keyCode == 37) {
        x-=1;
    }
    if (e.keyCode == 39) {
        x+=1;
    }
});

