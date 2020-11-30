## HTML Notes Basics 
* HyperText Markup Language is the standard markup language for creating web pages and web applications.
* The basic HTML skeleton is the set of tags required of every HTML web page you build.
* Without the skeleton HTML files will not be rendered correctly in web browsers.
```javascript
<html>

    <head>
        <title></title>
    </head>

    <body>


    </body>

</html> 
```
### Basic structure of a web page.

```javascript
HTML tags normally come in pairs like `<p> and </p>`
```

### HTML Tags Commonly Use
```javascript
<h1> </h1>
// This is a heading, it goes all the way upt to h6.

<p> </p>
// This is a paragraph

<ul> 
// defines an unordered list
    <li>
// defines a list item
    </li>
</ul>

<a href="link goes here">text</a>
// defines a hyperlink

<img src="url, or path goes here"/>

// defines an image in an HTML page,

// as you can see image tag doesn't have a closing tag.
```
Link has text with closing tag

Image does not have closing tag

## What can HTML do that Markdown can't?
* Forms and Input 
* Multiple Pages 
* Attributes 
* Add CSS for layout and style
* Add Javascript for functionality.

```javascript
<a href = ""><p> Hello Web.</p></a>
```
`<head>`

`<body>`
* is known as siblings.

`<a>`

* is known as a parent tag

`<p>`

* is known as a child tag

## Image 

* Self closing tag 

* `<img src=""/>`

* `height ="80px"/>` -  we can set height by adding within the image tag.
* We can also make it a local file.
* To do this we can click upload file and add it from our downloads.
* You can also rename file and add that name within parenthesis since the image is saved locally.
* Images work inline.
* To make it it's own section we wrap it in a `<div> </div>`

unplash.com is good resource for free images all are public domain.

## Div or Division

* `<p>` every paragraph is block level - takes up left to right.

* `<p>` paragraph will go on it's own line.

* `<a href="link">word</a>` this will allow to add a link inline.
* `<div>` is a block level section.
* In the wild usually everything is wrapped in a `<div>`.





