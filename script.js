//object containing key-value pairs for multiplication tables from 2 to 9

const bingoFacts = {
  "0 x 0": 0,
  "0 x 1": 0,
  "0 x 3": 0,
  "0 x 4": 0,
  "0 x 5": 0,
  "0 x 6": 0,
  "0 x 7": 0,
  "0 x 8": 0,
  "0 x 9": 0,
  "0 x 10": 0,
  "0 x 11": 0,
  "0 x 12": 0,
  "1 x 0": 0,
  "1 x 1": 1,
  "1 x 2": 2,
  "1 x 3": 3,
  "1 x 4": 4,
  "1 x 5": 5,
  "1 x 6": 6,
  "1 x 7": 7,
  "1 x 8": 8,
  "1 x 9": 9,
  "1 x 10": 10,
  "1 x 11": 11,
  "1 x 12": 12,
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
  "9 x 12": 108,
};

//-----------GLOBAL VARIABLES--------------------
//Variable to toggle between game modes
let gameMode;
//Variable for creating local storage with function manageLocalStore
 let factValues;
 let numValues;
let numFacts;

let timerReadOut = 15;
let bingoTime = false;

let numbersAlreadyCalled = [];

//Voice module global variables
const synth = window.speechSynthesis;
const voices = synth.getVoices();


/*----------------Event Listeners-------------------*/

let question = document.getElementById("callBtn");
question.addEventListener("click", function () {
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

/*const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", checkIfCalled);*/

const bingoButton = document.getElementById("bingoBtn");
bingoButton.addEventListener("click", bingo);

const resumeButton = document.getElementById("resumeBtn");
resumeButton.addEventListener("click", Resume);

let timer = document.getElementById("timer");

const showAllNumbersButton = document.getElementById("showAllNumbers");
const valueDisplay = document.getElementById("valueDisplay");
function toggleValueDisplay() {
  if (valueDisplay.style.display === "none") {
    valueDisplay.style.display = "block";
  } else {
    valueDisplay.style.display = "none";
  }
}

resumeButton.disabled = true;


/*set up local store at outset of game to store array of selected game values*/

//check for the array in local storage, then set it up if it doesn't exist

function manageLocalStore() {
  console.log("in manageLocalStore");
  //CASE: GAME IS FACTS
  if (gameMode) {
    let emptyArray = [];
    
    factValues = JSON.parse(window.localStorage.getItem("factValues"));
    console.log("factValues", factValues);
    if (!factValues) {
      console.log("creating local storage for facts game");
      window.localStorage.setItem("factValues", JSON.stringify(emptyArray));
      console.log('created', window.localStorage.getItem("factValues"));
    }
  factValues = JSON.parse(window.localStorage.getItem("factValues"));
  console.log('parsed factValues', factValues, typeof(factValues));

  //CASE: GAME IS NUMBERS
  }else {

    //MANAGE LS OF numValues (ie: values already called)
console.log('in manageLocalStore for numbers game');

    let emptyArr = [];
    //look for local storage of an array of numValues
  numValues = JSON.parse(window.localStorage.getItem("numValues"));
  console.log("numValues", numValues);
  //if no local storage of numValues exists, create it
  if (!numValues) {
    console.log('creating local storage for numValues');
    window.localStorage.setItem("numValues", JSON.stringify(emptyArr));
    //set the global variable numValues to the value retrieved from local storage (empty)
  }

  numValues = JSON.parse(window.localStorage.getItem("numValues"));
  console.log('parsed numValues', numValues, typeof(numValues));

  //MAANGE THE LS OF THE FACTS CALLED DURING NUMBERS GAME-- numFacts global variable (e.g. "1x2")
  
    //look for and retrieve the numFacts array
    numFacts = JSON.parse(window.localStorage.getItem("numFacts"));
    console.log("numFacts", numFacts);

    //if the numFacts array does not exist in local storage, then create it as an empty array
      if (!numFacts) {
        console.log('creating local storage of facts for numbers game');
        let emptyArr2 = [];
        window.localStorage.setItem("numFacts", JSON.stringify(emptyArr2));
      }
      //set the global variable currentNumbers to the value retrieved from local storage (empty)
      numFacts = JSON.parse( window.localStorage.getItem("numFacts"));
      console.log('parsed numFacts', numFacts, typeof(numFacts));
  }  
  }
  
//----------Functions to choose game mode displaying facts or numbers----------
function gameModeFacts() {
  console.log("game is facts");
  gameMode = true;
  document.getElementById("mode").style.display = "none";
  document.getElementById("showAllNumbers").innerHTML = "Show All Numbers Called";
  question.innerText = "CALL FACT";
  enableButtons();
  manageLocalStore();
}

function gameModeNumbers() {
  console.log("game is numbers");

  gameMode = false;
  document.getElementById("mode").style.display = "none";
  document.getElementById("showAllNumbers").innerHTML = "Show All Facts Called";
  document.querySelector("#submitBtn").setAttribute("value", "Check Fact");
  question.innerText = "CALL NUMBER";
  document
    .getElementById("num")
    .setAttribute("placeholder", "Enter fact to check (no spaces)");
  enableButtons();
  manageLocalStore();
}

function enableButtons() {
  document.getElementById("callBtn").disabled = false;
  document.getElementById("bingoBtn").disabled = false;
  document.getElementById("resumeBtn").disabled = false;
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    console.log("oh no its the enter key");
    event.preventDefault();
  }
  // do something
});
//-----------GAME lOGIC FOR FACTS MODE--------------------------
//Gets called after click of the callBtn
function randomizer(obj) {
  let randomValues = JSON.parse(window.localStorage.getItem('factValues'));

  console.log('randomValues', randomValues);
  console.log('what is randomValues', typeof(randomValues));

  //returns a random question answer
  let y = callQuestion(obj);

  //these variables contain the fact and answer chosen
  let keyValue = Object.keys(y);
  let objectValue = Object.values(y);
  
  let objectValueY = objectValue[0];
  console.log("objectValueY", objectValueY);
  console.log('type', typeof(objectValueY));

  if (randomValues.includes(objectValueY)) {
    console.log(randomValues.includes(objectValueY), objectValueY, "was already chosen");
  
    if (randomValues.length < Object.keys(bingoFacts).length) {
      randomizer(bingoFacts);
      console.log('recursive call to randomizer');
    }

    //if the chosen answer hasn't already been called
  } else {
    console.log("answer not previously chosen; proceed with game");
    randomValues.push(objectValueY);
    window.localStorage.setItem("factValues", JSON.stringify(randomValues));
    let values = window.localStorage.getItem("factValues");
    valueDisplay.innerHTML = values;
    factValues = JSON.parse(window.localStorage.getItem('factValues'));
    console.log('factValues', factValues);

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
    setTimeout(function () {
      question.disabled = false;
    }, 15000);

    myTimer(timerReadOut, timer);
    let factSpokenWithoutX = y.innerText.replace(
      /x/g,
      y.innerText.startsWith("1") ? "group of" : "groups of"
    );

    console.log("facts", factSpokenWithoutX);
    soundBell();
    setTimeout(function () {
      textToSpeech(factSpokenWithoutX);
    }, 1200);
  }
}
/*----------AUDIO MODULE------------------*/

