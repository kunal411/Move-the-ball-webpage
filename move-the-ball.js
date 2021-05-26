var ball = document.getElementById('ball');

window.addEventListener('keypress', function(event){
    if(event.key == 'w' || event.key == 'W'){
        var top = ball.offsetTop;
        top -= 15;
        if(top <= 0){
            window.alert("Cannot Move Upward")
            return;
        }
        ball.style.top = top + 'px';
    }
    if(event.key == 's' || event.key == 'S'){
        var top = ball.offsetTop;
        top += 15;
        if(top > (window.innerHeight - 90)){
            window.alert("Cannot Move Downward")
            return;
        }
        ball.style.top = top + 'px';
    }
    if(event.key == 'a' || event.key == 'A'){
        var left = ball.offsetLeft;
        left -= 15;
        if(left <= 0){
            window.alert("Cannot Move leftward")
            return;
        }
        ball.style.left = left + 'px';
    }
    if(event.key == 'd' || event.key == 'D'){
        var left = ball.offsetLeft;
        left += 15;
        if(left > (window.innerWidth - 90)){
            window.alert("Cannot Move Downward")
            return;
        }
        ball.style.left = left + 'px';
    }
});