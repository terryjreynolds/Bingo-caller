//object containing key-value pairs for multiplication tables from 2 to 9
let bingoFacts = {
  "2 x 0": 0,
  "2 x 1": 2,
  "2 x 2": 4,
  "2 x 3": 6,
  "2 x 4": 8,
  "2 x 5": 10,
  "2 x 6": 12,
  "2 x 7": 14,
  "2 x 8": 16,
  "2 x 9": 18,
  "2 x 10": 20,
  "2 x 11": 22,
  "2 x 12": 24,
  "3 x 0": 0,
  "3 x 1": 3,
  "3 x 2": 6,
  "3 x 3": 9,
  "3 x 4": 12,
  "3 x 5": 15,
  "3 x 6": 18,
  "3 x 7": 21,
  "3 x 8": 24,
  "3 x 9": 27,
  "3 x 10": 30,
  "3 x 11": 33,
  "3 x 12": 36,
  "4 x 0": 0,
  "4 x 1": 4,
  "4 x 2": 8,
  "4 x 3": 12,
  "4 x 4": 16,
  "4 x 5": 20,
  "4 x 6": 24,
  "4 x 7": 28,
  "4 x 8": 32,
  "4 x 9": 36,
  "4 x 10": 40,
  "4 x 11": 44,
  "4 x 12": 48,
  "5 x 0": 0,
  "5 x 1": 5,
  "5 x 2": 10,
  "5 x 3": 15,
  "5 x 4": 20,
  "5 x 5": 25,
  "5 x 6": 30,
  "5 x 7": 35,
  "5 x 8": 40,
  "5 x 9": 45,
  "5 x 10": 50,
  "5 x 11": 55,
  "5 x 12": 60,
  "6 x 0": 0,
  "6 x 1": 6,
  "6 x 2": 12,
  "6 x 3": 18,
  "6 x 4": 24,
  "6 x 5": 30,
  "6 x 6": 36,
  "6 x 7": 42,
  "6 x 8": 48,
  "6 x 9": 54,
  "6 x 10": 60,
  "6 x 11": 66,
  "6 x 12": 72,
  "7 x 0": 0,
  "7 x 1": 7,
  "7 x 2": 14,
  "7 x 3": 21,
  "7 x 4": 28,
  "7 x 5": 35,
  "7 x 6": 42,
  "7 x 7": 49,
  "7 x 8": 56,
  "7 x 9": 63,
  "7 x 10": 70,
  "7 x 11": 77,
  "7 x 12": 84,
  "8 x 0": 0,
  "8 x 1": 8,
  "8 x 2": 16,
  "8 x 3": 24,
  "8 x 4": 32,
  "8 x 5": 40,
  "8 x 6": 48,
  "8 x 7": 56,
  "8 x 8": 64,
  "8 x 9": 72,
  "8 x 10": 80,
  "8 x 11": 88,
  "8 x 12": 96,
  "9 x 0": 0,
  "9 x 1": 9,
  "9 x 2": 18,
  "9 x 3": 27,
  "9 x 4": 36,
  "9 x 5": 45,
  "9 x 6": 54,
  "9 x 7": 63,
  "9 x 8": 72,
  "9 x 9": 81,
  "9 x 10": 90,
  "9 x 11": 99,
  "9 x 12": 108
};

//----------------Event Listeners-------------------

const question = document.getElementById("callBtn");
question.addEventListener("click", function() {
  if (gameMode) {
    randomizer(bingoFacts);
  } else {
    randomizerNumbers(bingoFacts);
  }
});

const factsButton = document.getElementById("facts");
factsButton.addEventListener("click", gameModeFacts);

const numbersButton = document.getElementById("numbers");
numbersButton.addEventListener("click", gameModeNumbers);

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", confirmationWindow);

//const submitButton = document.getElementById("submitBtn");
//submitButton.addEventListener("click", checkIfCalled);

const bingoButton = document.getElementById("bingoBtn");
bingoButton.addEventListener("click", bingo);

const resumeButton = document.getElementById("resumeBtn");
resumeButton.addEventListener("click", Resume);

let timer = document.getElementById("timer");

//-----------GLOBAL VARIABLES--------------------
let randomUniqueKeys = [];
let randomFacts = [];
let timerReadOut = 20;
let bingoTime = false;
resumeButton.disabled = true;
let gameMode = true;

