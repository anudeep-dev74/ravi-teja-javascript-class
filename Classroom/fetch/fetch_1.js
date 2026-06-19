let URL = "https://fakestoreapi.com/products";

/*
    console.log(fetch(URL)); 
    Output: Promise Object is returned.
*/

/*
    fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
*/

fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++) {
            //console.log("title:", data[i].title, "price:", data[i].price);
            //console.log("count:", data[i].rating.count);
            console.log(data[i])
        }   
    })