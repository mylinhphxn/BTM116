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