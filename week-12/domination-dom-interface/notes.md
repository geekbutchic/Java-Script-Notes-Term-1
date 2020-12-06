# DOM Functions


Each of the below functions are a kind of function you might write in a larger app. Maybe you need a function that adds a todo to the top of your todo list, which is an unordered list in your interface. Or maybe it should add a photo to the end of your photo album, which is in a grid layout.

There are many advantages of organizing your interface-handling code this way: it keeps the mechanisms in one place for easy change later if (when!) you change your interface, and it means that as you write more features you don't have to constantly copy-paste or reinvent how displaying interface elements is done.

Putting this work in functions will also unlock the next step: telling the browser to run some interface-changing logic when the user interacts with your app. And that's the real heart of any graphical app: responding to your user's interaction.

## Global Queries: when to use?

Sometimes you'll query the same thing several times, and that thing doesn't change; a perfect example is a `ul`, like the Arguments list on this page. You won't be deleting or moving the list, so grabbing the result of querying it and saving it as a global variable is just fine. Then you don't have to query it every time you want to access it.

So when would you not want that? Well, if you want to get, say, the first `li` in a `ul`, that's a query that might return a different element each time you call it. If the results of your query might change, you'll want to run that query just before you use it, to make sure other logic hasn't changed it in the meantime.

## Query Functions 
* Now write a function that puts a line through the text of the first `<li>` in the Arguments `<ul>`. (Look up "first child" if you don't know what query to use, although there are other solutions).
```javascript
const strikeThroughFirstItem = () => {
    const firstItem = document.querySelector('li');
    firstItem.style.textDecoration = 'line-through';
}

strikeThroughFirstItem()
```
* Write a function that takes in a string representing an id and a string representing a url. The function should set the image with that ID to have that url as its image source.
```javascript
strikeThroughFirstItem()

const addImageUrl = (id, url) => {
    const image = document.querySelector(id);
    image.src = url;
    // or with no intermediate variables
    document.querySelector(id).src = url;
}
```
* Step 1) query the id that was sent to us.
* Step 2) query id and set it's image.

```javascript
addImageUrl('#image-1', 'https://whyfiles.org/wp-content/uploads/2013/09/big_brown_bat.jpg')
```
5. This one also doesn't require any parameters: write a function that always removes the last `<li>` from the Arguments `<ul>`  (try looking up "last child" and the `.remove` method). This is a bit tricky, but doable!
```javascript 
const removeLastLi = () => {
    const lastLi = document.querySelector('#arguments li: last-child');
    // document.querySelector('#arguments').lastElementChild;
    lastLi.remove();
}
// (#arguments li: nth-child(3))
// for removing not the last item
removeLastLi();
```
### Helper Functions

1. Write a function that takes in a node element and appends it to the Arguments `<ul>`.
2. Let's use it! Create an image element and pass it into your function.

Helper Function
```javascript
const addToArgumentsList = (element) => {
    document.querySelector('ul#arguments').appendChild(element)

    // Explicit step-by-step way.
    const arguments = document.querySelector('ul#arguments')
    arguments.appendChild(element);
}
```
```javascript 
const newImage = document.createElement('img');
newImage.src = 'https://whyfiles.org/wp-content/uploads/2013/09/big_brown_bat.jpg'
newImage.style.height = '60px';

addToArgumentsList(newImage);
```
3. Write a function that takes in an image element and makes its height 30 pixels.

4. Let's use it. Query and then pass in to the function one of the images in the Image Area. It should become a small 30-pixel image.
```javascript 
const makeSmall = (image) => {
    image.style.height = '30px';
}

const image2 = document.querySelector('#image-2');
makeSmall('#image-2')
```
5. Write a function that takes in an element and gives it the class `invisible`.
6. Now query an element on the page and pass it into that function. You should see it disappear! (Feel free to check the CSS file to see how this class works.)
```javascript
const makeInvisible = (element) => {
    element.className = 'invisible';
}

const disappearingTextField = document.querySelector('input');
makeInvisible(disappearingTextField);
```
7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.

8. Try using it to change the size of any text on the page.
```javascript
const changeFontSize = (element, newFontSize) => {
    element.style.fontSize = newFontSize;
}

const thing2 = document.querySelector('#thing-2');
changeFontSize(thing2, '5px');
```
###  Pure Functions Returning Node Elements
`These functions will all take in parameters and use them to make and return node elements. They don't do _anything_ to the DOM. So to test them, we'll have to use our earlier side-effect-having functions.`

1. Write a function that takes in text and returns a new `<li>` with that text as its `innerText`.

2. Test it by calling it with some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
```javascript
const makeTodo = (todoText) => {
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;

    return newTodo;
}

const newTodo = makeLiWithText ('hello')
addToArgumentsList(newTodo);
```
3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.

4. Test it by calling it with a header size and some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.

```javascript 
const makeHeader = (text, size) => {
    const header = document.createElement('h' + size)
    header.innerText = text;
}

const header = makeHeader("I'm a header", 2);
addToArgumentsList(header)
```





