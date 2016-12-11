var orders = [ {amount : 500},
               {amount : 100},
               {amount : 400},
               {amount : 550},
               {amount : 20}, ] ;

var totalAmount = orders.reduce(function(sum , orders){
  return sum + orders.amount ;
} , 0) ;

// ---------------------------------------     CODE FOR ECMA SCRIPT6 --------------------------------------------
/*

var totalAmount = orders.reduce((sum , orders) => sum + orders.amount , 0 ) ;

*/
//--------------------------------------------------------------------------------------------------------------
console.log(totalAmount) ;


// ------------------------------------     LEARNING THE CONCEPT OF REDUCE WITH THE ADVANCE EXAMPLE --------------------------------------------------------

  var fis = require("fs") ;
  var output = fis.readFileSync("data.txt" , "utf8")
  .trim()
  .split("\n")
  .map(function(line){return line.split("    ")})
  .reduce(function(customer , line){
    customer[line[0]] = customer[line[0]] || [] ;
    customer[line[0]].push({
      name : line[1] ,
      price : line[2],
      quantity : line[3]
    })
    return customer ;
  } , {})
  console.log("output" , JSON.stringify(output , null , 2)) ;


  var totaPrice = [{ Puneet : output['Puneet Aggarwal']
  .reduce(function(sum , output){
    return sum + parseInt(output.price)*parseInt(output.quantity) ;
  } , 0) }, {Rhythm : output['Rhythm Mehra']
  .reduce(function(sum , output){
    return sum + parseInt(output.price)*parseInt(output.quantity) ; } ,0 ) } ]

  console.log(totaPrice) ;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
