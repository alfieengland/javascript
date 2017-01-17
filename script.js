/* Shows alert stating that javascript is working (will only show when javascript is working) */
function javascriptChecker() {
  alert('Javascript is Functioning Correctly!');
}

javascriptChecker(); /* Calls above function */

/* Prints numbers 1-5 to the console */
function console5() {
  console.log('1');
  console.log('2');
  console.log('3');
  console.log('4');
  console.log('5');
}

console5(); /* Calls above function for the first time */
console5(); /* Calls above function for the second time */

/* Changes the page's heading to the value of 'element' */
function afterPageLoads() {
  var heading = document.getElementById('pageheading');
  heading.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('DOMContentLoaded', afterPageLoads); /* Triggers the function after the page has loaded */

/* Changes the page's paragraph when page is clicked */
function paragraphChange() {
  var paragraph = document.getElementById('paragraph');
  paragraph.firstChild.nodeValue = 'New Paragraph';
}

document.addEventListener('click', paragraphChange);
