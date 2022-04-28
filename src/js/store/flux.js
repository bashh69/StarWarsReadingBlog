const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      character: [],
      planets: [],
	  planet: [],
	  starships:[]
    },
    actions: {
      // Use getActions to call a function within a fuction
      
     
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
            setStore({ character: data.results });
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
        fetch(`https://www.swapi.tech/api/planet/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planet: data.results });
          })
          .catch((err) => console.error(err));
      },
	  
      },
  };
};
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// }

export default getState;
