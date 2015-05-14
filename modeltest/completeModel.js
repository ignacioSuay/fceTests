db.authority.insert({"_id" : "ROLE_ADMIN"});
db.authority.insert({"_id" : "ROLE_USER"})
db.user.ensureIndex({"login" : 1});
db.user.ensureIndex({"email" : 1});

/**************** USERS ***************/
db.user.insert(
    {
        "_id" : "user-0",
        "login" : "system",
        "password" : "$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG",
        "first_name": "",
        "last_name": "System",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_ADMIN"}, {"_id": "ROLE_USER"}]
    });
db.user.insert(
    {
        "_id" : "user-1",
        "login" : "anonymousUser",
        "password" : "$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO",
        "first_name": "Anonymous",
        "last_name": "User",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": []
    });
db.user.insert(
    {
        "_id" : "user-2",
        "login" : "admin",
        "password" : "$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC",
        "first_name": "",
        "last_name": "Administrator",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_ADMIN"}, {"_id": "ROLE_USER"}]
    });
db.user.insert(
    {
        "_id" : "user-3",
        "login" : "user",
        "password" : "$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K",
        "first_name": "",
        "last_name": "User",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_USER"}]
    });

db.user.insert(
    {
        "_id" : "user-suay",
        "login" : "suay",
        "password" : "$2a$10$IZ2w4u/XykNE//zner/j0uLprKaOCvcwKfT5JiggImy6NjCLeSLhW",
        "first_name": "",
        "last_name": "User",
        "email": "",
        "activated": "true",
        "lang_key": "en",
        "created_by": "system",
        "created_date": new Date(),
        "authorities": [{"_id": "ROLE_USER"}]
    });

/**************** USER DETAILS ***************/

db.user_details.insert(
    {
        "_id" : new ObjectId(),
        "login":"suay",
        "exercisesCompleted":[{
            "_id":1,
            "exerciseId":ObjectId("652bf0f760b21e58df21416e"),
            "when": new Date(),
            "userResponses": {1:"1", 2:"2"},
            "exerciseType": "USE_OF_ENGLISH_1",
            "examName": "fce1",
            "time": 600,
            "score": 2
        }]
    });

/**************** EXERCISE ***************/

