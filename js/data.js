"use strict";

//This is a realistic person generator
//This program creates persons and allows you to create links between
//categories

//import functions
const generateEntity = require("./entity-generator.js").generateEntity;

//Data for generating a person
const ageGroups = ["Child", "Youth", "Adult", "Senior"];

//[0] in the following categories lets you set
//certain attributes as appliable to only selected ageGroup(s)
//* means appliable to all ageGroups
const races = [
  ["*", "Indian"],
  ["*", "Chinese"],
  ["*", "Japanese"],
  ["*", "European"],
  ["*", "African"],
  ["*", "Latin"]
];

const religions = [
  ["*", "Hindu"],
  ["*", "Muslim"],
  ["*", "Christian"],
  ["*", "Buddhist"],
  ["*", "Atheist"],
  ["*", "Agnostic"]
];
const dailyOccupations = [
  ["Adult", "Cook"],
  ["Adult", "School teacher"],
  ["Youth Adult", "Rickshaw driver"],
  ["Senior Youth Adult", "Artist"],
  ["Youth", "High school student"],
  ["Child", "Kindergarten"],
  ["*", "Street dweller"],
  ["Adult", "Software developer"],
  ["Senior", "Retiree"]
];

const categories = [races, religions, dailyOccupations];
const randomIndex = Math.floor(Math.random() * ageGroups.length);

const ageGroup = ageGroups[randomIndex];

module.exports = function generatePersona(nrOfPersonas) {
  let personas = new Array(nrOfPersonas);
  for (var i = 0; i < personas.length; i++) {
    personas[i] = generateEntity(ageGroup, categories);
  }
  return personas;
};

//Example output
//Youth [ 'Chinese', 'Muslim', 'Street dweller' ]
