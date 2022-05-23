$(document).ready(function () {

    let character = $('.character');
    let block = $('.block');
    let body = $('html');
    let score = 000;

    body.click(function () {
        character.addClass("animate");
        setTimeout((function () {
            character.removeClass("animate");
        }), 500)
    });

    //   document.body.onkeypress = function(e){
    //     if(e.keyCode == 32){
    //         character.addClass("animate");
    //         setTimeout((function(){
    //             character.removeClass("animate");
    //         } ),500)
    //     }
    // }

    setInterval(function () {
        let top = parseInt(character.css("top"));
        let left = parseInt(block.css("left"));
        if (top >= 337 && left <= 39) {
            console.log("dead")
            alert("GAME OVER !");
            score = 0;
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
























});//on read close















