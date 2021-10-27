//Shallow Copy se refiere a la forma 
//de crear un nuevo objeto a partir de las propiedades de otro.

const obj1 = {
    a: "a",
    b: "b",
//creando otra referencia de la memoria
//no funciona shalow copy si tenemos mas objetos por dentro
    c: {
        d: "d",
        e: "e",
    },
};

//copiar el valor de las propiedades y no afecta el contenido original
const obj2 = {};
for(prop in obj1) {
    obj2[prop] = obj1[prop];
}

//nuevo metodo estatico del superprototipo object 
//crear un objeto vacio para copiar las propiedades del objeto original
const obj3 = Object.assign({}, obj1);
//crear un nuevo objeto
const obj4 = Object.create(obj1);