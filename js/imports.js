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
const tickHoverLabel = document.getElementById("hover-label-tick");

//Fry food screen
const fryFood = document.getElementById("fryFood");
const fryPickerAudio = document.getElementById("fryPickerAudio");
const frySelectionImage = document.getElementById("fry-selection")
const fryBackBtn = document.getElementById("back-button");
const fryBackBtnIOS = document.getElementById("back-button-ios");

const retryBtnContainer = document.getElementById("retry-button-container");
const continueBtnContainer = document.getElementById("continue-button-container");
const criteriaBoxContainer = document.getElementById("criteria-box-container");
const restartBtnContainer = document.getElementById("restart-button-container");
const summaryBtnContainer = document.getElementById("summary-button-container");
const finalContinueButtonContainer = document.getElementById("final-continue-button-container");
const cpddPlayBtn = document.getElementById("cpddPlayBtn");
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
const restartButton = document.getElementById("restart-button");
const summaryButton = document.getElementById("summary-button");
const summaryButtonIOS = document.getElementById("summary-button-ios");

const finalContinueButton = document.getElementById("final-continue-button");

//Bandwidth
var bandwidth = 1
//foods fried (completed)
let completed = []

function isMobileIOS() {
  const userAgent = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isMobile = /Mobi|Android/i.test(userAgent);

  return isIOS && isMobile;
}

if (isMobileIOS()) {
  console.log("true")
  cpddPlayBtn.style.display = "block"
  document.getElementById("cpddIntro").style.display = "none"

} else {
  document.getElementById("cpddIntro").play();
}

window.addEventListener("orientationchange", function () {
  if (isMobileIOS()) {
    var popup = document.getElementById("popup");

    if (window.orientation === 0 || window.orientation === 180) {
      // Portrait mode
      popup.style.display = "block";
    } else {
      // Landscape mode
      popup.style.display = "none";
    }
  }
});

window.addEventListener("resize", function () {

  var popup = document.getElementById("popup");
  if (window.innerWidth < window.innerHeight) {
    // Portrait mode
    popup.style.display = "block";

  } else {
    // Landscape mode
    popup.style.display = "none";

  }

});


cpddPlayBtn.addEventListener('click', () => {
  cpddPlayBtn.style.display = "none";
  document.getElementById("cpddIntro").style.display = "block";
  document.getElementById("cpddIntro").play();

  setTimeout(() => {
    document.getElementById("introOpener").play();

  }, document.getElementById("cpddIntro").duration * 1000);
});


document.getElementById("cpddIntro").addEventListener("ended", () => {
  var popup = document.getElementById("popup");

  if (window.innerWidth < window.innerHeight) {
    // Portrait mode
    popup.style.display = "block";
  } else {
    // Landscape mode
    popup.style.display = "none";
  }
  document.getElementById("cpddIntro").pause();
  document.getElementById("cpddIntro").style.display = "none";
  startUI.style.display = "block";
});

// Start button
startButton.onclick = function () {
  startUI.style.display = "none";
  fryingIntro.style.display = "block";
  document.getElementById('introOpener').autoplay = false;
  document.getElementById("introOpener").pause();
  document.getElementById("fryingIntro").play();
};

document.getElementById("fryingIntro").addEventListener("ended", () => {
  nextBtnContainer.style.display = "block";
  fryNextButton.style.display = "block";

});

document.getElementById("cpdd").addEventListener("ended", () => {
  window.close()
});


// Next (frying intro) button
fryNextButton.onclick = function () {
  fryNextButton.style.display = "none";
  fryingIntro.style.display = "none";
  nextBtnContainer.style.display = "none";
  foodPicker.style.display = "block";
  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'block'
    document.getElementById("hover-label-fish-ios").style.display = 'block'
    document.getElementById("hover-label-tofu-ios").style.display = 'block'
    document.getElementById("hover-label-spinach-ios").style.display = 'block'
    if (completed.includes('spinach')) {
      document.getElementById("hover-tick-spinach-ios").style.display = 'block'
    }
    if (completed.includes('duck')) {
      document.getElementById("hover-tick-duck-ios").style.display = 'block'
    }
    if (completed.includes('fish')) {
      document.getElementById("hover-tick-fish-ios").style.display = 'block'
    }
    if (completed.includes('tofu')) {
      document.getElementById("hover-tick-tofu-ios").style.display = 'block'
    }
  }

  if (hasFourUniqueElements(completed)) {
    if (isMobileIOS()) {
      document.getElementById("summary-button-container-ios").style.display = 'block'
    } else {
      summaryBtnContainer.style.display = 'block'
    }
  }
  foodPickerAudio.play()
};

