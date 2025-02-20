/**
 * @param {string} s
 * @return {number}
 */ 

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
    let newS = s.trim().split(" ");
    return newS[newS.length-1].length
};
