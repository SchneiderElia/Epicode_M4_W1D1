///////////// exercise 1 ////////////////////

let numOne = document.getElementById('numOne')
let numTwo = document.getElementById('numTwo')
let result = document.getElementById('result')

let control = document.getElementById('control')
control.addEventListener("click", () => {

    let numbOne = parseInt(numOne.value)
    let numbTwo = parseInt(numTwo.value)
    console.log(numbOne)
    console.log(numbTwo)


    if (numbOne === 50 || numbTwo === 50 || numbOne + numbTwo === 50) {
        console.log('True')
        result.innerText = 'True'
    } else {
        console.log('False')
        result.innerText = 'False'
    }

})


///////////// exercise 2 ////////////////////


let parola = document.getElementById('world');
let newWorld = document.getElementById('newWorld');
let controls = document.getElementById('controls');

controls.addEventListener('click', () => {

    console.log(parola.value)
    let textParola = parola.value
    parola.value = ''

    let arrayParola = textParola.split('')
    console.log(arrayParola)

    let newArrayParola = arrayParola.slice(1)
    console.log(newArrayParola)

    let arrayToString = newArrayParola.join('')
    console.log(arrayToString)

    newWorld.innerText = arrayToString

});

///////////// exercise 3 ////////////////////
let numberOne = document.getElementById('numberOne')
let numberTwo = document.getElementById('numberTwo')
let reply = document.getElementById('reply')

let verify = document.getElementById('verify')
verify.addEventListener('click', () => {

    let numberOneWrite = numberOne.value
    let numberTwoWrite = numberTwo.value

    console.log(numberOneWrite)
    console.log(numberTwoWrite)

    if (numberOneWrite >= 40 && numberOneWrite <= 60 || numberOneWrite >= 70 && numberOneWrite <= 100) {
        console.log('TRUE')
    } if (numberTwoWrite >= 40 && numberTwoWrite <= 60 || numberTwoWrite >= 70 && numberTwoWrite <= 100) {
        console.log('TRUE')
        reply.innerText = `TRUE`
    } else {
        console.log('FALSE')
        reply.innerText = `FALSE`
    }

})

///////////// exercise 4 ////////////////////
let cityName = document.getElementById('cityName')
let replys = document.getElementById('replys')

let controlss = document.getElementById('controllo')
controlss.addEventListener ("click", ()=>{

    let cityNameWrite = cityName.value
    console.log(cityNameWrite)

    if (cityNameWrite.startsWith("Los") || cityNameWrite.startsWith("New")) {
        replys.innerText = cityNameWrite;
    }
    else {replys.innerText = 'false'}

})


///////////// exercise 5 ////////////////////

function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let total = sumArrayElements(myArray);
console.log(total); // Output: 15

let anotherArray = [10, 20, 30];
let anotherTotal = sumArrayElements(anotherArray);
console.log(anotherTotal); // Output: 60

let emptyArray = [];
let emptyTotal = sumArrayElements(emptyArray);
console.log(emptyTotal); // Output: 0


///////////// exercise 6 ////////////////////

function checkArrayFor1or3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return false; // Found 1 or 3, so return false
    }
  }
  return true; // 1 or 3 not found, so return true
}

//Examples
console.log(checkArrayFor1or3([2, 4, 5, 6]));  // Output: true
console.log(checkArrayFor1or3([1, 2, 4, 5]));  // Output: false
console.log(checkArrayFor1or3([2, 4, 3, 6]));  // Output: false
console.log(checkArrayFor1or3([]));           // Output: true (empty array doesn't contain 1 or 3)

///////////// exercise 7 ////////////////////

function angleType(degrees) {
  if (degrees < 90) {
    return "acuto";
  } else if (degrees === 90) {
    return "retto";
  } else if (degrees > 90 && degrees < 180) {
    return "ottuso";
  } else if (degrees === 180) {
    return "piatto";
  } else {
    return "angolo non valido"; // Gestisce i casi al di fuori dell'intervallo 0-180
  }
}

// Esempi di utilizzo
console.log(angleType(45));   // Output: acuto
console.log(angleType(90));   // Output: retto
console.log(angleType(120));  // Output: ottuso
console.log(angleType(180));  // Output: piatto
console.log(angleType(200));  // Output: angolo non valido
console.log(angleType(-30));  // Output: angolo non valido


///////////// exercise 8 ////////////////////

function createAcronym(phrase) {
  let words = phrase.split(" ");
  let acronym = "";
  for (let i = 0; i < words.length; i++) {
    acronym += words[i].charAt(0).toUpperCase();
  }
  return acronym;
}

// Example usage:
let phrase = "Fabbrica Italiana Automobili Torino";
let acronym = createAcronym(phrase);
console.log(acronym); // Output: FIAT

phrase = "United States of America";
acronym = createAcronym(phrase);
console.log(acronym); // Output: USA

phrase = "World Health Organization";
acronym = createAcronym(phrase);
console.log(acronym); // Output: WHO

///////////// exercise 1 extra ////////////////////

function mostFrequentCharacter(str) {
  if (str.length === 0) {
    return null; // Handling empty strings
  }

  const charCount = {};
  let maxChar = str[0];
  let maxCount = 1;

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
}


// Example usage:
console.log(mostFrequentCharacter("abcabcabc")); // Output: a (or b or c since they appear the same number of times)
console.log(mostFrequentCharacter("programming")); // Output: r
console.log(mostFrequentCharacter("aabbccc"));    // Output: c
console.log(mostFrequentCharacter(""));          // Output: null


///////////// exercise 2 extra ////////////////////

function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters, spaces, and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create character maps for both strings
  const charMap1 = {};
  const charMap2 = {};

  for (const char of cleanStr1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (const char of cleanStr2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }


  // Compare the character maps
  for (const char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}



// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));  // Output: false
console.log(areAnagrams("Dormitory", "dirty room")); // Output: true (ignores spaces)
console.log(areAnagrams("Eleven plus two", "Twelve plus one")); // Output: true (ignores spaces and punctuation)



///////////// exercise 3 extra ////////////////////

function findAnagrams(word, potentialAnagrams) {
  const trueAnagrams = [];

  for (const potentialAnagram of potentialAnagrams) {
    if (areAnagrams(word, potentialAnagram)) {
      trueAnagrams.push(potentialAnagram);
    }
  }

  return trueAnagrams;
}


function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charMap1 = {};
  const charMap2 = {};

  for (const char of cleanStr1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (const char of cleanStr2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  for (const char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}




// Example usage:
const word = "cartine";
const potentialAnagrams = ["carenti", "incerta", "espatrio"];
const anagrams = findAnagrams(word, potentialAnagrams);
console.log(anagrams); // Output: ['carenti', 'incerta']


const word2 = "listen";
const potentialAnagrams2 = ["enlist", "inlets", "google", "silent"];
const anagrams2 = findAnagrams(word2, potentialAnagrams2);
console.log(anagrams2);  // Output: ['enlist', 'inlets', 'silent']

