# Code Challenges Solutions
This repository contains my solutions to the code challenges "Crispy Dollop" and "Scaling Umbrella".

## Crispy Dollop
### Problem Description
Given a number, the challenge is to write a function that returns the next bigger number formed by the same digits. If no bigger number can be formed, the function should return -1.

### Solution
The solution involves finding the first digit (from right to left) that can be swapped to make the number bigger and then rearranging the digits to the right of this digit in ascending order. The key steps are:

* Identify the pivot point where a swap will increase the number.
* Find the smallest digit greater than the pivot to the right.
* Swap these two digits.
* Sort the remaining digits to the right of the pivot in ascending order.

### Reasoning
This approach ensures the smallest possible increase to form the next bigger number using the same digits. It leverages the property that numbers become larger as digits towards the left are increased and ensures that the change is minimal by sorting the remaining digits in ascending order.

### Reflections
* Improvements: With more time, I could optimize the sorting step, possibly finding a way to insert the swapped digit without a full sort.
* Trade-offs: The choice to sort the digits to the right of the pivot ensures correctness but might not be the most efficient in terms of runtime, especially for long numbers.


## Scaling Umbrella
### Problem Description
The challenge is to write a function that returns the elements of an n x n array arranged from the outermost elements to the middle element, traveling in a clockwise pattern.

### Solution
The solution iteratively traverses the outer perimeter of the array and gradually moves inward until all elements are covered. It involves:

* Keeping track of the current boundaries (top, bottom, left, right).
* Collecting elements in a clockwise direction while adjusting boundaries after each layer is processed.

### Reasoning
This spiral traversal method systematically reduces the problem's size with each iteration, ensuring that all elements are visited exactly once in the required order. It is intuitive and mirrors the physical process of peeling layers off an object.

### Reflections
* Improvements: Given more time, I could look into more efficient ways to handle the boundary conditions to simplify the code further.
* Trade-offs: The method is straightforward and easy to understand, but there might be more concise ways to implement the spiral traversal, possibly using recursion.