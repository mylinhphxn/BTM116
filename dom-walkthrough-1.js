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
items[1].style.backgroundColor='yellow';
items[1].style.fontWeight='bold';
items[1].textContent='skee wee'
items[1].style.color='green';
