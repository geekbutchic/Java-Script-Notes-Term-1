# Week - 9 
## Interval Lecture Notes
* Pomodoro Clock 
* Interval Function 

### Basic Set Interval Function
```javascript
setInterval(function() {
    console.log('hi');
}, 1000)
```
* This function is perfect for refreshing app every second we set.  

For Pomodoro Clock the timing is every 25 mins of work and 5 mins of break.  For this example we will be doing 5 seconds of work and 1 seconds break.

```javascript
setTimeout(function(){
    console.log('Break Time')
}, 5000)

setTimeout(function() {
    console.log('Work Time);
}, 6000)
``` 
* This does one loop and runs only once how can we run multiple times?
* Prints `'Break Time' at 6 seconds`.
* Prints `'Work Time' at 5 seconds`.
* How do we keep this loop running?

* 0-5s `Break Time` 
* 6s `Work Time`
* 7-11s `Break Time` 
* 12s `Work Time`

At 5 seconds, start counting in 6-second intervals.  How do we do this?

```javascript
console.log('Time to get to work!');

setTimeout(function(){
    console.log('Break Time!!!')
    setInterval(function(){
        console.log('Break Time!');
    }, 6000)
}, 5000)

setInterval(function() {
    console.log('Work Time!!');
}, 6000)
```
* Prints 'Break Time!!!' after 5 seconds
* Starts 'Work Time!!' after 6 seconds
* Prints 'Break Time!' after 6 seconds



















