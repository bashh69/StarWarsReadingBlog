const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      character: [],
      planets: [],
	    planet: [],
	    starships:[],
	    starship: []
    },
    actions: {
      loadCharacters: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ characters: data.results });
          })
          .catch((err) => console.error(err));
      },
      loadCharacter: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ character: data.result.properties });
          })
          .catch((err) => console.error(err));
      },
      loadPlanets: () => {
        fetch(`https://www.swapi.tech/api/planets`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planets: data.results });
          })
          .catch((err) => console.error(err));
      },
	  loadPlanet: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planet: data.results });
          })
          .catch((err) => console.error(err));
      },
	  loadStarships: () =>{
		  fetch(`https://www.swapi.tech/api/starships`)
		  .then((res) => res.json())
		  .then((data) => {
			  console.log(data);
			  setStore({ starships: data.results });
		  })
		  .catch((err) => console.error(err));
	  },
	  loadStarship: (id) =>{
		fetch(`https://www.swapi.tech/api/starships/${id}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setStore({ starship: data.results });
		})
		.catch((err) => console.error(err));
	},
	  
      },
  };
};

export default getState;
