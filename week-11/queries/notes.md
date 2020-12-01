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
* 