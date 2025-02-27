function whoseBicycle(diary1, diary2, diary3) {
    const ageTable = {
        firstSonAge: 14,
        secondSonAge: 9,
        thirdSonAge: 8
    };

    const diaries = [diary1, diary2, diary3];

    // Calculate total marks for each son
    const totalMarks = diaries.map(diary => 
        Object.values(diary).reduce((sum, mark) => sum + mark, 0)
    );

    // Find the highest marks
    const maxMarks = Math.max(...totalMarks);

    // Find indices of sons with the highest marks
    const winners = totalMarks
        .map((marks, index) => marks === maxMarks ? index : -1)
        .filter(index => index !== -1);

    // If there's a tie, select the youngest son
    const youngestIndex = winners.length > 1 
        ? winners.reduce((youngest, index) => 
            ageTable[["firstSonAge", "secondSonAge", "thirdSonAge"][index]] < 
            ageTable[["firstSonAge", "secondSonAge", "thirdSonAge"][youngest]] 
            ? index : youngest, winners[0])
        : winners[0];

    return `I need to buy a bicycle for my ${["first", "second", "third"][youngestIndex]} son.`;
}

// Example usage
const diary1 = { algebra: 6, history: 8, physics: 9, geography: 2, chemistry: 9 };
const diary2 = { algebra: 7, history: 8, physics: 9, geography: 3, chemistry: 9 };
const diary3 = { algebra: 8, history: 8, physics: 9, geography: 4, chemistry: 9 };

console.log(whoseBicycle(diary1, diary2, diary3));
