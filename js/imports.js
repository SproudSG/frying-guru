//start menu screen
const startButton = document.getElementById("start-button");
const fryNextButton = document.getElementById("fry-next-button");
const nextBtnContainer = document.getElementById("next-button-container");
const fryingIntro = document.getElementById("video-container");
const startUI = document.getElementById("startUI");
const tutorialText = document.getElementById("tutorial-text");
//Food picker main menu
const foodPicker = document.getElementById("foodPicker");
const selectionImageHovered = document.getElementById("hover-selection-tofu-image");
const selectionTextHovered = document.getElementById("hover-selection-text");

//Foods to pick from
const tofu = document.getElementById("eggTofu")
const duckBreast = document.getElementById("duckBreast")
const batteredFish = document.getElementById("batteredFish")
const spinach = document.getElementById("spinach")
const selectionImage = document.getElementById("selection-image")
const foodPickerAudio = document.getElementById("foodPickerAudio");
const hoverLabel = document.getElementById("hover-label");

//Fry food screen
const fryFood = document.getElementById("fryFood");
const fryPickerAudio = document.getElementById("fryPickerAudio");
const frySelectionImage = document.getElementById("fry-selection")
const fryBackBtn = document.getElementById("back-button");
const retryBtnContainer = document.getElementById("retry-button-container");
const continueBtnContainer = document.getElementById("continue-button-container");


// frying button handlers
const dryFrying = document.getElementById("dryFrying")
const deepFrying = document.getElementById("deepFrying")
const shallowFrying = document.getElementById("shallowFrying")
const stirFrying = document.getElementById("stirFrying")
const fryingFoodVidContainer = document.getElementById("food-video-container")
const retryButton = document.getElementById("retry-button");
const continueButton = document.getElementById("continue-button");

//check if button has already been clicked
var dryFryTofuCheckClicked = false;
var stirFryTofuCheckClicked = false;

//foods fried (completed)
let completed = []

// Start button
startButton.onclick = function () {
  startUI.style.display = "none";
  fryingIntro.style.display = "block";
  document.getElementById("fryingIntro").play();

};

document.getElementById("fryingIntro").addEventListener("ended", () => {
  nextBtnContainer.style.display = "block";
});

// Next (frying intro) button
fryNextButton.onclick = function () {
  fryingIntro.style.display = "none";
  foodPicker.style.display = "block";
  foodPickerAudio.play()
};

//Selection image 
function showImage(food) {
  if (food === "tofu") {
    selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/ET_hover.png");
    hoverLabel.src = "./assets/images/Ingredient/Egg Tofu_label.png"
  } else if (food === "spinach") {
    selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/S_hover.png");
    hoverLabel.src = "./assets/images/Ingredient/Spinach_label.png"

  } else if (food === "batteredFish") {
    selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/BF_hover.png");
    hoverLabel.src = "./assets/images/Ingredient/Battered Fish_label.png"

  } else if (food === "duckBreast") {
    selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/SDB_hover.png");
    hoverLabel.src = "./assets/images/Ingredient/Smoked_label.png"

  }

}

function hideImage() {
  selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/Selection_NoHover.png");
  hoverLabel.src = ""

}


document.addEventListener("mousemove", function (event) {
  // Get the position of the mouse cursor
  var x = event.clientX + 5;
  var y = event.clientY + 5;

  // Set the position of the image to follow the cursor
  hoverLabel.style.left = x + "px";
  hoverLabel.style.top = y + "px";
});



//fry selection functions
function showFryImage(fryMethod) {
  if (fryMethod === "dryFrying") {
    if (!dryFryTofuCheckClicked) {
      frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_Dry Fry_hover.png");
    }

  } else if (fryMethod === "shallowFrying") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_Shallow Fry_hover.png");

  } else if (fryMethod === "stirFrying") {
    if (!stirFryTofuCheckClicked) {
      frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_Stir Fry_hover.png");
    }
  }

}

