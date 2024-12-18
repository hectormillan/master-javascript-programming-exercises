function getAllLetters(str) {
    // your code here

    let cadena = str; 
    let resultado = [];
    let element = "";

    for (let index = 0; index < cadena.length; index++) {
        element = cadena[index];
        resultado[index] = element;
            
    }
    return resultado;
    
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
