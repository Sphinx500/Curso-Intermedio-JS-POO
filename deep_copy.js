const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA() {
        this.a = "AAAAA";
    }
};

//Si es un objeto
function isObject(subject) {
    return typeof subject == "object";
}

//si es una lista
function isArray(subject) {
    return Array.isArray(subject);
}



function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
 
    // inicializamos la variable copySubject segun su tipo de dato
    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    // Empieza la recursividad
    for (key in subject) {
         // propiedad de nuestro elemento
        const keyIsObject = isObject(subject[key]);
        if (keyIsObject) {
            // Si la propiedad es un objeto, se vuelve a llamar a deepCopy para volver a hacer las asignaciones por cada una de las propiedades de los objetos.
            copySubject[key] = deepCopy(subject[key]) 
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}