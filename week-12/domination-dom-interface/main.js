const strikeThroughFirstItem = () => {
    const firstItem = document.querySelector('li');
    firstItem.style.textDecoration = 'line-through';
}

strikeThroughFirstItem()

const addImageUrl = (id, url) => {
    const image = document.querySelector(id);
    image.src = url;
    // or no intermediate variables
    // document.querySelector(id).src = url;
}
// Step 1) query the id that was sent to us
// Query id and set it's image

addImageUrl('#image-1', 'https://whyfiles.org/wp-content/uploads/2013/09/big_brown_bat.jpg')
addImageUrl('#image-2', 'https://www.sciencefriday.com/wp-content/uploads/2018/03/ProRes-Bat-Flight.00_00_36_15.Still001.jpg')
addImageUrl('#image-3', 'https://www.brandywine.org/sites/default/files/styles/body_full/public/images/events/bat-photo.jpg?itok=YIPV_wBq')


const removeLastLi = () => {
    const lastLi = document.querySelector('#arguments li: last-child');
    // document.querySelector('#arguments').lastElementChild;
    lastLi.remove();
}
// (#arguments li: nth-child(3))

removeLastLi();
removeLastLi();

const addToArgumentsList = (element) => {
    document.querySelector('ul#arguments').appendChild(element)

    // // Explicit step-by-step way.
    // const arguments = document.querySelector('ul#arguments')
    // arguments.appendChild(element);
}

// helper function 
// take an element and append later on 


const newImage = document.createElement('img');
newImage.src = 'https://whyfiles.org/wp-content/uploads/2013/09/big_brown_bat.jpg'
newImage.style.height = '60px';

addToArgumentsList(newImage);

const makeSmall = (image) => {
    image.style.height = '30px';
}

const image2 = document.querySelector('#image-2');
makeSmall('#image-2')


const makeInvisible = (element) => {
    element.className = 'invisible';
}

const disappearingTextField = document.querySelector('input');
makeInvisible(disappearingTextField);

const changeFontSize = (element, newFontSize) => {
    element.style.fontSize = newFontSize;
}

const thing2 = document.querySelector('#thing-2');
changeFontSize(thing2, '5px');

const makeTodo = (todoText) => {
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;

    return newTodo;
}

const newTodo = makeLiWithText ('hello')
addToArgumentsList(newTodo);

const makeHeader = (text, size) => {
    const header = document.createElement('h' + size)
    header.innerText = text;
}

const header = makeHeader("I'm a header", 2);
addToArgumentsList(header)










