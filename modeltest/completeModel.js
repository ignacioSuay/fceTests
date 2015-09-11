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
        "authorities": [{"_id": "ROLE_USER"}]
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
        "title": "Fred the Lawyer",
        "content": "<p> Fred was born on March 25th 1989, he was  (1) in a one-bedroom house (2)  Baltimore's worst neighbourhood.  He shared a bedroom with (3) sister, although it was actually the lounge with a divider in the middle. .<p>   Fred’s life changed radically in 2007, the day he started university.  When he left, his sister stayed living in the (4) one bedroom apartment, which was (5) by a burglar-proof iron (6) to make her feel safer.<p>  It was four long years before Fred finished Studying at Princeton University (7) he got his law degree in 2011 .<p>  After (8) , he accepted a position at a New York law firm and it was only a few weeks later when he was able to rent a nice loft in a decent workers neighbourhood and offered his sister a bed in a new and safer environment." ,
        "exerciseType": "USE_OF_ENGLISH_1",
        "responses":[{
            "_id": 1,
            "answers":["raised", "raise", "raises", "raising"],
            "correct": "raised",
            "responseType": "VERB_TENSES"
        },{
            "_id": 2,
            "answers":["over", "inside", "under", "on"],
            "correct": "on",
            "responseType": "VOCABULARY"
        },{
            "_id": 3,
            "answers":["her", "his", "their", "here"],
            "correct": "his",
            "responseType": "VOCABULARY"
        },{
            "_id": 4,
            "answers":["different", "identic", "same", "other"],
            "correct": "same",
            "responseType": "VOCABULARY"
        },{
            "_id": 5,
            "answers":["protected", "entered", "assisted", "surrounded"],
            "correct": "protected",
            "responseType": "VOCABULARY"
        },{
            "_id": 6,
            "answers":["roof", "door", "garage", "floor"],
            "correct": "door",
            "responseType": "VOCABULARY"
        },{
            "_id": 7,
            "answers":["here", "there", "where", "away"],
            "correct": "where",
            "responseType": "VOCABULARY"
        },{
            "_id": 8,
            "answers":["graduating", "graduated", "graduation", "graduate"],
            "correct": "graduating",
            "responseType": "VERB_TENSES"
        }
        ],
        "examName": "fce1"
    });

    db.exercise.insert(
        {
            "title": "Mr Smith",
            "content":"<p> Dear Mr Smith I intend to write only a short note, to let you know (9) has been getting done (10) far this week.  The plumbing in the bathroom has gone quite well up until now, but we haven't finished fitting (11) the bath tub yet.In order to achieve this I have hired two apprentices (12) will help us get everything done much faster next week.  They will start working next monday.It has been quite rainy all week, (13) the builders haven't been able to lay many bricks (14) the outside wall as you requested, but they have been doing a great job in the dining room, changing the whole floor and fitting all the new windows.A last thing we need (15) discuss are the columns in the basement, apparently there's been a plague (16) termites making their way through them, it's not looking too good, please phone me as soon as you receive this letter so we can discuss this matter.",
            "exerciseType": "USE_OF_ENGLISH_2",
            "responses":[{
                "_id": 9,
                "answers":null,
                "correct": ["what"],
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
                    "correct": ["in"],
                    "responseType": "COLOCATION"
                },
                {
                    "_id": 12,
                    "answers":null,
                    "correct": ["who"],
                    "responseType": "COLOCATION"
                },
                {
                    "_id": 13,
                    "answers":null,
                    "correct": ["so", "hence"],
                    "responseType": "COLOCATION"
                },
                {
                    "_id": 14,
                    "answers":null,
                    "correct": ["on", "at"],
                    "responseType": "COLOCATION"
                },
                {
                    "_id": 15,
                    "answers":null,
                    "correct": ["to"],
                    "responseType": "COLOCATION"
                },
                {
                    "_id": 16,
                    "answers":null,
                    "correct": ["of"],
                    "responseType": "COLOCATION"
                }],
            "examName": "fce1"
        });

