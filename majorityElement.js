/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

var majorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    if(nums.length==1) return nums[0]
    else return nums[Math.floor(nums.length/2)]
};
