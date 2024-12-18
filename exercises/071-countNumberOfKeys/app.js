let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    let cantidadTotal = 0;

    for (const key in obj) {
        cantidadTotal ++;
    }
    return cantidadTotal;
   
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
