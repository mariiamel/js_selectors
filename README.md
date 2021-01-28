# Selecting Elements with Javascript

We already know about selecting elements of our HTML with CSS selectors, so that we can give them the styling of our choice. You can also select elements with javascript functions, which will allow us to do more than just change their styling.

## Our js selecting functions
Here are the big 5 functions you should know for selecting elements:
- `document.querySelector`: This function takes as an argument a _query string_, which you're already used to from working with CSS selectors. It always returns the first element on the page that meets its criteria. So for example:
  - `document.querySelector('h2')` would give you the first `<h2>` element that appears on the page
  - `document.querySelector('.fancy')` would give you the first element on the page that has a class of `fancy`
  - `document.querySelector('#hero-image')` would give you the first element on the page that has an id of `hero-image`
- `document.querySelectorAll`: This is just like `document.querySelector`, except it finds _all_ the elements on the page that meet its criteria. It will return them in an array.
- `document.getElementsByTagName`: This will give you all the elements that have the tag name you specify, for example `document.getElementsByTagName('h2')`
- `document.querySelector.getElementsByClassName`: This will give you all the elements that have the class you specify, for example `document.getElementsByClassName('fancy')`. Note that there is no `.` at the start of that string!
- `document.querySelector.getElementById`: This will give you just one element that has the id you specify, for example `document.getElementById('hero-image')`. Note that there is no `#` at the start of that string! Why do you think this function returns 1 element while the above 2 return arrays of elements?

## Getting some practice
In `main.js`, there are some prompts for you to follow. Don't forget to link `main.js` to your html file!