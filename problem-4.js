function bonusScore(scores) {
    // write your code here

    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    
    for (let score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    
    let updatedScores = scores.map(score => score + 10);


    let totalScore = updatedScores.reduce((sum, score) => sum + score, 0);

    return totalScore;
}