//----------Functions to choose game mode displaying facts or numbers----------
function gameModeFacts() {
  console.log("game is facts");
  gameMode = true;
  document.getElementById("mode").style.display = "none";
  question.innerText = "CALL FACT";
}

function gameModeNumbers() {
  console.log("game is numbers");
  gameMode = false;
  document.getElementById("mode").style.display = "none";
  submitButton.innerText = "Check Fact";
  question.innerText = "CALL NUMBER";
  document
    .getElementById("num")
    .setAttribute("placeholder", "Enter fact to check (no spaces)");
}

$(window).keydown(function (event) {
  if (event.keyCode == 13) {
   event.preventDefault(); 
  }
});

//-----------GAME lOGIC FOR FACTS MODE--------------------------

function randomizer(obj) {
  console.log(randomUniqueKeys);
  let y = callQuestion(obj);
  let objectValue = Object.values(y);
  let keyValue = Object.keys(y);
  let objectValueY = objectValue[0];
  console.log(objectValueY);

  if (randomUniqueKeys.includes(objectValueY)) {
    console.log(randomUniqueKeys.includes(objectValueY));
    console.log(randomUniqueKeys.length);
    console.log(bingoFacts);
    if (randomUniqueKeys.length < Object.keys(bingoFacts).length) {
      randomizer(bingoFacts);
    }
  } else {
    console.log("im in");
    randomUniqueKeys.push(objectValueY);
    document.getElementById("relativeKey").innerHTML = keyValue;
    const colorCode2 = /^2/g;
    const colorCode3 = /^3/g;
    const colorCode4 = /^4/g;
    const colorCode5 = /^5/g;
    const colorCode6 = /^6/g;
    const colorCode7 = /^7/g;
    const colorCode8 = /^8/g;
    const colorCode9 = /^9/g;
    const y = document.getElementById("relativeKey");
    if (colorCode2.test(keyValue)) {
      y.setAttribute("style", "color: red;");
    } else if (colorCode3.test(keyValue)) {
      y.setAttribute("style", "color: grey;");
    } else if (colorCode4.test(keyValue)) {
      y.setAttribute("style", "color: orange;");
    } else if (colorCode5.test(keyValue)) {
      y.setAttribute("style", "color: blue;");
    } else if (colorCode6.test(keyValue)) {
      y.setAttribute("style", "color: green;");
    } else if (colorCode7.test(keyValue)) {
      y.setAttribute("style", "color: purple;");
    } else if (colorCode8.test(keyValue)) {
      y.setAttribute("style", "color: black;");
    } else if (colorCode9.test(keyValue)) {
      y.setAttribute("style", "color: brown;");
    }
    question.disabled = true;
    setTimeout(function() {
      question.disabled = false;
    }, 20000);

    myTimer(timerReadOut, timer);
    let factSpokenWithoutX = y.innerText.replace(/x/g, "groups of");
    soundBell();
    setTimeout(function() {
      textToSpeech(factSpokenWithoutX);
    }, 1200);
    console.log(randomUniqueKeys);
  }
}
//----------AUDIO MODULE------------------

function textToSpeech(msg) {
  let message = new SpeechSynthesisUtterance(msg);
  window.speechSynthesis.speak(message);
}

function soundBell() {
  bell_sound.load();
  setTimeout(function() {
    bell_sound.play();
  }, 300);
}

function soundBuzzer() {
  buzzer_sound.load();
  setTimeout(function() {
    buzzer_sound.play();
  }, 300);
}

//-------------GAME LOGIC FOR NUMBERS MODE----------------------

