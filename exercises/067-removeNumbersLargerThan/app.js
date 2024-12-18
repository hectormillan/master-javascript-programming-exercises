let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let key in obj){
        if (obj[key] > num) {
            delete obj[key];
        }
    
        console.log(key);
        
    }
    console.log(obj);
    return obj;
    
}

let resultado = removeNumbersLargerThan(3,obj);
