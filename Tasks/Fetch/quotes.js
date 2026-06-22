const URL = "https://dummyjson.com/quotes";
/*
    .then(data => {
        for(let i = 0; i < data.quotes.length; i++){
            console.log(data.quotes[i]);
            console.log("Author:", data.quotes[i].author);
        }
    })

    fetch(URL)
    .then((res) => res.json())
    .then(data => {
        data.quotes.forEach(quote => {
            console.log("Author: ", quote.author);
        });
    })

    for(let i = 0; i < data.quotes.length; i++){
            console.log(data.quotes[i]);
            console.log("Count:", data.quotes.length);
            if(data.quotes[i].id == 1){
                console.log(data.quotes[i].quote);
            }
        }

*/
fetch(URL)
    .then((res) => res.json())
    .then(data => {
        for(let i = 0; i < data.quotes.length; i++){
            if(data.quotes[i].id == 30){
                console.log(data.quotes[i].quote);
            }
        }
    })