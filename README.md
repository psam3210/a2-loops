# A2: Loops

Refer back to A1 for information on running the development server, and with running tests locally.

## 0. Fibonacci

<img src="https://user-images.githubusercontent.com/207651/184181382-cd06aee3-3854-4e67-be24-513b52419de4.gif" width="500">

The Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding ones. The sequence goes:
```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
```

You can calculate the `n`th Fibonacci number using the following formula:
```
F0 = 0
F1 = 1
Fn = F(n-1) + F(n-2)
```

As part of our design explorations, we are interested in incorporating a visual representation of the Fibonacci sequence. Write the code to complete the Fibonacci sequence, taking care to handle edge cases of your for loop (when `n=0 and n=1`). The results will be displayed by creating `div`s the width and height of each Fibonacci number. 

Calling `fibonacci(7)` should return `13`, for example.

Fun fact, you can use Fibonacci numbers to derive the Golden Ratio, which seems to be an [important element](https://knowyourmeme.com/memes/the-golden-ratio) in design.

## 1. FizzBuzz

<img src="https://user-images.githubusercontent.com/207651/184182727-23367201-407c-4004-9503-4b60dde86046.gif" width="500">

A classic programming interview problem, FizzBuzz is based on a [childrens game](https://en.wikipedia.org/wiki/Fizz_buzz). The idea is simple. Write a program which returns an array of the first `n` numbers. If the number is divisible by `3`, replace the number with `Fizz`. If the number is divisible by `5`, replace it with `Buzz`. And if the number is divisible by BOTH `3` and `5`, replace it with `FizzBuzz`

Calling `fizzBuzz(5)` should return `[1,2,'Fizz',3,4,'Buzz']`.

To do this assignment, you’ll need to know how to append values to an array. This is easy to do. Here’s an example:
```
let arr = []; // []
arr.push(5); // [5]
arr.push('Hi'); // [5, 'Hi']
```

Knowing how to use the `%` modulo operator will also be very helpful to do this. It turns out that you can test if a number is divisible by another if it has no remainder. (Ergo `10%5 = 0` means 10 is divisible by 5).

## 2. Mr. Squares Albers

<img src="https://user-images.githubusercontent.com/207651/184182989-657fe080-afba-4923-b633-07cd60c3fe71.gif" width="500">

Josef Albers was most famous for his [*Homage to the Square*](https://www.moma.org/collection/works/73229) series. We’ll attempt to recreate this work by creating an array of colors to cycle through for each square, as well as the dimensions of each successive square, with the idea that each square is `.75` the size of the previous square. Importantly, we’ll be given a starting width to work off, since we want the design to be responsive to the browser.

When someone calls `squares(500, 2)` they are expecting you to respond with the width of the `2`nd square (`initialWidth` of `500`) and what to color it. How you choose to color the square is up to you, but there must be some variation to it (you can toggle between two colors for example) such that consecutive squares like `squares(500,2)` and `squares(500,1)` are not colored the same. The result of this should be an object `{width: 281.25, color: '#0000ff' }`. 

`squares(500,1) = {width: 500, color: '#00ff00'}`

`squares(500,0)` should return a width of `500`.

We’ll take care of the object return value, if you set the value of the `width` and `color` variables.
