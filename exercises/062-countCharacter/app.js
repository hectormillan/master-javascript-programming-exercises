function countCharacter(str, char) {
    let count = 0; 
    // Recorrer cada carácter del string 
    
    for (let i = 0; i < str.length; i++) { 
        // Comparar el carácter actual con el carácter dado 
        if (str[i] === char) { count++; 
            // Incrementar el contador si hay coincidencia } } // Retornar el número de repeticiones return
    
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
