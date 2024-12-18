function getElementsUpTo(array, n) {
  let nuevoArray = array.slice(0,3);

  return nuevoArray;
  
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
