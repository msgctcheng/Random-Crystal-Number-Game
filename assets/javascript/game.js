// Initial Random Goal Number 
        //      19-120
function randomGoal(min,max) {
    return Math.floor(Math.random()*(120-19+1)+19);
} 

// Four Crystals  
//      Random # for each 
//      1-12
function randomGem() {
    return Math.floor((Math.random()*12)+1);
}

// Counters
var goalScore = randomGoal();

//      Wins/Losses  
var winsCount = 0;
var lossCount = 0;

//      Clicks 
var clickRed = 0;
var clickBlue = 0;
var clickGreen = 0;
var clickYellow = 0;

// Crystal Values
var valRed = randomGem();

var valBlue = randomGem();

var valGreen = randomGem();

var valYellow = randomGem();

//      Score
var totalScore = function () {
    return ((clickRed * valRed) + (clickBlue * valBlue) + (clickGreen * valGreen) + (clickYellow * valYellow));

};

$(".red").on("click", function() {
    clickRed++;

});

$(".blue").on("click", function() {
    clickBlue++;

});

$(".green").on("click", function() {
    clickGreen++;

});

$(".yellow").on("click", function() {
    clickYellow++;

});

$(".gem").on("click", function() {
    
    $(".displayScore").css({'color': 'white'});

    $(".displayScore").text(totalScore)
     
    $(".displayGoal").text(goalScore);
    
    $(".displayWins").text(winsCount);
   
    $(".displayLosses").text(lossCount);

    var scoreCheck = parseInt($(".displayScore").text());

    var goalCheck = parseInt($(".displayGoal").text());

    // Reset   
    //      Score -> 0 
    //      New initial random #
    //      New random # for buttons  
    if (scoreCheck == goalCheck) {

            winsCount++;

            clickRed = 0;

            clickBlue = 0;

            clickGreen = 0;

            clickYellow = 0;

            valRed = randomGem();

            valBlue = randomGem();

            valGreen = randomGem();

            valYellow = randomGem();

            goalScore = randomGoal();

            $(".displayScore").css({'color': 'green'}); 

            $(".displayWins").text(winsCount);
        
            $(".displayScore").text(totalScore)
            
            $(".displayGoal").text(goalScore);
            
            

    }
        
    if (scoreCheck > goalCheck) {
        
        lossCount++;

        clickRed = 0;

        clickBlue = 0;

        clickGreen = 0;

        clickYellow = 0;

        valRed = randomGem();

        valBlue = randomGem();

        valGreen = randomGem();

        valYellow = randomGem();

        goalScore = randomGoal();
        
        $(".displayScore").css({'color': 'red'});

        $(".displayScore").text(totalScore)
        
        $(".displayGoal").text(goalScore);
        
        $(".displayLosses").text(lossCount);
    }
});










//      Buttons - increase number 

// Win/Loss
//        Score = Random # -> Win
//        Score > Random # -> Loss




