/* Shows alert stating that javascript is working (will only show when javascript is working) */
function javascriptChecker() {
  alert('Javascript is Functioning Correctly!');
}

javascriptChecker();

/* Prints numbers 1-5 to the console */
function console5() {
  console.log('1');
  console.log('2');
  console.log('3');
  console.log('4');
  console.log('5');
}

console5();
console5();

/* Changes the page's heading to the value of 'element' */
function afterPageLoads() {
  var heading = document.getElementById('pageheading');
  heading.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('DOMContentLoaded', afterPageLoads);
