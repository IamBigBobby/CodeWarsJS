// Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).

function outed(meet, boss) {
    let totalHappiness = 0;
    let numPeople = 0;

    for (const key in meet) {
        if (key === boss) {
            totalHappiness += meet[key] * 2;
        } else {
            totalHappiness += meet[key];
        }
        numPeople++;
    }

    const averageHappiness = totalHappiness / numPeople;

    return averageHappiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
console.log(outed({"tim":8,"jim":5,"randy":8,"sandy":5,"andy":3,"katie":8,"laura":3,"saajid":6,"alex":6,"john":3,"mr":5}, "andy"));