
var d = new Promise((resolve,reject) => {
  // throw new Error("hahah") ;
  setTimeout(()=>{
    if(true){
      resolve("Resolved") ;
    }
    else{
      reject("Rejected") ;
    }
  } , 2000) ;
}) ;

d.then((data) => {console.log("success : " , data ); return "hahaa"})
.then((data) => {console.log("success 2 : " , data)})
.catch((data) => {console.log("error : " , data);}) ;





var d = new Promise((resolve,reject) => {
  // throw new Error("hahah") ;
  setTimeout(()=>{
    if(true){
      resolve("Resolved") ;
    }
    else{
      reject("Rejected") ;
    }
  } , 2000) ;
}) ;

d.then((data) => {console.log("success : " , data ); throw new Error("this is the error by first success")})
.then((data) => {console.log("success 2 : " , data)})
.catch((data) => {console.log("error : " , data);}) ;


  var d = new Promise((resolve,reject) => {
    // throw new Error("hahah") ;
    setTimeout(()=>{
      if(false){
        resolve("Resolved") ;
      }
      else{
        reject("Rejected") ;
      }
    } , 2000) ;
  }) ;

  d.then((data) => {console.log("success : " , data )}, (error) => {console.log("failure : " , error)}) ;
