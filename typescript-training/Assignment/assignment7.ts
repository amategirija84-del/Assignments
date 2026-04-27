function Samplesentence(sentence: string): void {
    // Split sentence into words
    let wordsInSentence = sentence.split(" ");

    // 1. Count total number of words
    console.log("Word Count:", wordsInSentence.length);

    // 2. Print words in reverse order
    let reversedWords = wordsInSentence.slice().reverse();
    console.log("Reversed Words:", reversedWords.join(" "));

    // 3. Convert first character of each word to uppercase
    let capitalizedWords = wordsInSentence.map(wordsInSentence => {
        return wordsInSentence.charAt(0).toUpperCase() + wordsInSentence.slice(1);
    });
    console.log("Capitalized Sentence:", capitalizedWords.join(" "));
}

// Example usage
let sentence = "Java programming is fun and challenging";
Samplesentence(sentence);