// function to print a greeting message
var obj = {
	name : "Puneet" ,
	mhandler : function(message , handleFunction){
		handleFunction(message) ;
	},
	init: function(){
		var t = this ;
		this.mhandler("hello, " , function(message){
			console.log(message) ;
			console.log(t.name) ;
		})
	}
}

//***************************************************************  	WITH   ECMASCRIPT6   ******************************************************************************************/

var obj = {
	name : "Puneet" ,
	mhandler : function(message , handleFunction){
		handleFunction(message) ;
	},
	init: function(){ var t = this ; this.mhandler("hello, " , (message) => console.log(message + t.name)) }
}

//********************************************************************************************************************************************************************************/