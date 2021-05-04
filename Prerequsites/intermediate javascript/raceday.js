let register = false;
var runner_age = 50;
let raceNumber = Math.floor(Math.random() * 1000);


if (runner_age >= 18 && registered === true) {
    racenumber += 1000;
}
if (runner_age > 18 && registered === false) {
    console.log(`race at 9:30 am ${racenumber}`)
} else if (runner_age > 18 && registered) {
    console.log(`race at 11:00 am ${racenumber}`)
} else if (runner_age < 18) {
    console.log(`race at 12:30 am ${racenumber}`)
} else {
    console.log(`see the registration desk`)
}