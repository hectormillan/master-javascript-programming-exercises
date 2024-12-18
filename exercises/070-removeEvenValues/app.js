let obj = {
  a: 2,
  b: 3,
  c: 4
};


function removeEvenValues(obj) {
    
  // your code here
  for (const key in obj) {

    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
        delete obj[key];
    }

  }
   return obj;
    
    
}


let resultado = removeEvenValues(obj);
 console.log(obj); // --> { b: 3 }
