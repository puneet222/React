// var countdown = (num) => {
//   console.log(num) ;
//   if(num === 0) return ;
//   countdown(num-1) ;
// }
//
// countdown(10) ;

/***************************************   BEST EXAMPLE TO UNDERSTAND RECURSION **********************************************/

var categories = [
  {id : "mammal" , parent : null},
  {id : "animal" , parent : "mammal"},
  {id : "dog" , parent : "animal"},
  {id : "cat" , parent : "animal"},
  {id : "chichi" , parent : "cat"},
  {id : "chiku" , parent : "cat"},
  {id : "wufwuf" , parent : "dog"},
  {id : "wify" , parent : "dog"}
]

// console.log(categories);

var makeTree = function(categories , parent){
  var node = {} ;
  return (
    categories
    .filter(function(categories){
      return categories.parent === parent ;
    }).forEach(function(categories){
      return node[categories.id] = makeTree(categories , categories.id) ;
      console.log("working");
    })


  )
}

console.log(makeTree(categories , "cat"));

// --------------------------------------   IN   ECMASCRIPT6  ---------------------------------------------------------------

  // let makeTree = (categories , parent) => {
  //   let node = {} ;
  //   categories
  //   .filter(c => c.parent === parent)
  //   .forEach(c => node[c.id] = makeTree(categories , c.id))
  //   return node ;
  // }

// --------------------------------------------------------------------------------------------------------------------------
//***************************************************************************************************************************/
