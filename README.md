# Frontend Mentor - Age calculator app solution

[Solution](https://github.com/zarni-ein/age-calc-app/) | [Live Site](https://zarni-ein.github.io/age-calc-app/)

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

Mobile view:

![screenshot-2023-05-05-090555](https://user-images.githubusercontent.com/99555654/236387636-1cb5f551-fb81-40f7-be43-40328dcf1937.jpg)

Desktop view:

![screenshot-2023-05-05-090543](https://user-images.githubusercontent.com/99555654/236387659-6cb39bc4-73a5-4a64-8415-1ba06d7a57d3.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Moment.js](https://momentjs.com/) - Moment.js

### What I learned

[Complex selectors in DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#complex_selectors):

```js
document.querySelector(`#cont-${node} .label`).classList.add('error');
```

FormData elements can only be directly accessed w/ [get()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get):

```js
formData[node] // undefined
formData.get(node)
```

[Element content access methods' differences](https://stackoverflow.com/questions/24427621/innertext-vs-innerhtml-vs-label-vs-text-vs-textcontent-vs-outertext)


[Remove/add/toggle class](https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript):

```js
element.classList.remove('hidden');
element.classList.add('hidden');
element.classList.toggle('hidden');
```

[Iterating through objects](https://stackoverflow.com/questions/62602609/iterating-through-object-with-object-keys-foreach-changes-value-type):

```js
let obj = {a: '1', b: '2'};

Object.keys(obj).forEach(function(key, idx, arr){
    console.log("Key:", key);
    console.log("Index:", idx);
    console.log("Original Array:", arr);
    console.log("Value:", obj[key]);
});
```

[Iterating through formData](https://stackoverflow.com/questions/53692833/how-to-iterate-the-formdata-with-for-loop)

```js
// Will iterate over string 'next'
for (let [node, value] in formData.entries()) checkValidity(node, value);
// Will iterate over key-value pairs, as intended
for (let [node, value] of formData.entries()) checkValidity(node, value);
```
[Date validation](http://stackoverflow.com/questions/10589732/ddg#10589791)

```js
function checkValidDate(input) {
    return input instanceof Date && !isNaN(input.valueOf())
}
```

### Useful resources

- [Flex cheatsheet](https://yoksel.github.io/flex-cheatsheet/) - Should be self-explanatory.
- [I hate regex](https://ihateregex.io/playground/) - Regex playground/visualizer.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