db.exercise.insert(
    {
        "_id":ObjectId("652bf0f760b21e58df21416e"),
        "title": "What is genealogy?",
        "content": "<p> Genealogy is a branch of history.  It concerns family history,  (1) than the national or world history studied at school.  It doesn’t merely involve drawing a family tree, however – tracing your family history can also (2)  in learning about your roots and your identity.  The internet enables millions of people worldwide to (3)  information about their family history, without great (4).<p> People who research their family history often (5)  that it’s a fascinating hobby which (6)  a lot about where they come from and whether they have famous ancestors.  According to a survey involving 900 people who had researched their family history, the chances of discovering a celebrity in your past are one in ten.  The survey also concluded that the (7)  back you follow your family line, the more likely you are to find a relation who was much wealthier than you are.  However, the vast majority of people who (8) in the survey discovered they were better off than their ancestors.",
        "exerciseType": "USE_OF_ENGLISH_1",
        "responses":[{
            "_id": 1,
            "answers":["instead", "rather", "except", "sooner"],
            "correct": "rather",
            "responseType": "VOCABULARY"
        },{
            "_id": 2,
            "answers":["cause", "mean", "result", "lead"],
            "correct": "result",
            "responseType": "VOCABULARY"
        },{
            "_id": 3,
            "answers":["accomplish", "access", "approach", "admit"],
            "correct": "access",
            "responseType": "VOCABULARY"
        },{
            "_id": 4,
            "answers":["fee", "price", "charge", "expense"],
            "correct": "expense",
            "responseType": "VOCABULARY"
        },{
            "_id": 5,
            "answers":["describe", "define", "remark", "regard"],
            "correct": "remark",
            "responseType": "VOCABULARY"
        },{
            "_id": 6,
            "answers":["reveals", "opens", "begins", "arises"],
            "correct": "reveals",
            "responseType": "VOCABULARY"
        },{
            "_id": 7,
            "answers":["older", "greater", "higher", "further"],
            "correct": "further",
            "responseType": "VOCABULARY"
        },{
            "_id": 8,
            "answers":["attended", "participated", "included", "associated"],
            "correct": "participated",
            "responseType": "VOCABULARY"
        }
        ],
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "Motorbike stunt rider",
        "content": "<p> I work as a motorbike stunt rider – that is, I do tricks on my motorbike at shows. The Le Mans race track in France was (9) I first saw some guys doing motorbike stunts. I’d never seen anyone riding a motorbike using just the back wheel before and I was (10) impressed I went straight home and taught (11) to do the same. It wasn’t very long before I began to earn my living at shows performing my own motorbike stunts.<p>I have a degree (12) mechanical engineering; this helps me to look at the physics (13) lies behind each stunt. In addition to being responsible for design changes to the motorbike, I have to work (14) every stunt I do. People often think that my work is very dangerous, but, apart (15) some minor mechanical problem happening occasionally during a stunt, nothing ever goes wrong. I never feel in (16) kind of danger because I’m very experienced.",
        "exerciseType": "USE_OF_ENGLISH_2",
        "responses":[{
            "_id": 9,
            "answers":null,
            "correct": ["where"],
            "responseType": "COLOCATION"
        },{
            "_id": 10,
            "answers":null,
            "correct": ["so"],
            "responseType": "COLOCATION"
        },
            {
                "_id": 11,
                "answers":null,
                "correct": ["myself"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 12,
                "answers":null,
                "correct": ["in"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 13,
                "answers":null,
                "correct": ["which", "that"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 14,
                "answers":null,
                "correct": ["out", "on", "at"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 15,
                "answers":null,
                "correct": ["from"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 16,
                "answers":null,
                "correct": ["any"],
                "responseType": "COLOCATION"
            }],
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "An incredible vegetable",
        "content": "<p> Garlic, a member of the Liliacaea family which also includes onions, is commonly used in cooking all around the world. China is currently the largest (17) of garlic, which is particularly associated with the dishes of northern Africa and southern Europe. It is native to central Asia and has long had a history as a health-giving food, used both to prevent and cure (18) . In Ancient Egypt, workers building the pyramids were given garlic to keep them strong, while Olympic athletes in Greece ate it to increase their resistance to infection.<p> The forefather of antibiotic medicine, Louis Pasteur, claimed garlic was as (19) as penicillin in treating infections. Modern-day (20) have proved that garlic can indeed kill bacteria and even some viruses, so it can be very useful for people who have coughs and colds. In (21) , some doctors believe that garlic can reduce blood (22) . <p> The only (23) to this truly amazing food is that the strong and rather (24).",
        "exerciseType": "USE_OF_ENGLISH_3",
        "responses":[{
            "_id": 17,
            "answers":["PRODUCT"],
            "correct": ["producer"],
            "responseType": "COLOCATION"
        },{
            "_id": 18,
            "answers":["ILL"],
            "correct": ["illness", "illnesses"],
            "responseType": "COLOCATION"
        },
            {
                "_id": 19,
                "answers":["EFFECT"],
                "correct": ["effective"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 20,
                "answers":["SCIENCE"],
                "correct": ["scientists"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 21,
                "answers":["ADD"],
                "correct": ["addition"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 22,
                "answers":["PRESS"],
                "correct": ["pressure"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 23,
                "answers":["ADVANTAGE"],
                "correct": ["disadvantage"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 24,
                "answers":["SPICE"],
                "correct": ["spicy"],
                "responseType": "COLOCATION"
            }],
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "",
        "content": "",
        "exerciseType": "USE_OF_ENGLISH_4",
        "responses": [{
            "_id": 25,
            "statement":"Joan was in favour of visiting the museum.",
            "reformat":" Joan thought it would be (X) to the museum.",
            "answers":["IDEA"],
            "correct": ["a good idea to go"],
            "responseType": "COLOCATION"
        },{

            "_id": 26,
            "statement":"Arthur has the talent to become a concert pianist.",
            "reformat":"Arthur is so (X) could become a concert pianist.",
            "answers":["THAT"],
            "correct": ["talented that he", "talented that she"],
            "responseType": "COLOCATION"
        },{

            "_id": 27,
            "statement":"'Do you know when the match starts, Sally?' asked Mary.",
            "reformat":"Mary asked Sally (X) time the match started.",
            "answers":["IF"],
            "correct": ["if he knew what", "if she knew what","if he knew the","if she knew the"],
            "responseType": "COLOCATION"
        },{

            "_id": 28,
            "statement":"I knocked for ages at Ruth's door but I got no reply.",
            "reformat":"I (X) knocking at Ruth's door but I got no reply.",
            "answers":["LONG"],
            "correct": ["spent a long time", "took a long time","was a long time"],
            "responseType": "COLOCATION"
        },{

            "_id": 29,
            "statement":"Everyone says that the band is planning to go on a world tour next year.",
            "reformat":"The band (X) planning to go on a world tour next year.",
            "answers":["SAID"],
            "correct": ["are said to be", "is said to be"],
            "responseType": "COLOCATION"
        },{

            "_id": 30,
            "statement":" I'd prefer not to cancel the meeting.",
            "reformat":"I'd rather (X) the meeting.",
            "answers":["CALL"],
            "correct": ["not call off", "you didn't call off", "you did not call off", "we did not call off", "we didn't call off"],
            "responseType": "COLOCATION"
        }
        ],
        "examName": "fce1"
    });


db.exercise.insert(
    {
        "title": "",
        "content":  "<p> We live on the island of Hale. It's about four kilometres long and two kilometres wide at its broadest point, and it's joined to the mainland by a causeway called the Stand - a narrow road built across the mouth of the river which separates us from the rest of the country. Most of the time you wouldn't know we're on an island because the river mouth between us and the mainland is just a vast stretch of tall grasses and brown mud. But when there's a high tide and the water rises a half a metre or so above the road and nothing can pass until the tide goes out again a few hours later, then you know it's an island." +
        "<p> We were on our way back from the mainland. My older brother, Dominic, had just finished his first year at university in a town 150 km away. Dominic's train was due in at five and he'd asked for a lift back from the station. Now, Dad normally hates being disturbed when he's writing (which is just about all the time), and he also hates having to go anywhere, but despite the typical sighs and moans – why can't he get a taxi? what's wrong with the bus? – I could tell by the sparkle in his eyes that he was really looking forward to seeing Dominic. "+
        "<p> So, anyway, Dad and I had driven to the mainland and picked up Dominic from the station. He had been talking non-stop from the moment he'd slung his rucksack in the boot and got in the car. University this, university that, writers, books, parties, people, money, gigs.... And when I say talking, I don't mean talking as in having a conversation, I mean talking as in jabbering like a mad thing. I didn't like it .... the way he spoke and waved his hands around as if he was some kind of intellectual or something. It was embarrassing. It made me feel uncomfortable – that kind of discomfort you feel when someone you like, someone close to you, suddenly starts acting like a complete idiot. And I didn't like the way he was ignoring me, either. For all the attention I was getting I might as well not have been there. I felt a stranger in my own car." +
        "<p> As we approached the island on that Friday afternoon, the tide was low and the Stand welcomed us home, stretched out before us, clear and dry, beautifully hazy in the heat – a raised strip of grey concrete bound by white railings and a low footpath on either side, with rough cobbled banks leading down to the water. Beyond the railings, the water was glinting with that wonderful silver light we sometimes get here in the late afternoon which lazes through to the early evening." +
        "<p> We were about halfway across when I saw the boy. My first thought was how odd it was to see someone walking on the Stand. You don't often see people walking around here. Between Hale and Moulton (the nearest town about thirty kilometres away on the mainland), there's nothing but small cottages, farmland, heathland and a couple of hills. So islanders don't walk because of that. If they're going to Moulton they tend to take the bus. So the only pedestrians you're likely to see around here are walkers or bird-watchers. But even from a distance I could tell that the figure ahead didn't fit into either of these categories. I wasn't sure how I knew, I just did." +
        "<p> As we drew closer, he became clearer. He was actually a young man rather than a boy. Although he was on the small side, he wasn't as slight as I'd first thought. He wasn't exactly muscular, but he wasn't weedy-looking either. It's hard to explain. There was a sense of strength about him, a graceful strength that showed in his balance, the way he held himself, the way he walked....",
        "exerciseType": "READING_1",
        "examName": "fce1",
        "responses": [
            {
                "_id": 31,
                "statement":"In the first paragraph, what is Caitlin's main point about the island?",
                "answers": ["It can be dangerous to try to cross from the mainland.", "It is much smaller than it looks from the mainland.", "It is only completely cut off at certain times.", "It can be a difficult place for people to live in."],
                "correct": "2",
                "responseType": "VOCABULARY"},
            {
                "_id": 32,
                "statement":"What does Caitlin suggest about her father?",
                "answers": ["His writing prevents him from doing things he wants to with his family.", "His initial reaction to his son's request is different from usual.", "His true feelings are easily hidden from his daughter.", "His son's arrival is one event he will take time off for."],
                "correct": "3",
                "responseType": "VOCABULARY"},
            {
                "_id": 33,
                "statement":"Caitlin emphasises her feelings of discomfort because she",
                "answers": ["is embarrassed that she doesn't understand what her brother is talking about.", "feels confused about why she can't relate to her brother any more.", "is upset by the unexpected change in her brother's behaviour.", "feels foolish that her brother's attention is so important to her."],
                "correct": "2",
                "responseType": "VOCABULARY"},
            {
                "_id": 34,
                "statement":"In the fourth paragraph, what is Caitlin's purpose in describing the island?",
                "answers": ["to express her positive feelings about it","to explain how the road was built", "to illustrate what kind of weather was usual", "to describe her journey home"],
                "correct": "0",
                "responseType": "VOCABULARY"},
            {
                "_id": 35,
                "statement":"In 'because of that' the word 'that' refers to",
                "answers": ["locals thinking it is odd to walk anywhere.","it being easier for people to take the bus than walk.","people having everything they need on the island.", "there being nowhere in particular to walk to from the island."],
                "correct": "3",
                "responseType": "VOCABULARY"},
            {
                "_id": 36,
                "statement":"What do we learn about Caitlin's reactions to the boy?",
                "answers": ["She felt his air of confidence contrasted with his physical appearance.", "She was able to come up with a reason for him being there.", "She realised her first impression of him was inaccurate.", "She thought she had seen him somewhere before."],
                "correct": "2",
                "responseType": "VOCABULARY"},
        ]
    });

db.exercise.insert({
    "title": "Good preparation leads to success in ballet dancing",
    "content": "<p> A former classical ballet dancer explains what ballet training actually involves." +
    "<p> What we ballet dancers do is instinctive, but instinct learnt through a decade of training.  A dancer’s life is hard to understand, and easy to misinterpret.  Many a poet and novelist has tried to do so, but even they have chosen to interpret all the hard work and physical discipline as obsessive.  And so the idea persists that dancers spend every waking hour in pain, bodies at breaking point, their smiles a pretence.   " +
    "<p> As a former dancer in the Royal Ballet Company here in Britain, I would beg to question this. (37)   With expert teaching and daily practice, its various demands are easily within the capacity of the healthy human body. Contrary to popular belief, there is no need to break bones or tear muscles to achieve ballet positions.  It is simply a question of sufficient conditioning of the muscular system." +
    "<p> Over the course of my dancing life I worked my way through at least 10,000 ballet classes.  I took my first at a school of dance at the age of seven and my last 36 years later at the Royal Opera House in London.  In the years between, ballet class was the first thing I did every day.  It starts at an early age, this daily ritual, because it has to.  (38)   But for a ballet dancer in particular, this lengthy period has to come before the effects of adolescence set in, while maximum flexibility can still be achieved.  " +
    "<p> Those first classes I took were remarkably similar to the last.  In fact, taking into account the occasional new idea, ballet classes have changed little since 1820, when the details of ballet technique were first written down, and are easily recognised in any country.  Starting with the left hand on the barre, the routine unrolls over some 75 minutes. (39)  Even the leading dancers have to do it.  " +
    "<p> These classes serve two distinct purposes: they are the way we warm our bodies and the mechanism by which we improve basic technique.  In class after class, we prove the old saying that ‘practice makes perfect’. (40)  And it is also this daily repetition which enables us to strengthen the muscles required in jumping, spinning or lifting our legs to angles impossible to the average person.  " +
    "<p> The human body is designed to adapt to the demands we make of it, provided we make them carefully and over time. (41) In the same way, all those years of classes add up to a fit-for-purpose dancing machine.  This level of physical fluency doesn’t hurt; it feels good.  " +
    "<p> (42) But they should not be misled: there is a difference between hard work and hardship.  Dancers have an everyday familiarity with the first. Hardship it isn’t. ",
    "exerciseType": "READING_2",
    "examName": "fce1",
    "responses": [
        {
            "_id":1,
            "statement":"Through endless tries at the usual exercises and frequent failures, ballet dancers develop the neural pathways in the brain necessary to control accurate, fast and smooth movement.",
            "correct":"40"
        },
        {
            "_id":2,
            "statement":"The ballet shoe offers some support, but the real strength is in the muscles, built up through training.",
            "correct":"0"
        },
        {
            "_id":3,
            "statement":"As technology takes away activity from the lives of many, perhaps the ballet dancer’s physicality is ever more difficult for most people to imagine.",
            "correct":"42"
        },
        {
            "_id":4,
            "statement":"Ballet technique is certainly extreme but it is not, in itself, dangerous.",
            "correct":"37"
        },
        {
            "_id":5,
            "statement":"The principle is identical in the gym – pushing yourself to the limit, but not beyond, will eventually bring the desired result.",
            "correct":"41"
        },
        {
            "_id":6,
            "statement":"No one avoids this: it is ballet’s great democratiser, the well established members of the company working alongside the newest recruits.",
            "correct":"39"
        },
        {
            "_id":7,
            "statement":"It takes at least a decade of high-quality, regular practice to become an expert in any physical discipline.",
            "correct":"38"
        }
    ]});

db.exercise.insert({
    "title":"Rising Star",
    "content": "Margaret Garelly goes to meet Duncan Williams, who plays for Chelsea Football Club.</br>" +
    "<p>Paragraph A <br> It’s my first time driving to Chelsea’s training ground and I turn off slightly too early at the London University playing fields. Had he accepted football’s rejections in his early teenage years, it is exactly the sort of ground Duncan Williams would have found himself running around on at weekends. At his current age of 18, he would have been a bright first-year undergraduate mixing his academic studies with a bit of football, rugby and cricket, given his early talent in all these sports. However, Duncan undoubtedly took the right path. Instead of studying, he is sitting with his father Gavin in one of the interview rooms at Chelsea’s training base reflecting on Saturday’s match against Manchester City. Such has been his rise to fame that it is with some disbelief that you listen to him describing how his career was nearly all over before it began." +
    "<p>Paragraph B <br> Gavin, himself a fine footballer – a member of the national team in his time – and now a professional coach, sent Duncan to three professional clubs as a 14 year-old, but all three turned him down. ‘I worked with him a lot when he was around 12, and it was clear he had fantastic technique and skill. But then the other boys shot up in height and he didn’t. But I was still upset and surprised that no team seemed to want him, that they couldn’t see what he might develop into in time. When Chelsea accepted him as a junior, it was made clear to him that this was more of a last chance than a new beginning. They told him he had a lot of hard work to do and wasn’t part of their plans. Fortunately, that summer he just grew and grew, and got much stronger as well.’" +
    "<p>Paragraph C <br> Duncan takes up the story: ‘The first half of that season I played in the youth team. I got lucky – the first-team manager came to watch us play QPR, and though we lost 3-1, I had a really good game. I moved up to the first team after that performance.’ Gavin points out that it can be beneficial to be smaller and weaker when you are developing – it forces you to learn how to keep the ball better, how to use ‘quick feet’ to get out of tight spaces. ‘A couple of years ago, Duncan would run past an opponent as if he wasn’t there but then the other guy would close in on him. I used to say to him, “Look, if you can do that now, imagine what you’ll be like when you’re 17, 18 and you’re big and quick and they won’t be able to get near you.” If you’re a smaller player, you have to use your brain a lot more.’" +
    "<p>Paragraph C <br> Not every kid gets advice from an ex-England player over dinner, nor their own private training sessions. Now Duncan is following in Gavin’s footsteps. He has joined a national scheme where people like him give advice to ambitious young teenagers who are hoping to become professionals. He is an old head on young shoulders. Yet he’s also like a young kid in his enthusiasm. And fame has clearly not gone to his head; it would be hard to meet a more likeable, humble young man. So will he get to play for the national team? ‘One day I’d love to, but when that is, is for somebody else to decide.’ The way he is playing, that won’t be long.",
    "exerciseType": "READING_3",
    "examName": "fce1",
    "responses":[
        {
            "_id": 43,
            "statement" : "states how surprised the writer was at Duncan’s early difficulties?",
            "correct":"A"
        },
        {
            "_id": 44,
            "statement" : "says that Duncan sometimes seems much more mature than he really is?",
            "correct":"D"
        },
        {
            "_id": 45,
            "statement" : "describes the frustration felt by Duncan’s father?",
            "correct":"B"
        },
        {
            "_id": 46,
            "statement" : "says that Duncan is on course to reach a high point in his profession?",
            "correct":"D"
        },
        {
            "_id": 47,
            "statement" : "suggests that Duncan caught up with his team-mates in terms of physical development?",
            "correct":"B"
        },
        {
            "_id": 48,
            "statement" : "explains how Duncan was a good all-round sportsperson?",
            "correct":"A"
        },
        {
            "_id": 49,
            "statement" : "gives an example of how Gavin reassured his son?",
            "correct":"C"
        },
        {
            "_id": 50,
            "statement" : "mentions Duncan’s current club’s low opinion of him at one time?",
            "correct":"B"
        },
        {
            "_id": 51,
            "statement" : "mentions a personal success despite a failure for the team?",
            "correct":"C"
        },
        {
            "_id": 52,
            "statement" : "explains how Duncan and his father are fulfilling a similar role?",
            "correct":"D"
        }
    ]
});


db.exercise.insert(
    {
        "title": "",
        "content":  "Every country in the world has problems with pollution and damage to the environment. Do you think these problems can be solved? <br/> Notes <br/> Write about <br/> 1. transport <br/> 2. rivers and seas <br/> 3...",
        "exerciseType": "WRITING_1",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "",
        "content":  "You see this announcement in your college English-language magazine.<div class='well'> <p>Book reviews wanted</p><p>Have you read a book in which the main character behaved in a surprising way?</p><p>Write us a review of the book, explaining what the main character did and why it was surprising. Tell us whether or not you would recommend this book to other people.</p><p>The best reviews will be published in the magazine.</p> </div> Write your review. ",
        "exerciseType": "WRITING_2",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "",
        "content":  "You see this announcement on an English-language website. <div class='well'><p>Articles wanted</p><p>The most useful thing I have ever learned.</p><p>What is the most useful thing you have learned?Who did you learn it from? Why is it useful?<p>Write us an article answering these questions.</p><p>We will publish the best articles on our website.</p> </div>Write your article. ",
        "exerciseType": "WRITING_3",
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "",
        "content":  "You have received this email from your English-speaking friend David. <div class='well'><p>From: David <br/> Subject: touring holiday</p><p>Some college friends of mine are visiting your area soon for a week’s touring holiday. They would like to travel around and learn about your local area and its history.</p><p>Can you tell me about some of the places they could visit? What’s the best way to travel around – car, bike or coach?</p><p>Thanks</p><p>David</p></div> Write your email ",
        "exerciseType": "WRITING_4",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "Part 1 (2 minutes)",
        "content":  "<p> Good morning/afternoon/evening. My name is ... and this is my colleague...</p>" +
        "<p> And your names are? Can I have yor mark sheets, please?<br/> Thank you.</p>" +
        "<p> Where are you from (Candidate A)? and you, (candidate B)?</p>" +
        "<p> First we would like to know something about you" +
        "Do you like reading? Tell us about a book you really like </p>" +
        "<p> What did you do on your last holiday?</p>" +
        "<p> Tell us about a film you have seen recently.</p>",
        "exerciseType": "SPEAKING_1",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "Part 2 (4 minutes)",
        "content":  "<p> In this part of the test, I'm going to give each of you 2 photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photograph </p>" +
        "<p> (candidate A), it's your turn first. Here are your photographs. They show people who are helping other people in different situations</p>" +
        "<p> I would  like you to compare the photographs, and say how important it is to help people in these situations. <br/><br/>" +
        "<img src='assets/images/fce1/help.jpg'/> <img src='assets/images/fce1/save.jpg'/></p>" +
        "<p> (candidate B) do you find easy to ask for help when you have a problem? (Why / Why not? )</p>" +
        "<p> Now, (candidate B), here are your photographs. they show people spending time in different gardens <br/><br/>" +
        "<img src='assets/images/fce1/garden.jpg'/> <img src='assets/images/fce1/gardening-475350_640.jpg'/></p>" +
        "<p> I would  like you to compare the photographs, and say what you think the people are enjoying about spending in these gardens </p>" +
        "<p> (Candidate A) which garden would you prefer to spend time in? ... (Why?)</p>" +
        "<p> Thank you </p>",
        "exerciseType": "SPEAKING_2",
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "Part 3 (4 minutes)",
        "content": "<p> Now I'd like to you to talk about something together for about 2 minutes</p>" +
        "<p> I'd like you to imagine that a town wants more tourists to visit. Here ae some ideas they're thinking about and a question for you to discuss. First you have some time to look at the task.</p>" +
        "<p> Now, talk to each other about why these ideas would attract more tourists to the town</p>" +
        "<p> (You have 2 minutes to discuss with the other candidate)</p>" +
        "<p> Thank you. Now you have a minute to decide which idea would be best for the town.</p>",
        "exerciseType": "SPEAKING_3",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "Part 4 (4 minutes)",
        "content":  "<p> Please discuss with the other candidate </p>" +
        "<p> Do you think you have to spend a lot of money to have a good holiday? ... (Why?/ Why not?)</p> " +
        "<p> Some people say we travel too much these days and shouldn't go on so many holidays. What do you think? </p>" +
        "<p> Do you think people have enough time for holidays these days?... (Why? / Why not? </p>" +
        "<p> Why do you think people like to go away on holiday? </p>" +
        "<p> What do you think is the biggest advantage of living in a place where there are a lot of tourists? </p>",
        "exerciseType": "SPEAKING_4",
        "examName": "fce1"
    });



