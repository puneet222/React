var dragon = function(name){
  return function(size){
    return function(type){
      return name + " is a " + size + " " + type ;
    }
  }
}

// ***************************************    IN   ECMASCRIPT6 *********************************************************************

var sentence = name => size => type => name + " is a " + size + " " + type

//***********************************************************************************************************************************
