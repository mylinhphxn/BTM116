// 
console.dir(document);

// gives the domain of webpage 
console.log(document.domain);

// gives the url of the webpage 
console.log(document.URL);

// the document attribute can access different elements
// console.log(document.title);

// // shows me everything in the doctype
// console.log(document.doctype);

// // it went and found everything in the head tells me everything in the head
// console.log(document.head);

// // shows me everything in the body
// console.log(document.body);

// // access all elements in tree
// console.log(document.all);

console.log(document.all[10]);

// the doc attribute can go find the element to change it 
document.all[10].textContent="i just changed the header"

// accessing all elements in tree for forms
// console.log(document.forms);

// // accessing all elements in tree for forms
// console.log(document.images);

//////////////////////////////
// GetElementByID

// calling the id to show properties of particular object
console.log(document.getElementById('header-title'));

// declare variables in js 
// pass header-title (object) into the argument parameter
let headerTitle=document.getElementById('header-title');
console.log(headerTitle);

// change header title
headerTitle.textContent="changed the title again"
headerTitle.innerText="hello changed title again"
// changed header color
headerTitle.style.color='hotpink';

//////////////////////////////////
// create a new object
// GetElementByClassName

// creating a var item
var items=document.getElementsByClassName('list-group-item')
console.log(items);

// call actual index
// reference particular through index
// item 1
// items[1].style.backgroundColor='yellow';
// items[1].style.fontWeight='bold';
// items[1].textContent='skee wee'
// items[1].style.color='green';
// // item 0 
// items[0].style.backgroundColor='red';
// items[0].style.fontWeight='bold';
// items[0].textContent='oooop'
// items[0].style.color='white';
// // item 2
// items[2].style.backgroundColor='blue';
// items[2].style.fontWeight='bold';
// items[2].textContent='zeee phi'
// items[2].style.color='white';

// create different types of for loops
// for (let i=1; i <=10;i++){

//     console.log(i);
// }
// specify what index you want to begin with 
// for (let i=1; i <=20; i+=2){

//     console.log(i);
// }

// created a for statement
// fixed scale is i-=2 incrementing by 2 
// for (let i=100; i >=0; i-=2){

//     console.log(i);
// }

// created array 
// declare array
// // increment each value i++
// const myDiamonds = ['snacky','scary','lily','ittybitty','pinchie','lanky','nibbles','kibbles'];
// // for loop, header, i=integer(snacky) corresponds to variable, starts at 0, check to see if it's at the end of the list
// // then  go into body of code, execute code, increment value, then goes (increment) to next variable 1
// for (let i = 0; i <myDiamonds.length; i++){
//     console.log(i, myDiamonds[i]);
// }

// // create for loop that goes through all list of items
// for(var i=0; i <items.length; i++){
// // change text content and bg color
// // passing i=index
// // when you're done with body of code you're gonna iterate
//     items[i].style.backgroundColor='grey';
//     items[i].textContent="changing the list items";
//     items[i].styleColor='white';
// }

//////////////////////////////////////
// GetElementByTagName

// create variable object
// var li=document.getElementsByTagName('li');
// // pass into console.log 
// console.log(li);
// // call an index
// console.log(li[1]);

// // call variable  and manipulate particular element
// li[1].textContent="hello 2 now";
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='green';
// li[1].style.color='white';

// // created another for loop that goes through the array
// for(var i=0; i<li.length; i++){
// // pass in header
// // call variable and manipulate element 
//     li[i].style.backgroundColor='lightgrey';
//     li[i].textContent="i changed all the items from the DOM";
//     li[i].style.color='white';
// }

/////////////////////
///////Query Selector:

// created object
// var header = document.querySelector('#main-header');
// // call header and manipulate
// header.style.borderBottom = 'solid 4px hotpink';
// // we have 2 input titles
// // input variable
// var input = document.querySelector('input');
// // changing value of text box
// input.value = "i just changed the text value in the input box";

// // the point of this exercise is going into the dom and manipulate elements 

// // submit variable 
// var submit = document.querySelector('input[type="submit"]');
// // changing value of button
// submit.value = "Hello Button";

// // calling the list group items and put into index
// // calling last item 
// var lastItem = document.querySelector('.list-group-item:last-child');
// // change last item
// lastItem.style.color = 'blue';

// // created another variable. called list group class
// // this returns specific index
// var otherItem = document.querySelector('.list-group-item:nth-child(2)');
// // 
// otherItem.style.color = "coral"


/////////////////////////////////////////////////////
// querySelectorAll is similar to query selector

// calling the class "title"
var titles = document.querySelectorAll('.title');
// pass through console.log. there are only 2 elements
console.log(titles);

// change variable. changed the title 
titles[0].textContent = 'hello, i just changed the title';

// 