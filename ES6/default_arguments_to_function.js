var test = function(name = "Puneet" , speak = function(message = "hello"){
	console.log(message) ;
}){
	console.log(name + " is saying " + speak()) ;
}

test() ;

/********************************************************************************

THIS DOESN'T WORK AS EXPECTED

IN THIS WHAT I  DID IS CREATE A FUNCTION THAT TAKES 2 ARGUMENTS name [which has a default value puneet] and function[defult function is assigned] which in turn
 take a argument message [which has a default value hello]
