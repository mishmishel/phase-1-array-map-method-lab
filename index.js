const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const titleCaseTutorials = tutorials.map((tutorial) => {
    // Split the tutorial name into words
    const words = tutorial.split(" ");

    // Capitalize the first letter of each word
    const titleCaseWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the title case words back into a string
    return titleCaseWords.join(" ");
  });

  return titleCaseTutorials;
}

// Call the function to get the title case tutorials
const titleCaseTutorials = getTitleCaseTutorials();

console.log(titleCaseTutorials);