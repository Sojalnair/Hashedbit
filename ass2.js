// ==========================================
// QUESTION 1: Display Even Numbers from 1 to 100
// ==========================================

function displayEvenNumbers() {
    console.log("Even numbers from 1 to 100:");
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Alternative approach using step increment
function displayEvenNumbersAlt() {
    console.log("\nEven numbers (Alternative approach):");
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

// ==========================================
// QUESTION 2: Calculator with Switch
// ==========================================

function calculate(num1, num2, operation) {
    let result;
    
    switch (operation) {
        case 'add':
        case '+':
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
            
        case 'subtract':
        case '-':
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;
            
        case 'multiply':
        case '*':
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;
            
        case 'divide':
        case '/':
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed");
                return null;
            }
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result}`);
            break;
            
        default:
            console.log("Error: Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'");
            return null;
    }
    
    return result;
}

// ==========================================
// QUESTION 3: Tax Calculator
// ==========================================

function findTax(salary) {
    let taxRate;
    let taxAmount;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
            
        case (salary > 500000 && salary <= 1000000):
            taxRate = 10;
            break;
            
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 20;
            break;
            
        case (salary > 1500000):
            taxRate = 30;
            break;
            
        default:
            console.log("Error: Invalid salary amount");
            return null;
    }
    
    taxAmount = (salary * taxRate) / 100;
    
    console.log(`Salary: ₹${salary}`);
    console.log(`Tax Rate: ${taxRate}%`);
    console.log(`Tax Amount: ₹${taxAmount}`);
    console.log(`Net Salary: ₹${salary - taxAmount}`);
    
    return taxAmount;
}

// ==========================================
// QUESTION 4: Sum of Products of Digits
// ==========================================

function sumOfProductsOfDigits(n1, n2) {
    // Convert numbers to strings to access digits
    let str1 = String(n1);
    let str2 = String(n2);
    
    // Make both strings equal length by padding with zeros
    const maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    
    let sum = 0;
    
    console.log(`\nCalculating sum of products for n1=${n1} and n2=${n2}`);
    console.log(`Padded: "${str1}" and "${str2}"`);
    
    // Calculate sum of products of corresponding digits
    for (let i = 0; i < maxLength; i++) {
        const digit1 = parseInt(str1[i]);
        const digit2 = parseInt(str2[i]);
        const product = digit1 * digit2;
        sum += product;
        console.log(`Position ${i}: ${digit1} * ${digit2} = ${product}`);
    }
    
    console.log(`Total Sum: ${sum}`);
    return sum;
}

// ==========================================
// TEST CASES
// ==========================================

console.log("====================================");
console.log("QUESTION 1: Even Numbers");
console.log("====================================");
displayEvenNumbers();

console.log("\n====================================");
console.log("QUESTION 2: Calculator");
console.log("====================================");
calculate(10, 5, 'add');
calculate(20, 8, 'subtract');
calculate(6, 7, 'multiply');
calculate(50, 5, 'divide');
calculate(10, 0, 'divide'); // Error case

console.log("\n====================================");
console.log("QUESTION 3: Tax Calculator");
console.log("====================================");
findTax(400000);   // 0% tax
console.log("");
findTax(750000);   // 10% tax
console.log("");
findTax(1200000);  // 20% tax
console.log("");
findTax(2000000);  // 30% tax

console.log("\n====================================");
console.log("QUESTION 4: Sum of Products");
console.log("====================================");
sumOfProductsOfDigits(6, 34);    // (0*3) + (6*4) = 24
sumOfProductsOfDigits(123, 456); // (1*4) + (2*5) + (3*6) = 32
sumOfProductsOfDigits(9, 99);    // (0*9) + (9*9) = 81