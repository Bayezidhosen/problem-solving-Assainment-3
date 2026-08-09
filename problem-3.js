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

