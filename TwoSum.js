/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Bonus: Make it O(n) time
*/

const numbers1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

const numbers2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const numbers3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSum(numbers, targetSum) {
    const numToIndex = {};

    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];

        if (complement in numToIndex) {
            return [numToIndex[complement], i];
        }

        numToIndex[numbers[i]] = i;
    }

    return [];
}

console.log(twoSum(numbers1, targetSum1) + " expected " + expected1); // Output: [0, 2]

console.log(twoSum(numbers2, targetSum2) + " expected " + expected1); // Output: [2, 4]

console.log(twoSum(numbers3, targetSum3) + " expected " + expected1); // Output: [1, 6]
