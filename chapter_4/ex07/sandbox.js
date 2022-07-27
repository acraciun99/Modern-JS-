// get a reference tot the ul

const ul = document.querySelector('.people')

const people = ['mario', 'luigi', 'alex', 'marcel', 'lucian']

let html = ``;

people.forEach(person =>{
// create html template
html +=`<li style = "color:purple">${person}</li>`
})

console.log(html);
ul.innerHTML = html