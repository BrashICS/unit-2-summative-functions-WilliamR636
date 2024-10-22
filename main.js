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
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_area").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume").addEventListener("click", sphere_volume);
document.getElementById("sphere_area").addEventListener("click", sphere_area);
document.getElementById("slope").addEventListener("click", slope);
document.getElementById("distance").addEventListener("click", distance);
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

return a - b;

}

// Part 2

function slope() {

let x1 = Number(document.getElementById("x1").value);
let x2 = Number(document.getElementById("x2").value);
let y1 = Number(document.getElementById("y1").value);
let y2 = Number(document.getElementById("y2").value);

let actual_slope = delta(y1, y2) / delta(x1, x2);
let rounded_slope = round_user(actual_slope);
document.getElementById("other_output").textContent = `Slope: ${rounded_slope}`;
return actual_slope;

}

// Part 3

function average(a1, a2) {

return (a1 + a2) / 2;

}

// Part 4 #### Already Made



// Part 5

function distance () {

let x1 = Number(document.getElementById("x1").value);
let x2 = Number(document.getElementById("x2").value);
let y1 = Number(document.getElementById("y1").value);
let y2 = Number(document.getElementById("y2").value);

let actual_distance = Math.sqrt(delta(x1, x2)**2 + delta(y1, y2)**2);
let rounded_distance = round_user(actual_distance);
document.getElementById("other_output").textContent = `Distance: ${rounded_distance}`;
return actual_distance;

}

// Part 6 ### Already Made

// Part 7

function rect_prism_volume() {

    let height = Number(document.getElementById("height").value);
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
        
    let volume = round_user(height * length * width);
    document.getElementById("output").textContent = `Total Prism Volume: ${volume}`;
    return volume;
    
}

// Part 8

function rect_prism_area() {

    let height = Number(document.getElementById("height").value);
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
        
    let area = round_user(2 * ((height * length) + (length * width) + (width * height)));
    document.getElementById("output").textContent = `Total Prism Area: ${area}`;
    return area;
        
    }

// Part 9

function sphere_volume() {

    let radius = Number(document.getElementById("radius").value);

    let volume = round_user(4/3 * Math.PI * (radius ** 3));
    document.getElementById("output").textContent = `Total Sphere Volume: ${volume}`;
    return volume;
        
    }

    function sphere_area() {

    let radius = Number(document.getElementById("radius").value);
            
    let area = round_user(4 * Math.PI * (radius ** 2));
    document.getElementById("output").textContent = `Total Sphere Area: ${area}`;
    return area;
            
        }

// Part 10 ### Already Made

// Part 11



////// SECOND PART

// Part 1



////// LAST PART

// Part 1

