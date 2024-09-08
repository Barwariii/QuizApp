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
    {
        "question": "Welche Stadt ist die Hauptstadt Deutschlands?",
        "answer_1": "München",
        "answer_2": "Berlin",
        "answer_3": "Hamburg",
        "answer_4": "Frankfurt am Main",
        "right_answer": 2
    },
    {
        "question": "Welches deutsche Märchen ist weltweit bekannt und wurde von den Brüdern Grimm gesammelt?",
        "answer_1": "Die kleine Meerjungfrau",
        "answer_2": "Rotkäppchen",
        "answer_3": "Pinocchio",
        "answer_4": "Schneewittchen",
        "right_answer": 4
    },
    {
        "question": "Welches deutsche Auto ist ein Symbol für Luxus und Leistung?",
        "answer_1": "Volkswagen Golf",
        "answer_2": "Mercedes-Benz S-Klasse",
        "answer_3": "Opel Corsa",
        "answer_4": "BMW i3",
        "right_answer": 2
    },
    {
        "question": "Welches deutsche Fest wird jedes Jahr im Oktober gefeiert und ist für seine Biergärten und Trachten bekannt?",
        "answer_1": "Karneval",
        "answer_2": "Oktoberfest",
        "answer_3": "Weihnachtsmarkt",
        "answer_4": "Sommerfest",
        "right_answer": 2
    },
    {
        "question": "Welches deutsche Schloss ist eines der bekanntesten weltweit und war einst die Residenz bayerischer Könige?",
        "answer_1": "Neuschwanstein",
        "answer_2": "Sanssouci",
        "answer_3": "Versailles",
        "answer_4": "Windsor",
        "right_answer": 1
    },
];



let currentQuestion = 0;
let rightQuestions = 0; // to show the right answer on end screen
let audioSuccess = new Audio('audio/success.mp3');
let audiofail = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {


    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('end_screen').style = '';
        document.getElementById('start_Quiz').style = 'display: none';

        document.getElementById('end_all_questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header_img').src = './img/win.png'; // change quiz img with end screen win img
        document.getElementById('header_img').style.width = "350px";
    } else { //show questions

        let precent = (currentQuestion + 1) / questions.length;
        precent = Math.round(precent * 100);
        document.getElementById('progress_bar').innerHTML = `${precent} %`;
        document.getElementById('progress_bar').style = `width: ${precent}%`;

        console.log('Fortschritt: ', precent)


        let questionContainer = questions[currentQuestion];


        document.getElementById('question_number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionContainer['question'];
        document.getElementById('answer_1').innerHTML = questionContainer['answer_1'];
        document.getElementById('answer_2').innerHTML = questionContainer['answer_2'];
        document.getElementById('answer_3').innerHTML = questionContainer['answer_3'];
        document.getElementById('answer_4').innerHTML = questionContainer['answer_4'];

    }
}


function answer(selection) {
    let questionContainer = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfrightAnswer = `answer_${questionContainer['right_answer']}`;

    if (selectedQuestionNumber == questionContainer['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audioSuccess.play();
        rightQuestions++;
        console.log('richtige antwort');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfrightAnswer).parentNode.classList.add('bg-success');
        audiofail.play();
        console.log('falshe antwort');
    }
    document.getElementById('next_btn').disabled = false;
}


function nextQ() {
    currentQuestion++; //z.B. von 0 auf 1
    document.getElementById('next_btn').disabled = true;
    showQuestion();
    resetAnswerBtn();
}


function resetAnswerBtn() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame(params) {
    document.getElementById('header_img').src = './img/quiz.png'; // change quiz img with end screen win img
    document.getElementById('header_img').style.width = "100%";
    document.getElementById('start_Quiz').style = ''; // able start quiz agian 
    document.getElementById('end_screen').style = 'display: none'; //disable en screen
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}