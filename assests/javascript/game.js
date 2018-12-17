
// vars need for the game

var randomResult = '';
var wins = '';
var losses = '';

//will add more the vars as time goes on
randomResult = Math.floor(Math.random() * 99) + 20;
 
$("#result").html('My Number : ' + randomResult);

for (var i = 0; i < 4; i++) {
    
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
 
    $(".crystals").append(crystal);


}

$(".crystal").on('click', function () {

        console.log($(this).attr('data-random'));

});

 // pseudo coding

// What I know about the game: 
// I know that theres 4 CRYSTALS (4 divs?) and must add to the random number each time
// Does the ammount of each crystal matter? Does it have to be from 1-10 it can be more? For now just 1-10
// They all have some random value Genarate RanNum
// The value should stay constian until win/lose then it's randomizes again 
// Each crystal has to add to the each number when CLICKED ON
// Need a counter like the video
// If Win = add 1 and restart (Should I alert winner or display it on the screen) ++ var i = 1
// Else Lose = add 1 and restart (Should I alert Loser or display it on the screen) ++ var i = 1

