// complete the given function
function Palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

module.exports = palindrome
