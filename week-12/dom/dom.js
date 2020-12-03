const paragraph = document.querySelector('p');
paragraph.style.color = 'lightblue';
// above example is showing us how to query something and save it as a variable

// saved if 'p' was not being used change text in below example
document.querySelector('p').style.color = 'lightblue'

// since we are doing multiple things to it, it makes sense to put it in a variable.

paragraph.innerText = `Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.`

// best practice to use innerText -> due to security flaw.


const overallHeading = document.querySelector('h1');
overallHeading.style.fontSize = '10px';

// or without intermediate variable
document.querySelector('h1').style.fontSize = '10px';

const item13 = document.querySelector('#item-13');
item13.style.opacity = '0.50'
item13.innerText = `I say, "Hi!"`
// changes opacity 


const image = document.querySelector('img');
image.src = `http://www.tioxic.com/wp-content/uploads/trex_4.jpg`
image.style.height = '300px';
// create image using a tag


const newImage = document.createElement('img');
newImage.src = `https://i.ytimg.com/vi/F5J6AHH68lI/maxresdefault.jpg`;
const wrapperDiv = document.querySelector('div');
wrapperDiv.appendChild(newImage);
// create a tag name with `document.createElement`
// example: ul.appendChild(newLi)

const newItem = document.createElement('li');
newItem.className = 'item';
newItem.id = 'item-16';
newItem.style.color = 'blue'
newItem.innerText = `I won't be fooled again`;
const list = document.querySelector('ul');
list.appendChild(newItem);
