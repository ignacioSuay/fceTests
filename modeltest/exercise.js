var a = {
    "title": "ex1",
    "content": "bla bla",
    "exerciseType": "USE_OF_ENGLISH_1",
    "responses":{
        "answers":["a", "b", "c", "d"],
        "correct": 0,
        "responseType": "VOCABULARY"
    },
    "examName": "fce1"
}

db.exercise.insert(
    {
        "title": "ex1",
        "content": "bla bla",
        "exerciseType": "USE_OF_ENGLISH_1",
        "responses":[{
            "id": 1,
            "answers":["a", "b", "c", "d"],
            "correct": 0,
            "responseType": "VOCABULARY"
        },{
            "id": 2,
            "answers":["a", "s", "d", "f"],
            "correct": 3,
            "responseType": "VOCABULARY"}
        ],
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "ex2",
        "content": "bla bla2",
        "exerciseType": "USE_OF_ENGLISH_2",
        "responses":{
            "id": 2,
            "answers":["a", "b", "c", "d"],
            "correct": 0,
            "responseType": "VOCABULARY"
        },
        "examName": "fce1"
    });

