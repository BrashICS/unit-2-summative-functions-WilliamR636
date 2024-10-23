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
document.getElementById("midpoint").addEventListener("click", midpoint);
document.getElementById("sin").addEventListener("click", sin);
document.getElementById("cos").addEventListener("click", cos);
document.getElementById("tan").addEventListener("click", tan);
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

// Part 11 ### Already Made

// Part 12

function midpoint() {

let x1 = Number(document.getElementById("x1").value);
let x2 = Number(document.getElementById("x2").value);
let y1 = Number(document.getElementById("y1").value);
let y2 = Number(document.getElementById("y2").value);

let actual_midpoint_x = average(x1, x2);
let actual_midpoint_y = average(y1, y2);
let rounded_midpoint_x = round_user(actual_midpoint_x);
let rounded_midpoint_y = round_user(actual_midpoint_y);
document.getElementById("other_output").textContent = `Midpoint: ${rounded_midpoint_x}, ${rounded_midpoint_y}`;
return `X: ${actual_midpoint_x} Y: ${actual_midpoint_y}`;

}

////// SECOND PART

// Part 1

function y_quad(a, b, c, x) {

return `Y = ${a*(x**2) + b * x + c}`;

}

// Part 2

function zeros() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    
    let actual_z1 = (-b + Math.sqrt(b**2 - (4 * a * c))) / 2 * a;
    let actual_z2 = (-b - Math.sqrt(b**2 - (4 * a * c))) / 2 * a;
    let rounded_z1 = round_user(actual_z1);
    let rounded_z2 = round_user(actual_z2);
    document.getElementById("quadratic_output").textContent = `Zeros: ${rounded_z1}, ${rounded_z2}`;
    return `Zeros: (${actual_z1}, 0), (${actual_z2}, 0)`;

}

// Part 3

function vertex() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    
    let x = -b / (2 * a)
    let actual_vertex = a * (x**2) + b*x + c;
    let rounded_vertex = round_user(actual_vertex);
    document.getElementById("quadratic_output").textContent = `Vertex: ${rounded_vertex}`;
    return `Vertex: (${actual_vertex}`;

}

////// BONUS ROUND!

function sin() {

let degrees = degrees * (180/Math.PI);


}

function cos() {

let degrees = degrees * (180/Math.PI);
    
}

    
function tan() {

let degrees = degrees * (180/Math.PI);
        
}
        

