const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // promise of response
        .then(res => res.json())
        // promise of json data
        .then(data => console.log(data))
};
const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            displayPost(json);
        });
};

const displayPost = (posts) => {
    posts.forEach(posts => {
        console.log(posts);

    });

}



// console.log("Explore API");

// const person = {
//     name: "selim",
//     fruit: "dalim",
//     dish: "halim",
//     friends: ["alim", "kolim", "lamim"],
//     isRich: false,
//     money: 340000,
// };
// console.log(person, typeof person);
// // JSON ->  JS object with Notation
// // JSON.stringify -> JSON
// // JSON.perse -> object

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const perseJSON = JSON.parse(personJSON);
// console.log(perseJSON);
