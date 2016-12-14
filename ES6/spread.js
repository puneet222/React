var first = [1,2,3] ;
var second = [4,5,6] ;

/* first.push(second) ;
console.log(first) ;

  THIS WILL DISPLAY [1,2,3,Array(3)] ;

  */

  //**************  USE OF SPREAD OPERATOR *****************/
  first.push(...second) ;
  console.log(first) // THIS WILL PRINT [1,2,3,4,5,6] ;

/******  another important use ************/
function addThree(a,b,c){
  return a+b+c ;
}

console.log(addThree(...first)) ;   // this will add first 3 elements of the array and passed as individual element as a,b,c 
console.log(addThree(...second)) ;
