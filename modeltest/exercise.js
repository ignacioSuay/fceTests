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
        "title": "What is genealogy?",
        "content": "Genealogy is a branch of history.  It concerns family history,  (1) than the national or world history studied at school.  It doesn’t merely involve drawing a family tree, however – tracing your family history can also (2)  in learning about your roots and your identity.  The internet enables millions of people worldwide to (3)  information about their family history, without great (4)  .People who research their family history often (5)  that it’s a fascinating hobby which (6)  a lot about where they come from and whether they have famous ancestors.  According to a survey involving 900 people who had researched their family history, the chances of discovering a celebrity in your past are one in ten.  The survey also concluded that the (7)  back you follow your family line, the more likely you are to find a relation who was much wealthier than you are.  However, the vast majority of people who (8) in the survey discovered they were better off than their ancestors.",
        "exerciseType": "USE_OF_ENGLISH_1",
        "responses":[{
            "id": 1,
            "answers":["instead", "rather", "except", "sooner"],
            "correct": 1,
            "responseType": "VOCABULARY"
        },{
            "id": 2,
            "answers":["cause", "mean", "result", "lead"],
            "correct": 2,
            "responseType": "VOCABULARY"
        },{
                "id": 3,
                "answers":["accomplish", "access", "approach", "admit"],
                "correct": 1,
                "responseType": "VOCABULARY"
        },{
            "id": 4,
            "answers":["fee", "price", "charge", "expense"],
            "correct": 3,
            "responseType": "VOCABULARY"
        },{
            "id": 5,
            "answers":["describe", "define", "remark", "regard"],
            "correct": 2,
            "responseType": "VOCABULARY"
        },{
            "id": 6,
            "answers":["reveals", "opens", "begins", "arises"],
            "correct": 0,
            "responseType": "VOCABULARY"
        },{
            "id": 7,
            "answers":["older", "greater", "higher", "further"],
            "correct": 3,
            "responseType": "VOCABULARY"
        },{
            "id": 8,
            "answers":["attended", "participated", "included", "associated"],
            "correct": 1,
            "responseType": "VOCABULARY"
        }
        ],
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "Motorbike stunt rider",
        "content": "&lt;p> I work as a motorbike stunt rider – that is, I do tricks on my motorbike at shows. The Le Mans race track in France was (9). I first saw some guys doing motorbike stunts. I’d never seen anyone riding a motorbike using just the back wheel before and I was (10) impressed I went straight home and taught (11) to do the same. It wasn’t very long before I began to earn my living at shows performing my own motorbike stunts.&lt;p>&lt;br> I have a degree (12) mechanical engineering; this helps me to look at the physics (13) lies behind each stunt. In addition to being responsible for design changes to the motorbike, I have to work (14) every stunt I do. People often think that my work is very dangerous, but, apart (15) some minor mechanical problem happening occasionally during a stunt, nothing ever goes wrong. I never feel in (16) kind of danger because I’m very experienced.",
        "exerciseType": "USE_OF_ENGLISH_2",
        "responses":[{
            "id": 9,
            "answers":null,
            "correct": ["where"],
            "responseType": "COLOCATION"
        },{
            "id": 10,
            "answers":null,
            "correct": ["so"],
            "responseType": "COLOCATION"
        },
            {
                "id": 11,
                "answers":null,
                "correct": ["myself"],
                "responseType": "COLOCATION"
            },
            {
                "id": 12,
                "answers":null,
                "correct": ["in"],
                "responseType": "COLOCATION"
            },
            {
                "id": 13,
                "answers":null,
                "correct": ["which", "that"],
                "responseType": "COLOCATION"
            },
            {
                "id": 14,
                "answers":null,
                "correct": ["out", "on", "at"],
                "responseType": "COLOCATION"
            },
            {
                "id": 15,
                "answers":null,
                "correct": ["from"],
                "responseType": "COLOCATION"
            },
            {
                "id": 16,
                "answers":null,
                "correct": ["any"],
                "responseType": "COLOCATION"
            }],
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "An incredible vegetable",
        "content": "&lt;p> Garlic, a member of the Liliacaea family which also includes onions, is commonly used in cooking all around the world. China is currently the largest (17) of garlic, which is particularly associated with the dishes of northern Africa and southern Europe. It is native to central Asia and has long had a history as a health-giving food, used both to prevent and cure (18) . In Ancient Egypt, workers building the pyramids were given garlic to keep them strong, while Olympic athletes in Greece ate it to increase their resistance to infection.&lt;p> &lt;br> The forefather of antibiotic medicine, Louis Pasteur, claimed garlic was as (19) as penicillin in treating infections. Modern-day (20) have proved that garlic can indeed kill bacteria and even some viruses, so it can be very useful for people who have coughs and colds. In (21) , some doctors believe that garlic can reduce blood (22) . &lt;p> &lt;br> The only (23) to this truly amazing food is that the strong and rather (24).",
        "exerciseType": "USE_OF_ENGLISH_3",
        "responses":[{
            "id": 17,
            "answers":["PRODUCT"],
            "correct": ["producer"],
            "responseType": "COLOCATION"
        },{
            "id": 18,
            "answers":["ILL"],
            "correct": ["illness", "illnesses"],
            "responseType": "COLOCATION"
        },
            {
                "id": 19,
                "answers":["EFFECT"],
                "correct": ["effective"],
                "responseType": "COLOCATION"
            },
            {
                "id": 20,
                "answers":["SCIENCE"],
                "correct": ["scientists"],
                "responseType": "COLOCATION"
            },
            {
                "id": 21,
                "answers":["ADD"],
                "correct": ["addition"],
                "responseType": "COLOCATION"
            },
            {
                "id": 22,
                "answers":["PRESS"],
                "correct": ["pressure"],
                "responseType": "COLOCATION"
            },
            {
                "id": 23,
                "answers":["ADVANTAGE"],
                "correct": ["disadvantage"],
                "responseType": "COLOCATION"
            },
            {
                "id": 24,
                "answers":["SPICE"],
                "correct": ["spicy"],
                "responseType": "COLOCATION"
            }],
        "examName": "fce1"
    });