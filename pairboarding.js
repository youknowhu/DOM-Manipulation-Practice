/*
Example 1 (already less than 10): 7 --> 7
Example 2 (go through one reduction): 14 --> 5
Example 3 (go through 2 reductions): 567 --> 18 --> 9
Example 3 (go through 2 reductions): 887 --> 23 --> 5

56 + 7 --> 63 --> 9
88 + 7 --> 9 + 5 --> 1 + 4 --> 5

Approach:
- recursively
- base case if the number is less than 10
*/

function digitalRoot(num) {
  if (num < 10) return num;
  return digitalRoot(Math.floor(num / 10) + num % 10);
}


/* Write a function, longest_common_substring(str1, str2)
that takes two strings and returns the longest common substring.
A substring is defined as any consecutive slice of letters from
another string.  Bonus: solve it in O(m * n) using O(m * n)
 extra space. (Hint: the solution involves dynamic programming
 which will be introduced later in the course.) */

 function makeMatrix(str1, str2) {
   let matrix = new Array(str1.length + 1);

   for (let i = 0; i < str1.length + 1; i++) {
     matrix[i] = new Array(str2.length + 1).fill(0);
   }

   for (let idx1 = 0;  idx1 < str1.length; idx1++) {
     for (let idx2 = 0; idx2 < str2.length; idx2++) {
       if (str1[idx1] === str2[idx2]) {
         console.log('found', idx1, idx2);
         matrix[idx1 + 1][idx2 + 1] = matrix[idx1][idx2] + 1;
       } else {
         console.log('not found', idx1, idx2);
         matrix[idx1 + 1][idx2 + 1] = 0;
       }
     }
   }

   return matrix;
 }

 function longestCommonSubstring(str1, str2) {
   let dynamicMatrix = makeMatrix(str1, str2);
   let greatestSubstring = "";

   for (let rowIdx = 0; rowIdx < dynamicMatrix.length; rowIdx++) {
     const matrixRow = dynamicMatrix[rowIdx];

     for (let colIdx = 0; colIdx < matrixRow.length; colIdx++) {
       const length = matrixRow[colIdx];

       if (length > greatestSubstring.length) {
         greatestSubstring = str2.slice(colIdx - length, colIdx)
       }
     }
   }

   return greatestSubstring;
 }
