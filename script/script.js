const heroes = [
  {
    name: "Luke Skywalker",
    side: "Lumineux",
    planet: "Tatooine",
    species: "Humain",
    lightsaberColor: "Bleu",
    masteryOfForce: "Avancé",
  },
  {
    name: "Darth Vader",
    side: "Obscur",
    planet: "Tatooine",
    species: "Humain",
    lightsaberColor: "Rouge",
    masteryOfForce: "Maîtrise totale",
  },
  {
    name: "Yoda",
    side: "Lumineux",
    planet: "Dagobah",
    species: "Yoda's Species",
    lightsaberColor: "Vert",
    masteryOfForce: "Légendaire",
  },
  {
    name: "Han Solo",
    side: "Lumineux",
    planet: "Corellia",
    species: "Humain",
    lightsaberColor: "Aucun",
    masteryOfForce: "Aucun",
  },
  {
    name: "Leia Organa",
    side: "Lumineux",
    planet: "Alderaan",
    species: "Humain",
    lightsaberColor: "Bleu",
    masteryOfForce: "Débutante",
  },
  {
    name: "Emperor Palpatine",
    side: "Obscur",
    planet: "Naboo",
    species: "Humain",
    lightsaberColor: "Rouge",
    masteryOfForce: "Maîtrise totale",
  },
  {
    name: "Chewbacca",
    side: "Lumineux",
    planet: "Kashyyyk",
    species: "Wookiee",
    lightsaberColor: "Aucun",
    masteryOfForce: "Aucun",
  },
  {
    name: "Obi-Wan Kenobi",
    side: "Lumineux",
    planet: "Stewjon",
    species: "Humain",
    lightsaberColor: "Bleu",
    masteryOfForce: "Avancé",
  },
  {
    name: "R2-D2",
    side: "Lumineux",
    planet: "Naboo",
    species: "Droid",
    lightsaberColor: "Aucun",
    masteryOfForce: "Aucun",
  },
  {
    name: "C-3PO",
    side: "Lumineux",
    planet: "Tatooine",
    species: "Droid",
    lightsaberColor: "Aucun",
    masteryOfForce: "Aucun",
  },
];

//Challenge 1
const saberBlue = heroes.find((element) => element.lightsaberColor == "Bleu");
// console.log(saberBlue);

//Challenge 2
const lastKenobi = heroes.findLast((element) =>
  element.name.includes("Kenobi")
);
// console.log(lastKenobi);

//Challenge 3
const firstHeroesForce = heroes.findIndex(
  (element) =>
    element.masteryOfForce == "Légendaire" && element.planet == "Dagobah"
);
// console.log(firstHeroesForce);

//Challenge 4
const firstHeroesTatouine = heroes.findIndex(
  (element) =>
    element.planet == "Tatooine" && element.lightsaberColor == "Rouge"
);
// console.log(firstHeroesTatouine);

//Challenge 5
const yoda = heroes.find((element) => element.name == "Yoda");
// console.log(yoda);

//Challenge 6
const greenSaber = heroes.find((element) => element.lightsaberColor == "Vert");
// console.log(greenSaber);

//Challenge 7
const wookie = heroes.find(
  (element) => element.side != "Lumineux" && element.species == "Wookies"
);
// console.log(wookie);

//Challenge 8
const Solo = "Solo";
const solo = heroes.findLast((element) => element.name.includes(Solo));
// console.log(solo);

//Chalenge 9
const nothingForce = heroes.find(
  (element) => element.masteryOfForce == "Aucun"
);
// console.log(nothingForce);

//Challenge 10
const upper10 = heroes.find((element) => element.name.length >= 10);
console.log(upper10);
