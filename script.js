function firstChar(text) {
    // Your code here
    for (let char of text) {
        if (char !== ' ') {
            return char;
        }
    }
    return ''; // Return empty string if the input string only contains spaces
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