db.exercise.insert(
    {
        "title": "Nirvana",
        "content": "<p>Nirvana (17) an American grunge band that was formed by singer/guitarist Kurt Cobain and bassist Krist Novoselic in Aberdeen, Washington in 1987. Nirvana (18) through a succession of drummers, the longest-lasting being Dave Grohl,who joined the band in 1990. Despite (19) only three full-length studio albums in their seven-year career, Nirvana has come to be regarded as one of the most (20) and important rock bands of the modern era.During its initial months, the band went through a series of names, starting with Skid Row and including Pen Cap Chew, Bliss, and Ted Ed Fred. The group (21) settled on Nirvana, which Cobain said was chosen because 'I wanted a name that was kind of beautiful or nice and pretty instead of a mean punk name Nirvana released its first single, 'Love Buzz', in November 1988 on the Seattle independent record label Sub Pop. The following month, the band began recording its debut album, Bleach, with local (22) Jack Endino. Bleach was highly influenced by the heavy dirge-rock of the Melvins and Mudhoney, 1980s punk rock, and the 1970s heavy metal of Black Sabbath.Following the release of Bleach in June 1989, Nirvana embarkedon its first national tour,[19] and the album became a favorite of college radio stations.[20] Due to increasing dissatisfaction with Everman over the course of the tour, Nirvana cancelled the last few dates and (23) back to Washington. No one told Everman he was fired at the time, while Everman later claimed that he (24) quit the group.",
        "exerciseType": "USE_OF_ENGLISH_3",
        "responses":[{
            "_id": 17,
            "answers":["BE"],
            "correct": ["was"],
            "responseType": "COLOCATION"
        },{
            "_id": 18,
            "answers":["GO"],
            "correct": ["went"],
            "responseType": "COLOCATION"
        },
            {
                "_id": 19,
                "answers":["RELEASE"],
                "correct": ["releasing"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 20,
                "answers":["INFLUENCE"],
                "correct": ["influential"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 21,
                "answers":["FINAL"],
                "correct": ["finally"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 22,
                "answers":["PRODUCE"],
                "correct": ["producer"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 23,
                "answers":["DRIVE"],
                "correct": ["drove"],
                "responseType": "COLOCATION"
            },
            {
                "_id": 24,
                "answers":["ACTUAL"],
                "correct": ["actually"],
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
            "statement":"I see how you are behaving like a very selfish person.",
            "reformat":"I think you(X) very selfish",
            "answers":["BE"],
            "correct": ["are being"],
            "responseType": "COLOCATION"
        },{

            "_id": 26,
            "statement":"John began studying science two years ago",
            "reformat":"John (X) science for two years",
            "answers":["STUDY"],
            "correct": ["has been studying", "has studied"],
            "responseType": "COLOCATION"
        },{

            "_id": 27,
            "statement":"Megan requested a survey, but then she realised it wasn’t necessary",
            "reformat":"(X) , she realized it wasn’t necessary.",
            "answers":["ONCE"],
            "correct": ["Once Megan requested the survey"],
            "responseType": "COLOCATION"
        },{

            "_id": 28,
            "statement":"There’s a meeting at the principals office tomorrow",
            "reformat":"Tomorrow (X)  at his office",
            "answers":["HOLD"],
            "correct": ["the principal's holding a meeting","the principal is holding a meeting"],
            "responseType": "COLOCATION"
        },{

            "_id": 29,
            "statement":"What year did Muse start playing?",
            "reformat":"Do you think you (X) year Muse started playing?",
            "answers":["COULD"],
            "correct": ["could tell me what"],
            "responseType": "COLOCATION"
        },{

            "_id": 30,
            "statement":" It would be awesome to be able to sing like Matt Bellamy",
            "reformat":"I (X) sing like Matt Bellamy",
            "answers":["WISH"],
            "correct": ["wish I could", "'d wish to"],
            "responseType": "COLOCATION"
        }
        ],
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "The Middle East",
        "content":  "<p>  The Middle East is not a continent, but rather a region spanning across western Asia. Sometimes parts of northeastern Africa (like Egypt, Libya and Sudan) are included. This part of the world is often in the news, most notably due to the war in Iraq and other civil unrest in countries like Israel, Lebanon, Yemen and more recently Syria." +
        "<p> Despite the bad publicity, the Middle East has a lot to offer to travellers – historically and culturally. Palmyra in Syria, Petra in Jordan and Persepolis in Iran are reminders of the region's glorious past. The largest sandsea in the world, the Rub' al Khali, literally the Empty Quarter in English, can be found here in the Middle East. In fact, large parts are dry deserts but still many people manage to live here, mainly along major rivers like the Tigris."+
        "<p> Travelling in this region is pleasantly easy. However, the differences in travelling costs between the cheaper countries like Iran and Syria and the more developed places like Oman and Dubai can be huge. Spend some time in this part of the world and enjoy the sights and experiences it has to offer." +
        "<p> Despite having no consequent borders, there are huge similarities between many of the countries. Like mentioned above, huge parts are arid, but grasslands, fertile river beds and moutainous areas are not absent at all." +
        "<p> The southern part of the Arabian Peninsula mainly consists of sandseas and mountains, especially the southwest of Saudi Arabia and parts of Oman and Yemen have high moutains with chances of snowfall in winter. " +
        "<p> More to the north, the mountains are lower and sand makes places for rocks and gravel and lowlying deserts like the Syrian Desert and Iranian Desert can get extremely hot in summer and cold in winter. High mountains can be found in the west and north of Iran as well, with ski slopes just an hour away from Tehran."+
        "<p> Many of the countries are bordered by waters, the Mediterrean Sea in the west, the Black Sea and Caspian Sea to the north and the Red Sea, Persian Gulf and Indian Ocean to the south all form borders of the Middle East. Rivers like the Euphrates and Tigris form the backbone of Iraq and most people live along these rivers."+
        "<p> The Middle East has good connections by plane from a wide range of countries, including direct flights from many Asian, African and European cities and several direct flights from the USA and Australia as well. Dubai probably is the main hub which has by far the most flights and for the best prices. You can enter the Middle East overland easily from mainland Africa (Egypt), Europe (through Turkey) and Asia (route from India and Pakistan). Ferries connect some countries, mainly across the Red Sea and Persian Gulf.",
        "exerciseType": "READING_1",
        "examName": "fce1",
        "responses": [
            {
                "_id": 31,
                "statement":"The Middle East",
                "answers": ["Is mostly formed of rivers and Seas", "Is often on the news for good reasons", "Receives many good publicity", "Is formed mainly by big extensions of dry desert"],
                "correct": "3",
                "responseType": "VOCABULARY"},
            {
                "_id": 32,
                "statement":"The author suggests that the Middle East ",
                "answers": ["Is formed by a concrete amount of countries", "Is a small part of Asia", "Is a continent", "Is a certain area formed by different countries."],
                "correct": "3",
                "responseType": "VOCABULARY"},
            {
                "_id": 33,
                "statement":"Travelling costs in the Middle East",
                "answers": [" Can be very different between countries depending mainly on their stage of development", "Have relatively small variations between countries", "which makes travelling a tad difficult", "Are pretty much uniform between countries, Don't vary much between countries which makes travelling pleasantly easy"],
                "correct": "0",
                "responseType": "VOCABULARY"},
            {
                "_id": 34,
                "statement":"In the northern area of The Middle East?",
                "answers": ["It's much colder in Winter than in Summer", "The geographical conditions result in deserts", "We can find ski slopes close to the Syrian Desert", "Temperatures in deserts stay the same all year round"],
                "correct": "1",
                "responseType": "VOCABULARY"},
            {
                "_id": 35,
                "statement":"Many of The Middle East countries are bordered by waters, that's why connections",
                "answers": ["Are only possible by plane or ferries, being Dubai the most expensive flight destination", "Are possible by plane, ferries for some countries mainly across the Red Sea and Persian Gulf", "Are possible by plane, ferries for some countries mainly across the Red Sea and Persian Gulf, or overland from Africa, Europe and Asia", "Are possible by plane, ferries or overland from Africa"],
                "correct": "2",
                "responseType": "VOCABULARY"},
            {
                "_id": 36,
                "statement":"The Middle East",
                "answers": ["Has mainly landscaping tourism", "Has a lot to offer, historically, culturally and landscaping", "Hasn't got any people living in the most arid areas", "Hasn't got much to offer because of bad publicity and civil unrests in Israel Lebanon, Yemen and more recently Syria"],
                "correct": "2",
                "responseType": "VOCABULARY"}
        ]
    });

db.exercise.insert({
    "title": "George Clooney",
    "content": "<p> A quick overlook on George Clooney's background and humanitarian work" +
    "<p> George Timothy Clooney (born May 6, 1961) is an American actor, writer, producer, director and activist. He has received three Golden Globe Awards (37) " +
    "<p> Early life" +
    "<p> Clooney was born in Lexington, Kentucky, in 1961. His mother, Nina Bruce was a beauty queen and city councilwoman. His father, Nick Clooney, is a former anchorman, game show host, and hosted AMC for five years in the late 1990s." +
    "<p> Clooney has Irish, German, and English ancestry.  His maternal four times great-grandmother, Mary Ann Sparrow, was the half-sister of Nancy Hanks (who was the mother of President Abraham Lincoln).  His aunt was the famed cabaret singer and actress Rosemary Clooney. Through Rosemary, (38)" +
    "<p> Clooney was raised a strict Roman Catholic, but said in 2006 that (39) . He has said, 'Yes, we were Catholic, big time, whole family, whole group'. He began his education at the Blessed Sacrament School in Fort Mitchell, Kentucky. Spending part of his childhood in Ohio, he attended St. Michael's School in Columbus; then Western Row Elementary School (a public school) in Mason, Ohio, from 1968 to 1974; and St. Susanna School in Mason, where he served as an altar boy. The Clooneys moved back to Kentucky when George was midway through the seventh grade. In middle school, Clooney developed Bell's palsy, a condition that partially paralyzes the face. The malady went away within a year. In an interview with Larry King, he stated that (40) , which was a bad time for having half your face paralyzed.'" +
    "<p> After his parents moved to Augusta, Kentucky, Clooney attended Augusta High School. He has stated that he earned all As and a B in school, and was an enthusiastic baseball and basketball player. He tried out to (41)  He attended Northern Kentucky University from 1979 to 1981, majoring in broadcast journalism, and very briefly attended the University of Cincinnati, but did not graduate from either.(42) " +
    "<p> Humanitarian work" +
    "<p> Clooney is involved with Not On Our Watch Project, an organization that focuses global attention and resources to stop and prevent mass atrocities, along with Brad Pitt, Matt Damon, Don Cheadle, David Pressman, and Jerry Weintraub. In February 2009, he visited Goz Beida, Chad, with NY Times columnist Nicholas D. Kristof. In January 2010, he organized the Telethon Hope for Haiti Now, which collected donations for the 2010 Haiti earthquake victims." +
    "<p> In March 2012, Clooney was featured with Martin Sheen and Brad Pitt in a performance of Dustin Lance Black's play, '8'—a staged reenactment of the federal trial that overturned California's Prop 8 ban on same-sex marriage—as attorney David Boies.(43) to raise money for the American Foundation for Equal Rights. In September 2012, Clooney offered to take an auction winner out to lunch to benefit the Gay, Lesbian and Straight Education Network.",
    "exerciseType": "READING_2",
    "examName": "fce1",
    "responses": [
        {
            "_id":1,
            "statement":"his cousins include actors Miguel Ferrer, Rafael Ferrer, and Gabriel Ferrer, who is married to singer Debby Boone.",
            "correct":"38"
        },
        {
            "_id":2,
            "statement":" 'It goes away. It takes about nine months to go away. It was the first year of high school.",
            "correct":"40"
        },
        {
            "_id":3,
            "statement":"for his work as an actor and two Academy Awards, one for acting and the other for producing",
            "correct":"37"
        },
        {
            "_id":4,
            "statement":"He made money selling women's shoes, insurance door-to-door, stocking shelves, working construction, and cutting tobacco.",
            "correct":"42"
        },
        {
            "_id":5,
            "statement":"'he does not know if he believes in Heaven, or even God.'",
            "correct":"39"
        },
        {
            "_id":6,
            "statement":"play professional baseball with the Cincinnati Reds in 1977, but he did not pass the first round of player cuts, and was not offered a contract.",
            "correct":"41"
        },
        {
            "_id":7,
            "statement":"The production was held at the Wilshire Ebell Theatre and broadcast on YouTube.",
            "correct":"43"
        }
    ]});

db.exercise.insert({
    "title":"Barbra's Dream",
    "content": "<p>Paragraph A <br> I will start by telling you a dream. It is not my dream, but the dream of Barbra, a13-year old Acholi girl, the daughter of a friend of mine. We are sitting at our favorite pork-eating place, locally referred to as “pork joint”, at the outskirts of Gulu town centre. It is the first day of the long school holidays and we have decided to treat the children to a pork dinner. It is already dark. The moon and the faded lights from the pork grill are shining over to where we are sitting, on an open meadow, surrounded by trees, in wooden chairs."+
    "<p>Paragraph B <br> Pork joints are in many places at Gulu town. They are not only popular eating places, but important urban spaces for social meetings. In pork joints, people from all segments of urban Acholi society come together: men and women, rich and poor, students and out-of-school youth. They are especially popular among the younger generation. Most of the pork joints in the town centre have TV screens, where videos, usually Western action films or Nigerian movies and sometimes also music clips, are shown from morning to night. One often finds customers seated in rows in front of the TVs, watching videos while eating pieces of roasted pork with chopped cabbage and slices of tomato." +
    "<p>Paragraph C <br>  During my stay in Gulu, I spend many hours hanging out in local pork joints – to meet friends for food or drinks, to visit young interlocutors who work there, or simply to observe the town life. Nearly every time I make valuable discoveries for my research, learn important aspects about social life in Gulu, and have great conversations. It is in the informal setting of pork joints that people tell me about their life stories and family biographies, about the time of the war, and about the challenges they face today." +
    "<p>Paragraph D <br> Tonight, while we are waiting for the food to arrive, we talk about the dreams we had last night. It is Barbra’s turn. She is a good and confident story teller. After a small intro, she starts recounting her dream: "+
    "<p> <br>“I dreamt I was at school. All the students in my class had just finished their exams and we were enjoying some free time on the school premises. Suddenly I see Alfred, the shortest boy in our class. He is running around the schoolyard, wearing a miniskirt. I am surprised and a little bit shocked. I walk up to him and shout: ‘Alfred, are you crazy? What do you think you are doing putting on that miniskirt?’ But instead of being intimidated or ashamed Alfred just answers: ‘We are now living in a globalized world and so I can wear miniskirts just as I like!’”"+
    "<p> <br> Original text by: Julia Vorhölter  Youth at the Crossroads",
    "exerciseType": "READING_3",
    "examName": "fce1",
    "responses":[
        {
            "_id": 43,
            "statement" : "Suggests how Barbra is a good interlocutor",
            "correct":"D"
        },
        {
            "_id": 44,
            "statement" : "Pork joints are described by the author as informal places where substantial sociological information can be put together through casual conversations",
            "correct":"C"
        },
        {
            "_id": 45,
            "statement" : "Explains what moment of the day it is",
            "correct":"A"
        },
        {
            "_id": 46,
            "statement" : "Suggests how going out to eat pork is something special for the kids",
            "correct":"A"
        },
        {
            "_id": 47,
            "statement" : "Political and social situations are revealed through an unconscious state of mind",
            "correct":"D"
        },
        {
            "_id": 48,
            "statement" : "Explains what kind of food can be found at Pork Joints",
            "correct":"B"
        },
        {
            "_id": 49,
            "statement" : "Suggests that their favorite pork joint is surrounded by nature",
            "correct":"A"
        },
        {
            "_id": 50,
            "statement" : "The author lets us know that the country she's in has been through difficult situations",
            "correct":"C"
        },
        {
            "_id": 51,
            "statement" : "Two different cultures are confronted in a very peculiar situation",
            "correct":"D"
        },
        {
            "_id": 52,
            "statement" : "Explains how Pork Joints are social gathering places regardless of the social position or gender.",
            "correct":"B"
        }
    ]
});
db.exercise.insert(
    {
        "title": "",
        "content":  "<b> Several surveys point out that kids are more and more exposed to technology, it's easy to find two year old babies with iPads in their hands.  Most western families have broadband internet connection which is also used by their underaged children.</b>" +
        "<br/><b>Do you think this is good for kids?</b>"+
        "<br/><b> Notes </b><br/> Write about <br/> 1. Pros and cons of kids accesing internet and technology. <br/> 2. Suggest how you would control and limit internet and technology access on kids.  <br/> 3...",
        "exerciseType": "WRITING_1",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "",
        "content":  "<b>  Your friend Fred wants to know about the most boring character of a movie that you've watched.</b>" +
        "<div class='well'> <p>Send him an email, explaining what that character was like, and what made him so boring.  Tell him if the movie is still worth watching and why, despite that character.</p> </div> ",
        "exerciseType": "WRITING_2",
    "examName": "fce1"
});

db.exercise.insert(
    {
        "title": "",
        "content":  "<b> Your English teacher has asked you to write an article about your biggest project.</b>" +
        "<div class='well'><p>He needs you to answer these questions:</p><p>What is the biggest project you ever got yourself involved in?</p><p>How did it come up?<p>Did you manage to finish it?</p><p>What did you learn from it?</p> </div>" +
        "<b> Write your article. </b>",
        "exerciseType": "WRITING_3",
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "",
        "content":  "<b>You have just received a postcard from your friend John.</b>" +
        "<div class='well'><p>Some warm days we've been having over here in your home town! But the problem is we've been getting a bit bored in the evenings.</p><p>We would like to know if you still remember some interesting routes to travel around and learn a bit about its history and see some nice views.</p><p>  Do you think you could tell me some of the places we could visit? And how would you find it more convenient to reach them (bicycle, train, car or walking)</p><p> Thanks </p><p> John</p></div>" +
        "<b> Write your response </b>",
        "exerciseType": "WRITING_4",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": " 2 Part 1 (2 minutes)",
        "content":  "<h3> Introduction </h3><p> Present yourself and the other candidate to the examiner using these lines</p>" +
        "<p> Good morning/afternoon/evening.  My name is … and this is my colleague …</p>" +
        "<p>State where you are from and where you are living now, you can also ask your colleague where he lives and what he's from</p>" +
        "<h3>Interests</h3>" +
        "<p> Do you like listening to music?  Tell us a musician or band you really like" +
        "When was the last time you went to a concert?  </p>" +
        "<p> What did you do on your last holiday?</p>" +
        "<p> Tell us about a book that you've read recently</p>",
        "exerciseType": "SPEAKING_1",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "Part 2 (4 minutes)",
        "content":  "<p>In this part of the test, each candidate will be given 2 photographs.  We'd like you to talk about your photographs on your own for a minute, and you will also need to answer a question about your partner's photograph.</p>" +
        "<p> (candidate A), it's your turn first. It's your turn first, your photographs show a dog in one and a cat in the other.</p>" +
        "<p> We would like you to compare the photos and tell us the main differences between cats and dogs and which one would you prefer to have and why.<br/><br/>" +
        "<img src='assets/speaking/fce1/cat-793276_1280.jpg'/> <img src='assets/speaking/fce1/dog-833957_1280.jpg'/></p>" +
        "<p> (Now we would ask Candidate B a question about your pictures)</p>" +
        "<p> Candidate B has photographs of country houses and apartment blocks, he has already spoken about them for a minute and we would like you to tell us if you would find it easier to live in a country house or in an apartment, and why? <br/><br/>" +
        "<p> Thank you </p>",
        "exerciseType": "SPEAKING_2",
        "examName": "fce1"
    });
db.exercise.insert(
    {
        "title": "Part 3 (4 minutes)",
        "content": "<p> Now you would have to talk with your partner for about 2 minutes</p>" +
        "<p>Try imagining a business that needs to attract more customers, they are deciding if they should invest in publicity, put down their prices or do both.</p>" +
        "<p>Figure out what they should do and imagine your partner thinks the opposite</p>" +
        "<p> (You have 2 minutes to discuss with the other candidate)</p>" +
        "<p> Ok, now you have a minute to agree on which idea would be best for the business.</p>",
        "exerciseType": "SPEAKING_3",
        "examName": "fce1"
    });

db.exercise.insert(
    {
        "title": "Part 4 (4 minutes)",
        "content":  "<p> Once again, you will discuss a subject with the other candidate</p>" +
        "<p> Do you think private universities are better than public ones? (Why / Why not?)</p> " +
        "<p>Many people think private universities are better because less people can get in to them and teacher have more time for pupils.  What do you think? </p>" +
        "<p>Why is it important for everyone to be able to access public universities?</p>" +
        "<p>What do you think is the bigger advantage of having a University degree?</p>",
        "exerciseType": "SPEAKING_4",
        "examName": "fce1"
    });

//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b> Every country in the world has problems with pollution and damage to the environment. Do you think these problems can be solved? </b>" +
//        "<br/><b> Notes </b><br/> Write about <br/> 1. transport <br/> 2. rivers and seas <br/> 3...",
//        "exerciseType": "WRITING_1",
//        "examName": "fce1"
//    });
//
//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b>You see this announcement in your college English-language magazine.</b>" +
//        "<div class='well'> <p>Book reviews wanted</p><p>Have you read a book in which the main character behaved in a surprising way?</p><p>Write us a review of the book, explaining what the main character did and why it was surprising. Tell us whether or not you would recommend this book to other people.</p><p>The best reviews will be published in the magazine.</p> </div> " +
//        "<b> Write your review. </b>",
//        "exerciseType": "WRITING_2",
//        "examName": "fce1"
//    });
//
//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b> You see this announcement on an English-language website.</b>" +
//        "<div class='well'><p>Articles wanted</p><p>The most useful thing I have ever learned.</p><p>What is the most useful thing you have learned?Who did you learn it from? Why is it useful?<p>Write us an article answering these questions.</p><p>We will publish the best articles on our website.</p> </div>" +
//        "<b> Write your article. </b>",
//        "exerciseType": "WRITING_3",
//        "examName": "fce1"
//    });
//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b> You have received this email from your English-speaking friend David.</b>" +
//        "<div class='well'><p>From: David <br/> Subject: touring holiday</p><p>Some college friends of mine are visiting your area soon for a week’s touring holiday. They would like to travel around and learn about your local area and its history.</p><p>Can you tell me about some of the places they could visit? What’s the best way to travel around – car, bike or coach?</p><p>Thanks</p><p>David</p></div>" +
//        "<b> Write your email </b>",
//        "exerciseType": "WRITING_4",
//        "examName": "fce1"
//    });
//
//db.exercise.insert(
//    {
//        "title": "Part 1 (2 minutes)",
//        "content":  "<h3> Introduction </h3><p> Good morning/afternoon/evening. My name is ..... and this is my colleague......</p>" +
//        "<p> And your names are? Can I have yor mark sheets, please?<br/> Thank you.</p>" +
//        "<p> Where are you from (Candidate A)? and you, (candidate B)?</p>" +
//        "<h3>Likes and dislikes / Special occasions / Media  </h3>" +
//        "<p> First we would like to know something about you " +
//        "Do you like reading? Tell us about a book you really like </p>" +
//        "<p> What did you do on your last holiday?</p>" +
//        "<p> Tell us about a film you have seen recently.</p>",
//        "exerciseType": "SPEAKING_1",
//        "examName": "fce1"
//    });
//
//db.exercise.insert(
//    {
//        "title": "Part 2 (4 minutes)",
//        "content":  "<p> In this part of the test, I'm going to give each of you 2 photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photograph </p>" +
//        "<p> (candidate A), it's your turn first. Here are your photographs. They show people who are helping other people in different situations</p>" +
//        "<p> I would  like you to compare the photographs, and say how important it is to help people in these situations. <br/><br/>" +
//        "<img src='assets/speaking/fce1/help.jpg'/> <img src='assets/speaking/fce1/save.jpg'/></p>" +
//        "<p> (candidate B) do you find easy to ask for help when you have a problem? (Why / Why not? )</p>" +
//        "<p> Now, (candidate B), here are your photographs. they show people spending time in different gardens <br/><br/>" +
//        "<img src='assets/speaking/fce1/garden.jpg'/> <img src='assets/speaking/fce1/gardening-475350_640.jpg'/></p>" +
//        "<p> I would  like speaking to compare the photographs, and say what you think the people are enjoying about spending in these gardens </p>" +
//        "<p> (Candidate A) which garden would you prefer to spend time in? ... (Why?)</p>" +
//        "<p> Thank you </p>",
//        "exerciseType": "SPEAKING_2",
//        "examName": "fce1"
//    });
//db.exercise.insert(
//    {
//        "title": "Part 3 (4 minutes)",
//        "content": "<p> Now I'd like to you to talk about something together for about 2 minutes</p>" +
//        "<p> I'd like you to imagine that a town wants more tourists to visit. Here ae some ideas they're thinking about and a question for you to discuss. First you have some time to look at the task.</p>" +
//        "<p> Now, talk to each other about why these ideas would attract more tourists to the town</p>" +
//        "<p> (You have 2 minutes to discuss with the other candidate)</p>" +
//        "<p> Thank you. Now you have a minute to decide which idea would be best for the town.</p>",
//        "exerciseType": "SPEAKING_3",
//        "examName": "fce1"
//    });
//
//db.exercise.insert(
//    {
//        "title": "Part 4 (4 minutes)",
//        "content":  "<p> Please discuss with the other candidate </p>" +
//        "<p> Do you think you have to spend a lot of money to have a good holiday? ... (Why?/ Why not?)</p> " +
//        "<p> Some people say we travel too much these days and shouldn't go on so many holidays. What do you think? </p>" +
//        "<p> Do you think people have enough time for holidays these days?... (Why? / Why not? </p>" +
//        "<p> Why do you think people like to go away on holiday? </p>" +
//        "<p> What do you think is the biggest advantage of living in a place where there are a lot of tourists? </p>",
//        "exerciseType": "SPEAKING_4",
//        "examName": "fce1"
//    });






















/***************************************/
/*            EXERCISE 2              */
/*                                    */
/**************************************/

//db.exercise.insert(
//    {
//        "title": "2 What is genealogy?",
//        "content": "<p> Genealogy is a branch of history.  It concerns family history,  (1) than the national or world history studied at school.  It doesn’t merely involve drawing a family tree, however – tracing your family history can also (2)  in learning about your roots and your identity.  The internet enables millions of people worldwide to (3)  information about their family history, without great (4).<p> People who research their family history often (5)  that it’s a fascinating hobby which (6)  a lot about where they come from and whether they have famous ancestors.  According to a survey involving 900 people who had researched their family history, the chances of discovering a celebrity in your past are one in ten.  The survey also concluded that the (7)  back you follow your family line, the more likely you are to find a relation who was much wealthier than you are.  However, the vast majority of people who (8) in the survey discovered they were better off than their ancestors.",
//        "exerciseType": "USE_OF_ENGLISH_1",
//        "responses":[{
//            "_id": 1,
//            "answers":["instead", "rather", "except", "sooner"],
//            "correct": "rather",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 2,
//            "answers":["cause", "mean", "result", "lead"],
//            "correct": "result",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 3,
//            "answers":["accomplish", "access", "approach", "admit"],
//            "correct": "access",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 4,
//            "answers":["fee", "price", "charge", "expense"],
//            "correct": "expense",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 5,
//            "answers":["describe", "define", "remark", "regard"],
//            "correct": "remark",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 6,
//            "answers":["reveals", "opens", "begins", "arises"],
//            "correct": "reveals",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 7,
//            "answers":["older", "greater", "higher", "further"],
//            "correct": "further",
//            "responseType": "VOCABULARY"
//        },{
//            "_id": 8,
//            "answers":["attended", "participated", "included", "associated"],
//            "correct": "participated",
//            "responseType": "VOCABULARY"
//        }
//        ],
//        "examName": "fce2"
//    });
//db.exercise.insert(
//    {
//        "title": "2 Motorbike stunt rider",
//        "content": "<p> I work as a motorbike stunt rider – that is, I do tricks on my motorbike at shows. The Le Mans race track in France was (9) I first saw some guys doing motorbike stunts. I’d never seen anyone riding a motorbike using just the back wheel before and I was (10) impressed I went straight home and taught (11) to do the same. It wasn’t very long before I began to earn my living at shows performing my own motorbike stunts.<p>I have a degree (12) mechanical engineering; this helps me to look at the physics (13) lies behind each stunt. In addition to being responsible for design changes to the motorbike, I have to work (14) every stunt I do. People often think that my work is very dangerous, but, apart (15) some minor mechanical problem happening occasionally during a stunt, nothing ever goes wrong. I never feel in (16) kind of danger because I’m very experienced.",
//        "exerciseType": "USE_OF_ENGLISH_2",
//        "responses":[{
//            "_id": 9,
//            "answers":null,
//            "correct": ["where"],
//            "responseType": "COLOCATION"
//        },{
//            "_id": 10,
//            "answers":null,
//            "correct": ["so"],
//            "responseType": "COLOCATION"
//        },
//            {
//                "_id": 11,
//                "answers":null,
//                "correct": ["myself"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 12,
//                "answers":null,
//                "correct": ["in"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 13,
//                "answers":null,
//                "correct": ["which", "that"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 14,
//                "answers":null,
//                "correct": ["out", "on", "at"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 15,
//                "answers":null,
//                "correct": ["from"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 16,
//                "answers":null,
//                "correct": ["any"],
//                "responseType": "COLOCATION"
//            }],
//        "examName": "fce2"
//    });
//
//db.exercise.insert(
//    {
//        "title": "2 An incredible vegetable",
//        "content": "<p> Garlic, a member of the Liliacaea family which also includes onions, is commonly used in cooking all around the world. China is currently the largest (17) of garlic, which is particularly associated with the dishes of northern Africa and southern Europe. It is native to central Asia and has long had a history as a health-giving food, used both to prevent and cure (18) . In Ancient Egypt, workers building the pyramids were given garlic to keep them strong, while Olympic athletes in Greece ate it to increase their resistance to infection.<p> The forefather of antibiotic medicine, Louis Pasteur, claimed garlic was as (19) as penicillin in treating infections. Modern-day (20) have proved that garlic can indeed kill bacteria and even some viruses, so it can be very useful for people who have coughs and colds. In (21) , some doctors believe that garlic can reduce blood (22) . <p> The only (23) to this truly amazing food is that the strong and rather (24).",
//        "exerciseType": "USE_OF_ENGLISH_3",
//        "responses":[{
//            "_id": 17,
//            "answers":["PRODUCT"],
//            "correct": ["producer"],
//            "responseType": "COLOCATION"
//        },{
//            "_id": 18,
//            "answers":["ILL"],
//            "correct": ["illness", "illnesses"],
//            "responseType": "COLOCATION"
//        },
//            {
//                "_id": 19,
//                "answers":["EFFECT"],
//                "correct": ["effective"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 20,
//                "answers":["SCIENCE"],
//                "correct": ["scientists"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 21,
//                "answers":["ADD"],
//                "correct": ["addition"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 22,
//                "answers":["PRESS"],
//                "correct": ["pressure"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 23,
//                "answers":["ADVANTAGE"],
//                "correct": ["disadvantage"],
//                "responseType": "COLOCATION"
//            },
//            {
//                "_id": 24,
//                "answers":["SPICE"],
//                "correct": ["spicy"],
//                "responseType": "COLOCATION"
//            }],
//        "examName": "fce2"
//    });
//db.exercise.insert(
//    {
//        "title": "2",
//        "content": "",
//        "exerciseType": "USE_OF_ENGLISH_4",
//        "responses": [{
//            "_id": 25,
//            "statement":"Joan was in favour of visiting the museum.",
//            "reformat":" Joan thought it would be (X) to the museum.",
//            "answers":["IDEA"],
//            "correct": ["a good idea to go"],
//            "responseType": "COLOCATION"
//        },{
//
//            "_id": 26,
//            "statement":"Arthur has the talent to become a concert pianist.",
//            "reformat":"Arthur is so (X) could become a concert pianist.",
//            "answers":["THAT"],
//            "correct": ["talented that he", "talented that she"],
//            "responseType": "COLOCATION"
//        },{
//
//            "_id": 27,
//            "statement":"'Do you know when the match starts, Sally?' asked Mary.",
//            "reformat":"Mary asked Sally (X) time the match started.",
//            "answers":["IF"],
//            "correct": ["if he knew what", "if she knew what","if he knew the","if she knew the"],
//            "responseType": "COLOCATION"
//        },{
//
//            "_id": 28,
//            "statement":"I knocked for ages at Ruth's door but I got no reply.",
//            "reformat":"I (X) knocking at Ruth's door but I got no reply.",
//            "answers":["LONG"],
//            "correct": ["spent a long time", "took a long time","was a long time"],
//            "responseType": "COLOCATION"
//        },{
//
//            "_id": 29,
//            "statement":"Everyone says that the band is planning to go on a world tour next year.",
//            "reformat":"The band (X) planning to go on a world tour next year.",
//            "answers":["SAID"],
//            "correct": ["are said to be", "is said to be"],
//            "responseType": "COLOCATION"
//        },{
//
//            "_id": 30,
//            "statement":" I'd prefer not to cancel the meeting.",
//            "reformat":"I'd rather (X) the meeting.",
//            "answers":["CALL"],
//            "correct": ["not call off", "you didn't call off", "you did not call off", "we did not call off", "we didn't call off"],
//            "responseType": "COLOCATION"
//        }
//        ],
//        "examName": "fce2"
//    });
//
//
//db.exercise.insert(
//    {
//        "title": "2",
//        "content":  "<p> We live on the island of Hale. It's about four kilometres long and two kilometres wide at its broadest point, and it's joined to the mainland by a causeway called the Stand - a narrow road built across the mouth of the river which separates us from the rest of the country. Most of the time you wouldn't know we're on an island because the river mouth between us and the mainland is just a vast stretch of tall grasses and brown mud. But when there's a high tide and the water rises a half a metre or so above the road and nothing can pass until the tide goes out again a few hours later, then you know it's an island." +
//        "<p> We were on our way back from the mainland. My older brother, Dominic, had just finished his first year at university in a town 150 km away. Dominic's train was due in at five and he'd asked for a lift back from the station. Now, Dad normally hates being disturbed when he's writing (which is just about all the time), and he also hates having to go anywhere, but despite the typical sighs and moans – why can't he get a taxi? what's wrong with the bus? – I could tell by the sparkle in his eyes that he was really looking forward to seeing Dominic. "+
//        "<p> So, anyway, Dad and I had driven to the mainland and picked up Dominic from the station. He had been talking non-stop from the moment he'd slung his rucksack in the boot and got in the car. University this, university that, writers, books, parties, people, money, gigs.... And when I say talking, I don't mean talking as in having a conversation, I mean talking as in jabbering like a mad thing. I didn't like it .... the way he spoke and waved his hands around as if he was some kind of intellectual or something. It was embarrassing. It made me feel uncomfortable – that kind of discomfort you feel when someone you like, someone close to you, suddenly starts acting like a complete idiot. And I didn't like the way he was ignoring me, either. For all the attention I was getting I might as well not have been there. I felt a stranger in my own car." +
//        "<p> As we approached the island on that Friday afternoon, the tide was low and the Stand welcomed us home, stretched out before us, clear and dry, beautifully hazy in the heat – a raised strip of grey concrete bound by white railings and a low footpath on either side, with rough cobbled banks leading down to the water. Beyond the railings, the water was glinting with that wonderful silver light we sometimes get here in the late afternoon which lazes through to the early evening." +
//        "<p> We were about halfway across when I saw the boy. My first thought was how odd it was to see someone walking on the Stand. You don't often see people walking around here. Between Hale and Moulton (the nearest town about thirty kilometres away on the mainland), there's nothing but small cottages, farmland, heathland and a couple of hills. So islanders don't walk because of that. If they're going to Moulton they tend to take the bus. So the only pedestrians you're likely to see around here are walkers or bird-watchers. But even from a distance I could tell that the figure ahead didn't fit into either of these categories. I wasn't sure how I knew, I just did." +
//        "<p> As we drew closer, he became clearer. He was actually a young man rather than a boy. Although he was on the small side, he wasn't as slight as I'd first thought. He wasn't exactly muscular, but he wasn't weedy-looking either. It's hard to explain. There was a sense of strength about him, a graceful strength that showed in his balance, the way he held himself, the way he walked....",
//        "exerciseType": "READING_1",
//        "examName": "fce2",
//        "responses": [
//            {
//                "_id": 31,
//                "statement":"In the first paragraph, what is Caitlin's main point about the island?",
//                "answers": ["It can be dangerous to try to cross from the mainland.", "It is much smaller than it looks from the mainland.", "It is only completely cut off at certain times.", "It can be a difficult place for people to live in."],
//                "correct": "2",
//                "responseType": "VOCABULARY"},
//            {
//                "_id": 32,
//                "statement":"What does Caitlin suggest about her father?",
//                "answers": ["His writing prevents him from doing things he wants to with his family.", "His initial reaction to his son's request is different from usual.", "His true feelings are easily hidden from his daughter.", "His son's arrival is one event he will take time off for."],
//                "correct": "3",
//                "responseType": "VOCABULARY"},
//            {
//                "_id": 33,
//                "statement":"Caitlin emphasises her feelings of discomfort because she",
//                "answers": ["is embarrassed that she doesn't understand what her brother is talking about.", "feels confused about why she can't relate to her brother any more.", "is upset by the unexpected change in her brother's behaviour.", "feels foolish that her brother's attention is so important to her."],
//                "correct": "2",
//                "responseType": "VOCABULARY"},
//            {
//                "_id": 34,
//                "statement":"In the fourth paragraph, what is Caitlin's purpose in describing the island?",
//                "answers": ["to express her positive feelings about it","to explain how the road was built", "to illustrate what kind of weather was usual", "to describe her journey home"],
//                "correct": "0",
//                "responseType": "VOCABULARY"},
//            {
//                "_id": 35,
//                "statement":"In 'because of that' the word 'that' refers to",
//                "answers": ["locals thinking it is odd to walk anywhere.","it being easier for people to take the bus than walk.","people having everything they need on the island.", "there being nowhere in particular to walk to from the island."],
//                "correct": "3",
//                "responseType": "VOCABULARY"},
//            {
//                "_id": 36,
//                "statement":"What do we learn about Caitlin's reactions to the boy?",
//                "answers": ["She felt his air of confidence contrasted with his physical appearance.", "She was able to come up with a reason for him being there.", "She realised her first impression of him was inaccurate.", "She thought she had seen him somewhere before."],
//                "correct": "2",
//                "responseType": "VOCABULARY"},
//        ]
//    });
//
//db.exercise.insert({
//    "title": "2 Good preparation leads to success in ballet dancing",
//    "content": "<p> A former classical ballet dancer explains what ballet training actually involves." +
//    "<p> What we ballet dancers do is instinctive, but instinct learnt through a decade of training.  A dancer’s life is hard to understand, and easy to misinterpret.  Many a poet and novelist has tried to do so, but even they have chosen to interpret all the hard work and physical discipline as obsessive.  And so the idea persists that dancers spend every waking hour in pain, bodies at breaking point, their smiles a pretence.   " +
//    "<p> As a former dancer in the Royal Ballet Company here in Britain, I would beg to question this. (37)   With expert teaching and daily practice, its various demands are easily within the capacity of the healthy human body. Contrary to popular belief, there is no need to break bones or tear muscles to achieve ballet positions.  It is simply a question of sufficient conditioning of the muscular system." +
//    "<p> Over the course of my dancing life I worked my way through at least 10,000 ballet classes.  I took my first at a school of dance at the age of seven and my last 36 years later at the Royal Opera House in London.  In the years between, ballet class was the first thing I did every day.  It starts at an early age, this daily ritual, because it has to.  (38)   But for a ballet dancer in particular, this lengthy period has to come before the effects of adolescence set in, while maximum flexibility can still be achieved.  " +
//    "<p> Those first classes I took were remarkably similar to the last.  In fact, taking into account the occasional new idea, ballet classes have changed little since 1820, when the details of ballet technique were first written down, and are easily recognised in any country.  Starting with the left hand on the barre, the routine unrolls over some 75 minutes. (39)  Even the leading dancers have to do it.  " +
//    "<p> These classes serve two distinct purposes: they are the way we warm our bodies and the mechanism by which we improve basic technique.  In class after class, we prove the old saying that ‘practice makes perfect’. (40)  And it is also this daily repetition which enables us to strengthen the muscles required in jumping, spinning or lifting our legs to angles impossible to the average person.  " +
//    "<p> The human body is designed to adapt to the demands we make of it, provided we make them carefully and over time. (41) In the same way, all those years of classes add up to a fit-for-purpose dancing machine.  This level of physical fluency doesn’t hurt; it feels good.  " +
//    "<p> (42) But they should not be misled: there is a difference between hard work and hardship.  Dancers have an everyday familiarity with the first. Hardship it isn’t. ",
//    "exerciseType": "READING_2",
//    "examName": "fce2",
//    "responses": [
//        {
//            "_id":1,
//            "statement":"Through endless tries at the usual exercises and frequent failures, ballet dancers develop the neural pathways in the brain necessary to control accurate, fast and smooth movement.",
//            "correct":"40"
//        },
//        {
//            "_id":2,
//            "statement":"The ballet shoe offers some support, but the real strength is in the muscles, built up through training.",
//            "correct":"0"
//        },
//        {
//            "_id":3,
//            "statement":"As technology takes away activity from the lives of many, perhaps the ballet dancer’s physicality is ever more difficult for most people to imagine.",
//            "correct":"42"
//        },
//        {
//            "_id":4,
//            "statement":"Ballet technique is certainly extreme but it is not, in itself, dangerous.",
//            "correct":"37"
//        },
//        {
//            "_id":5,
//            "statement":"The principle is identical in the gym – pushing yourself to the limit, but not beyond, will eventually bring the desired result.",
//            "correct":"41"
//        },
//        {
//            "_id":6,
//            "statement":"No one avoids this: it is ballet’s great democratiser, the well established members of the company working alongside the newest recruits.",
//            "correct":"39"
//        },
//        {
//            "_id":7,
//            "statement":"It takes at least a decade of high-quality, regular practice to become an expert in any physical discipline.",
//            "correct":"38"
//        }
//    ]});
//
//db.exercise.insert({
//    "title":"2 Rising Star",
//    "content": "Margaret Garelly goes to meet Duncan Williams, who plays for Chelsea Football Club.</br>" +
//    "<p><b>Paragraph A </b><br> It’s my first time driving to Chelsea’s training ground and I turn off slightly too early at the London University playing fields. Had he accepted football’s rejections in his early teenage years, it is exactly the sort of ground Duncan Williams would have found himself running around on at weekends. At his current age of 18, he would have been a bright first-year undergraduate mixing his academic studies with a bit of football, rugby and cricket, given his early talent in all these sports. However, Duncan undoubtedly took the right path. Instead of studying, he is sitting with his father Gavin in one of the interview rooms at Chelsea’s training base reflecting on Saturday’s match against Manchester City. Such has been his rise to fame that it is with some disbelief that you listen to him describing how his career was nearly all over before it began." +
//    "<p><b>Paragraph B </b><br> Gavin, himself a fine footballer – a member of the national team in his time – and now a professional coach, sent Duncan to three professional clubs as a 14 year-old, but all three turned him down. ‘I worked with him a lot when he was around 12, and it was clear he had fantastic technique and skill. But then the other boys shot up in height and he didn’t. But I was still upset and surprised that no team seemed to want him, that they couldn’t see what he might develop into in time. When Chelsea accepted him as a junior, it was made clear to him that this was more of a last chance than a new beginning. They told him he had a lot of hard work to do and wasn’t part of their plans. Fortunately, that summer he just grew and grew, and got much stronger as well.’" +
//    "<p><b>Paragraph C </b><br> Duncan takes up the story: ‘The first half of that season I played in the youth team. I got lucky – the first-team manager came to watch us play QPR, and though we lost 3-1, I had a really good game. I moved up to the first team after that performance.’ Gavin points out that it can be beneficial to be smaller and weaker when you are developing – it forces you to learn how to keep the ball better, how to use ‘quick feet’ to get out of tight spaces. ‘A couple of years ago, Duncan would run past an opponent as if he wasn’t there but then the other guy would close in on him. I used to say to him, “Look, if you can do that now, imagine what you’ll be like when you’re 17, 18 and you’re big and quick and they won’t be able to get near you.” If you’re a smaller player, you have to use your brain a lot more.’" +
//    "<p><b>Paragraph D </b><br> Not every kid gets advice from an ex-England player over dinner, nor their own private training sessions. Now Duncan is following in Gavin’s footsteps. He has joined a national scheme where people like him give advice to ambitious young teenagers who are hoping to become professionals. He is an old head on young shoulders. Yet he’s also like a young kid in his enthusiasm. And fame has clearly not gone to his head; it would be hard to meet a more likeable, humble young man. So will he get to play for the national team? ‘One day I’d love to, but when that is, is for somebody else to decide.’ The way he is playing, that won’t be long.",
//    "exerciseType": "READING_3",
//    "examName": "fce2",
//    "responses":[
//        {
//            "_id": 43,
//            "statement" : "states how surprised the writer was at Duncan’s early difficulties?",
//            "correct":"A"
//        },
//        {
//            "_id": 44,
//            "statement" : "says that Duncan sometimes seems much more mature than he really is?",
//            "correct":"D"
//        },
//        {
//            "_id": 45,
//            "statement" : "describes the frustration felt by Duncan’s father?",
//            "correct":"B"
//        },
//        {
//            "_id": 46,
//            "statement" : "says that Duncan is on course to reach a high point in his profession?",
//            "correct":"D"
//        },
//        {
//            "_id": 47,
//            "statement" : "suggests that Duncan caught up with his team-mates in terms of physical development?",
//            "correct":"B"
//        },
//        {
//            "_id": 48,
//            "statement" : "explains how Duncan was a good all-round sportsperson?",
//            "correct":"A"
//        },
//        {
//            "_id": 49,
//            "statement" : "gives an example of how Gavin reassured his son?",
//            "correct":"C"
//        },
//        {
//            "_id": 50,
//            "statement" : "mentions Duncan’s current club’s low opinion of him at one time?",
//            "correct":"B"
//        },
//        {
//            "_id": 51,
//            "statement" : "mentions a personal success despite a failure for the team?",
//            "correct":"C"
//        },
//        {
//            "_id": 52,
//            "statement" : "explains how Duncan and his father are fulfilling a similar role?",
//            "correct":"D"
//        }
//    ]
//});
//
//
//db.exercise.insert(
//    {
//        "title": "2",
//        "content":  "<b> Every country in the world has problems with pollution and damage to the environment. Do you think these problems can be solved? </b>" +
//        "<br/><b> Notes </b><br/> Write about <br/> 1. transport <br/> 2. rivers and seas <br/> 3...",
//        "exerciseType": "WRITING_1",
//        "examName": "fce2"
//    });
//
//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b>You see this announcement in your college English-language magazine.</b>" +
//        "<div class='well'> <p>Book reviews wanted</p><p>Have you read a book in which the main character behaved in a surprising way?</p><p>Write us a review of the book, explaining what the main character did and why it was surprising. Tell us whether or not you would recommend this book to other people.</p><p>The best reviews will be published in the magazine.</p> </div> " +
//        "<b> Write your review. </b>",
//        "exerciseType": "WRITING_2",
//        "examName": "fce2"
//    });
//
//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b> You see this announcement on an English-language website.</b>" +
//        "<div class='well'><p>Articles wanted</p><p>The most useful thing I have ever learned.</p><p>What is the most useful thing you have learned?Who did you learn it from? Why is it useful?<p>Write us an article answering these questions.</p><p>We will publish the best articles on our website.</p> </div>" +
//        "<b> Write your article. </b>",
//        "exerciseType": "WRITING_3",
//        "examName": "fce2"
//    });
//db.exercise.insert(
//    {
//        "title": "",
//        "content":  "<b> You have received this email from your English-speaking friend David.</b>" +
//        "<div class='well'><p>From: David <br/> Subject: touring holiday</p><p>Some college friends of mine are visiting your area soon for a week’s touring holiday. They would like to travel around and learn about your local area and its history.</p><p>Can you tell me about some of the places they could visit? What’s the best way to travel around – car, bike or coach?</p><p>Thanks</p><p>David</p></div>" +
//        "<b> Write your email </b>",
//        "exerciseType": "WRITING_4",
//        "examName": "fce2"
//    });
//
//db.exercise.insert(
//    {
//        "title": " 2 Part 1 (2 minutes)",
//        "content":  "<h3> Introduction </h3><p> Good morning/afternoon/evening. My name is ..... and this is my colleague......</p>" +
//        "<p> And your names are? Can I have yor mark sheets, please?<br/> Thank you.</p>" +
//        "<p> Where are you from (Candidate A)? and you, (candidate B)?</p>" +
//        "<h3>Likes and dislikes / Special occasions / Media  </h3>" +
//        "<p> First we would like to know something about you " +
//        "Do you like reading? Tell us about a book you really like </p>" +
//        "<p> What did you do on your last holiday?</p>" +
//        "<p> Tell us about a film you have seen recently.</p>",
//        "exerciseType": "SPEAKING_1",
//        "examName": "fce2"
//    });
//
//db.exercise.insert(
//    {
//        "title": "Part 2 (4 minutes)",
//        "content":  "<p> In this part of the test, I'm going to give each of you 2 photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photograph </p>" +
//        "<p> (candidate A), it's your turn first. Here are your photographs. They show people who are helping other people in different situations</p>" +
//        "<p> I would  like you to compare the photographs, and say how important it is to help people in these situations. <br/><br/>" +
//        "<img src='assets/speaking/fce1/help.jpg'/> <img src='assets/speaking/fce1/save.jpg'/></p>" +
//        "<p> (candidate B) do you find easy to ask for help when you have a problem? (Why / Why not? )</p>" +
//        "<p> Now, (candidate B), here are your photographs. they show people spending time in different gardens <br/><br/>" +
//        "<img src='assets/speaking/fce1/garden.jpg'/> <img src='assets/speaking/fce1/gardening-475350_640.jpg'/></p>" +
//        "<p> I would  like you to compare the photographs, and say what you think the people are enjoying about spending in these gardens </p>" +
//        "<p> (Candidate A) which garden would you prefer to spend time in? ... (Why?)</p>" +
//        "<p> Thank you </p>",
//        "exerciseType": "SPEAKING_2",
//        "examName": "fce2"
//    });
//db.exercise.insert(
//    {
//        "title": "Part 3 (4 minutes)",
//        "content": "<p> Now I'd like to you to talk about something together for about 2 minutes</p>" +
//        "<p> I'd like you to imagine that a town wants more tourists to visit. Here ae some ideas they're thinking about and a question for you to discuss. First you have some time to look at the task.</p>" +
//        "<p> Now, talk to each other about why these ideas would attract more tourists to the town</p>" +
//        "<p> (You have 2 minutes to discuss with the other candidate)</p>" +
//        "<p> Thank you. Now you have a minute to decide which idea would be best for the town.</p>",
//        "exerciseType": "SPEAKING_3",
//        "examName": "fce2"
//    });
//
//db.exercise.insert(
//    {
//        "title": "Part 4 (4 minutes)",
//        "content":  "<p> Please discuss with the other candidate </p>" +
//        "<p> Do you think you have to spend a lot of money to have a good holiday? ... (Why?/ Why not?)</p> " +
//        "<p> Some people say we travel too much these days and shouldn't go on so many holidays. What do you think? </p>" +
//        "<p> Do you think people have enough time for holidays these days?... (Why? / Why not? </p>" +
//        "<p> Why do you think people like to go away on holiday? </p>" +
//        "<p> What do you think is the biggest advantage of living in a place where there are a lot of tourists? </p>",
//        "exerciseType": "SPEAKING_4",
//        "examName": "fce2"
//    });
