# DOM
### Assignment: This-might-be a-dom-idea 
* Change the font color of the paragraph to light blue.
```javascript 
const paragraph = document.querySelector('p');
paragraph.style.color = 'lightblue';
// or a one liner 
document.querySelector('p').style.color = 'lightblue'
// since we are doing multiple things to it, it makes sense to put it in a variable.
```
* Change the text of the paragraph to be the following Hipster Ipsum:

```javascript
paragraph.innerText = `text`
```
Best practice to use innerText -> due to security flaw in other options.

* Change the font size of the heading to 5 em.
```javascript 

const overallHeading = document.querySelector('h1');
overallHeading.style.fontSize = '10px';
// or with no intermediate variable
document.querySelector('h1').style.fontSize = '10px';
```
* Change the 13th item to be half transparent.
* Change the 13th item's text to say:
`I say, "Hi!"`
```javascript 
const item13 = document.querySelector('#item-13');
item13.style.opacity = '0.50'
item13.innerText = `I say, "Hi!"`
```
* Change the image below the list to be [this image](http://www.tioxic.com/wp-content/uploads/trex_4.jpg).
* Change that image's size to be 300 pixels high.
```javascript 
const image = document.querySelector('img');
image.src = `http://www.tioxic.com/wp-content/uploads/trex_4.jpg`
image.style.height = '300px';
// create image using a tag

```
* Add a new image of your choice below or to the right of the other image, using HTML, and then, with JavaScript, make it 300 pixels high.
```javascript 
const newImage = document.createElement('img');
newImage.src = `https://i.ytimg.com/vi/F5J6AHH68lI/maxresdefault.jpg`;
const wrapperDiv = document.querySelector('div');
wrapperDiv.appendChild(newImage);
// create a tag name with document.createElement
// example: ul.appendChild(newLi)
```
* Add a 16th `<li>` to the list. You can use the html file to write in the `li`, and then, with JavaScript, give it the same class as the others and an id that follows the others' numbering scheme.
* Give that `<li>` the following text:
`Won't get fooled again.`
```javascript
const newItem = document.createElement('li');
newItem.className = 'item';
newItem.id = 'item-16';
newItem.style.color = 'blue'
newItem.innerText = `I won't be fooled again`;
const list = document.querySelector('ul');
list.appendChild(newItem);
```



