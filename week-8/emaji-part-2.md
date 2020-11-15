# Week-8 

## `Week - 8`
### Notes :

### Assignment - Emagi Part (2)

### Problem 1.
**So what index would that `encode` or `translate` command come in?** Once you've counted that correctly, save that to a variable, maybe called `command`.
* We need to allow the user to choose between `encode` or `translate`.

### `Front End`

```javascript
const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

const command = process.argv[2];
const words = process.argv.slice(3);

switch (command) {
    case 'translate':
        const translation = words.map(translateWord)
        console.log(translation.join(' '));
        break;
    case 'encode':
        const encoding = words.map(encodeWord);
        console.log(encoding.join(' '));
        break;
    default:
        console.log('Your choices for what to write after "node main.js" (and a space!) are:');
        console.log('* "encode" followed by a space and then as many letters as you want');
        console.log('* "translate" followed by a space and then as many words as you want');
}
```
### Switch Version Preferred 
* Swtich is perfect if `ALL` of the below is true:
* You're only checking the status of ONE value. 
* Example `command === translate`
* Example `command === encode`
* You're checking if it is `EXACTLY` one set of values.

`const command = process.argv[2];`
* is setting everything to be grabbed after index[2]

`const words = process.argv.slice(3);`
* splitting our words after index[2] into an array to be `.mapped over.`

`console.log(encoding.join(' '));`
* Is returning the str once mapped to include spaces.

`default` is equivalent to else statement.

If Else Version 
```javascript 
if (command === 'translate') {
    const translation = words.map(translateWord)
    console.log(translation.join(' '));
}   else if (command === 'encode') {
    const encoding = words.map(encodeWord);
    console.log(encoding.join(' '));
}
```
Both these are using `command` which allows the user to choose if they want to use `encode` or `translate`.  Our switch statment allows are users to choose by typing after index[2].  
* node main.js encode i cry for in your fries
* Our users can now input what they want.

### Problem 2.
What do we do if they try to encode `plan 9 from outer space`? What about `Colin`? Both of these would not work right now. Fortunately, we can fix it, especially thanks to our tests.
* Handles Case Insensitivity 
* Handles Non-Letter Characters 

### Back End: Mapping Version 
```javascript 
const emojis = require('./emojis.js');

const encodeWord = function(word) {
    const letters = word.split('');
    const encodedLetters = letters.map(function(letter) {
        for (const emoji of emojis) {
            if (emoji.letter === letter) {
                return emoji.symbol;
            }
        }

        return letter;
    })

    return encodedLetters.join('');
}

module.exports = encodeWord
```
When mapping over a str we can convert it by saying I want letters.
* `word.split('');`
* When splitting a string we make each character a separate element in an array.
* Example: [ 'd', 'o', 'g']
* We can also handle Case Sensitivity `.chartoLowerCase()`
* If the letter is not a character it will be returned.
* If the letter is uppercase it will be converted to lowercase to be used in our function.

Is this example we are using an anonymous function.  This function will take in one letter and return matching emoji symbol.

For every `emoji.letter` check is the same as our character if it is return emoji symbol.

### Back End: String Building Version
```javascript 

const encodeWord = function(word) {
    let result = '';
    for (const char of word) {
        let found = false;
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                found = true;
                result += emoji.symbol;
            }
        }

        if (found === false) {
            result += char;
        }
    }

    return result;
}
```
### Double Loop | Manual Version 
* For each char in our word go through each
* `for (const char or word)`
* Go through each emoji and look for the matching letter.
* `for (const emoji of emojis)`
* When you have the matching letter append it to our results.


















