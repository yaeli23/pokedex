
export let fetchPokemons = (page, pageSize, sort, filter) => {
   return fetchPokemonsData(page,pageSize, sort, filter).then(data => {
       if (!data) {
           return []
       }
       let promisesArray = data.pokemons.map( pokemon => {

            return fetchPokemonImage(pokemon["name"].toLowerCase()).then(image => {
                return isImgUrl(image).then((exist) => {
                    return exist ? {...pokemon, image}: pokemon
                })
            });
       })
       return Promise.all(promisesArray).then(pokemons => {
           return {pokemons: pokemons, total_size: data.total_size}
       });
  })
}

export let fetchPokemonsData = ( page,pageSize, sort, filter) => {
    return fetch(`/api?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}`)
    .then((res) => {
        if (!res.ok) {
            throw Error(res.statusText)
        }

        return res.json()
    })
    .catch((err) => {
        console.log('Error occurred while loading image: ' + err)
    })
}

let fetchPokemonImage = (name) => {

    return fetch(`/api/icon/${name}`)
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.text()
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log('Error occurred while loading image: ' + err)
        })
}

let isImgUrl = (url) => {
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
    });
}