// getting the single item from the object
var obj = {
  fname : "Puneet",
  lname : "Aggarwal",
  age : 19,
  gender : "male"
}

var {fname} = obj ;
console.log(fname) ;

var {fname : name} = obj ;
console.log(name) ;

// getting particular item from Array
var arr = ["one" , "two" , "three" , "four" , "five"] ;
var [first,,,fourth,] = arr ;
console.log(first , fourth) ;

// getting paticular element from array of objects

var obj2 = [
  {
    fname : "Puneet",
    lname : "Aggarwal",
    age : 19,
    gender : "male"
  },
  {
    fname : "Arvind",
    lname : "Dhanda",
    age : 20,
    gender : "female"
  },
  {
    fname : "Harish",
    lname : "Saini",
    age : 20,
    gender : "male"
  },{
    fname : "Rahul",
    lname : "Gupta",
    age : 21,
    gender : "male"
  }
] ;

obj2.forEach(({fname : name}) => console.log(fname)) ;