function textToSpeech(msg) {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  let message = new SpeechSynthesisUtterance(msg);
  message.voice = voices[1];
  synth.speak(message);
}

function soundBell() {
  bell_sound.load();
  setTimeout(function () {
    bell_sound.play();
  }, 300);
}

function soundBuzzer() {
  buzzer_sound.load();
  setTimeout(function () {
    buzzer_sound.play();
  }, 300);
}

/*-------------GAME LOGIC FOR NUMBERS MODE----------------------*/
function randomizerNumbers(obj) {
  console.log("im in randomizerNumbers");
 
  let randomNumValues = JSON.parse(window.localStorage.getItem('numValues'));

  console.log('randomNumValues', randomNumValues);
  console.log('what is randomNumValues', typeof(randomNumValues));

  //call question returns a random object with a single key-value pair
  let y = callQuestion(obj);
  
   //these variables contain the fact and answer chosen
  let keyValue = Object.keys(y);
  let objectValue = Object.values(y);

  console.log("objectValue", objectValue);
  console.log("keyValue", keyValue);

  //the single VALUE from the object stored in a variable
  let objectValueY = objectValue[0];

  //the single KEY from the object, stored in a variable
  let keyValueY = keyValue[0];
 
  //if the value has already been selected and pushed to the array, recursively call
  //randomizer again to choose hopefully a different one.

    if (randomNumValues.length > 0 && randomNumValues.includes(objectValueY)) {
      console.log(
        "randomNumValues includes objectValueY",
        randomNumValues.includes(objectValueY)
      );
      console.log("randomNumValues", randomNumValues);
      
      //check to ensure that the length of the array is less than
      //the length of the original bingoFacts object
      //if it is, call the randomizerNumbers function again to select a new number
      if (randomNumValues.length < 104) {
        randomizerNumbers(bingoFacts);
      }
  
 
  } else {
    console.log("number has not been called. Proceeding with question");

    let randomNumbers = JSON.parse(window.localStorage.getItem('numFacts'));
    //push objectValueY to the array randomNumValues
    randomNumValues.push(objectValueY);
    window.localStorage.setItem("numValues", JSON.stringify(randomNumValues));
    console.log('randomNumValues', randomNumValues);

    //find all indexes of questions that have the same answer stored in objectValueY
    const allInstances = findAllInstancesOfObjectValueY(objectValueY);
    console.log("allInstances", allInstances);

    //convert the returned indexes to facts and push to array
    let keys = Object.keys(bingoFacts);
    allInstances.map((c) => randomNumbers.push(keys[c]));
    console.log("randomNumbers", randomNumbers);
    console.log('randomNumbers after new ones pushed', randomNumbers);

//At this point randomNumbers array contains the collected numFacts

    //store the randomFacts in local storage to retrieve with the show all button
    // let randomFactsNoWhitespace = randomFacts.map((c) => c.replace(/\s/g, ""));
    window.localStorage.setItem("numFacts", JSON.stringify(randomNumbers));
    let values = window.localStorage.getItem("numFacts");
    valueDisplay.innerHTML = values;

    numFacts = JSON.parse(window.localStorage.getItem('numFacts'));
    console.log('numFacts', numFacts);


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
    setTimeout(function () {
      question.disabled = false;
    }, 15000);

    myTimer(timerReadOut, timer);
    soundBell();
    let speech = document.getElementById("relativeKey").innerText;
    setTimeout(function () {
      textToSpeech(speech);
    }, 1200);
    
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
      setTimeout(function () {
        myTimer(num, timer);
      }, 1000);
    } else {
      timer.innerHTML = "0";
      timerReadOut = 15;
    }
  } else {
    timer.innerHTML = "0";
    timerReadOut = 15;
    return;
  }
}
function emptyCheckmarkOrX() {
  document.getElementById("yesOrNo").innerHTML = "";
}
function callQuestion(obj) {
  console.log("im in callQuestion");
  let questionAnswer = {};
  //returns an array of keys from obj.
  let keys = Object.keys(obj);
  
  //takes the length of the number of keys in bingoFacts and picks a random number
  let relativeKey = (keys.length * Math.random()) << 0;
  console.log("random key chosen", relativeKey);
  //sets random to the fact found in bingoFacts at array element 'relativeKey' e.g. 21 would return 1x10
  let random = obj[keys[relativeKey]];
  console.log("answer belonging to the key", random);
  console.log("relativeKey", keys[relativeKey]);
  let anotherKey = keys[relativeKey];
  console.log("anotherKey", anotherKey);
  questionAnswer = {
    [anotherKey]: random,
  };
  console.log("questionAnswer", questionAnswer);
  return questionAnswer;
}

