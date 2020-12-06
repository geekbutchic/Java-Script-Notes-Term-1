# Emmet abbreviation
* `!` - adding this symbol in `HTML` will put all the heading information needed.
* Exclusive to HTML 
  
* Emmet is a snippet system
* When you type in `<div> <p> <img>` it will autocomplete for you when you hit return.
### Tips and Tricks 
* `<ul id="list">`
* followed by 
  
* `li*10`
```javascript
    <ul id="list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```
* `ul>li*5`

```javascript 
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```
* `ul#todo.list>li.todo-item{Todo $}*5`
```javascript
    <ul id="todo" class="list">
        <li class="todo-item">Todo 1</li>
        <li class="todo-item">Todo 2</li>
        <li class="todo-item">Todo 3</li>
        <li class="todo-item">Todo 4</li>
        <li class="todo-item">Todo 5</li>
    </ul>
```
* the `$` dollar sign will be replaced with each successive number.

### DOM 
* Document Object Model
* console.log(document);
  
* console.dir(document); when using Chrome.

### Tags to use when linking CSS and HTML
* For CSS -  `<link rel="stylesheet" href="style.css">`
* Goes in head section.
  
* For HTML - `<script src="./main.js"></script>`
* Goes at the end right above body.

### Queries 
* `const toDoList = document.querySelector('ul')`;
* This allows us to select an object using javascript.
  
* Allows us the change the color.  Not hard coded like in CSS
```javascript 
const toDoList = document.querySelector('ul');
toDoList.style.color = 'red';
```
* this allows us to click on `ul` str and change the color.
  
* we can change any selector attribute by using JavaScript 
* when setting the value `'red'` must be in apostrophes.
* when working in `CSS` font-size
* when working in `main.js` javascript we revert back to `camelCase`
* javascript will take precedence over what's in CSS.

### Examples of Query Functions
```javascript
const changeToBlue = () => {
    const toDoList = document.querySelector('ul')
    const style = toDoList.style;
    style.color = 'blue';

    // one line version 
    document.querySelector('ul').style.color = 'blue'
}
```
```javascript 
const changeToRed = () => {
    const toDoList = document.querySelector('ul')
    toDoList.style.color = 'red';
}
```
### How to change specific item using CSS
```javascript 
   <ul>
        <li>Item 1</li>
        <li id="item-2">Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
```
* we are making `id="item-2"` within `HTML`
```javascript 
#item-2 {
    color: green;
}
```
* the changes reflecting in CSS

### Changes made in Javascript vs CSS
```javascript
const secondItem = document.querySelector('#item-2')
secondItem.style.color = 'green';
```
* querySelector returns one object.
  
* if given multiple objects it's going to return the first one.

### Other tags like Query Selector 

* `document.getElementById('item-2')` no pound is used, this method is not recommended.

* can only get queries with Id
* `document.getElementByClassName()`
* these are specific and will be used without the pound symbol.
* recommended to stick with query.






