/**
  * @param {Array} data – массив CSS классов
  */
module.exports = function(data) {
  var classes = [];
  var frequencies = [];
  var newClassNamesObject = {};
  var latinAlphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var noneLetterCharacters = ["-", "_", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var newClassNames = [];
  var newClassNameLength = 2;
  var latinAlphabetIterator = 0;
  for (var oldClassNameIterator = 0; oldClassNameIterator < data.length; oldClassNameIterator++){
  		if (classes.indexOf(data[oldClassNameIterator]) == -1){
  			classes.push(data[oldClassNameIterator]);
  			currentClassName = data[oldClassNameIterator];
  			classNameOccurrenceFrequencyCounter = 0;
  			for (var oldClassNameIteratorInner = 0; oldClassNameIteratorInner < data.length; oldClassNameIteratorInner++){
  				if (currentClassName == data[oldClassNameIteratorInner]){
  					classNameOccurrenceFrequencyCounter++;
  				}
  			}
  			//fill object and push
  			var classNameAndFrequency = {};
  			classNameAndFrequency["className"] = currentClassName;
  			classNameAndFrequency["frequency"] = classNameOccurrenceFrequencyCounter;
  			frequencies.push(classNameAndFrequency);
  		}
  }
    
  
  //sort class names by frequencies
  frequencies.sort(function (a, b){
  		if (a.frequency > b.frequency)
  			return -1;
  		if (a.frequency < b.frequency)
  			return 1;
  		return 0;
  });
  console.log(frequencies);
  for (classNamesIterator in frequencies){
  	var newClassName = [];
  	if (classNamesIterator % latinAlphabet.length == 0)
  		latinAlphabetIterator = 0;
  	newClassName.push(latinAlphabet[latinAlphabetIterator]);
  	latinAlphabetIterator++;
  	if(classNamesIterator >= latinAlphabet.length){
  		for (var newClassNameCharactersIterator = 1; newClassNameCharactersIterator < newClassNameLength; newClassNameCharactersIterator++){
  			//random character set
  			var latinOrNoneLetter = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  			var symbolToPush;
  			//random character from character set
  			if (latinOrNoneLetter == 0)
  				symbolToPush = latinAlphabet[Math.floor(Math.random() * ((latinAlphabet.length - 1) - 0 + 1)) + 0];
  			if (latinOrNoneLetter == 1)
  				symbolToPush = noneLetterCharacters[Math.floor(Math.random() * ((noneLetterCharacters.length - 1) - 0 + 1)) + 0];
  			newClassName.push(symbolToPush);
  		}
  		//increase new class name length if current length leads to matches
  		if (newClassNames.indexOf(newClassName.join("")) > -1){
  			newClassNameLength++;
  			classNamesIterator--;
  			continue;
  		}
  	}
  	newClassNames.push(newClassName.join(""));
  }
  //filling result object
  for (index in frequencies){
  	newClassNamesObject[frequencies[index].className] = newClassNames[index];
  }
  return newClassNamesObject;
};
