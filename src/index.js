// Words and hints 

const options = {
BrainRot: "suppose deterioration of a person's mental & intellectual state / overconsumption of material (particularly online content",
Aroma: "pleasing smell",
Brat: "characterized by a confident, independent, and hedonistic attitude",
Demure: "Popularized by TikToker Jools Lebron's phrase (very demure, very mindful)",
Polarization: "Defined as a division into two sharply distinct opposites / concentrated at opposing extremes", 
Manifest: "to imagine achieving something you want, in the belief doing so will make it more likely to happen",
Juggernaut: "a force, campaign, or movement) that is extremely large and powerful and cannot be stopped", 
Bamboozle: "deceive, trick, or confuse them",
Curfew: "refers to a law or order that requires people to be indoors after a certain time at night",
Limerick: "A limerick is a humorous rhyming poem of five lines",
Draconian: "describes something (often a law, policy, restriction, etc.) that is very severe or cruel",
Stratagem: "A stratagem is a trick or plan for deceiving an enemy or for achieving a goal",

};
const message = document.getElementById("message");
const hintref = document.querySelector("hintref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById ("start");
const letterContainer = document.getElementById("letter-container");
const userInspection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
    randomHint = "";
let winCount = 0;
    lossCount = 0;
    
