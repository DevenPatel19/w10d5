/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution

    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

    Hard Bonus: make it O(n) time
*/

const numbers1_1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1_1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const numbers2_1 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2_1 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const numbers3_1 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3_1 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(numbers, k) {
    // Step 1: Create a dictionary to store the frequency of each number.
    const numFrequency = {};

    // Step 2: Populate the frequency dictionary.
    for (const num of numbers) {
        if (numFrequency[num] === undefined) {
            numFrequency[num] = 1;
        } else {
            numFrequency[num]++;
            // console.log(numFrequency);
        }
    }

    // Step 3: Create an array of unique numbers.
    const uniqueNumbers = Object.keys(numFrequency).map(Number);

    // Step 4: Sort the unique numbers array based on their frequency in descending order.
    uniqueNumbers.sort((a, b) => numFrequency[b] - numFrequency[a]);

    // Step 5: Slice the sorted array to get the first k elements.
    const result = uniqueNumbers.slice(0, k);

    // Step 6: Return the k most frequently occurring numbers.
    return result;
}

console.log(kMostFrequent(numbers1_1, k1) + " expected " + expected1_1);
console.log(kMostFrequent(numbers2_1, k2) + " expected " + expected2_1);
console.log(kMostFrequent(numbers3_1, k3) + " expected " + expected3_1);
