/* 
create 3 functions: 
add1(), add2() and add3()
add onclick to buttons like so: onclick="add1()" etc
add variable for score. let score = 0
let addOneEl = document.getElementById("id")
let homeScoreEl = document.getElementById("scoreEl"), 
^ maybe one for Guest and one for Home

if else statement: if homeScore is greater than guestScore, then glow around it
and vice versa
*/

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add1Home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore

}

function add3Home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore

}

function add1Guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore

}

function add3Guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore

}

function resetScore () {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}


/* total + 1, 4 and 6 
wickets +1 and maximum of 9 
overs is +1
1st inns/target = input field
*/