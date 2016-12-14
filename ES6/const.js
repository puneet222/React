const VALUE = "foo" ;
//   NOW VALUE IS REFERENCE TO FOO YOU CANNOT CHANGE THE REFERENCE TO THE VALUE
// i.e.   VALUE = "something"  is illegal NOW

// *********  CONST ALSO PROVIDE BLOCK SCOPE **********
{
  const TEMP = "bar" ;
  console.log(TEMP)   // -------  THIS  IS LEGAL
}

// ------  console.log(TEMP)  is ILLEGAL
