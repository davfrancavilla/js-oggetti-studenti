$(document).ready(function(){
    // creo un oggetto studente
    var student = {
        "nome" : "Mario",
        "cognome" : "Rossi",
        "eta" : "50"
    }
    // stampo i dati dello studente appena creato
    for (var i in student) {
        $("#first-student").append(i + ": " + student[i] + "<br>");
    }

    // creo un array con diversi oggetti studenti
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


    //  stampo nome e cognome degli studenti presenti nell'array students
    for (var i=0; i<students.length; i++) {
        $("#names-list").append(students[i].nome + " " + students[i].cognome + "<br>");
    }

    // stampo tutti i dati degli studenti presenti nell'array students
    for (var i=0; i<students.length; i++){
        for (var j in students[i]){
            $("#array").append(j + ": " +students[i][j] + "<br>");
        }
    }

    // creo un quarto studente usando handlebars
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var student4 = {
      "nome": prompt("Inserisci il tuo nome"),
      "cognome": prompt("Inserisci il tuo cognome"),
      "eta": prompt("Inserisci la tua età")
    };
    var html = template(student4);
    $('#array').append(html);
})
