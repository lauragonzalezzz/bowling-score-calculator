
function CalculateGameScore() {
var frameArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	var frameObjs = frameArr.map(function(frame) {
		return {
			roll1 : 0 
		}
	});
	console.log('frameObjs',frameObjs);

	function rollBall(){
		rollScore = Math.floor(Math.random()* 10);
		// storeScore(rollScore);
		return rollScore;
	}

	// function storeScore(score) {
	// 	for (var i = 0; i < frameArr.length; i++) {
	// 		if (frameArr[i].)
	// 	}
	// }


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

var newGame = new CalculateGameScore;
console.log(newGame.rollBall());