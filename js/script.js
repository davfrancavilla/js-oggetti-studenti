var student = {
    "nome" : "Mario",
    "cognome" : "Rossi",
    "eta" : "50"
}

for (var i in student) {
    $("#first-student").append(i + ": " + student[i] + "<br>");
}

var students = [
    {
        "nome" : "Mauro",
        "cognome" : "Bianchi",
        "eta" : "55"
    },
    {
        "nome" : "Maurizio",
        "cognome" : "Verdi",
        "eta" : "60"
    },
    {
        "nome" : "Luca",
        "cognome" : "Rossi",
        "eta" : "65"
    }
]

for (var i=0; i<students.length; i++) {
    $("#nomes-list").append(students[i].nome + " " + students[i].cognome + "<br>");
}

student.nome = prompt("Inserisci il tuo nome");
student.cognome = prompt("Inserisci il tuo cognome");
student.eta = prompt("Inserisci la tua età");

students.push(student);

for (var i=0; i<students.length; i++){
    for (var j in students[i]){
        $("#array").append(j + ": " +students[i][j] + "<br>");
    }
}
