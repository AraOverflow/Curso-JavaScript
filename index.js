// fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
// .then(response=>response.json())
// .then(json=>console.log(json.results[2].name))
// .catch(error=>console.log(error));


const funcionAsincrona = async ()=>{
    try{
       const response =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
       const json = await response.json();

        console.log(json.results[3].name);

    }
    catch(error){
        console.log(error);
    }
}

funcionAsincrona();









