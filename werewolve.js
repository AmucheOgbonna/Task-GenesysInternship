function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getYearOfBirth = function () {
        return new Date().getFullYear() - this.age;
    };
}
const firstPerson = new Person("Amara Peters", 21);
console.log(firstPerson.getYearOfBirth());

/* Pratice time */

function creature(legs, human) {
    let isHuman = function () {
        if (legs === 4 && human === "human") {

            console.log("This creature must be cursed");
            isWerewolve();
        } else {
            console.log("Not a werewolve");
        }
    };
    let isWerewolve = function () {
        console.log(`
        Since this creature has ${legs} legs yet 
        is still human, then I am afraid it's  falls
         into the classification of a Lycanthropes`);
    };
    return isHuman();
}
creature(3, "animal");

let object = [{
    shapeshifting: true,
    human: true,
    legs: 4,
    activities: ["disguise", "pointedTeeths", "long fingerNails", "dull"]
}, {
    shapeshifting: true,
    human: false,
    legs: 4,
    activities: ["no disguise", "curved Teeths", "long fingerNails", "intelligent"]
}, {
    shapeshifting: true,
    human: true,
    legs: 4,
    activities: ["disguise", "pointed nose", "short fingerNails", "dull"]
}, {
    shapeshifting: true,
    human: false,
    legs: 2,
    activities: ["no disguise", "pointedTeeths", "long fingerNails", "intelligent"]
}, {
    shapeshifting: true,
    human: true,
    legs: 3,
    activities: ["disguise", "curved Teeths", "short fingerNails", "dull"]
}];

object.forEach(function (word) {
    if (word.shapeshift === true && word.legs >= 2) {
        if (word.human === true && (word.activities.includes("long fingerNails") || word.activities.includes("pointed teeth"))) {
            console.log("This belongs to the classification of a Lycanthropes");
        } else if (word.human === false && (word.activities.includes("intelligent") || word.activities.includes("disguise"))) {
            console.log("Lycanthropes could assume an animal form,  except for the intelligent look in their eyes!");
        } else {
            console.log("Well, we don not have a strong assertion were these belong");
        }
    } else {
        console.log(`It should at least be able to change shape`);
    }
});
