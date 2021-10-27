const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA(){
        this.a = "AAAAA";
    }
};

//convertimos a STRING el objeto 1
const stringComplexObject = JSON.stringify(obj1);
//creamos un objeto a partir de un STRING
const obj = JSON.parse(stringComplexObject);