/*-----------SAFETY FEATURE------------------*/
function confirmationWindow() {
  const confirmation = confirm(
    "Press OK to reset the game or cancel to resume"
  );
  if (confirmation) {
    reset();
  }
}

function reset() {
  window.localStorage.clear();
  location.reload();
}

function bingo() {
  const speechTags = [
    "Bingo the dog",
    "Bingo",
    "There was a farmer had a dog.",
    "Bingo time!",
    "Bingo, party time!",
    "Bingo. Winner, winner, chicken dinner",
    "Bingo, you are amazing",
    "Bingo, I once saw a unicorn",
    "Jeff has a bingo!",
    "Bingo, bango, boingo",
  ];
  //pick a random speech tag to accompany the bingo
  let randomPhrase = speechTags[Math.floor(Math.random() * 7 + 0)];
  textToSpeech("Bingo!" + randomPhrase);
  resumeButton.disabled = false;
  document.getElementById("callBtn").disabled = true;
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
  bingoButton.disabled = false;
  callBtn.disabled = false;
}
/*---------------Function to decide if answer was called--------------------*/

function checkIfCalled() {
  event.preventDefault();
  console.log("gamemode", gameMode);
  if (gameMode) {
    console.log("im in checkIfCalled");
    //grabs the number the user keys in
    const numberInput = document.getElementById("num");
    //parse the keyed in number as an integer
    let numberToCheck = parseInt(document.getElementById("num").value);
    //checks to see if the keyed number is in the array of numbers called in the game
    if (factValues.includes(numberToCheck)) {
      console.log("yes", numberToCheck);
      //adjusts the styling of the div to green and with a checkmark
      document.getElementById("yesOrNo").className = "checkOrXGreen";
      document.getElementById("yesOrNo").innerHTML = "&#10003";
      const speechTags = [
        "Mr. Reynolds is very shy",
        "That's right",
        "Is it Valentine's Day yet?",
        "Welcome to the year twenty twenty two",
        "Will you be my Valentine?",
        "This is outrageous",
        "Who is cupid anyway?",
        "January is long",
        "I have a growth mindset",
        "Is Jeff in love?",
        "Great work.",
        "Ms. Lyons is a wonderful human",
        "Will you buy me some roses?",
        "Write me a poem",
        "Jim Dandy!",
        "YES!",
        "Is it 2:40 yet?",
        "I knew it!",
        "I'm absolutely telling your mom",
        "Mommy",
        "I love chocolate sardines",
        "I'm lonely!",
        "Tim Beebs, tim beebs",
        "Justin Bieber is a dreamboat",
        "You're a genius",
      ];
      //pick a random speech tag to accompany the bingo
      let randomPhrase = speechTags[Math.floor(Math.random() * 25 + 0)];
      textToSpeech(randomPhrase);
      //resets the input window to an empty string
      numberInput.value = "";
      //inserts a placeholder value string
      numberInput.placeholder = "Enter a number to check";
      //ensures that no new numbers can be called until the game is resumed
      document.getElementById("callBtn").disabled = true;
    } else {
      //if the user keyed number is not in the array, do this
      console.log("no", numberToCheck);
      document.getElementById("yesOrNo").className = "checkOrXRed";
      document.getElementById("yesOrNo").innerHTML = "&#x274C";
      soundBuzzer();
      setTimeout(function () {
        textToSpeech("Sorry. That number was not called.");
      }, 1400);
      numberInput.value = "";
      numberInput.placeholder = "Enter a number to check";
      document.getElementById("callBtn").disabled = true;
    }
  } else if (gameMode === false) {
    console.log("decided the gameMode was false");
    let numFactors = JSON.parse(window.localStorage.getItem('numFacts'));
    //remove the spaces from the randomFacts array to facilitate the matching of user input
    let noSpacesRandomNumbers = numFactors.map((c) => c.replace(/\s/g, ""));
    console.log("noSpaces", noSpacesRandomNumbers);
    const numberInput = document.getElementById("num");
    let factToCheck = numberInput.value;
    console.log("factToCheck", factToCheck);
    if (noSpacesRandomNumbers.includes(factToCheck)) {
      console.log("yes", factToCheck);
      document.getElementById("yesOrNo").className = "checkOrXGreen";
      document.getElementById("yesOrNo").innerHTML = "&#10003";
      const speechTags = [
        "You are right as rain!",
        "Unbelievable",
        "Celebrate good times!",
        "You should buy a lottery ticket!",
        "That's correct",
        "Yahoo!",
        "RIght on!",
        "Now you're cooking with gas",
        "Yes and yes",
        "Keep going!"
      ];
      //pick a random speech tag to accompany the bingo
      let randomPhrase = speechTags[Math.floor(Math.random() * 7 + 0)];
      textToSpeech(randomPhrase);
      numberInput.value = "";
      numberInput.placeholder = "Enter fact to check (no spaces)";
      document.getElementById("callBtn").disabled = true;
    } else {
      console.log("no", factToCheck);
      document.getElementById("yesOrNo").className = "checkOrXRed";
      document.getElementById("yesOrNo").innerHTML = "&#x274C";
      soundBuzzer();
      setTimeout(function () {
        textToSpeech("Sorry. That fact was not called.");
      }, 1200);
      numberInput.value = "";
      numberInput.placeholder = "Enter fact to check (no spaces)";
      document.getElementById("callBtn").disabled = true;
    }
  }
}
