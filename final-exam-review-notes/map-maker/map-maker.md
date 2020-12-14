# Map-Maker Assignment 
## About: Introduction to Arrays

* `if it's = [] it's an array.`
* const students = `['Tre', 'Santino', 'Patrick']`
* these are called values, separated by commas.

```javascript 
students[0]; = Tre
students ['Tre', 'Santino', 'Patrick']
```
``` javascript 
student = 'Tre'
for (let i = 0; i < student.length; i++) {
    console.log(stdent[i]) T, r, e
}
```
* we can access each value by looping through the array 

```javascript 
let studentAlt = ['Tom', 'Ashley', 'Grace', 'Sonny']
studentAlt[0] = 'Kelly'
// Mutation changing sub-values 
for (const stu of studentAlt) {
    console.log(stu);
}
// Mutated the array from Tom to Kelly
studentAlt; ['Kelly', 'Ashley', 'Grace', 'Sonny'] 
```
* arrays always begin with const since we never want to overwrite our array with an equals sign.

```javascript 
animals.push('Elephant');
// You can push multiple things if need be, but often not necessary
animals.push('Flamingo', 'Rat');

animals; ['Elephant', 'Flamingo', 'Rat'];
```
* you can also concat with arrays

```javascript 
const moreAnimals = ['Cat', 'Dog', 'Bird'].concat(animals)

moreAnimals; ['Cat', 'Dog', 'Bird','Elephant', 'Flamingo', 'Rat']
animals; ['Elephant', 'Flamingo', 'Rat'];
```
* `.pop()` removes the end of the array value 
* `it will always remove the end value does not require`
* `argument in param`
```javascript 
animals.pop();
// see .js file for example
```
* `.shift()`; always removes from the start of the array
* does not require argument in param

```javascript
animals.shift();
```
* `.unshift();` 
* adds value to beginning of Array 
* requires argument in param.
```javascript 
animals.unshift('Shark');
// see .js fro example 
```
* `.slice();`
* returns a section of the array.
```javascript 
animals.slice(0, 3);
// see .js file for example
```
* `.splice(1, 1)`
* removes section of an array 
```javascript
animals.reverse();
```


