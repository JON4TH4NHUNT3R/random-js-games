alert ("You wake up in a Computer game.\n\n You know that one where you get to choose your character and find trolls and stuff?");
var user = prompt ("What is your favourite weapon?  CROSSBOW, SWORD, MAGIC or AXE?").toUpperCase();

switch (user) {
    case 'CROSSBOW':
        console.log ("You pick up the bow");
        var marksmen = prompt("Are you good with a bow?  YES or NO?").toLowerCase();
        var aim = prompt("Are you a good aim!  yes or no?").toLowerCase()
        if (marksmen === "yes" && aim === "yes") {
            console.log ("Great, now lets go hunt for that troll")
        }
        else if (marksmen === "yes" || aim === "yes") {
            console.log ("Well one out of two is not bad, lets go hunt for that troll and see what you can do");
        }
        else {
            console.log ("Well you shouldn't have picked the bow.. Oh well, time to go hunt that troll!")
        }
        break;
    case 'SWORD':
        console.log ("You pick up the sword");
        var swordsmen = prompt("Are you good with a sword?  YES or NO?").toLowerCase();
        var aim2 = prompt("Have you got a good swinging arm!  yes or no?").toLowerCase()
        if (swordsmen === "yes" && aim2 === "yes") {
            console.log ("Great, now lets go hunt for that troll")
        }
        else if (swordmen === "yes" || aim2 === "yes") {
            console.log ("Well one out of two is not bad, lets go hunt for that troll and see what you can do");
        }
        else {
            console.log ("Well you shouldn't have picked the sword.. Oh well, time to go hunt that troll!")
        }
        break;
    case "MAGIC":
        console.log ("You dust off your spellbook and quickly go through some offensive spells");
        var magician = prompt("Are you good with magic?  YES or NO?").toLowerCase();
        var aim3 = prompt("Are you a good aim!  yes or no?").toLowerCase()
        if (magician === "yes" && aim3 === "yes") {
            console.log ("Great, now lets go hunt for that troll")
        }
        else if (magician === "yes" || aim3 === "yes") {
            console.log ("Well one out of two is not bad, lets go hunt for that troll and see what you can do");
        }
        else {
            console.log ("Well you shouldn't have picked magic.. Oh well, time to go hunt that troll!")
        }
        break;
        default:
        console.log ("None of those ay? Hope you good at punching");
}