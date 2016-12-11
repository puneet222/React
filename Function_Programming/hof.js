var animals = [ {name : 'Ross' , species : 'dog'},
                {name : 'Phobe' , species : 'cat'},
                {name : 'Rachael' , species : 'cat'},
                {name : 'Joe' , species : 'mammal'},
                {name : 'Chandler' , species : 'dog'},
                {name : 'Monica' , species : 'giraffe'} ] ;


/* -----------------------------------   USING   FILTER   FUNCTION [HIGHER ORDER FUNCTION OF ARRAY] -----------------------------------  */


var isdog = function(animal){
  return animal.species === 'dog' ;
}

var dogs = animals.filter(isdog) ;

console.log(dogs) ;

/*----------------------------------------------------------------------------------------------------------------------------------------*/


/* -----------------------------------   USING   MAP   FUNCTION [HIGHER ORDER FUNCTION OF ARRAY] -----------------------------------  */

  var getname = function(animal){
    return animal.name + " is a " + animal.species ;
  }

  var names = animals.map(getname) ;

  console.log(names) ;

  // ----------------------------   USING    ECMASCRIPT6 ----------------------------------------------------------

//  var names2 = animals.map((animals) => animals.name) ;

//  console.log(names2) ;

/*----------------------------------------------------------------------------------------------------------------------------------------*/
