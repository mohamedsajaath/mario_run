$(document).ready(function () {

    let character = $('.character');
    let enemy = $('.block');
    let body = $('html');
    let score = 000;

    body.click(function () {
        character.addClass("animate");
        setTimeout((function () {
            character.removeClass("animate");
            body.append(`<audio src="../audio/jump.wav" autoplay></audio>`);
        }), 500)
    });

      document.body.onkeypress = function(e){
        if(e.keyCode == 32){
            character.addClass("animate");
        setTimeout((function () {
            character.removeClass("animate");
            body.append(`<audio src="../audio/jump.wav" autoplay></audio>`);
        }), 500)
        }
    }

    setInterval(function () {
        let top = parseInt(character.css("top"));
        let left = parseInt(enemy.css("left"));
        let totalWidth = $(window).width();
        let totalHeight = $(window).height();
        let x = (left/totalWidth)*100;
        let y = (top/totalHeight)*100;



        

        console.log("top",top);
        console.log("left",left);
        console.log("x",x);
        console.log("y",y);



        if (y >= 30 && x <= 6 ) {
            console.log("dead")
            // alert("GAME OVER !");
            score = 0;
            $('.block').removeClass("animateBlock");
            body.append(`<audio src="../audio/smb_gameover.wav" autoplay></audio>`);
            body.append(`<audio src="../audio/dead.wav" autoplay></audio>`);
            setTimeout((function(){
                location.href='../index.html';

            }),3000);   
        };
        if (left < 10) {
            score += 1;
            console.log(score)
        };
        $('#socreNum').text(score);
    }, 10);

    // play pause---------
    $('.pause').click(function () {
        let DataPlayPause = $('.block').attr("data-play");
        if (DataPlayPause == 1) {
            $('.pause').html("");
            $('.pause').append(`<i class="fa fa-play" aria-hidden="true"></i>`);
            $('.block').removeClass("animateBlock");
            $('.block').attr("data-play", "0");

        } else {

            $('.pause').html("");
            $('.pause').append(`<i class="fa fa-pause pauseBtn" aria-hidden="true"></i>`);
            $('.block').addClass("animateBlock");
            $('.block').attr("data-play", "1");

        }
    });


    setTimeout((function(){
     
    $('.animateBlock').css("animation","block 2s infinite linear");

    }),10000);   

    setTimeout((function(){
     
        $('.animateBlock').css("animation","block 1s infinite linear");
        $('.dragon').css("filter","grayscale(0%)");
    
        }),50000); 
















    






});//on read close















