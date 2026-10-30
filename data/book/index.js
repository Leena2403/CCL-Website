// Assembles every book section into the global bookData array used by app.js.
// Load the section files (data/book/0*.js) before this one.
const bookData = [
    ...bookMazePuzzles,
    ...bookPuzzles,
    ...bookLanguageOfComputer,
    ...bookAlgorithms,
    ...bookLearningAI,
    ...bookEncryption,
    ...bookOtherActivities,
];
