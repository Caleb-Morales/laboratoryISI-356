type Student = {
    id: number;
    name: string;
    averageGrade: number;
};

let students: Student[] = [
    { id: 1, name: 'Ana', averageGrade: 90 },
    { id: 2, name: 'Juan', averageGrade: 80 },
    { id: 3, name: 'Sofía', averageGrade: 95 },
    { id: 4, name: 'Luis', averageGrade: 78 },
    { id: 5, name: 'Carlos', averageGrade: 88 },
];
// Filtramos estudiantes con promedio superior a 85.
let congratulatoryMessages = students
    .filter(student => student.averageGrade > 85)
    .map(student => `¡Felicidades, ${student.name}! Has obtenido un promedio excelente de ${student.averageGrade}.`)
    .sort(); // La función sort() ordenará automáticamente alfabéticamente.
console.log(congratulatoryMessages);