function randomizerNumbers(obj) {
  console.log("im in randomizerNumbers");
  console.log(randomUniqueKeys);
  //call question returns a random object with a single key-value pair
  let y = callQuestion(obj);
  //an array of all the values found in array y --so, only 1 number
  let objectValue = Object.values(y);

  console.log("objectValue", objectValue);
  let keyValue = Object.keys(y);
  console.log("keyValue", keyValue);
  //the single VALUE from the object stored in a variable
  let objectValueY = objectValue[0];

  //the single KEY from the object, stored in a variable
  let keyValueY = keyValue[0];
  console.log("randomUnique Keys", randomUniqueKeys);
  console.log("objectValueY", objectValueY);
  console.log(objectValueY);
  //if the value has already been selected and pushed to the array, recursively call
  //randomizer again to choose hopefully a different one.
  if (randomUniqueKeys.includes(objectValueY)) {
    console.log(
      "randomUniqueKeys includes objectValueY",
      randomUniqueKeys.includes(objectValueY)
    );
    console.log("randomUniqueKeys length", randomUniqueKeys.length);
    console.log("randomUniqueKeys", randomUniqueKeys);
    console.log(bingoFacts);
    //check to ensure that the length of the array is less than
    //the length of the original bingoFacts object
    //if it is, call the randomizerNumbers function again to select a new number
    if (randomUniqueKeys.length < 104) {
      randomizerNumbers(bingoFacts);
    }
  } else {
    console.log("im in");
    //since the random number is not in randomUniqueKeys, push it to it
    randomUniqueKeys.push(objectValueY);
    //this variable contains indexes of all occurrances of objectValueY
    const allInstances = findAllInstancesOfObjectValueY(objectValueY);
    console.log("allInstances", allInstances);
    //convert the returned indexes to facts and push to array
    let keys = Object.keys(bingoFacts);
    allInstances.map(c => randomFacts.push(keys[c]));
    console.log("randomFacts", randomFacts);
    document.getElementById("relativeKey").innerHTML = objectValueY;
    const colorCode2 = /^2/g;
    const colorCode3 = /^3/g;
    const colorCode4 = /^4/g;
    const colorCode5 = /^5/g;
    const colorCode6 = /^6/g;
    const colorCode7 = /^7/g;
    const colorCode8 = /^8/g;
    const colorCode9 = /^9/g;
    const y = document.getElementById("relativeKey");
    if (colorCode2.test(keyValue)) {
      y.setAttribute("style", "color: red;");
    } else if (colorCode3.test(keyValue)) {
      y.setAttribute("style", "color: grey;");
    } else if (colorCode4.test(keyValue)) {
      y.setAttribute("style", "color: orange;");
    } else if (colorCode5.test(keyValue)) {
      y.setAttribute("style", "color: blue;");
    } else if (colorCode6.test(keyValue)) {
      y.setAttribute("style", "color: green;");
    } else if (colorCode7.test(keyValue)) {
      y.setAttribute("style", "color: purple;");
    } else if (colorCode8.test(keyValue)) {
      y.setAttribute("style", "color: black;");
    } else if (colorCode9.test(keyValue)) {
      y.setAttribute("style", "color: brown;");
    }
    question.disabled = true;
    setTimeout(function() {
      question.disabled = false;
    }, 20000);

    myTimer(timerReadOut, timer);
    soundBell();
    let speech = document.getElementById("relativeKey").innerText;
    setTimeout(function() {
      textToSpeech(speech);
    }, 1200);
    console.log(randomUniqueKeys);
  }
}

function findAllInstancesOfObjectValueY(value) {
  console.log("im in findAllInstancesOfObjectValueY");
  //returns an array filled with the bingoFacts indexes that contain instances of value arg
  let values = Object.values(bingoFacts);
  console.log("values", values);
  let factsSharingValue = [];
  values.map((c, i) => {
    if (c === value) {
      factsSharingValue.push(i);
    }
  });
  console.log("factsSharingValue", factsSharingValue);
  return factsSharingValue;
}

function myTimer(num, timer) {
  console.log("im in myTimer");
  const readOutStr = num.toString();
  timer.innerHTML = readOutStr;
  num = num - 1;
  if (!bingoTime) {
    if (num >= 0) {
      setTimeout(function() {
        myTimer(num, timer);
      }, 1000);
    } else {
      timer.innerHTML = "0";
      timerReadOut = 20;
    }
  } else {
    timer.innerHTML = "0";
    timerReadOut = 20;
    return;
  }
}
function emptyCheckmarkOrX() {
  document.getElementById("yesOrNo").innerHTML = "";
}
function callQuestion(obj) {
  let questionAnswer = {};
  let keys = Object.keys(obj);
  let relativeKey = (keys.length * Math.random()) << 0;

  let random = obj[keys[relativeKey]];
  console.log("relativeKey", keys[relativeKey]);
  let anotherKey = keys[relativeKey];
  questionAnswer = {
    [anotherKey]: random
  };
  console.log("questionAnswer", questionAnswer);
  return questionAnswer;
}

//-----------SAFETY FEATURE------------------
function confirmationWindow() {
  const confirmation = confirm(
    "Press OK to reset the game or cancel to resume"
  );
  if (confirmation) {
    reset();
  }
}