//Selection image 
function showImage(food) {
  if (!isMobileIOS()) {

    if (food === "tofu") {
      selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/ET_hover.png");
      hoverLabel.src = "./assets/images/Ingredient/Egg Tofu_label.png"
      if (completed.includes('tofu')) {
        tickHoverLabel.src = "./assets/images/UI/Tick_Box_Nomal.png"
      }
    } else if (food === "spinach") {
      selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/S_hover.png");
      hoverLabel.src = "./assets/images/Ingredient/Spinach_label.png"
      if (completed.includes('spinach')) {
        tickHoverLabel.src = "./assets/images/UI/Tick_Box_Nomal.png"
      }
    } else if (food === "batteredFish") {
      selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/BF_hover.png");
      hoverLabel.src = "./assets/images/Ingredient/Battered Fish_label.png"
      if (completed.includes('fish')) {
        tickHoverLabel.src = "./assets/images/UI/Tick_Box_Nomal.png"
      }
    } else if (food === "duckBreast") {
      selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/SDB_hover.png");
      hoverLabel.src = "./assets/images/Ingredient/Smoked_label.png"
      if (completed.includes('duck')) {
        tickHoverLabel.src = "./assets/images/UI/Tick_Box_Nomal.png"
      }
    }
  }
}

function hideImage() {
  if (!isMobileIOS()) {

    selectionImage.setAttribute("xlink:href", "./assets/images/Ingredient/Selection_NoHover.png");
    hoverLabel.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
    tickHoverLabel.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
  }
}


document.addEventListener("mousemove", function (event) {
  // Get the position of the mouse cursor
  var x = event.clientX + 35;
  var y = event.clientY + 5;
  // Set the position of the image to follow the cursor
  hoverLabel.style.left = x + "px";
  hoverLabel.style.top = y + "px";
  tickHoverLabel.style.left = x - 30 + "px";
  tickHoverLabel.style.top = y + "px";
});




//Food choice and fry choice
let foodChoice = "";
let fryChoice = false;
const ETcriteriaImage = document.getElementById("ET-criteria-image");
const BFcriteriaImage = document.getElementById("BF-criteria-image");
const ScriteriaImage = document.getElementById("S-criteria-image");
const SDBcriteriaImage = document.getElementById("SDB-criteria-image");

// FOOD BUTTON HANDLERS
tofu.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  if (isMobileIOS()) {
    document.getElementById("fry-text").style.display = "none";
    document.getElementById("fry-text-ios").style.display = "block";
    document.getElementById("back-button-container").style.display = "none";
    document.getElementById("back-button-container-ios").style.display = "block";
  }

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  frySelectionImage.setAttribute("xlink:href", "./assets/images/ET-Selection/ET_nohover.png");
  dryFryingTofu.style.display = "block"
  stirFryingTofu.style.display = "block"
  shallowFryingTofu.style.display = "block"
  ETcriteriaImage.style.display = "block"



  foodChoice = "tofu"
};

duckBreast.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";
  if (isMobileIOS()) {
    document.getElementById("fry-text").style.display = "none";
    document.getElementById("fry-text-ios").style.display = "block";
    document.getElementById("back-button-container").style.display = "none";
    document.getElementById("back-button-container-ios").style.display = "block";
  }
  fryPickerAudio.play()
  foodPicker.style.display = "none";
  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'none'
    document.getElementById("hover-label-fish-ios").style.display = 'none'
    document.getElementById("hover-label-tofu-ios").style.display = 'none'
    document.getElementById("hover-label-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-duck-ios").style.display = 'none'
    document.getElementById("hover-tick-fish-ios").style.display = 'none'
    document.getElementById("hover-tick-tofu-ios").style.display = 'none'
  }
  frySelectionImage.setAttribute("xlink:href", "./assets/images/SDB-Selection/SDB_nohover.png");
  deepFryingSDB.style.display = "block"
  dryFryingSDB.style.display = "block"
  SDBcriteriaImage.style.display = "block"



  foodChoice = "duck"
};

