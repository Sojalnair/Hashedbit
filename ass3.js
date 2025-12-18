// ==========================================
// Q1: Filter States Starting with Vowels
// ==========================================

function filterStatesWithoutVowels() {
    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
        "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
        "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
        "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];
    
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    
    const filteredStates = states.filter(state => {
        return !vowels.includes(state[0]);
    });
    
    console.log("Q1: States NOT starting with vowels:");
    console.log(filteredStates);
    console.log(`Total: ${filteredStates.length} states\n`);
    
    return filteredStates;
}

// ==========================================
// Q2: Reverse Words in String
// ==========================================

function reverseWords() {
    let str = 'I love my India';
    
    let output = str.split(' ').reverse().join(' ');
    
    console.log("Q2: Reverse words in string:");
    console.log("Input:", str);
    console.log("Output:", output);
    console.log();
    
    return output;
}

// ==========================================
// Q3: Use Array Splice to Change String
// ==========================================

function changeStringUsingSplice() {
    let string = 'INDIA';
    
    // Convert string to array
    let arr = string.split('');
    
    // Use splice to add 'ONES' after 'IND'
    // splice(start, deleteCount, item1, item2, ...)
    arr.splice(3, 0, 'O', 'N', 'E', 'S');
    
    let output = arr.join('');
    
    console.log("Q3: Change INDIA to INDONESIA using splice:");
    console.log("Input:", string);
    console.log("Output:", output);
    console.log();
    
    return output;
}

// ==========================================
// Q4: Count Vowels and Consonants
// ==========================================

function countVowelsConsonants(str) {
    // Use a string with minimum 20 characters
    if (!str) {
        str = "Hello World! This is a sample string for testing purposes.";
    }
    
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let char of str) {
        // Check if character is a letter
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    console.log("Q4: Count vowels and consonants:");
    console.log("String:", str);
    console.log("Length:", str.length);
    console.log("Vowels:", vowelCount);
    console.log("Consonants:", consonantCount);
    console.log();
    
    return { vowels: vowelCount, consonants: consonantCount };
}

// ==========================================
// Q5: Replace Wrong Word with Correct Word
// ==========================================

function correctfn(string, wrong, correct) {
    let correctedString = string.replace(wrong, correct);
    
    console.log("Q5: Replace wrong word with correct word:");
    console.log("Original:", string);
    console.log("Corrected:", correctedString);
    console.log();
    
    return correctedString;
}

// ==========================================
// Q6: Filter Numbers Greater Than 5
// ==========================================

function filterGreaterThanFive() {
    const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
    
    const answer = inputArr.filter(num => num > 5);
    
    console.log("Q6: Filter numbers greater than 5:");
    console.log("Input:", inputArr);
    console.log("Output:", answer);
    console.log();
    
    return answer;
}

// ==========================================
// Q7: Calculate Student Averages
// ==========================================

function calculateStudentAverages() {
    const students = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] },
    ];
    
    const output = students.map(student => {
        // Use reduce to sum all scores
        const sum = student.scores.reduce((acc, score) => acc + score, 0);
        const average = sum / student.scores.length;
        
        return {
            name: student.name,
            average: average
        };
    });
    
    console.log("Q7: Calculate student averages:");
    console.log("Input:", JSON.stringify(students, null, 2));
    console.log("Output:", JSON.stringify(output, null, 2));
    console.log();
    
    return output;
}

// ==========================================
// Q8: Repeated Sum of Digits
// ==========================================

function repeatedSumOfDigits(num) {
    console.log("Q8: Repeated sum of digits:");
    console.log(`Starting number: ${num}`);
    
    while (num >= 10) {
        let sum = 0;
        let tempNum = num;
        
        while (tempNum > 0) {
            sum += tempNum % 10;
            tempNum = Math.floor(tempNum / 10);
        }
        
        console.log(`${num} -> ${sum}`);
        num = sum;
    }
    
    console.log(`Final single digit: ${num}`);
    console.log();
    
    return num;
}

// Alternative recursive approach
function repeatedSumOfDigitsRecursive(num) {
    if (num < 10) return num;
    
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    
    return repeatedSumOfDigitsRecursive(sum);
}

// ==========================================
// Q9: Count Words in Paragraph
// ==========================================

function countWords(paragraph) {
    // Trim whitespace and split by spaces
    const words = paragraph.trim().split(/\s+/);
    
    // Filter out empty strings
    const wordCount = words.filter(word => word.length > 0).length;
    
    console.log("Q9: Count words in paragraph:");
    console.log("Paragraph:", paragraph);
    console.log("Word count:", wordCount);
    console.log();
    
    return wordCount;
}

// ==========================================
// Q10: Reverse a String
// ==========================================

function reverseString(str) {
    // Method 1: Using split, reverse, join
    const reversed = str.split('').reverse().join('');
    
    console.log("Q10: Reverse a string:");
    console.log("Input:", str);
    console.log("Output:", reversed);
    console.log();
    
    return reversed;
}

// Alternative methods
function reverseStringLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseStringRecursive(str) {
    if (str === '') return '';
    return reverseStringRecursive(str.substr(1)) + str[0];
}

// ==========================================
// Q11: Calculate Average for Each Student
// ==========================================

function calculateStudentSubjectAverages() {
    const input = [
        {
            student1: {
                subject1: 44,
                subject2: 56,
                subject3: 87,
                subject4: 97,
                subject5: 37
            }
        },
        {
            student2: {
                subject1: 44,
                subject2: 56,
                subject3: 87,
                subject4: 97,
                subject5: 37
            }
        },
        {
            student3: {
                subject1: 44,
                subject2: 56,
                subject3: 87,
                subject4: 97,
                subject5: 37
            }
        }
    ];
    
    const output = input.map(studentObj => {
        // Get the student name (key)
        const studentName = Object.keys(studentObj)[0];
        
        // Get the subjects object
        const subjects = studentObj[studentName];
        
        // Get all subject scores as an array
        const scores = Object.values(subjects);
        
        // Calculate average using reduce
        const sum = scores.reduce((acc, score) => acc + score, 0);
        const average = sum / scores.length;
        
        // Return new object with student name and average
        return {
            [studentName]: {
                average: Math.round(average)
            }
        };
    });
    
    console.log("Q11: Calculate average for each student:");
    console.log("Input:", JSON.stringify(input, null, 2));
    console.log("Output:", JSON.stringify(output, null, 2));
    console.log();
    
    return output;
}

// ==========================================
// RUN ALL TESTS
// ==========================================

console.log("===========================================");
console.log("JAVASCRIPT ARRAY & STRING EXERCISES");
console.log("===========================================\n");

// Q1
filterStatesWithoutVowels();

// Q2
reverseWords();

// Q3
changeStringUsingSplice();

// Q4
countVowelsConsonants("Hello World! This is a sample string for testing purposes.");

// Q5
correctfn("I love my contry", "contry", "country");
correctfn("This is a tset sentence", "tset", "test");

// Q6
filterGreaterThanFive();

// Q7
calculateStudentAverages();

// Q8
repeatedSumOfDigits(456);
repeatedSumOfDigits(9875);

// Q9
countWords("This is a sample paragraph with multiple words.");
countWords("JavaScript is an amazing programming language!");

// Q10
reverseString("Hello");
reverseString("JavaScript");

// Q11
calculateStudentSubjectAverages();

console.log("===========================================");
console.log("ALL TESTS COMPLETED!");
console.log("===========================================");