function reset() {
  location.reload();
}

function bingo() {
  const speechTags = [
    "Don't forget to buy a Nevada ticket",
    "Winner, winner, chicken dinner",
    "Now you can by me a hot dog and french fries, buddy",
    "Somebody has a horseshoe in their pocket. Ha ha ha!",
    "Let's go to Las Vegas!",
    "Are you for real?",
    "Farmer Brown he had a dog and...well, you know the rest"
  ];
  //pick a random speech tag to accompany the bingo
  let randomPhrase = speechTags[Math.floor(Math.random() * 7 + 0)];
  textToSpeech("Bingo!" + randomPhrase);
  resumeButton.disabled = false;
  question.disabled = true;
  bingoTime = true;
  console.log("im in bingo");
  bingoButton.setAttribute(
    "style",
    "opacity: 0.5; color: blue; font-size: 4vh;"
  );
  bingoButton.disabled = true;
}

function Resume() {
  textToSpeech("Resuming the game.");
  bingoTime = false;
  console.log("im in Resume");
  question.disabled = false;
  bingoButton.disabled = false;
  document.getElementById("yesOrNo").innerHTML = "";
  bingoButton.setAttribute(
    "style",
    "opacity: none; color: black; font-size: 2.5vh;"
  );
  resumeButton.disabled = true;
}
//---------------Function to decide if answer was called--------------------

function checkIfCalled() {
  if (gameMode) {
    console.log("im in checkIfCalled");
    const numberInput = document.getElementById("num");
    let numberToCheck = parseInt(document.getElementById("num").value);
    if (randomUniqueKeys.includes(numberToCheck)) {
      console.log("yes", numberToCheck);
      document.getElementById("yesOrNo").className = "checkOrXGreen";
      document.getElementById("yesOrNo").innerHTML = "&#10003";
      const speechTags = [
        "Correctamundo",
        "Yeet Yeet!",
        "Level four buddy!",
        "Now you're cookin with gas!",
        "Affirmative",
        "Wowza! That's absolutely right!",
        "Oh Yeah! That's totally right!"
      ];
      //pick a random speech tag to accompany the bingo
      let randomPhrase = speechTags[Math.floor(Math.random() * 7 + 0)];
      textToSpeech(randomPhrase);
      numberInput.value = "";
      numberInput.placeholder = "Enter a number to check";
    } else {
      console.log("no", numberToCheck);
      document.getElementById("yesOrNo").className = "checkOrXRed";
      document.getElementById("yesOrNo").innerHTML = "&#x274C";
      soundBuzzer();
      setTimeout(function() {
        textToSpeech("Sorry. That number was not called.");
      }, 1400);
      numberInput.value = "";
      numberInput.placeholder = "Enter a number to check";
    }
  } else {
    //remove the spaces from the randomFacts array to facilitate the matching of user input
    let noSpacesRandomFacts = randomFacts.map(c => c.replace(/\s/g, ""));
    console.log("noSpaces", noSpacesRandomFacts);
    const numberInput = document.getElementById("num");
    let factToCheck = numberInput.value;
    console.log("factToCheck", factToCheck);
    if (noSpacesRandomFacts.includes(factToCheck)) {
      console.log("yes", factToCheck);
      document.getElementById("yesOrNo").className = "checkOrXGreen";
      document.getElementById("yesOrNo").innerHTML = "&#10003";
      const speechTags = [
        "Correctamundo",
        "Yeet Yeet!",
        "Level four buddy!",
        "Now you're cookin with gas!",
        "Affirmative",
        "Wowza! That's absolutely right!",
        "Oh Yeah! That's totally right!"
      ];
      //pick a random speech tag to accompany the bingo
      let randomPhrase = speechTags[Math.floor(Math.random() * 7 + 0)];
      textToSpeech(randomPhrase);
      numberInput.value = "";
      numberInput.placeholder = "Enter fact to check (no spaces)";
    } else {
      console.log("no", factToCheck);
      document.getElementById("yesOrNo").className = "checkOrXRed";
      document.getElementById("yesOrNo").innerHTML = "&#x274C";
      soundBuzzer();
      setTimeout(function() {
        textToSpeech("Sorry. That fact was not called.");
      }, 1200);
      numberInput.value = "";
      numberInput.placeholder = "Enter fact to check (no spaces)";
    }
  }
}
