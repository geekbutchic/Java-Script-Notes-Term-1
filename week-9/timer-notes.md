# Week - 9 

## Timer Function Assignment

### About:
* Takes in a function and a time 
* Calls that function after that much time has passed.

Typed in the Terminal:

* (control + z) suspends the timer 

* (bg) will allow us to run timer in the background 

### 1. Version 1 - A Hard-Coded Timer

  In our first version of this app, we'll use setTimeout to make that beep and a message occur after a certain time has passed.

  `setTimeout` takes in two arguments, a function and a time.

Clean Version 
  ```javascript
setTimeout(function(){
    console.log(`\u0007`);
    console.log('3 seconds has passed!')
}, 3000);
```
Old Version 
```javascript
const babyTimer = function () {
    console.log('3 seconds has passed');
    console.log(`\u0007`);
}

setTimeout(babyTimer, 3000)
```
### 2. Version 2 - User Input

The time that we pass to `setTimeout` is a number, but it doesn't have to be a hard-coded one. Take in the user's input through `process.argv`, so that they can type in `node main.js 2` and get a beep 2 seconds later.

Unnecessary intermediate variable: version 
```javascript 
const time = process.argv[2];

const reminder = function() {
    console.log(time + ' seconds have passed');
    console.log(`\u0007');
}

setTimeout(reminder, time * 1000)
```
Function:
```javascript
const time = process.argv[2];

setTimeout(function() {
    console.log(time + ' seconds have passed!');
    console.log(`\u0007`);
}, time * 1000);
```
### 3. Version 3 - Multiple Timers

  What if we have multiple timers? What if the user wants a 5-second timer and a 10-second one? Well, if they typed in `node main.js 5 10`, it should be faaaaairly easy to give them both. Or many? IT'S LOOP TIME.

```javascript
const times = process.argv.slice(2)

for (const time of times) {
    setTimeout(function () {
        console.log(`\u0007`);
        console.log(`This is your reminder that ${time} seconds have passed`);
    }, time * 1000)
}
```
To Note"
[ '5', '10', '2']
* console.log(times[0]); -> 5 

* console.log(times[0] * 5); will multiply -> 25
* console.log(times[0] + 5); will concatenate, -> 55 plus will not work when using times.
* console.log(times) it's an array of strings. -> ['5', '10', '2']

To be continued...







