/**
 * @param {string} s
 * @return {boolean}
 */

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/


function isAlpha(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

var isPalindrome = function(s) {
    let newS = '';
    for(let i = 0; i < s.length; i++){
        if(isAlpha(s[i])){
            newS += s[i].toLowerCase();
        }
    }
  
    let l = 0;
    let r = newS.length - 1;
    
    while( l <= r ){
        if(newS[l] === newS[r]) l++, r--;
        else return false
    }
    return true
};
