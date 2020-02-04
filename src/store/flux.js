const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			vehicles: [],
			planets: [],
			resource: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getPeople: url => {
				console.log("*****getPeople");
				getActions().getFech("people", url);
			},
			getPlanets: url => {
				console.log("getPlanets");
				getActions().getFech("planets", url);
			},
			getVehicles: url => {
				console.log("getVehicles");
				getActions().getFech("vehicles", url);
			},

			getFech: (key, url) => {
				console.log("%%%%%%%getFech - Starting");
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ [key]: data }));
				console.log("%%%%%%%getFech - Ended");
			},

			getResource: url => {
				console.log("*****getResource");
				getActions().getFech("resource", url);
			},

			resetResource: () => {
				const store = getStore();

				if (store.resource != null) setStore({ resource: null });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
