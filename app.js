//Write a JS program to check two numbers and return true 
//if one of the numbers is 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(50,50));
console.log(isEqualTo100(43,22));


// Write a JS program to get the extension of a filename

const getFileExtension = (string) => string.slice(string.lastIndexOf('.'))

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));


// Write a JS program to replace every character in a given string with 
// the character following it in the alphabet

const moveCharactersForward = (string) => 
    string
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharactersForward('abcd'));

// Write a JS program to get the current date such as mm/dd/yyy

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${months}/${days}/${years}`
}

console.log(formatDate())