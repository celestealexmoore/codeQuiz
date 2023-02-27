const pastScores = document.getElementById("pastScores");
const clearScoresBtn = document.getElementById("clearScoresBtn");
// let i = 0;

// let scoreObj = {}, scoreHistory = [];
// scoreObj.pastScores.innerText.value = score;
// scoreHistory.push({score: element});

clearScoresBtn.onclick = () => {
  console.log("im hit");
  // clear local storage and innerText.
  localStorage.clear();
  pastScores.innerText = "";
};

// get the past scores and append text.
pastScores.innerText =
  localStorage.getItem("username") + " - " + localStorage.getItem("scoreIs");


  /* 
  I need to:
  set the user's initials and score in an object. Store that object to local storage.

  
  */