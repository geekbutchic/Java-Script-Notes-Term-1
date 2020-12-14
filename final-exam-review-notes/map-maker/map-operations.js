`Map Operations - mapping with arrays`

const nums = [2, 4, 6,];
const num2 = [2, 4, 6];
const halves = [];
const doubles = [];

// What is a map? It means you are performing the same thing to every element in the array.`
// Map operation
// 1. always produces a NEW array
// 2. that has the SAME number of elements as the original
// 3. each element has been changed in the same way`
// 4. can also include if statement once concept happening to every value

// examples of mapping in the wild
// sub - feed or like activity feed 
// shows a subset of information
// another example is a truncated list 

for ( let i = 0; i < nums.length; i++) {
    halves.push(nums[i] / 2);
}
// Step 1. pulling array values and looping through the array with i loop
// Step 2. using .push to push the new values into our new array called halves
halves;

for (let i = 0; i < num2.length; i++) {
    doubles.push(num2[i] * 2);
}

doubles;
/* =============================================================================== */


















