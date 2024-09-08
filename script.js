let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welcher deutsche Fluss ist der längste?",
        "answer_1": "Rhein",
        "answer_2": "Elbe",
        "answer_3": "Donau",
        "answer_4": "Oder",
        "right_answer": 1
    },
    {
        "question": "In welchem Jahr wurde die deutsche Einheit gefeiert?",
        "answer_1": "1989",
        "answer_2": "1990",
        "answer_3": "1991",
        "answer_4": "1992",
        "right_answer": 2
    },
    {
        "question": "Welches deutsche Bundesland ist flächenmäßig am größten?",
        "answer_1": "Baden-Württemberg",
        "answer_2": "Nordrhein-Westfalen",
        "answer_3": "Niedersachsen",
        "answer_4": "Bayern",
        "right_answer": 4
    },
];



let currentQuestion = 0;


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let questionContainer = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = questionContainer['question'];
    document.getElementById('answer_1').innerHTML = questionContainer['answer_1'];
    document.getElementById('answer_2').innerHTML = questionContainer['answer_2'];
    document.getElementById('answer_3').innerHTML = questionContainer['answer_3'];
    document.getElementById('answer_4').innerHTML = questionContainer['answer_4'];

}
