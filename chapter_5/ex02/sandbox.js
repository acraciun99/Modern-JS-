
const blogs = [
    { title:'aaaaaaaaaaa', likes:30},
    {title:'bbbbbbbbbbbbbb', likes:40}
];

// console.log(blogs)

let user = {
    name: 'crystal',
    age:30,
    email: 'crystal@thenetnija.com',
    location:'galati',
    blogs:[{ title:'aaaaaaaaaaa', likes:30},
        {title:'bbbbbbbbbbbbbb', likes:40}],
    login(){
        console.log('the user logged in ')
    },
    logout(){
        console.log('the user logged out')
    },
    logBlogs(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog=>{
            console.log(blog);
        })
        console.log(blogs.title, blogs.likes)
    }
};

// user.login();
// user.logout();
// const name = 'mario'
// name.toUpperCase()

 user.logBlogs();
console.log (this)