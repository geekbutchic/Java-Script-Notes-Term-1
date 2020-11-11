# Java-Script-Notes-Term-1
## `Week - 8`
### Notes :

Assignment - Emagi Part (1)

**Front - End:**

File Name: (main.js)

### `Problem 1.`

So right now, our function is what's known (in lingo far too fancy for what it does) as the `"identity function"` it returns what it's given.

```javascript
const translateWord = require('./translate-word.js');

const userInput = process.argv[2];

const result = translateWord(userInput);

console.log(result);
```

* Step 1) When we call *require('./translate-word.js')* it goes into the (file path) and pulls what's in module.exports.
  
* Step 2) Grabs the userInput at index[2].  What was typed by the user in the terminal.
* Step 3)  That value is passed into translateWord back-end function.
* Step 4) It then returns it.
* Step 5) The return value is held in result.
* Step 6) Printed out with console.log(result).

### Notes:
* Naming: naming the file path the same is always good practice. 
  
* process.argv[2] = input from the terminal
* console.log() = output to the terminal

**Back - End:** 

File Name: (translate-word.js)

Identity Function: tests our understanding how all this data moves and the different parts.  Basic function prints out the word we typed in at index[2].
* translateWord is a variable that holds a function.

```javascript
const translateWord = function(word) {
    return word;
}

module.exports = translateWord;
```

### `Problem 2.`

The function bellow is taking in one word and verifying if that word is iin the emoji file.

* We need to loop through to see if there is a match.  

* We can loop through by using (const emoji of emojis)
* If the word typed in matches emoji.name it will return emoji.symbol.

Front End 
```javascript 
const translateWord = require('./translate-word.js');

const userInput = process.argv[2];

const result = translateWord(userInput);

console.log(result)
```
Back End
```Javascript 
const emojis = require('./emojis.js')

const translateWord = function(word) {
    for (const emoji of emojis) {
        if (emoji.name === word.toLowerCase()) {
            return emoji.symbol;
        }
    }
    return word;
}

module.exports = translateWord;
```
* The four loop is checking against the word we passed through.

* If it's not translatable and there is no matching emoji, it returns the word.
*  We're taking in a user's word? In your loop, for each emoji, compare its `name` property to the `word` parameter. If they're ever the same, return that emoji's `symbol` property.
*  The function translateWord has one job.  To take in one word and translate it 

### `Problem 3.`  
What if you type in `node main.js birthday cry`? We only get that first one.  But getting multiple words, or a full sentence, is a piece of cake!
*  So to take in an array of words we can use `.map`.
* `.map` says take this array of go through each element.  Call it with our helper function `translateWord` return the new array.
* No need to change our helper function.  
```javascript
const userInput  
```
































