---
template: BlogPost
path: /algos/bigo
date: 2022-07-31T01:43:25.032Z
title: Learning Big O Notation With Udemy
metaDescription: 'bigo notation, algorithms, javascript'
thumbnail: /assets/learningbig0.jpg
---
# Big O Notation Intro

```javascript
let course ="https://specs.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11069998#overview"

    /**
    * @info Big O can be understood as a label or rating for the perfomrance of the code 
    * Useful for discussing trade-offs between different approaches
    * When your code slows down or crashes, identifying parts of the code that are inefficient can help find pain points in our apps
    * Allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
    * It's a way of describing the relationship between the input to a function or as it grows, and how that changes the runtime of that function, the relationship between the input size and then the time relative to that input.
*/

// Write a function that calculates the sum of all numbers from 1 up t some number n 

(function addUpTo(n){
    let total = 0;
    for (let i = 1; i<= n; i++){
        total +=i
    }
    return `first addUpTo ${total}`
})(1)

// (function addUpToTwo(t){
//     return t* (t+1)/2    
// })(3)

/** 
    * @info performance.now to show time elapsed since function run
    * different machines will record different times 
    * The same machine will record different times 
    * fast algos - speed measurements may not be precise enough
*/


/** 
    * instead of the method above - count the number of operations the computer has to perform 
    * assess whether the input will change the performance (by using for loop there's an infine amount of possibilities dependent on the input for the number of operations )

*/
```

## Time Complexity

Time complexity refers to the run time of the algorithm.

## Space Complexity