spinach.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";
  if (isMobileIOS()) {
    document.getElementById("fry-text").style.display = "none";
    document.getElementById("fry-text-ios").style.display = "block";
    document.getElementById("back-button-container").style.display = "none";
    document.getElementById("back-button-container-ios").style.display = "block";
  }
  fryPickerAudio.play()
  foodPicker.style.display = "none";
  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'none'
    document.getElementById("hover-label-fish-ios").style.display = 'none'
    document.getElementById("hover-label-tofu-ios").style.display = 'none'
    document.getElementById("hover-label-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-duck-ios").style.display = 'none'
    document.getElementById("hover-tick-fish-ios").style.display = 'none'
    document.getElementById("hover-tick-tofu-ios").style.display = 'none'
  }
  frySelectionImage.setAttribute("xlink:href", "./assets/images/S-Selection/S_nohover.png");
  deepFryingS.style.display = "block"
  stirFryingS.style.display = "block"
  ScriteriaImage.style.display = "block"



  foodChoice = "spinach"
};

batteredFish1.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";
  if (isMobileIOS()) {
    document.getElementById("fry-text").style.display = "none";
    document.getElementById("fry-text-ios").style.display = "block";
    document.getElementById("back-button-container").style.display = "none";
    document.getElementById("back-button-container-ios").style.display = "block";
  }
  fryPickerAudio.play()
  foodPicker.style.display = "none";
  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'none'
    document.getElementById("hover-label-fish-ios").style.display = 'none'
    document.getElementById("hover-label-tofu-ios").style.display = 'none'
    document.getElementById("hover-label-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-duck-ios").style.display = 'none'
    document.getElementById("hover-tick-fish-ios").style.display = 'none'
    document.getElementById("hover-tick-tofu-ios").style.display = 'none'
  }
  frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_nohover.png");
  deepFryingBF.style.display = "block"
  stirFryingBF.style.display = "block"
  BFcriteriaImage.style.display = "block"



  foodChoice = "fish"
};

batteredFish2.onclick = function () {
  foodPickerAudio.pause()
  foodPickerAudio.currentTime = 0
  fryFood.style.display = "block";

  fryPickerAudio.play()
  foodPicker.style.display = "none";
  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'none'
    document.getElementById("hover-label-fish-ios").style.display = 'none'
    document.getElementById("hover-label-tofu-ios").style.display = 'none'
    document.getElementById("hover-label-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-duck-ios").style.display = 'none'
    document.getElementById("hover-tick-fish-ios").style.display = 'none'
    document.getElementById("hover-tick-tofu-ios").style.display = 'none'
  }
  frySelectionImage.setAttribute("xlink:href", "./assets/images/BF-Selection/BF_nohover.png");
  deepFryingBF.style.display = "block"
  stirFryingBF.style.display = "block"
  BFcriteriaImage.style.display = "block"



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

  SDBcriteriaImage.style.display = "none"
  ETcriteriaImage.style.display = "none"
  ScriteriaImage.style.display = "none"
  BFcriteriaImage.style.display = "none"

  dryFryingTofu.style.display = "none"
  stirFryingTofu.style.display = "none"
  shallowFryingTofu.style.display = "none"

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
  foodPickerAudio.play()
};

