var ready = prompt("Are you ready to fight the dragon?")
var name = prompt("What is your name?")
var slaying = true
var youHit = Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random() * 5 + 1)
var totalDamage = 0

while (slaying) {
    if (youHit = 1) {
        console.log ("You hit the dragon! " + "knight " + name);
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log ("You dealt a powerful blow that defeated the dragon and sent it flying back to its mommy");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
    }
    }
    else {
        console.log ("The dragon breathes a bolt of fire that burns off your moustache " + "peasant " + name);
    slaying = false;
}
}