//поле, форма
var field, data;

//игроки
var player1, player2;

//размер игроков
var size1, size2;

//скорость игроков
var speed1, speed2;

function docReady(){
    field = document.getElementById("field");
    data = document.getElementById("data");

    size1 = document.getElementById('size1').value;
    size2 = document.getElementById('size2').value;
    speed1 = document.getElementById('speed1').value;
    speed2 = document.getElementById('speed2').value;

    player1 = document.getElementById("player-1");
    player2 = document.getElementById("player-2");
}

function play() {
    docReady();

    Object.assign(player1.style, {
        top: 10 + 'px',
        left: 10 + 'px',
        width: size1 + 'px',
        height: size1 + 'px'
    });

    Object.assign(player2.style, {
        bottom: 10 + 'px',
        right: 10 + 'px',
        width: size2 + 'px',
        height: size2 + 'px'
    });

    Object.assign(field.style, {
        width: 800 + 'px',
        height: 800 + 'px',
        display: "block"
    });

    data.style.display = "none";

    //other
    document.getElementById("sz1").innerHTML = size1;
    document.getElementById("sz2").innerHTML = size2;
    document.getElementById("sp1").innerHTML = speed1;
    document.getElementById("sp2").innerHTML = speed2;

    //одновременное нажатие клавиш
    function moveDuo () {
        var map = {};
        onkeydown = onkeyup = function(e){
            e = e || event;
            map[e.keyCode] = e.type == 'keydown';

            var a = map[65];
            var d = map[68];
            var s = map[83];
            var w = map[87];
            
            var left = map[37];
            var right = map[39];
            var up = map[38];
            var down = map[40];
            
            switch(true) {
                //a + key
                case (a && left):
                    player1.style.left = parseInt(player1.style.left) - parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) + parseInt(speed2) + 'px';
                    break;
                case (a && right):
                    player1.style.left = parseInt(player1.style.left) - parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) - parseInt(speed2) + 'px';
                    break;
                case (a && up):
                    player1.style.left = parseInt(player1.style.left) - parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) + parseInt(speed2) + 'px';
                    break;
                case (a && down):
                    player1.style.left = parseInt(player1.style.left) - parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) - parseInt(speed2) + 'px';
                    break;
                    
                //w + key
                case (w && left):
                    player1.style.top = parseInt(player1.style.top) - parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) + parseInt(speed2) + 'px';
                    break;
                case (w && right):
                    player1.style.top = parseInt(player1.style.top) - parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) - parseInt(speed2) + 'px';
                    break;
                case (w && up):
                    player1.style.top = parseInt(player1.style.top) - parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) + parseInt(speed2) + 'px';
                    break;
                case (w && down):
                    player1.style.top = parseInt(player1.style.top) - parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) - parseInt(speed2) + 'px';
                    break;

                //d + key
                case (d && left):
                    player1.style.left = parseInt(player1.style.left) + parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) + parseInt(speed2) + 'px';
                    break;
                case (d && right):
                    player1.style.left = parseInt(player1.style.left) + parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) - parseInt(speed2) + 'px';
                    break;
                case (d && up):
                    player1.style.left = parseInt(player1.style.left) + parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) + parseInt(speed2) + 'px';
                    break;
                case (d && down):
                    player1.style.left = parseInt(player1.style.left) + parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) - parseInt(speed2) + 'px';
                    break;

                //s + key
                case (s && left):
                    player1.style.top = parseInt(player1.style.top) + parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) + parseInt(speed2) + 'px';
                    break;
                case (s && right):
                    player1.style.top = parseInt(player1.style.top) + parseInt(speed1) + 'px';
                    player2.style.right = parseInt(player2.style.right) - parseInt(speed2) + 'px';
                    break;
                case (s && up):
                    player1.style.top = parseInt(player1.style.top) + parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) + parseInt(speed2) + 'px';
                    break;
                case (s && down):
                    player1.style.top = parseInt(player1.style.top) + parseInt(speed1) + 'px';
                    player2.style.bottom = parseInt(player2.style.bottom) - parseInt(speed2) + 'px';
                    break;
            }
        }
    }
    moveDuo();

    function movePlayers(event) {
        //управление
        switch (event.keyCode) {
            //player 1
            case 65:
                player1.style.left = parseInt(player1.style.left) - parseInt(speed1) + 'px';
                break;

            case 68:
                player1.style.left = parseInt(player1.style.left) + parseInt(speed1) + 'px';
                break;

            case 87:
                player1.style.top = parseInt(player1.style.top) - parseInt(speed1) + 'px';
                break;

            case 83:
                player1.style.top = parseInt(player1.style.top) + parseInt(speed1) + 'px';
                break;

            //player 2
            case 37:
                player2.style.right = parseInt(player2.style.right) + parseInt(speed2) + 'px';
                break;
    
            case 39:
                player2.style.right = parseInt(player2.style.right) - parseInt(speed2) + 'px';
                break;
    
            case 38:
                player2.style.bottom = parseInt(player2.style.bottom) + parseInt(speed2) + 'px';
                break;
    
            case 40:
                player2.style.bottom = parseInt(player2.style.bottom) - parseInt(speed2) + 'px';
                break;
        }


        //касание/выход за пределы поля player 1
        //хотел взять playerN.offsetTop\left, но алерт срабатывает не сразу
        switch (true) {
            case (parseInt(player1.style.top) <= 0):
                alert ('Player 1 LOST');
                window.location.reload();
                break;

            case (parseInt(player1.style.top) >= (parseInt(field.style.height) - player1.offsetHeight)):
                alert ('Player 1 LOST');
                window.location.reload();
                break; 

            case (parseInt(player1.style.left) <= 0):
                alert ('Player 1 LOST');
                window.location.reload();
                break;

            case (parseInt(player1.style.left) >= (parseInt(field.style.width) - player1.offsetWidth)):
                alert ('Player 1 LOST');
                window.location.reload();
                break; 
        }

        //касание/выход за пределы поля player 2
        switch (true) {
            case (parseInt(player2.style.bottom) <= 0):
                alert ('Player 2 LOST');
                window.location.reload();
                break;

            case (parseInt(player2.style.bottom) >= (parseInt(field.style.height) - player2.offsetHeight)):
                alert ('Player 2 LOST');
                window.location.reload();
                break;   

            case (parseInt(player2.style.right) <= 0):
                alert ('Player 2 LOST');
                window.location.reload();
                break;

            case (parseInt(player2.style.right) >= (parseInt(field.style.width) - player2.offsetWidth)):
                alert ('Player 2 LOST');
                window.location.reload();
                break; 
        }
        
        //столкновение игроков друг с другом
        function collision(box1, box2) {
            var box1 = player1.getBoundingClientRect();
            var box2 = player2.getBoundingClientRect();

            if (!(box2.left > box1.right || 
                box2.right < box1.left || 
                box2.top > box1.bottom ||
                box2.bottom < box1.top)) {
                    if (parseInt(size1) > parseInt(size2)) {
                        alert("Player 1 WIN")
                        window.location.reload();
                    } else if (parseInt(size1) < parseInt(size2)) {
                        alert("Player 2 WIN")
                        window.location.reload();
                    } else {
                        alert("Draw")
                        window.location.reload();
                    }
                }
        }
        collision();
    };   
   window.addEventListener('keydown', movePlayers);
}

