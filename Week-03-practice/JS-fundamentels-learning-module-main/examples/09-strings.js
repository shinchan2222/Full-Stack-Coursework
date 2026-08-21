// ==========================================
// JavaScript Strings
// ==========================================

// A string is a sequence of characters.
// Strings can be written using:
// "double quotes"
// 'single quotes'
// `backticks`


// ==========================================
// 1. Creating Strings
// ==========================================

let firstName = "Vimal";
let city = 'Coimbatore';
let message = `Welcome to JavaScript`;

console.log(firstName);
console.log(city);
console.log(message);


// ==========================================
// 2. String Length
// ==========================================

let language = "JavaScript";

console.log(language.length);


// ==========================================
// 3. Access Characters
// ==========================================

console.log(language[0]);
console.log(language[1]);
console.log(language[2]);


// ==========================================
// 4. charAt()
// ==========================================

console.log(language.charAt(0));
console.log(language.charAt(4));


// ==========================================
// 5. toUpperCase()
// ==========================================

let name = "vimal";

console.log(name.toUpperCase());


// ==========================================
// 6. toLowerCase()
// ==========================================

let course = "JAVASCRIPT";

console.log(course.toLowerCase());


// ==========================================
// 7. trim()
// ==========================================

let username = "   Vimal   ";

console.log(username);
console.log(username.trim());


// ==========================================
// 8. trimStart()
// ==========================================

let text1 = "   Hello";

console.log(text1.trimStart());


// ==========================================
// 9. trimEnd()
// ==========================================

let text2 = "Hello   ";

console.log(text2.trimEnd());


// ==========================================
// 10. includes()
// ==========================================

let sentence = "JavaScript is easy to learn";

console.log(sentence.includes("JavaScript"));
console.log(sentence.includes("Python"));


// ==========================================
// 11. startsWith()
// ==========================================

console.log(sentence.startsWith("JavaScript"));
console.log(sentence.startsWith("Python"));


// ==========================================
// 12. endsWith()
// ==========================================

console.log(sentence.endsWith("learn"));
console.log(sentence.endsWith("JavaScript"));


// ==========================================
// 13. indexOf()
// ==========================================

let word = "JavaScript";

console.log(word.indexOf("J"));
console.log(word.indexOf("S"));
console.log(word.indexOf("x"));


// ==========================================
// 14. lastIndexOf()
// ==========================================

let repeated = "JavaScript is a JavaScript language";

console.log(repeated.lastIndexOf("JavaScript"));


// ==========================================
// 15. slice()
// ==========================================

let languageName = "JavaScript";

console.log(languageName.slice(0, 4));
console.log(languageName.slice(4));
console.log(languageName.slice(-6));


// ==========================================
// 16. substring()
// ==========================================

console.log(languageName.substring(0, 4));
console.log(languageName.substring(4, 10));


// ==========================================
// 17. replace()
// ==========================================

let sentence2 = "I like Java";

console.log(sentence2.replace("Java", "JavaScript"));


// ==========================================
// 18. replaceAll()
// ==========================================

let sentence3 = "Java is popular. Java is powerful.";

console.log(sentence3.replaceAll("Java", "JavaScript"));


// ==========================================
// 19. split()
// ==========================================

let fruits = "Apple,Mango,Orange";

let fruitArray = fruits.split(",");

console.log(fruitArray);


// ==========================================
// 20. Split by Space
// ==========================================

let fullName = "Vimal Kumar";

console.log(fullName.split(" "));


// ==========================================
// 21. String Concatenation
// ==========================================

let first = "Hello";
let second = "World";

let result = first + " " + second;

console.log(result);


// ==========================================
// 22. Template Literals
// ==========================================

let studentName = "Vimal";
let studentAge = 25;

console.log(
    `My name is ${studentName} and I am ${studentAge} years old.`
);


// ==========================================
// 23. String + Number
// ==========================================

let age = 25;

console.log("Age: " + age);

console.log(`Age: ${age}`);


// ==========================================
// 24. Escape Characters
// ==========================================

console.log("Hello\nWorld");

console.log("Hello\tJavaScript");

console.log("He said \"Hello\"");

console.log('It\'s a beautiful day.');


// ==========================================
// 25. Checking Empty String
// ==========================================

let value = "";

if (value.length === 0) {
    console.log("String is empty");
}


// ==========================================
// 26. Reverse a String
// ==========================================

let original = "Hello";

let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

console.log(reversed);


// ==========================================
// 27. Count Characters
// ==========================================

let text = "JavaScript";

console.log("Characters:", text.length);


// ==========================================
// 28. Count Vowels
// ==========================================

let input = "javascript";

let vowelCount = 0;

for (let character of input) {

    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) {
        vowelCount++;
    }

}

console.log("Vowels:", vowelCount);


// ==========================================
// 29. Check Palindrome
// ==========================================

let originalWord = "madam";

let reverseWord = "";

for (let i = originalWord.length - 1; i >= 0; i--) {
    reverseWord += originalWord[i];
}

if (originalWord === reverseWord) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}


// ==========================================
// 30. Convert String to Array
// ==========================================

let programming = "HTML CSS JavaScript";

let technologies = programming.split(" ");

console.log(technologies);


// ==========================================
// 31. Convert Array to String
// ==========================================

let techStack = ["HTML", "CSS", "JavaScript"];

let techString = techStack.join(" ");

console.log(techString);


// ==========================================
// 32. String Comparison
// ==========================================

let password = "admin123";

if (password === "admin123") {
    console.log("Correct password");
}


// ==========================================
// 33. Case-Insensitive Comparison
// ==========================================

let userInput = "JAVASCRIPT";

if (userInput.toLowerCase() === "javascript") {
    console.log("Correct input");
}