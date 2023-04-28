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
const batteredFish1 = document.getElementById("batteredFish1")
const batteredFish2 = document.getElementById("batteredFish2")

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
const criteriaBoxContainer = document.getElementById("criteria-box-container");
const criteriaBox = document.getElementById("criteria-box");


// frying button handlers
const dryFryingTofu = document.getElementById("dryFryingTofu")
const shallowFryingTofu = document.getElementById("shallowFryingTofu")
const stirFryingTofu = document.getElementById("stirFryingTofu")

const deepFryingSDB = document.getElementById("deepFryingSDB")
const dryFryingSDB = document.getElementById("dryFryingSDB")

const deepFryingS = document.getElementById("deepFryingS")
const stirFryingS = document.getElementById("stirFryingS")

const deepFryingBF = document.getElementById("deepFryingBF")
const stirFryingBF = document.getElementById("stirFryingBF")

const fryingFoodVidContainer = document.getElementById("food-video-container")
const retryButton = document.getElementById("retry-button");
const continueButton = document.getElementById("continue-button");
//fry food labels
const tofuLabelContainer = document.getElementById("ET-label-container")
const SDBLabelContainer = document.getElementById("SDB-label-container")
const SLabelContainer = document.getElementById("S-label-container")

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




//Food choice and fry choice
let foodChoice = "";
let fryChoice = false;
const criteriaImage = document.getElementById("criteria-image");

// FOOD BUTTON HANDLERS
tofu.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_nohover.png");
  dryFryingTofu.style.display = "block"
  stirFryingTofu.style.display = "block"
  shallowFryingTofu.style.display = "block"
  tofuLabelContainer.style.display = "block"



  foodChoice = "tofu"
};

duckBreast.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/SDB-Selection/SDB_nohover.png");
  deepFryingSDB.style.display = "block"
  dryFryingSDB.style.display = "block"
  SDBLabelContainer.style.display = "block"



  foodChoice = "duck"
};

spinach.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/S-Selection/S_nohover.png");
  deepFryingS.style.display = "block"
  stirFryingS.style.display = "block"
  SLabelContainer.style.display = "block"



  foodChoice = "spinach"
};

batteredFish1.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_nohover.png");
  deepFryingBF.style.display = "block"
  stirFryingBF.style.display = "block"
  SLabelContainer.style.display = "block"



  foodChoice = "fish"
};

batteredFish2.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_nohover.png");
  deepFryingBF.style.display = "block"
  stirFryingBF.style.display = "block"
  SLabelContainer.style.display = "block"



  foodChoice = "fish"
};


//fry selection functions
function showFryImage(fryMethod) {
  if (fryMethod === "dryFryingTofu") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_Dry Fry_hover.png");


  } else if (fryMethod === "shallowFryingTofu") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_Shallow Fry_hover.png");

  } else if (fryMethod === "stirFryingTofu") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_Stir Fry_hover.png");

  } else if (fryMethod === "deepFryingSDB") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/SDB-Selection/SDB_Deep Fry_hover.png");

  } else if (fryMethod === "dryFryingSDB") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/SDB-Selection/SDB_Dry Fry_hover.png");

  } else if (fryMethod === "stirFryingS") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/S-Selection/S_Stir Fry_hover.png");

  } else if (fryMethod === "deepFryingS") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/S-Selection/S_Deep Fry_hover.png");

  } else if (fryMethod === "deepFryingBF") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_Deep Fry_hover.png");

  } else if (fryMethod === "stirFryingBF") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_Stir Fry_hover.png");

  }

}

function hideFryImage() {
  if (foodChoice === "tofu") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_nohover.png");
  } else if (foodChoice === "duck") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/SDB-Selection/SDB_nohover.png");

  } else if (foodChoice === "spinach") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/S-Selection/S_nohover.png");

  } else if (foodChoice === "fish") {
    frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_nohover.png");

  }
}

// Next (frying intro) button
fryBackBtn.onclick = function () {
  frySelectionImage.setAttribute("xlink:href", "");

  dryFryingTofu.style.display = "none"
  stirFryingTofu.style.display = "none"
  shallowFryingTofu.style.display = "none"

  tofuLabelContainer.style.display = "none"
  SDBLabelContainer.style.display = "none"
  SLabelContainer.style.display = "none"

  deepFryingSDB.style.display = "none"
  dryFryingSDB.style.display = "none"

  deepFryingS.style.display = "none"
  stirFryingS.style.display = "none"

  deepFryingBF.style.display = "none"
  stirFryingBF.style.display = "none"

  fryFood.style.display = "none";
  foodPicker.style.display = "block";
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0
};

// Vids
const fryFinishBtn = document.getElementById("fry-finish-button")

const shallowFryTofuVid = document.getElementById("shallowFryTofuVid")
const dryFryTofuVid = document.getElementById("dryFryTofuVid")
const stirFryTofuVid = document.getElementById("stirFryTofuVid")
const deepFrySDBVid = document.getElementById("deepFrySDBVid")
const dryFrySDBVid = document.getElementById("dryFrySDBVid")
const deepFrySVid = document.getElementById("deepFrySVid")
const stirFrySVid = document.getElementById("stirFrySVid")
const deepFryBFVid = document.getElementById("deepFryBFVid")
const stirFryBFVid = document.getElementById("stirFryBFVid")

function handleDeepFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0

  if (foodChoice === "duck") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    deepFrySDBVid.style.display = "block";
    deepFrySDBVid.play()
    fryChoice = "deep"

  } else if (foodChoice === "spinach") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    deepFrySVid.style.display = "block";
    deepFrySVid.play()
    fryChoice = "deep"
  } else if (foodChoice === "fish") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    deepFryBFVid.style.display = "block";
    deepFryBFVid.play()
    fryChoice = "deep"
  }
}

function handleDryFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0
  if (foodChoice === "tofu") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    dryFryTofuVid.style.display = "block";
    dryFryTofuVid.play();
    fryChoice = "dry"

  } else if (foodChoice === "duck") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    dryFrySDBVid.style.display = "block";
    dryFrySDBVid.play()

    fryChoice = "dry"

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
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    document.getElementById("stirFryTofuVid").style.display = "block";
    document.getElementById("stirFryTofuVid").play();
    fryChoice = "stir"

  } else if (foodChoice === "spinach") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    stirFrySVid.style.display = "block";
    stirFrySVid.play()
    fryChoice = "stir"
  } else if (foodChoice === "fish") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    stirFryBFVid.style.display = "block";
    stirFryBFVid.play()
    fryChoice = "stir"
  }
}


//TOFU VID ENDED EVENT LISTENERS
shallowFryTofuVid.addEventListener('ended', function () {
  console.log("ended")
  completed.push("tofu")
  continueBtnContainer.style.display = "block";
  criteriaBox.src = "./assets/images/ET-Selection/Correct_Criteria.png"
  criteriaBoxContainer.style.display = "block";

});

dryFryTofuVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";
  criteriaBox.src = "./assets/images/ET-Selection/Incorrect_Criteria.png"
  criteriaBoxContainer.style.display = "block";

});
stirFryTofuVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";
  criteriaBox.src = "./assets/images/ET-Selection/Incorrect_Criteria.png"
  criteriaBoxContainer.style.display = "block";


});

deepFrySDBVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";


});


dryFrySDBVid.addEventListener('ended', function () {
  completed.push("duck")
  continueBtnContainer.style.display = "block";

});

deepFrySVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";

});

stirFrySVid.addEventListener('ended', function () {
  completed.push("spinach")
  continueBtnContainer.style.display = "block";

});

deepFryBFVid.addEventListener('ended', function () {
  completed.push("fish")
  continueBtnContainer.style.display = "block";

});

stirFryBFVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";

});

retryButton.onclick = function () {

  if (foodChoice === "tofu") {

    retryBtnContainer.style.display = "none";
    criteriaBoxContainer.style.display = "none";

    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "dry") {
      dryFryTofuVid.currentTime = 0;
      dryFryTofuVid.style.display = "none";

      foodChoice = "tofu"

    } else if (fryChoice === "stir") {
      stirFryTofuVid.currentTime = 0;
      stirFryTofuVid.style.display = "none";

      foodChoice = "tofu"

    }

  } else if (foodChoice === "duck") {

    retryBtnContainer.style.display = "none";
    // criteriaBoxContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "deep") {
      deepFrySDBVid.currentTime = 0;
      deepFrySDBVid.style.display = "none";

      foodChoice = "duck"

    }

  } else if (foodChoice === "spinach") {

    retryBtnContainer.style.display = "none";
    // criteriaBoxContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "deep") {
      deepFrySVid.currentTime = 0;
      deepFrySVid.style.display = "none";

      foodChoice = "spinach"

    }

  } else if (foodChoice === "fish") {

    retryBtnContainer.style.display = "none";
    // criteriaBoxContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "stir") {
      stirFryBFVid.currentTime = 0;
      stirFryBFVid.style.display = "none";

      foodChoice = "fish"

    }

  }
}

continueButton.onclick = function () {
  tofuLabelContainer.style.display = "none"
  SDBLabelContainer.style.display = "none"
  SLabelContainer.style.display = "none"


  criteriaBoxContainer.style.display = "none";
  fryingFoodVidContainer.style.display = "none";
  foodPicker.style.display = "block";
  continueBtnContainer.style.display = "none"
  if (foodChoice === "tofu") {
    shallowFryTofuVid.currentTime = 0;
    shallowFryTofuVid.style.display = "none";
    dryFryingTofu.style.display = "none"
    stirFryingTofu.style.display = "none"
    shallowFryingTofu.style.display = "none"

  } else if (foodChoice === "duck") {
    dryFrySDBVid.currentTime = 0;
    dryFrySDBVid.style.display = "none";
    deepFryingSDB.style.display = "none"
    dryFryingSDB.style.display = "none"
  } else if (foodChoice === "spinach") {
    stirFrySVid.currentTime = 0;
    stirFrySVid.style.display = "none";
    deepFryingS.style.display = "none"
    stirFryingS.style.display = "none"
  } else if (foodChoice === "fish") {
    deepFryBFVid.currentTime = 0;
    deepFryBFVid.style.display = "none";
    deepFryingBF.style.display = "none"
    stirFryingBF.style.display = "none"
  }






}