fryBackBtnIOS.onclick = function () {
  frySelectionImage.setAttribute("xlink:href", "");

  SDBcriteriaImage.style.display = "none"
  ETcriteriaImage.style.display = "none"
  ScriteriaImage.style.display = "none"
  BFcriteriaImage.style.display = "none"

  dryFryingTofu.style.display = "none"
  stirFryingTofu.style.display = "none"
  shallowFryingTofu.style.display = "none"

  deepFryingSDB.style.display = "none"
  dryFryingSDB.style.display = "none"

  deepFryingS.style.display = "none"
  stirFryingS.style.display = "none"

  deepFryingBF.style.display = "none"
  stirFryingBF.style.display = "none"

  fryFood.style.display = "none";
  foodPicker.style.display = "block";


  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'block'
    document.getElementById("hover-label-fish-ios").style.display = 'block'
    document.getElementById("hover-label-tofu-ios").style.display = 'block'
    document.getElementById("hover-label-spinach-ios").style.display = 'block'
    if (completed.includes('spinach')) {
      document.getElementById("hover-tick-spinach-ios").style.display = 'block'
    }
    if (completed.includes('duck')) {
      document.getElementById("hover-tick-duck-ios").style.display = 'block'
    }
    if (completed.includes('fish')) {
      document.getElementById("hover-tick-fish-ios").style.display = 'block'
    }
    if (completed.includes('tofu')) {
      document.getElementById("hover-tick-tofu-ios").style.display = 'block'
    }
  }


  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0
  foodPickerAudio.play()
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
const tofuSummaryVid = document.getElementById("tofuSummaryVid")
const SDBSummaryVid = document.getElementById("SDBSummaryVid")
const SSummaryVid = document.getElementById("SSummaryVid")
const BFSummaryVid = document.getElementById("BFSummaryVid")

var completedBtni = 0;

function handleDeepFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0

  if (foodChoice === "duck") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    deepFrySDBVid.style.display = "block";
    if (bandwidth < 5) {
      deepFrySDBVid.play()
    } else {
      deepFrySDBVid.src = './assets/videos/SDB-Frying/SDB-DeepFryFull.mp4'
      deepFrySDBVid.play()
    }
    fryChoice = "deep"

  } else if (foodChoice === "spinach") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    deepFrySVid.style.display = "block";
    if (bandwidth < 5) {
      deepFrySVid.play()
    } else {
      deepFrySVid.src = './assets/videos/S-Frying/S-DeepFryFull.mp4'
      deepFrySVid.play()
    }
    fryChoice = "deep"
  } else if (foodChoice === "fish") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    deepFryBFVid.style.display = "block";
    if (bandwidth < 5) {
      deepFryBFVid.play()
    } else {
      deepFryBFVid.src = './assets/videos/BF-Frying/BF-DeepFryFull.mp4'
      deepFryBFVid.play()
    }
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
    if (bandwidth < 5) {
      dryFryTofuVid.play()
    } else {
      dryFryTofuVid.src = './assets/videos/ET-Frying/ET_DryFryFull.mp4'
      dryFryTofuVid.play()
    }
    fryChoice = "dry"

  } else if (foodChoice === "duck") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    dryFrySDBVid.style.display = "block";
    if (bandwidth < 5) {
      dryFrySDBVid.play()
    } else {
      dryFrySDBVid.src = './assets/videos/SDB-Frying/SDB-DryFryFull.mp4'
      dryFrySDBVid.play()
    }
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
    shallowFryTofuVid.style.display = "block";
    if (bandwidth < 5) {
      shallowFryTofuVid.play()
    } else {
      shallowFryTofuVid.src = './assets/videos/ET-Frying/ET_ShallowFryFull.mp4'
      shallowFryTofuVid.play()
    }
  }
}

function handleStirFryingClick() {
  fryPickerAudio.pause()
  fryPickerAudio.currentTime = 0

  if (foodChoice === "tofu") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    stirFryTofuVid.style.display = "block";
    if (bandwidth < 5) {
      stirFryTofuVid.play()
    } else {
      stirFryTofuVid.src = './assets/videos/ET-Frying/ET_StirFryFull.mp4'
      stirFryTofuVid.play()
    }

    fryChoice = "stir"

  } else if (foodChoice === "spinach") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    stirFrySVid.style.display = "block";
    if (bandwidth < 5) {
      stirFrySVid.play()
    } else {
      stirFrySVid.src = './assets/videos/S-Frying/S-StirFryFull.mp4'
      stirFrySVid.play()
    }
    fryChoice = "stir"
  } else if (foodChoice === "fish") {
    fryFood.style.display = "none";
    fryingFoodVidContainer.style.display = "block";
    stirFryBFVid.style.display = "block";
    if (bandwidth < 5) {
      stirFryBFVid.play()

    } else {
      stirFryBFVid.src = './assets/videos/BF-Frying/BF-StirFryFull.mp4'
      stirFryBFVid.play()
    }
    fryChoice = "stir"
  }
}


