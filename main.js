const juan = {
    name: 'juan',
    age: 36,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

//Utilizaciones de metodos estaticos del prototipo object

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));

// console.log(Object.entries(juan));

    // console.log(Object.entries(juan)[1][0]); // Codigo probado en consola
    // console.log(Object.entries(juan)[1][1]); // Codigo probado en consola
    // console.log(Object.entries(juan)[3][1]); // Codigo probado en consola
    // console.log(Object.entries(juan)[3][1]("Curso 2")); // Error

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

console.log(Object.getOwnPropertyDescriptors(juan));



//Utilizamos metodos estaticos del prototipo object para crear nuevas propiedades
//recibe 3 parametros: nombre de objeto, nombre de la nueva propiedad, lista de atributos
Object.defineProperty(juan, "pruebaNaza",{
    value: "extraterrestre",
    writable: true,
    enumerable: true,
    configurable: true
})