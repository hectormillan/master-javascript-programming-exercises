let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(target, source) {
    // your code here
    for (let key in source) {
       
        if (!target.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    console.log(target);
    return target; // Retornamos el objeto modificado
   


}

const resultado = extend(obj1,obj2);