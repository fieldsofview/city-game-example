webpackHotUpdate(5,{

/***/ "./js/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //This is a realistic person generator
//This program creates persons and allows you to create links between
//categories
//import functions

var generateEntity = __webpack_require__("./js/entity-generator.js").generateEntity; //Data for generating a person


var ageGroups = ["Child", "Youth", "Adult", "Senior"]; //[0] in the following categories lets you set
//certain attributes as appliable to only selected ageGroup(s)
//* means appliable to all ageGroups

var races = [["*", "Indian"], ["*", "Chinese"], ["*", "Japanese"], ["*", "European"], ["*", "African"], ["*", "Latin"]];
var religions = [["*", "Hindu"], ["*", "Muslim"], ["*", "Christian"], ["*", "Buddhist"], ["*", "Atheist"], ["*", "Agnostic"]];
var dailyOccupations = [["Adult", "Cook"], ["Adult", "School teacher"], ["Youth Adult", "Rickshaw driver"], ["Senior Youth Adult", "Artist"], ["Youth", "High school student"], ["Child", "Kindergarten"], ["*", "Street dweller"], ["Adult", "Software developer"], ["Senior", "Retiree"]];
var categories = [races, religions, dailyOccupations];
var randomIndex = Math.floor(Math.random() * ageGroups.length);
var ageGroup = ageGroups[randomIndex];

module.exports = function generatePersona(nrOfPersonas) {
  var personas = new Array(nrOfPersonas);

  for (var i = 0; i < personas.length; i++) {
    personas[i] = generateEntity(ageGroup, categories);
  }

  return personas;
}; //Example output
//Youth [ 'Chinese', 'Muslim', 'Street dweller' ]

/***/ })

})
//# sourceMappingURL=5.365791025ee58b9cd38d.hot-update.js.map