//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//Answer
function winBattle (bool) {
    return bool;
};

var experiencePoints = winBattle (true)? "10" : "1"

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//Answer: undefined

//#3 return value when moveCommand("back");

//Answer: you arrived home

//#4 return value when moveCommand("right");

//Answer:  you found a river

//#5 return value when moveCommand("left");

//Answer: undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!