// Convirtiendo clase como prototipo
function LearningPath({
    name = requiredParam('name'),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;
}


function requiredParam(param) {
    throw new Error(`${param} es obligatorio`);
}

// Convirtiendo clase como prototipo
function Student({
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    approvedCourses = [],
    learningPaths = [],
    twitter,
    instagram,
    facebook,
} = {} ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    if (Array.isArray(learningPaths)) {
        this.learningPaths = [];
        for (const learningPath in learningPaths) {
            if (Object.hasOwnProperty.call(learningPaths, learningPath)) {
                const element = learningPaths[learningPath];
                // Con instance of validamos la instancia
                // Si cada propiedad es una instancia del prototipo LearningPath
                if (!(element instanceof LearningPath)) {
                    console.warn('Learning Path no es una verdadera instancia');
                    return;
                } else {
                    this.learningPaths.push(element);
                }
            }
        }
    } else {
        console.warn('Learning Path no es un array');
        return;
    }
}

class Hola {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaDW = new LearningPath({ name: 'Escuela de Desarrollo Web' });
const escuelaDS = new LearningPath({ name: 'Escuela de Data Science' });

const carlos = new Student({
    name: 'Carlos',
    email: 'cerm1202@hotmail.com',
    twitter: 'cerm_88',
    instagram: 'cerm_88',
    facebook: 'cerm88',
    learningPaths: [escuelaDW, escuelaDS, {name: 'impostor', courses: ['Malo']}],
});

// carlos.learningPaths = { name: 'Escuela de desarrolo web', courses: ['HTML']};

console.log(carlos.learningPaths);
