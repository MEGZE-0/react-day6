// Function to calculate the average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  // Function to determine the winner
  function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAvg = calculateAverage(...dolphinsScores);
    const koalasAvg = calculateAverage(...koalasScores);
    const minScore = 100;
  
    if (dolphinsAvg >= minScore && koalasAvg >= minScore) {
      if (dolphinsAvg > koalasAvg) {
        console.log("Dolphins win the trophy!");
      } else if (koalasAvg > dolphinsAvg) {
        console.log("Koalas win the trophy!");
      } else {
        console.log("It's a draw!");
      }
    } else if (dolphinsAvg >= minScore) {
      console.log("Dolphins win the trophy!");
    } else if (koalasAvg >= minScore) {
      console.log("Koalas win the trophy!");
    } else {
      console.log("No team wins the trophy!");
    }
  }
  
  // Test data
  const dolphinsScores1 = [96, 108, 89];
  const koalasScores1 = [88, 91, 110];
  
  const dolphinsScoresBonus1 = [97, 112, 101];
  const koalasScoresBonus1 = [109, 95, 123];
  
  const dolphinsScoresBonus2 = [97, 112, 102];
  const koalasScoresBonus2 = [189, 95, 186];
  
  // Calculate and display results for each test case
  console.log("Test Data 1:");
  determineWinner(dolphinsScores1, koalasScores1);
  
  console.log("Test Data Bonus 1:");
  determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);
  
  console.log("Test Data Bonus 2:");
  determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);
  