//TOFU VID ENDED EVENT LISTENERS
shallowFryTofuVid.addEventListener('ended', function () {
  completed.push("tofu")
  continueBtnContainer.style.display = "block";
  document.getElementById("tofu-correct-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
});

dryFryTofuVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";
  document.getElementById("tofu-incorrect-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
});
stirFryTofuVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";
  document.getElementById("tofu-incorrect-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
});

tofuSummaryVid.addEventListener('ended', function () {
  continueBtnContainer.style.display = "block";
  document.getElementById("tofu-summary-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  completedBtni = 1;
});


SDBSummaryVid.addEventListener('ended', function () {
  continueBtnContainer.style.display = "block";
  document.getElementById("duck-summary-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  completedBtni = 1;
});

SSummaryVid.addEventListener('ended', function () {
  continueBtnContainer.style.display = "block";
  document.getElementById("spinach-summary-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  completedBtni = 1;
});

BFSummaryVid.addEventListener('ended', function () {
  continueBtnContainer.style.display = "block";
  document.getElementById("fish-summary-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  completedBtni = 1;
});

deepFrySDBVid.addEventListener('ended', function () {
  retryBtnContainer.style.display = "block";
  document.getElementById("duck-incorrect-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
});


dryFrySDBVid.addEventListener('ended', function () {
  completed.push("duck")
  document.getElementById("duck-correct-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  continueBtnContainer.style.display = "block";

});

deepFrySVid.addEventListener('ended', function () {
  document.getElementById("spinach-incorrect-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  retryBtnContainer.style.display = "block";
});

stirFrySVid.addEventListener('ended', function () {
  completed.push("spinach")
  document.getElementById("spinach-correct-criteria-box").style.display = "block";
  criteriaBoxContainer.style.display = "block";
  continueBtnContainer.style.display = "block";

});

deepFryBFVid.addEventListener('ended', function () {
  completed.push("fish")
  document.getElementById("fish-correct-criteria-box").style.display = "block";

  criteriaBoxContainer.style.display = "block";
  continueBtnContainer.style.display = "block";

});

stirFryBFVid.addEventListener('ended', function () {
  criteriaBoxContainer.style.display = "block";
  document.getElementById("fish-incorrect-criteria-box").style.display = "block";

  retryBtnContainer.style.display = "block";

});

document.getElementById("AllSummaryVid").addEventListener('ended', function () {
  finalContinueButtonContainer.style.display = "block";
  restartBtnContainer.style.display = "block";
  document.getElementById("summary-ui").style.display = "block";

});

finalContinueButton.onclick = function () {
  finalContinueButtonContainer.style.display = "none";
  restartBtnContainer.style.display = "none";

  document.getElementById("AllSummaryVid").style.display = "none";
  document.getElementById("summary-ui").style.display = "none";
  document.getElementById("cpdd").style.display = "block";
  document.getElementById("cpdd").play();

}

restartButton.onclick = function () {
  startUI.style.display = "block";
  finalContinueButtonContainer.style.display = "none";
  restartBtnContainer.style.display = "none";
  document.getElementById("AllSummaryVid").style.display = "none";
  document.getElementById("summary-ui").style.display = "none";

  document.getElementById("introOpener").play();

}

summaryButton.onclick = function () {
  foodPicker.style.display = "none";
  document.getElementById("AllSummaryVid").style.display = "block";
  document.getElementById("AllSummaryVid").play();
}

summaryButtonIOS.onclick = function () {
  foodPicker.style.display = "none";
  if (isMobileIOS()) {
    document.getElementById("hover-label-duck-ios").style.display = 'none'
    document.getElementById("hover-label-fish-ios").style.display = 'none'
    document.getElementById("hover-label-tofu-ios").style.display = 'none'
    document.getElementById("hover-label-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-spinach-ios").style.display = 'none'
    document.getElementById("hover-tick-duck-ios").style.display = 'none'
    document.getElementById("hover-tick-fish-ios").style.display = 'none'
    document.getElementById("hover-tick-tofu-ios").style.display = 'none'
  }
  document.getElementById("food-video-container").style.display = "block";
  document.getElementById("AllSummaryVid").style.display = "block";
  document.getElementById("AllSummaryVid").play();
}

retryButton.onclick = function () {

  if (foodChoice === "tofu") {
    document.getElementById("tofu-incorrect-criteria-box").style.display = "none";

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
    document.getElementById("duck-incorrect-criteria-box").style.display = "none";

    retryBtnContainer.style.display = "none";
    criteriaBoxContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "deep") {
      deepFrySDBVid.currentTime = 0;
      deepFrySDBVid.style.display = "none";

      foodChoice = "duck"

    }

  } else if (foodChoice === "spinach") {
    document.getElementById("spinach-incorrect-criteria-box").style.display = "none";

    retryBtnContainer.style.display = "none";
    criteriaBoxContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "deep") {
      deepFrySVid.currentTime = 0;
      deepFrySVid.style.display = "none";

      foodChoice = "spinach"

    }

  } else if (foodChoice === "fish") {
    document.getElementById("fish-incorrect-criteria-box").style.display = "none";

    retryBtnContainer.style.display = "none";
    criteriaBoxContainer.style.display = "none";
    fryingFoodVidContainer.style.display = "none";
    fryFood.style.display = "block";

    if (fryChoice === "stir") {
      stirFryBFVid.currentTime = 0;
      stirFryBFVid.style.display = "none";

      foodChoice = "fish"

    }

  }
}

function hasFourUniqueElements(arr) {
  const uniqueElements = new Set(arr);

  return uniqueElements.size === 4;
}


continueButton.onclick = function () {
  continueBtnContainer.style.display = "none"
  if (completedBtni == 1 && hasFourUniqueElements(completed)) {
    tofuSummaryVid.style.display = "none"
    SDBSummaryVid.style.display = "none";
    SSummaryVid.style.display = "none";
    BFSummaryVid.style.display = "none";

    document.getElementById("tofu-summary-criteria-box").style.display = "none";
    document.getElementById("duck-summary-criteria-box").style.display = "none";
    document.getElementById("spinach-summary-criteria-box").style.display = "none";
    document.getElementById("fish-summary-criteria-box").style.display = "none";
    document.getElementById("AllSummaryVid").style.display = "block";
    document.getElementById("AllSummaryVid").play();

  } else {
    if (foodChoice === "tofu") {
      if (completedBtni == 0) {
        document.getElementById("tofu-correct-criteria-box").style.display = "none";
        shallowFryTofuVid.currentTime = 0;
        shallowFryTofuVid.style.display = "none";
        tofuSummaryVid.style.display = "block";
        tofuSummaryVid.play()
      } else {
        tofuSummaryVid.style.display = "none";
        fryingFoodVidContainer.style.display = "none";
        foodPicker.style.display = "block";
        if (isMobileIOS()) {
          document.getElementById("hover-label-duck-ios").style.display = 'block'
          document.getElementById("hover-label-fish-ios").style.display = 'block'
          document.getElementById("hover-label-tofu-ios").style.display = 'block'
          document.getElementById("hover-label-spinach-ios").style.display = 'block'
          if (completed.includes('spinach')) {
            document.getElementById("hover-tick-spinach-ios").style.display = 'block'
          }
          if (completed.includes('duck')) {
            document.getElementById("hover-tick-duck-ios").style.display = 'block'
          }
          if (completed.includes('fish')) {
            document.getElementById("hover-tick-fish-ios").style.display = 'block'
          }
          if (completed.includes('tofu')) {
            document.getElementById("hover-tick-tofu-ios").style.display = 'block'
          }
        }
        ETcriteriaImage.style.display = "none"
        document.getElementById("tofu-summary-criteria-box").style.display = "none";

        dryFryingTofu.style.display = "none"
        stirFryingTofu.style.display = "none"
        shallowFryingTofu.style.display = "none"
        completedBtni = 0;
        foodPickerAudio.play()
      }

    } else if (foodChoice === "duck") {
      if (completedBtni == 0) {
        document.getElementById("duck-correct-criteria-box").style.display = "none";
        dryFrySDBVid.currentTime = 0;
        dryFrySDBVid.style.display = "none";
        SDBSummaryVid.style.display = "block";
        SDBSummaryVid.play()
      } else {
        SDBSummaryVid.style.display = "none";
        fryingFoodVidContainer.style.display = "none";
        foodPicker.style.display = "block";
        if (isMobileIOS()) {
          document.getElementById("hover-label-duck-ios").style.display = 'block'
          document.getElementById("hover-label-fish-ios").style.display = 'block'
          document.getElementById("hover-label-tofu-ios").style.display = 'block'
          document.getElementById("hover-label-spinach-ios").style.display = 'block'
          if (completed.includes('spinach')) {
            document.getElementById("hover-tick-spinach-ios").style.display = 'block'
          }
          if (completed.includes('duck')) {
            document.getElementById("hover-tick-duck-ios").style.display = 'block'
          }
          if (completed.includes('fish')) {
            document.getElementById("hover-tick-fish-ios").style.display = 'block'
          }
          if (completed.includes('tofu')) {
            document.getElementById("hover-tick-tofu-ios").style.display = 'block'
          }
        }
        SDBcriteriaImage.style.display = "none"
        document.getElementById("duck-summary-criteria-box").style.display = "none";

        deepFryingSDB.style.display = "none"
        dryFryingSDB.style.display = "none"
        completedBtni = 0;
        foodPickerAudio.play()
      }



    } else if (foodChoice === "spinach") {

      if (completedBtni == 0) {
        document.getElementById("spinach-correct-criteria-box").style.display = "none";
        stirFrySVid.currentTime = 0;
        stirFrySVid.style.display = "none";
        SSummaryVid.style.display = "block";
        SSummaryVid.play()
      } else {
        SSummaryVid.style.display = "none";
        fryingFoodVidContainer.style.display = "none";
        foodPicker.style.display = "block";
        if (isMobileIOS()) {
          document.getElementById("hover-label-duck-ios").style.display = 'block'
          document.getElementById("hover-label-fish-ios").style.display = 'block'
          document.getElementById("hover-label-tofu-ios").style.display = 'block'
          document.getElementById("hover-label-spinach-ios").style.display = 'block'
          if (completed.includes('spinach')) {
            document.getElementById("hover-tick-spinach-ios").style.display = 'block'
          }
          if (completed.includes('duck')) {
            document.getElementById("hover-tick-duck-ios").style.display = 'block'
          }
          if (completed.includes('fish')) {
            document.getElementById("hover-tick-fish-ios").style.display = 'block'
          }
          if (completed.includes('tofu')) {
            document.getElementById("hover-tick-tofu-ios").style.display = 'block'
          }
        }
        ScriteriaImage.style.display = "none"
        document.getElementById("spinach-summary-criteria-box").style.display = "none";

        deepFryingS.style.display = "none"
        stirFryingS.style.display = "none"
        completedBtni = 0;
        foodPickerAudio.play()
      }

    } else if (foodChoice === "fish") {

      if (completedBtni == 0) {
        document.getElementById("fish-correct-criteria-box").style.display = "none";
        deepFryBFVid.currentTime = 0;
        deepFryBFVid.style.display = "none";
        BFSummaryVid.style.display = "block";
        BFSummaryVid.play()
      } else {
        BFSummaryVid.style.display = "none";
        fryingFoodVidContainer.style.display = "none";
        foodPicker.style.display = "block";
        if (isMobileIOS()) {
          document.getElementById("hover-label-duck-ios").style.display = 'block'
          document.getElementById("hover-label-fish-ios").style.display = 'block'
          document.getElementById("hover-label-tofu-ios").style.display = 'block'
          document.getElementById("hover-label-spinach-ios").style.display = 'block'
          if (completed.includes('spinach')) {
            document.getElementById("hover-tick-spinach-ios").style.display = 'block'
          }
          if (completed.includes('duck')) {
            document.getElementById("hover-tick-duck-ios").style.display = 'block'
          }
          if (completed.includes('fish')) {
            document.getElementById("hover-tick-fish-ios").style.display = 'block'
          }
          if (completed.includes('tofu')) {
            document.getElementById("hover-tick-tofu-ios").style.display = 'block'
          }
        }
        BFcriteriaImage.style.display = "none"
        document.getElementById("fish-summary-criteria-box").style.display = "none";

        deepFryingBF.style.display = "none"
        stirFryingBF.style.display = "none"
        completedBtni = 0;
        foodPickerAudio.play()
      }
    }
  }
}

