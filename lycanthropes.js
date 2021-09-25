/* You will build a console app that records the events of a werewolf.
 You will end up using this log to determine the activities that make the werewolf turn.
 */

let object = [{
    shapeshifting: true,
    moonCycle: "full moon",
    activities: ["danced under the rain", "cooking", "cycling", " running"]
}, {
    shapeshifting: false,
    moonCycle: "first quarter",
    activities: ["swimming", "cycling", "cooking", "danced under the rain"]
}, {
    shapeshifting: false,
    moonCycle: "waxing gibbous",
    activities: ["swimming", "visiting friends", "dancing ", "playing football"]
}, {
    shapeshifting: false,
    moonCycle: "full moon",
    activities: ["danced under the rain", "cycling", "cooking", " running"]
}, {
    shapeshifting: true,
    moonCycle: "full moon",
    activities: ["danced under the rain", "visiting friends", "cycling", " running"]
}];

object.forEach(function (word) {
    if (word.shapeshifting === true && word.moonCycle === "full moon" && word.activities.includes("cycling")) {

        console.log("This belongs to the classification of a Lycanthrope");
    }
    else {
        console.log("Well, we don not have a strong assertion were these belong");
    }
    // } else {
    //     console.log(`This is certainly not a wereWolve`);
    // }
});
