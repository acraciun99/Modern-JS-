// template strings 
const title = 'Best reads of 2019'
const author = 'Lucian'
const likes = 40



// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes '
// console.log(result)

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likesss`
console.log(result)

// creating html templates

let html = `<h2>${title}</h2>
<p> By ${author} </p>
<span> THis blog has ${likes}</span>`
console.log(html)