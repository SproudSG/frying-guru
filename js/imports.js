//start menu screen
var myButton = document.getElementById("start-button");
var fryNextButton = document.getElementById("fry-next-button");
const fryingIntro = document.getElementById("video-container");
const startUI = document.getElementById("startUI");
const tutorialText = document.getElementById("tutorial-text");
let nextBtnClickCount = 0;

//Food picker main menu
const foodPicker = document.getElementById("foodPicker");

//Foods to pick from
const tofu = document.getElementById("eggTofu")
const duckBreast = document.getElementById("duckBreast")
const batteredFish = document.getElementById("batteredFish")
const spinach = document.getElementById("spinach")

//Fry food screen
const fryFood = document.getElementById("fryFood");

//frying options
const shallowFryingContainer = document.getElementById("shallowFryingContainer");
const dryFryingContainer = document.getElementById("dryFryingContainer");
const stirFryingContainer = document.getElementById("stirFryingContainer");
const deepFryingContainer = document.getElementById("deepFryingContainer");


// frying button handlers
const dryFrying = document.getElementById("dryFrying")
const deepFrying = document.getElementById("deepFrying")
const shallowFrying = document.getElementById("shallowFrying")
const stirFrying = document.getElementById("stirFrying")
const fryingFoodVidContainer = document.getElementById("food-video-container")


//foods fried (completed)
let completed = []

// Start button
myButton.onclick = function () {
  startUI.style.display = "none";
  fryingIntro.style.display = "block";
  document.getElementById("fryingIntro").play();

};


// Next (frying intro) button
fryNextButton.onclick = function () {
  nextBtnClickCount++;
  if (nextBtnClickCount === 1) {
    tutorialText.textContent = "The main difference of the different frying methods is in the amount of fat or oil added. Learn more about frying in the following activity.​";
  } else if (nextBtnClickCount === 2) {
    fryingIntro.style.display = "none";
    foodPicker.style.display = "block";
  }
};

//Food choice and fry choice
let foodChoice = "";
let fryChoice = false;
const criteriaText = document.getElementById("criteriaText");

// FOOD BUTTON HANDLERS
tofu.onclick = function () {
  if (!completed.includes('tofu')) {
    foodPicker.style.display = "none";
    fryFood.style.display = "block";

    //remove all effects
    dryFrying.classList.remove('opacity');
    shallowFrying.classList.remove('opacity');
    stirFrying.classList.remove('opacity');
    //show the frying options
    stirFryingContainer.style.display = 'block'
    shallowFryingContainer.style.display = 'block'
    dryFryingContainer.style.display = 'block'
    deepFryingContainer.style.display = 'none'
    criteriaText.innerHTML = "  After frying, the egg tofu should<br>    • maintain its shape; and <br>    • have a golden brown colour."

    foodChoice = "tofu"
  }

};

duckBreast.onclick = function () {
  if (!completed.includes('duck')) {

  foodPicker.style.display = "none";
  fryFood.style.display = "block";

  //remove all effects
  dryFrying.classList.remove('opacity');
  deepFrying.classList.remove('opacity');
  //show the frying options
  deepFryingContainer.style.display = "block";
  dryFryingContainer.style.display = "block";
  stirFryingContainer.style.display = 'none'
  shallowFryingContainer.style.display = 'none'
  criteriaText.innerHTML = " After frying, the smoked duck breast should: <br> • not see an increase in its fat content; and  <br> • have a desirable flavour and crispy texture."

  foodChoice = "duck"
  }
};

batteredFish.onclick = function () {

};

spinach.onclick = function () {

};



//Tofu Vids
const shallowFryTofuVid = document.getElementById("shallowFryTofuVid")
const dryFryTofuVid = document.getElementById("dryFryTofuVid")
const stirFryTofuVid = document.getElementById("stirFryTofuVid")


const fryFinishBtn = document.getElementById("fry-finish-button")

//check if button has already been clicked
var dryFryCheckClicked = false;
var stirFryCheckClicked = false;


deepFrying.onclick = function () {
  if (foodChoice === "duck") {
    console.log("wrong choice")
  }
};
dryFrying.onclick = function () {
  if (foodChoice === "tofu") {
    if (!dryFryCheckClicked) {
      fryFood.style.display = "none";
      fryingFoodVidContainer.style.display = "block";
      dryFryTofuVid.style.display = "block";
      dryFryTofuVid.play();
      fryChoice = "dry"
    }

  } else if (foodChoice === "duck") {
    console.log("right choice")
  }
};
shallowFrying.onclick = function () {
  if (foodChoice === "tofu") {
    fryChoice = "correct"
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    shallowFryTofuVid.style.display = "block";

    shallowFryTofuVid.play();
  }
};
stirFrying.onclick = function () {
  if (foodChoice === "tofu") {
    if (!stirFryCheckClicked) {
      fryFood.style.display = "none";
      fryingFoodVidContainer.style.display = "block";
      stirFryTofuVid.style.display = "block";
      stirFryTofuVid.play();
      fryChoice = "stir"
    }
  }
};

//TOFU VID ENDED EVENT LISTENERS
shallowFryTofuVid.addEventListener('ended', function () {
  fryFinishBtn.style.display = "block";
  completed.push("tofu")
  fryFinishBtn.textContent = "BACK TO MENU"

});

dryFryTofuVid.addEventListener('ended', function () {
  fryFinishBtn.style.display = "block";
  fryFinishBtn.textContent = "TRY AGAIN"

});
stirFryTofuVid.addEventListener('ended', function () {
  fryFinishBtn.style.display = "block";
  fryFinishBtn.textContent = "TRY AGAIN"

});

fryFinishBtn.onclick = function () {
  if (fryChoice === "correct") {
    console.log(fryChoice)
    fryingFoodVidContainer.style.display = "none";
    foodPicker.style.display = "block";
    if (completed.includes('tofu')) {
      shallowFryTofuVid.style.display = "none";
      document.getElementById("eggTofuContainer").classList.remove('food-item');
      document.getElementById("eggTofuContainer").classList.add('opacity');
    }
    fryFinishBtn.style.display = "none";
  } else {
    if (foodChoice === "tofu") {

      fryFinishBtn.style.display = "none";
      fryingFoodVidContainer.style.display = "none";
      fryFood.style.display = "block";

      if (fryChoice === "dry") {
        dryFryTofuVid.currentTime = 0;

        dryFryTofuVid.style.display = "none";
        dryFrying.classList.add('opacity');

        dryFryCheckClicked = true;
        //load the fry page
        fryFood.style.display = "block";
        //show the frying options
        stirFryingContainer.style.display = 'block'
        shallowFryingContainer.style.display = 'block'
        dryFryingContainer.style.display = 'block'
        deepFryingContainer.style.display = 'none'
        criteriaText.innerHTML = "  After frying, the egg tofu should<br>    • maintain its shape; and <br>    • have a golden brown colour."
        foodChoice = "tofu"

      } else if (fryChoice === "stir") {
        stirFryTofuVid.currentTime = 0;

        stirFryTofuVid.style.display = "none";
        stirFrying.classList.add('opacity');

        stirFryCheckClicked = true;
        //load the fry page
        fryFood.style.display = "block";
        //show the frying options
        stirFryingContainer.style.display = 'block'
        shallowFryingContainer.style.display = 'block'
        dryFryingContainer.style.display = 'block'
        deepFryingContainer.style.display = 'none'
        criteriaText.innerHTML = "  After frying, the egg tofu should<br>    • maintain its shape; and <br>    • have a golden brown colour."
        foodChoice = "tofu"

      }

    }
  }
};
