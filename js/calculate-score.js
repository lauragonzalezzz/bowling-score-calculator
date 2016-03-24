
function CalculateGameScore() {
var frameObjs = [];
	
	for (var i = 1; i < 11; i++) {
		frameObjs.push({frame : i, roll1 : null})
	};

	function rollBall(){
		rollScore = Math.floor(Math.random()* 10); 
			
			return rollScore;
		}
	}

	function storeScore(score) {
		for (var i = 0; i < frameObjs.length; i++) {
			if (frameObjs[i].roll1 === null) {
				frameObjs[i].roll1 = score;
				break;
		}
	}
}
storeScore(5);
console.log('frameObjs',frameObjs);

		// frameObjs = frameObjs.map(function(frame) {
		// 	if (frame.roll1 === null) {
		// 		frame.roll1 = rollScore;
		// 		console.log('frame.roll1',frame.roll1);
		// 		return;
		// 	}
		// })



	// var scoresOnly = frames.filter(function(frame) {
	// 	return {
	// 		score : frame.score 
	// 	}

	// })

	// var totalScore = scoresOnly.reduce(function(prev, curr) {
	// 	return prev + curr;
	// }, 0);

	function getTotalScore() {
		return totalScore;
	}

	return {
		rollBall : rollBall,
		getTotalScore : getTotalScore
	}
}

newGame = new CalculateGameScore;

console.log(newGame.rollBall());
console.log(newGame.rollBall());
console.log(newGame.rollBall());