function LettersCounter (word) {
	this.word = word;
	this.getLetters = function () {
		return this.word.split('');
	}
	this.calculateSameLetters = function (letter) {
		var letters = this.getLetters();
		var lettersCount = letters.length;
		var count = 0;

		for (var i = 0; i < lettersCount; i++) {
			if (letter == letters[i]) {
				count = count + 1;
			}
		}
	 	return count;
	}

	this.showCalculatedLetters = function () {
		if (this.word != undefined) {
			var letters = this.getLetters();
			var lettersCount = letters.length;
			var commonLetter = null;
			var count = 0;
			var usedLetters = [];
			var lettersToShow = {};

			for (var i = 0; i < lettersCount; i++) {
				var currentLetter = letters[i];
				var number = this.calculateSameLetters(currentLetter);
				lettersToShow[currentLetter] = number;
			  if (usedLetters.indexOf(currentLetter) == -1) {
					usedLetters.push(currentLetter);
					if (number > count) {
						commonLetter = currentLetter;
						count = number;
					}
				}
			}
			console.log(lettersToShow)

			if (count > 1) {
				console.log("'" + commonLetter.toUpperCase() + "' the most common letter, count = " + lettersToShow[currentLetter])
			} else {
				console.log('No common letter')
			}
		} else {
			console.log('Please provide word!')
		}
	} 
}


