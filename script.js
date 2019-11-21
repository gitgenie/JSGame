$(document).ready(function() {
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var arr;
	var myVar = [];
	var level = 1;
	alert("Welcome to memory game. Click 'Play' and watch the pattern");
    $("button").on('click', function() {
        //game starts
		$(".blocks").css("border","0px solid white");
		arr = [1, 2, 3, 4];
        arr = shuffle(arr);
		
        //highlights
        var speed = 5/level * 100 ;
		$("#"+arr[0]).animate({outlineWidth: "10px"}, speed, function(){
			$("#"+arr[0]).animate({outlineWidth: "1px"});
			$("#"+arr[1]).animate({outlineWidth: "10px"}, speed, function(){
				$("#"+arr[1]).animate({outlineWidth: "1px"});
				$("#"+arr[2]).animate({outlineWidth: "10px"}, speed, function(){
					$("#"+arr[2]).animate({outlineWidth: "1px"});
					$("#"+arr[3]).animate({outlineWidth: "10px"}, speed, function(){
						$("#"+arr[3]).animate({outlineWidth: "1px"});
						alert("Now Click on the boxes in the same odrer ");
					});
				});
			});
		});
		
        //alert user to click pattern
    });
	
    $(".blocks").on("click", function() {
		$(this).css("border","1px solid black");
        //get input
		if(arr.length !== 0){
			if($(this).attr("id") == arr[0]){
				arr.shift();
				if(arr.length === 0){
						if(level !== 10){
							level = level+1;
							alert("Correct answer. Entering the level "+level+"  Hit 'Play' to begin");
							document.querySelector("span").innerHTML = level;
						} else {
							alert("You won the game!");
						}
				}
			}else{
				alert("Sorry, wrong order. Going back to level 1");
				level = 1;
				document.querySelector("span").innerHTML = level;
				
			}
		}
          });
});