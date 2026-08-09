function studentIntroduction(student) {
    // write your code here

    if (typeof student !== "object" || student === null) {
        return "Invalid";
    }

    if (!("name" in student) || !("age" in student) || !("course" in student)) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}



function filterActiveUsers(users) {
    // write your code here

    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

  
    for (let user of users) {
        if (
            typeof user !== "object" ||
            user === null ||
            !("isActive" in user)
        ) {
            return "Invalid";
        }
    }

  
    return users.filter(user => user.isActive === true);
}



function countHashtags(caption) {
    // write your code here

    if (typeof caption !== "string") {
        return "Invalid";
    }

    let words = caption.split(" ");
    let hashtags = words.filter(word => word.startsWith("#"));

    let hashtagCount = hashtags.length;
    let longestTag = "";

    for (let hashtag of hashtags) {
        let tag = hashtag.slice(1);

        if (tag.length > longestTag.length) {
            longestTag = tag;
        }
    }

    return {
        hashtagCount: hashtagCount,
        longestTag: longestTag
    };
}



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



function generateLeaderboard(students) {
    // write your code here

    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }


    for (let student of students) {
        if (
            typeof student !== "object" ||
            student === null ||
            !("name" in student) ||
            !("score" in student) ||
            typeof student.score !== "number"
        ) {
            return "Invalid";
        }
    }


    const qualified = students.filter(student => student.score >= 70);


    const names = qualified.map(student => student.name.toUpperCase());


    return names.slice(0, 3);
}