function hideFryImage() {
  frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_nohover.png");
}

// Next (frying intro) button
fryBackBtn.onclick = function () {
  fryFood.style.display = "none";
  foodPicker.style.display = "block";
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0
};




//Food choice and fry choice
let foodChoice = "";
let fryChoice = false;
const criteriaImage = document.getElementById("criteria-image");

// FOOD BUTTON HANDLERS
tofu.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0

  fryPickerAudio.play()

  // if (!completed.includes('tofu')) {
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_nohover.png");

  fryFood.style.display = "block";


  foodChoice = "tofu"
  // }

};

// duckBreast.onclick = function () {
//   if (!completed.includes('duck')) {

//     foodPicker.style.display = "none";
//     fryFood.style.display = "block";

//     //remove all effects
//     dryFrying.classList.remove('opacity');
//     deepFrying.classList.remove('opacity');
//     //show the frying options


//     foodChoice = "duck"
//   }
// };

// batteredFish.onclick = function () {

// };

// spinach.onclick = function () {

// };



//Tofu Vids
const shallowFryTofuVid = document.getElementById("shallowFryTofuVid")
const dryFryTofuVid = document.getElementById("dryFryTofuVid")
const stirFryTofuVid = document.getElementById("stirFryTofuVid")
const fryFinishBtn = document.getElementById("fry-finish-button")




// deepFrying.onclick = function () {
//   if (foodChoice === "duck") {
//     console.log("wrong choice")
//   }
// };

function handleDryFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0

  if (foodChoice === "tofu") {
    if (!dryFryTofuCheckClicked) {
      fryFood.style.display = "none";
      fryingFoodVidContainer.style.display = "block";
      document.getElementById("dryFryTofuVid").style.display = "block";
      document.getElementById("dryFryTofuVid").play();
      fryChoice = "dry"
    }

  } else if (foodChoice === "duck") {
    console.log("right choice")
  }
}



function handleShallowFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0

  if (foodChoice === "tofu") {
    fryChoice = "correct"
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    document.getElementById("shallowFryTofuVid").style.display = "block";
    document.getElementById("shallowFryTofuVid").play();
  }
}

function handleStirFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0

  if (foodChoice === "tofu") {
    if (!stirFryTofuCheckClicked) {
      fryFood.style.display = "none";
      fryingFoodVidContainer.style.display = "block";
      document.getElementById("stirFryTofuVid").style.display = "block";
      document.getElementById("stirFryTofuVid").play();
      fryChoice = "stir"
    }
  }
}


//TOFU VID ENDED EVENT LISTENERS
shallowFryTofuVid.addEventListener('ended', function () {
  console.log("ended")
  completed.push("tofu")
  continueBtnContainer.style.display = "block";

});

dryFryTofuVid.addEventListener('ended', function () {
  console.log("ended")
  retryBtnContainer.style.display = "block";

});
stirFryTofuVid.addEventListener('ended', function () {
  console.log("ended")
  retryBtnContainer.style.display = "block";


});


retryButton.onclick = function () {

  if (foodChoice === "tofu") {

    retryBtnContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "dry") {
      dryFryTofuVid.currentTime = 0;

      dryFryTofuVid.style.display = "none";

      // dryFryTofuCheckClicked = true;

      foodChoice = "tofu"

    } else if (fryChoice === "stir") {
      stirFryTofuVid.currentTime = 0;

      stirFryTofuVid.style.display = "none";
      stirFrying.classList.add('opacity');

      // stirFryTofuCheckClicked = true;

      foodChoice = "tofu"

    }

  }
}

continueButton.onclick = function () {
  fryingFoodVidContainer.style.display = "none";
  foodPicker.style.display = "block";
  continueBtnContainer.style.display = "none"
  shallowFryTofuVid.currentTime = 0;
  shallowFryTofuVid.style.display = "none";
}
