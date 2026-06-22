const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

/*
    1. Return the promise Object
    
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
*/


/*fetch(URL)
    .then(response => response.json())
    .then(data => {
        for(i = 0; i < data.game_indices.length; i++){
            console.log(data.game_indices[i].game_index);
        }
    })
*/

/*fetch(URL)
    .then(response => response.json())
    .then(data => {
        for(i = 0; i < data.past_abilities.length; i++){
            console.log(data.past_abilities[i]);
            for(j = 0; j < data.past_abilities[i].abilities.length;j++){
                console.log(data.past_abilities[i].abilities[j].is_hidden);       
            }
        }
    })
*/

fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))