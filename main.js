/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
 
/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

    return round(value, d)

}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

////// FIRST PART

// Part 1

function delta(a, b) {

return a - b

}

// Part 2

function slope(a1, a2, b1, b2) {

return delta(b1, b2) / delta(a1, a2)

}

// Part 3

function average(a1, a2) {

return (a1 + a2) / 2

}

// Part 4 #### Already Made



// Part 5

function length (x1, y1, x2, y2) {

return Math.sqrt(delta(x1, x2)**2 + delta(y1, y2)**2)

}

// Part 6 ### Already Made

// Part 7

// Part 8

// Part 9

// Part 10

// Part 11



////// SECOND PART

// Part 1



////// LAST PART

// Part 1

