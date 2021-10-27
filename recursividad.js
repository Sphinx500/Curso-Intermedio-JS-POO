//Necesitamos llamados recursivos y validacion 
//donde terminamos la recursividad para devolver

const numeritos = [0,1,5,4,5,4,7,8,9,6,2,3];
const numeritos2 = [0,1,4,4,5,8,7,8,2,6,2,3];

let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {    
    numerito = numeritos[index];
    console.log({index,numerito});
};

function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNum = numbersArray[0];
        //va aeliminar el primero de sus elementos
        console.log(firstNum);
        numbersArray.shift();
        return recursiva(numbersArray);
    }
};