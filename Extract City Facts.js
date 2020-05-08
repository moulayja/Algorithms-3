//Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
