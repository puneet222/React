var counter = (function(){
  var privatecounter = 0 ;
  function changeBy(val){
    privatecounter += val ;
  }
  return{
    increment : function(){
      changeBy(1) ;
    }
    decrement : function(){
      changeBy(-1) ;
    }
    value : function(){
      return privatecounter ;
    }
  }
})() ;
